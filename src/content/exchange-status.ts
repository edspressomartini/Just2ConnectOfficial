/**
 * Openreach stop-sell status for the towns we have a page for.
 *
 * Source is Openreach's own stop-sell matrix at `openreach.co.uk/stopsell`,
 * cross-checked against the FTTP Priority Exchange list and the exchange
 * records on `telephone-exchange.co.uk`. Looked up by hand, which is why this
 * only covers towns we have actually checked. A wrong date here is the
 * easiest thing on the site to be caught out on, so nothing goes in until it
 * has been verified.
 */
export interface ExchangeStatus {
  /** Town as written everywhere else on the site. */
  readonly town: string;
  /** Exchange name, where it differs from the town. */
  readonly exchange: string;
  /** Openreach network identifier, so a reader can check us. */
  readonly code: string;
  /** Plain English status, written to be read rather than decoded. */
  readonly status: string;
}

export const exchangeStatuses: readonly ExchangeStatus[] = [
  {
    town: "Berkhamsted",
    exchange: "Berkhamsted",
    code: "SMBK",
    status:
      "Not a priority exchange. Openreach started building full fibre here in November 2025, so this will change.",
  },
  {
    town: "Harpenden",
    exchange: "Harpenden",
    code: "SMHR",
    status:
      "Not a priority exchange, so no early restriction here. Openreach is building full fibre, and CityFibre has already built.",
  },
  {
    town: "Hemel Hempstead",
    exchange: "Hemel Hempstead",
    code: "SMHH",
    status: "Stop-sell in force since 14 February 2026.",
  },
  {
    town: "Luton",
    exchange: "Luton",
    code: "SMLT",
    status:
      "Not a priority exchange, which means full fibre has not reached enough of the town yet.",
  },
  {
    town: "St Albans",
    exchange: "St Albans",
    code: "LNSTB",
    status: "Stop-sell in force since 5 June 2026.",
  },
  {
    town: "St Albans",
    exchange: "Bowmansgreen",
    code: "LNBGN",
    status:
      "Stop-sell in force since 1 November 2022, the earliest anywhere near us.",
  },
  {
    town: "Tring",
    exchange: "Tring",
    code: "SMTR",
    status:
      "Not a priority exchange, which means full fibre has not reached enough of the town yet.",
  },
  {
    town: "Watford",
    exchange: "Watford",
    code: "LWWAT",
    status: "Stop-sell in force since 16 February 2024.",
  },
];
