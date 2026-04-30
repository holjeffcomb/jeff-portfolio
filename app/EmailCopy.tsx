"use client";

import { useState } from "react";

const EMAIL = "jeffholcomb@proton.me";

export function EmailCopy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available; fallback to selecting the text
      const range = document.createRange();
      const selection = window.getSelection();
      const span = document.getElementById("email-text");
      if (span && selection) {
        range.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  return (
    <div className="inline-flex items-stretch border border-[#26221c] divide-x divide-[#26221c] font-mono text-sm">
      <span
        id="email-text"
        className="px-5 py-3 text-[#ece7da] select-all"
      >
        {EMAIL}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy email to clipboard"}
        className="px-4 py-3 text-[#8a857a] hover:text-[#b89968] hover:bg-[#1a1815] transition-colors flex items-center gap-2"
      >
        {copied ? (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-[11px] uppercase tracking-wider">
              Copied
            </span>
          </>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
      <a
        href={`mailto:${EMAIL}?subject=Lighting%20Inquiry`}
        aria-label="Compose email"
        className="px-4 py-3 text-[#8a857a] hover:text-[#b89968] hover:bg-[#1a1815] transition-colors flex items-center gap-2"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span className="text-[11px] uppercase tracking-wider">Email</span>
      </a>
    </div>
  );
}
