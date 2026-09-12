import Section from "@/components/Section";
import { contactBlurb, identity } from "@/lib/content";

export default function Contact() {
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
            <a
              href={`mailto:${identity.email}`}
              className="chip px-2.5 py-1 text-[12px]"
            >
              {identity.email}
            </a>
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