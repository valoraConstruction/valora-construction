"use client";

import { useId, useState, type FormEvent } from "react";
import { cityOptions, services, site } from "@/lib/content";
import {
  propertyTypeOptions,
  requestTypeOptions,
  timelineOptions,
  validateLead,
  type LeadIntent,
} from "@/lib/leads";

export function LeadForm({
  intent,
  compact = false,
  appearance = "default",
}: {
  intent: LeadIntent;
  compact?: boolean;
  appearance?: "default" | "studio" | "card" | "panel";
}) {
  const base = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [serverError, setServerError] = useState("");
  const [done, setDone] = useState<"email" | "stored" | null>(null);
  const [mailto, setMailto] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError("");
    const form = new FormData(event.currentTarget);
    const payload = {
      intent,
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      city: String(form.get("city") ?? ""),
      message: String(form.get("message") ?? ""),
      requestType: String(form.get("requestType") ?? (intent === "quote" ? "estimate" : "")),
      propertyType: String(form.get("propertyType") ?? ""),
      timeline: String(form.get("timeline") ?? ""),
      fax: String(form.get("fax") ?? ""),
    };

    const checked = validateLead(payload);
    if (!checked.ok) {
      setErrors(checked.errors);
      return;
    }
    if (checked.spam) {
      setDone("stored");
      return;
    }

    setErrors({});
    setPending(true);
    setMailto(buildMailto(payload));

    const body = new URLSearchParams();
    for (const [key, value] of form.entries()) {
      if (typeof value === "string") body.append(key, value);
    }
    body.set("form-name", "lead");
    body.set("intent", intent);

    try {
      const netlify = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      const text = await netlify.text();
      const accepted = netlify.ok && !text.includes("data-netlify");
      if (accepted) {
        setDone("email");
        return;
      }

      if (process.env.NODE_ENV !== "development") {
        setServerError("We could not send that just now.");
        return;
      }

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string; delivery?: "email" | "stored" };
      if (!response.ok || !data.ok || !data.delivery) {
        setServerError(data.error || "We could not send that just now.");
        return;
      }
      setDone(data.delivery);
    } catch {
      setServerError("We could not send that from this browser.");
    } finally {
      setPending(false);
    }
  }

  if (appearance === "card") {
    return (
      <div className="w-full rounded-xl border border-[#efe6d6] bg-[#fffdf9] px-6 py-5 shadow-[0_18px_40px_rgba(92,72,40,0.08)] sm:px-7 sm:py-6">
        {done ? (
          <div role="status">
            <p className="kicker">Request received</p>
            <h2 className="mt-4 font-display text-4xl text-ink">Thank you.</h2>
            <p className="mt-4 leading-relaxed text-stone">
              {receivedCopy(done)}
            </p>
            <a href={`tel:${site.phoneTel}`} className="mt-8 inline-flex bg-gold px-6 py-3 text-[15px] text-ink">
              Call {site.phoneDisplay}
            </a>
          </div>
        ) : (
          <form name="lead" method="POST" action="/__forms.html" data-netlify="true" data-netlify-honeypot="fax" onSubmit={onSubmit} noValidate className="relative">
            <NetlifyFields intent={intent} />
            <p className="kicker">Get in touch</p>
            <div className="mt-4 space-y-3">
              <CardField id={`${base}-name`} label="Full name" name="name" autoComplete="name" placeholder="John Smith" error={errors.name} required />
              <CardField id={`${base}-email`} label="Email address" name="email" type="email" autoComplete="email" placeholder="you@example.com" error={errors.email} required />
              <CardField id={`${base}-phone`} label="Phone number" name="phone" type="tel" autoComplete="tel" placeholder="(813) 240-5570" error={errors.phone} required />
              <CardField id={`${base}-city`} label="City" name="city" autoComplete="address-level2" placeholder="Tampa, FL" error={errors.city} required />
              <CardSelect
                id={`${base}-service`}
                label="Service required"
                name="service"
                error={errors.service}
                options={services.map((service) => service.name)}
                required
              />
              <CardField id={`${base}-message`} label="Message" name="message" placeholder="Tell us about your project..." multiline error={errors.message} />
            </div>
            {serverError ? (
              <p className="mt-5 text-sm text-[#9a3b32]" role="alert">
                {serverError}{" "}
                {mailto ? (
                  <a href={mailto} className="underline">
                    Email the office directly.
                  </a>
                ) : null}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-sm bg-gold py-2.5 text-[0.95rem] text-ink transition-colors hover:bg-gold-light disabled:opacity-60"
              disabled={pending}
            >
              {pending ? "Sending…" : "Send a message"}
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    );
  }

  if (appearance === "panel") {
    return (
      <div className="border border-[#e6d7b8] bg-white px-5 py-6 shadow-[0_16px_40px_rgba(70,52,24,0.05)] sm:px-7 sm:py-7">
        {done ? (
          <div role="status">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">Request received</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Thank you.</h2>
            <p className="mt-4 leading-relaxed text-stone">
              {receivedCopy(done)}
            </p>
            <a href={`tel:${site.phoneTel}`} className="btn-gold mt-8">
              Call {site.phoneDisplay}
            </a>
          </div>
        ) : (
          <form name="lead" method="POST" action="/__forms.html" data-netlify="true" data-netlify-honeypot="fax" onSubmit={onSubmit} noValidate className="relative">
            <NetlifyFields intent={intent} />
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Request a free estimate
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <PanelField id={`${base}-name`} label="Full name" name="name" autoComplete="name" error={errors.name} required />
              <PanelField id={`${base}-phone`} label="Phone number" name="phone" type="tel" autoComplete="tel" error={errors.phone} required />
              <PanelField id={`${base}-email`} label="Email address" name="email" type="email" autoComplete="email" error={errors.email} required />
              <PanelField id={`${base}-city`} label="City" name="city" autoComplete="address-level2" error={errors.city} required />
              <div className="sm:col-span-2">
                <PanelSelect
                  id={`${base}-service`}
                  label="Service required"
                  name="service"
                  error={errors.service}
                  options={services.map((service) => service.name)}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <PanelField id={`${base}-message`} label="Message" name="message" multiline error={errors.message} />
              </div>
            </div>
            {serverError ? (
              <p className="mt-4 text-sm text-[#9a3b32]" role="alert">
                {serverError}{" "}
                {mailto ? (
                  <a href={mailto} className="underline">
                    Email the office directly.
                  </a>
                ) : null}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-3 bg-gold py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-light disabled:opacity-60"
              disabled={pending}
            >
              {pending ? "Sending…" : "Send message"}
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-[0.75rem] text-stone">
              <LockIcon />
              <span>
                Your information is kept <a href="/privacy" className="underline">private</a> and will never be shared.
              </span>
            </p>
          </form>
        )}
      </div>
    );
  }

  if (appearance === "studio") {
    return (
      <div className="flex h-full w-full flex-col border border-ink/15 bg-white/70 px-8 py-10 sm:px-10 sm:py-12">
        {done ? (
          <div role="status">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gold">Request received</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Thank you.</h2>
            <p className="mt-4 leading-relaxed text-stone">
              {receivedCopy(done)}
            </p>
            <a href={`tel:${site.phoneTel}`} className="mt-8 inline-flex bg-gold px-6 py-3 text-[15px] text-ink">
              Call {site.phoneDisplay}
            </a>
          </div>
        ) : (
          <form name="lead" method="POST" action="/__forms.html" data-netlify="true" data-netlify-honeypot="fax" onSubmit={onSubmit} noValidate className="relative">
            <NetlifyFields intent={intent} />
            <div className="space-y-7">
              <StudioField id={`${base}-name`} label="Full name" name="name" autoComplete="name" error={errors.name} required />
              <StudioField id={`${base}-email`} label="Email address" name="email" type="email" autoComplete="email" error={errors.email} required />
              <StudioField id={`${base}-phone`} label="Phone number" name="phone" type="tel" autoComplete="tel" error={errors.phone} required />
              <StudioField id={`${base}-city`} label="City" name="city" autoComplete="address-level2" error={errors.city} required />
              <StudioSelect
                id={`${base}-service`}
                label="Service required"
                name="service"
                error={errors.service}
                options={services.map((service) => service.name)}
                required
              />
              <StudioField id={`${base}-message`} label="Message" name="message" multiline error={errors.message} />
            </div>
            {serverError ? (
              <p className="mt-5 text-sm text-[#9a3b32]" role="alert">
                {serverError}{" "}
                {mailto ? (
                  <a href={mailto} className="underline">
                    Email the office directly.
                  </a>
                ) : null}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-10 w-full bg-gold py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-gold-light disabled:opacity-60"
              disabled={pending}
            >
              {pending ? "Sending…" : "Send a message"}
            </button>
          </form>
        )}
      </div>
    );
  }

  if (done) {
    return (
      <div className="border border-gold/50 bg-ivory p-6 md:p-8" role="status">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gold-deep">Request received</p>
        <h3 className="mt-3 font-display text-3xl text-ink">Thank you.</h3>
        <p className="mt-4 leading-relaxed text-stone">
          {receivedCopy(done)}
        </p>
        <a href={`tel:${site.phoneTel}`} className="btn-dark mt-6">
          Call {site.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form name="lead" method="POST" action="/__forms.html" data-netlify="true" data-netlify-honeypot="fax" onSubmit={onSubmit} noValidate className="relative border border-sand border-t-2 border-t-gold bg-ivory p-6 md:p-8">
      <NetlifyFields intent={intent} />

      {intent === "quote" && !compact ? (
        <fieldset className="mb-6">
          <legend className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
            What do you need?
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {requestTypeOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 border border-sand px-3 py-3 text-sm">
                <input type="radio" name="requestType" value={option.value} defaultChecked={option.value === "estimate"} />
                {option.label}
              </label>
            ))}
          </div>
          <FieldError id={`${base}-request`} message={errors.requestType} />
        </fieldset>
      ) : intent === "quote" ? (
        <input type="hidden" name="requestType" value="estimate" />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${base}-name`} label="Name" name="name" autoComplete="name" error={errors.name} />
        <Field id={`${base}-phone`} label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} />
        <Field id={`${base}-email`} label="Email" name="email" type="email" autoComplete="email" error={errors.email} className="sm:col-span-2" />
        <Select id={`${base}-service`} label="Service" name="service" error={errors.service} options={services.map((service) => service.name)} />
        <Select id={`${base}-city`} label="Project city" name="city" error={errors.city} options={cityOptions} />
        {intent === "quote" && !compact ? (
          <>
            <Select id={`${base}-property`} label="Property type" name="propertyType" error={errors.propertyType} options={[...propertyTypeOptions]} optional />
            <Select id={`${base}-timeline`} label="Timeline" name="timeline" error={errors.timeline} options={[...timelineOptions]} optional />
          </>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor={`${base}-message`} className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
          {intent === "quote" ? "About the project" : "Message"}
        </label>
        <textarea
          id={`${base}-message`}
          name="message"
          rows={compact ? 4 : 6}
          className="field"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${base}-message-error` : undefined}
        />
        <FieldError id={`${base}-message-error`} message={errors.message} />
      </div>

      {serverError ? (
        <p className="mt-4 text-sm text-error" role="alert">
          {serverError}{" "}
          {mailto ? (
            <a href={mailto} className="underline">
              Email the office directly.
            </a>
          ) : null}
        </p>
      ) : null}

      <button type="submit" className="btn-dark mt-6 w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : intent === "quote" ? "Request a Quote" : "Send Message"}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-stone">
        Or call <a href={`tel:${site.phoneTel}`} className="text-gold-deep underline">{site.phoneDisplay}</a>.
        Sending this form means you agree to our use of these details to respond, as described in the{" "}
        <a href="/privacy" className="underline">privacy policy</a>.
      </p>
      <noscript>
        <p className="mt-3 text-sm">
          Email {site.email} or call {site.phoneDisplay}.
        </p>
      </noscript>
    </form>
  );
}

function receivedCopy(done: "email" | "stored") {
  if (done === "email") return "The office has your request. If you want to talk today, call us.";
  return `Your request is recorded. Please also call ${site.phoneDisplay} or email ${site.email} so we can reach you right away.`;
}

function NetlifyFields({ intent }: { intent: LeadIntent }) {
  return (
    <>
      <input type="hidden" name="form-name" value="lead" />
      <input type="hidden" name="intent" value={intent} />
      <Honeypot />
    </>
  );
}

function Honeypot() {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label>
        Fax
        <input name="fax" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-stone" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="6" y="10" width="12" height="9" rx="1.4" />
      <path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10" />
    </svg>
  );
}

const panelControl =
  "mt-1.5 w-full border border-[#d9c49a] bg-white px-3 py-2.5 text-[15px] text-ink outline-none placeholder:text-stone/40 focus:border-gold";

function PanelField({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  error,
  required = false,
  multiline = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.82rem] text-ink/80">
        {label}
        {required ? <span className="text-gold" aria-hidden="true"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          className={`${panelControl} resize-y`}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={panelControl}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#9a3b32]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PanelSelect({
  id,
  label,
  name,
  options,
  error,
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.82rem] text-ink/80">
        {label}
        {required ? <span className="text-gold" aria-hidden="true"> *</span> : null}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className={`${panelControl} appearance-none bg-[length:12px_8px] bg-[position:right_0.85rem_center] bg-no-repeat pr-8 [&:has(option[value='']:checked)]:text-stone/50 [&>option]:text-ink`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%23c6a15b' stroke-width='1.4' d='M1 1.2l5 5 5-5'/%3E%3C/svg%3E\")",
        }}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#9a3b32]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const studioControl =
  "mt-2 w-full border-0 border-b border-ink/25 bg-transparent px-0.5 pb-2 text-[15px] text-ink outline-none focus:border-gold";

function StudioField({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  error,
  required = false,
  multiline = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[15px] text-ink/80">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={3}
          className={`${studioControl} min-h-16 resize-y`}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={studioControl}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#9a3b32]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function StudioSelect({
  id,
  label,
  name,
  options,
  error,
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[15px] text-ink/80">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className={`${studioControl} appearance-none bg-[length:12px_8px] bg-[position:right_0.15rem_center] bg-no-repeat pr-6 [&>option]:bg-white [&>option]:text-ink`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23c6a15b' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
        }}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="" />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#9a3b32]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const cardControl =
  "mt-1.5 w-full rounded-sm border border-[#e4dccb] bg-white px-3 py-1.5 text-[15px] text-ink outline-none placeholder:text-stone/45 focus:border-gold";

function CardField({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  error,
  required = false,
  multiline = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.9rem] leading-none text-ink">
        {label}
        {required ? <span className="text-gold" aria-hidden="true"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={2}
          placeholder={placeholder}
          className={`${cardControl} resize-y`}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cardControl}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#9a3b32]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function CardSelect({
  id,
  label,
  name,
  options,
  error,
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.9rem] leading-none text-ink">
        {label}
        {required ? <span className="text-gold" aria-hidden="true"> *</span> : null}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className={`${cardControl} appearance-none bg-[length:12px_8px] bg-[position:right_0.85rem_center] bg-no-repeat pr-8 text-ink [&:has(option[value='']:checked)]:text-stone/50 [&>option]:text-ink`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%23c6a15b' stroke-width='1.4' d='M1 1.2l5 5 5-5'/%3E%3C/svg%3E\")",
        }}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="">Select a service</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#9a3b32]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  error,
  className = "",
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="field"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function Select({
  id,
  label,
  name,
  options,
  error,
  optional = false,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
        {label}
        {optional ? <span className="tracking-normal text-stone/70"> · optional</span> : null}
      </label>
      <select
        id={id}
        name={name}
        className="field select"
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="">{optional ? "Select if you know" : "Select"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-error">
      {message}
    </p>
  );
}

function buildMailto(payload: {
  intent: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  requestType: string;
  propertyType: string;
  timeline: string;
}) {
  const subject = `${payload.intent === "quote" ? "Quote request" : "Website message"} from ${payload.name}`;
  const body = [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service: ${payload.service}`,
    `City: ${payload.city}`,
    payload.requestType ? `Request: ${payload.requestType}` : "",
    payload.propertyType ? `Property: ${payload.propertyType}` : "",
    payload.timeline ? `Timeline: ${payload.timeline}` : "",
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
