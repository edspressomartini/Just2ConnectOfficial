import type { ContentBlock } from "@/types/content-block";

export interface ContentBlocksProps {
  readonly blocks: readonly ContentBlock[];
  readonly paragraphClassName?: string;
  readonly listClassName?: string;
}

/** Renders the plain-data prose used by the area pages. */
export function ContentBlocks({
  blocks,
  paragraphClassName,
  listClassName,
}: ContentBlocksProps) {
  return blocks.map((block, index) => {
    if (block.kind === "list") {
      return (
        <ul key={`list-${index}`} className={listClassName}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={block.text} className={paragraphClassName}>
        {block.text}
      </p>
    );
  });
}
