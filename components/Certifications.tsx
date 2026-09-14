import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <ul className="space-y-1.5">
      {certifications.map((item) => (
        <li key={item.name}>
          <p className="text-[13px] text-body">{item.name}</p>
          <p className="font-mono text-[10px] tracking-[0.04em] text-faint">
            {item.issuer}
          </p>
        </li>
      ))}
    </ul>
  );
}