const words = [
  "quiet software",
  "APIs",
  "security",
  "reliability",
  "design",
  "motion",
  "clean type",
  "small details",
  "open source",
  "nujabes on repeat",
];

function Group() {
  return (
    <span className="marquee-group">
      {words.map((word) => (
        <span key={word} className="flex items-center">
          <span className="marquee-word">{word}</span>
          <span className="marquee-spark" aria-hidden />
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div
      className="marquee-mask mx-auto max-w-3xl px-6 py-6 sm:px-8"
      aria-hidden
    >
      <div className="marquee-track">
        <Group />
        <span className="flex-initial" />
        <Group />
      </div>
    </div>
  );
}