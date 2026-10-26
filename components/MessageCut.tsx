export function MessageCut({
  side = "right",
  className = "hidden lg:block",
  width = "46%",
}: {
  side?: "left" | "right" | "out-left";
  className?: string;
  width?: string;
}) {
  const outside = side === "out-left";
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 z-10 overflow-hidden ${
        outside ? "right-full" : side === "left" ? "left-0" : "right-0"
      } ${className}`}
      style={{ width, containerType: "size" }}
      aria-hidden="true"
    >
      <p
        className={`absolute top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap uppercase leading-[0.78] text-gold select-none ${
          outside || side === "right" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        }`}
        style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', fontSize: "27.5cqh" }}
      >
        Message
      </p>
    </div>
  );
}
