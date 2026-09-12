"use client";

import { useEffect } from "react";
import { Toaster, toast } from "@cookified/toastify";
import "@cookified/toastify/styles.css";

export default function ToasterHost() {
  useEffect(() => {
    if (window.sessionStorage.getItem("toastify-welcome")) return;
    window.sessionStorage.setItem("toastify-welcome", "1");

    const timer = window.setTimeout(() => {
      toast("Konnichiwa.", {
        description: "This page ships with Toastify built in.",
        duration: 3400,
      });
    }, 1100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Toaster
      position="bottom-right"
      theme="light"
      animation="stack"
      visibleToasts={3}
      duration={3200}
      closeButton
      gap={12}
      offset="22px"
      className="portfolio-toaster"
    />
  );
}