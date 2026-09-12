"use client";

import { toast } from "@cookified/toastify";
import Section from "@/components/Section";
import { contactBlurb, identity } from "@/lib/content";

export default function Contact() {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email);
      toast.success("Copied to clipboard.", {
        description: identity.email,
        duration: 2600,
      });
    } catch {
      toast.warning("Couldn't copy automatically.", {
        description: "Feel free to jot it down — no judgement.",
        duration: 3200,
      });
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      label="Say hello"
      className="sm:py-16"
    >
      <div className="contact-wash px-5 py-6 sm:px-6 sm:py-7">
        <p className="max-w-md text-[12.5px] leading-[1.7] text-muted">
          {contactBlurb}
        </p>

        <ul className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <li>
            <button
              type="button"
              onClick={copyEmail}
              className="chip px-2.5 py-1 text-[12px]"
              aria-label="Copy email address"
            >
              {identity.email} ↗
            </button>
          </li>
          <li>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="chip px-2.5 py-1 text-[12px]"
            >
              github.com/cookified
            </a>
          </li>
          <li>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="chip px-2.5 py-1 text-[12px]"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={identity.phoneHref}
              className="chip px-2.5 py-1 text-[12px]"
            >
              {identity.phone}
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}