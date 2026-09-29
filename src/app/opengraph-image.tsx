import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { business } from "@/content/business";

export const alt = `${business.tradingName}: business telephone systems and broadband`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/*
 * Satori renders an inlined `<img>` rather than resolving CSS classes, so the
 * two fills the Illustrator export keeps in a `<style>` block are written onto
 * the paths before the logo is embedded.
 */
const LOGO_FILLS: readonly (readonly [string, string])[] = [
  ["st0", "#25336a"],
  ["st1", "#d8318a"],
];

function readLogoDataUri(): string {
  const path = join(process.cwd(), "src/images/Just2Connect_Logo.svg");
  const source = readFileSync(path, "utf8");
  const inlined = LOGO_FILLS.reduce(
    (svg, [className, fill]) =>
      svg.replaceAll(`class="${className}"`, `fill="${fill}"`),
    source,
  );

  return `data:image/svg+xml;base64,${Buffer.from(inlined).toString("base64")}`;
}

export default function OpengraphImage() {
  const logo = readLogoDataUri();
  const areas = business.countiesServed.join(", ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          padding: "0 96px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(135deg, #ffffff 0%, #e0e8fa 55%, #ffffff 100%)",
        }}
      >
        <img src={logo} alt="" width={420} height={237} />
        <div
          style={{
            display: "flex",
            fontSize: 58,
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#1f306d",
          }}
        >
          Business Telephone Systems &amp; Broadband
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#3e4a56" }}>
          {areas}
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#c2137e" }}>
          {business.phone.display}
        </div>
      </div>
    ),
    size,
  );
}
