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

/*
 * Satori has no access to the `next/font` stylesheet, so without these it
 * falls back to its own default face and the share card comes out in the
 * wrong typeface with uneven word spacing. The files are the same Mulish the
 * site loads, vendored as woff because satori cannot read woff2.
 */
const FONT_FILES = [
  ["Mulish-Regular.woff", 400],
  ["Mulish-Bold.woff", 700],
] as const;

function readAsset(relativePath: string): Buffer {
  return readFileSync(join(process.cwd(), "src", relativePath));
}

function readLogoDataUri(): string {
  const source = readAsset("images/Just2Connect_Logo.svg").toString("utf8");
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
  const fonts = FONT_FILES.map(([file, weight]) => ({
    name: "Mulish",
    data: readAsset(`fonts/${file}`),
    weight,
    style: "normal" as const,
  }));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 44,
        padding: "0 70px",
        /*
         * Vertical rather than the diagonal this used to be. A 135deg wash
         * puts more colour on one side than the other, which reads as the
         * whole card being off centre even though the content is not.
         */
        backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(180deg, #ffffff 0%, #e0e8fa 100%)",
      }}
    >
      <img src={logo} alt="" width={330} height={186} />

      <div
        style={{
          display: "flex",
          width: 2,
          height: 260,
          backgroundColor: "#c2137e",
        }}
      />

      {/*
       * Lines are written out rather than left to wrap, because the natural
       * break strands "& Broadband" on a line of its own.
       */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 42,
            lineHeight: 1.2,
            fontWeight: 700,
            color: "#1f306d",
          }}
        >
          <div style={{ display: "flex" }}>Business Telephone Systems</div>
          <div style={{ display: "flex" }}>and Broadband</div>
        </div>

        <div style={{ display: "flex", fontSize: 27, color: "#3e4a56" }}>
          {areas}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 700,
            color: "#c2137e",
          }}
        >
          {business.phone.display}
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
