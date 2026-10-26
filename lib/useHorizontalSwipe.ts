"use client";

import { useRef, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";

const LOCK = 12;
const COMMIT = 40;

type Gesture = {
  id: number;
  x: number;
  y: number;
  axis: "pending" | "x" | "y";
};

type SwipeHandlers = {
  onStart?: () => void;
  onMove?: (dx: number) => void;
  onEnd?: (direction: -1 | 1) => void;
  onCancel?: () => void;
  onFinish?: () => void;
};

export function useHorizontalSwipe(handlers: SwipeHandlers) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  const gesture = useRef<Gesture | null>(null);
  const swipedUntil = useRef(0);
  const stopTouch = useRef<(() => void) | null>(null);

  function releaseTouch() {
    stopTouch.current?.();
    stopTouch.current = null;
  }

  function endGesture(event: ReactPointerEvent<HTMLElement>) {
    const current = gesture.current;
    if (!current || current.id !== event.pointerId) return;
    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;
    const horizontal = current.axis === "x";
    gesture.current = null;
    releaseTouch();
    event.currentTarget.style.userSelect = "";
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (horizontal) {
      swipedUntil.current = Date.now() + 500;
      const commit = Math.abs(dx) >= COMMIT && Math.abs(dx) > Math.abs(dy);
      if (commit) handlersRef.current.onEnd?.(dx < 0 ? 1 : -1);
      else handlersRef.current.onCancel?.();
    }
    handlersRef.current.onFinish?.();
  }

  return {
    swipedUntil,
    handlers: {
      onPointerDown(event: ReactPointerEvent<HTMLElement>) {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        if (gesture.current) return;
        const node = event.currentTarget;
        gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, axis: "pending" };
        const blockTouch = (touchEvent: TouchEvent) => {
          if (gesture.current?.axis !== "x" || !touchEvent.cancelable) return;
          touchEvent.preventDefault();
        };
        node.addEventListener("touchmove", blockTouch, { passive: false });
        stopTouch.current = () => node.removeEventListener("touchmove", blockTouch);
        handlersRef.current.onStart?.();
      },
      onPointerMove(event: ReactPointerEvent<HTMLElement>) {
        const current = gesture.current;
        if (!current || current.id !== event.pointerId || current.axis === "y") return;
        const dx = event.clientX - current.x;
        const dy = event.clientY - current.y;
        if (current.axis === "pending") {
          if (Math.abs(dx) < LOCK && Math.abs(dy) < LOCK) return;
          if (Math.abs(dx) <= Math.abs(dy)) {
            current.axis = "y";
            gesture.current = null;
            releaseTouch();
            handlersRef.current.onFinish?.();
            return;
          }
          current.axis = "x";
          event.currentTarget.style.userSelect = "none";
          try {
            event.currentTarget.setPointerCapture(event.pointerId);
          } catch {
            // A fast flick can end the pointer before capture.
          }
        }
        handlersRef.current.onMove?.(dx);
      },
      onPointerUp(event: ReactPointerEvent<HTMLElement>) {
        endGesture(event);
      },
      onPointerCancel(event: ReactPointerEvent<HTMLElement>) {
        endGesture(event);
      },
      onClickCapture(event: ReactMouseEvent<HTMLElement>) {
        if (Date.now() > swipedUntil.current) return;
        event.preventDefault();
        event.stopPropagation();
      },
    },
  };
}
