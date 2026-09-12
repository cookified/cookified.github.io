"use client";

import { useEffect, useState } from "react";
import {
  ActivityCalendar,
  type Activity,
  type ThemeInput,
} from "react-activity-calendar";

const theme: ThemeInput = {
  light: ["#f4eeda", "#e8d489", "#d9a44a", "#b06e33", "#74324a"],
};

type ApiResponse = {
  contributions?: Activity[];
  total?: Record<string, number>;
};

export default function ContributionCalendar() {
  const [data, setData] = useState<Activity[] | null>(null);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/cookified",
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json = (await res.json()) as ApiResponse;
        if (cancelled) return;

        const contributions = json.contributions ?? [];

        const yearTotals = json.total ?? {};
        const years = Object.keys(yearTotals)
          .map(Number)
          .filter((y) => !Number.isNaN(y))
          .sort((a, b) => b - a);

        if (years.length > 0) {
          const currentYear = years[0];
          setTotal(yearTotals[String(currentYear)] ?? null);
          setData(
            contributions.filter(
              (day) => new Date(day.date).getFullYear() === currentYear,
            ),
          );
        } else {
          setData(contributions);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-14"
      aria-labelledby="contrib-heading"
    >
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <h2
          id="contrib-heading"
          className="text-[17px] font-semibold tracking-tight text-ink"
        >
          GitHub
        </h2>
        <div className="flex items-center gap-3">
          {total !== null && (
            <span className="text-[10px] tracking-[0.06em] text-muted">
              {total.toLocaleString()} contributions this year
            </span>
          )}
          <a
            href="https://github.com/cookified"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.06em] text-muted underline decoration-[var(--hairline-strong)] underline-offset-4 transition-colors hover:text-ink"
          >
            @cookified
          </a>
        </div>
      </div>

      <div className="contrib-panel p-4 sm:p-5">
        {error && (
          <p className="py-8 text-center text-[12px] text-muted">
            Contribution data is temporarily unavailable.{" "}
            <a
              href="https://github.com/cookified"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--hairline-strong)] underline-offset-4 hover:text-ink"
            >
              View on GitHub
            </a>
          </p>
        )}

        {!error && !data && (
          <p className="py-8 text-center text-[12px] text-muted">
            Loading contribution map…
          </p>
        )}

        {!error && data && (
          <div className="contrib-calendar">
            <ActivityCalendar
              data={data}
              theme={theme}
              colorScheme="light"
              blockSize={11}
              blockMargin={3}
              blockRadius={2.5}
              fontSize={10}
              maxLevel={4}
              showColorLegend
              showMonthLabels
              showTotalCount={false}
              labels={{
                months: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                legend: {
                  less: "Less",
                  more: "More",
                },
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
