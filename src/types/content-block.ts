/**
 * Prose kept as plain data rather than raw JSX, so the content files stay
 * readable for non-developers and the same text can feed structured data.
 * Shared by FAQ answers and the area pages.
 */
export type ContentBlock =
  | { readonly kind: "paragraph"; readonly text: string }
  | { readonly kind: "list"; readonly items: readonly string[] };
