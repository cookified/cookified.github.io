import { contactBlurb, identity } from "@/lib/content";

export default function Contact() {
  return (
    <div>
      <p className="max-w-xl text-[13px] leading-[1.55] text-body">
        {contactBlurb}
      </p>
      <a
        href={`mailto:${identity.email}`}
        className="link mt-3 inline-block text-[15px] font-medium break-all"
      >
        {identity.email}
      </a>
    </div>
  );
}