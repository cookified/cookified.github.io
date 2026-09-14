import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <ul className="space-y-1.5">
      {achievements.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-2.5 text-[13px] text-body"
        >
          <span className="marker h-[5px] w-[5px]" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}