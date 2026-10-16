export interface RouteDiagramProps {
  /** As displayed, e.g. `"01442 573030"`. */
  readonly phoneNumber: string;
  /** The devices the number rings on. */
  readonly routes: readonly string[];
}
