import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name}: Invest in real farms with full transparency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(60% 60% at 12% 0%, #33502a 0%, #28421b 42%, #1c3213 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="11" fill="#1c3213" />
            <path d="M20 21.5C18 14.5 13 11 8.8 12C9.8 18.2 14 22.2 20 21.5Z" fill="#6FC346" />
            <path d="M20 21.5C22 14.5 27 11 31.2 12C30.2 18.2 26 22.2 20 21.5Z" fill="#8ad86a" />
            <path d="M20 21.2V30.5" stroke="#6FC346" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="20" cy="20.8" r="1.7" fill="#E7C80C" />
          </svg>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", fontSize: "70px", fontWeight: 700, lineHeight: 1.05 }}>
            Invest in real farms.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "70px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#8ad86a",
            }}
          >
            Track every naira.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              fontSize: "28px",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "820px",
            }}
          >
            Escrow-backed, milestone-based funding built for transparency and accountability.
          </div>
        </div>

        {/* Chips */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {["Escrow-backed", "Milestone releases", "Private beta"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                fontSize: "24px",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {chip}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: "24px",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {siteConfig.domain}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
