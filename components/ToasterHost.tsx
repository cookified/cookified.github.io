"use client";

import { Toaster } from "@cookified/toastify";
import "@cookified/toastify/styles.css";

export default function ToasterHost() {
  return (
    <Toaster
      position="bottom-right"
      theme="light"
      animation="fade"
      visibleToasts={3}
      duration={3200}
      closeButton
      gap={12}
      offset="22px"
      className="portfolio-toaster"
    />
  );
}