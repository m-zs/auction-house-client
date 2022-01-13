export interface AccountMenuItem {
  /** section header text */
  name: string;
  /** section links */
  items: {
    /** page url */
    url: string;
    /** anchor text displayed */
    text: string;
  }[];
}

const BUY_SECTION: AccountMenuItem = {
  name: "Buy",
  items: [
    { url: "/buy/bought", text: "My shopping" },
    { url: "/buy/auctions", text: "My bids" },
    { url: "/buy/observed", text: "Observed" },
    { url: "/buy/wish-list", text: "Wish list" },
    { url: "/buy/rate", text: "Rate" },
  ],
};

const SELL_SECTION: AccountMenuItem = {
  name: "Sell",
  items: [
    { url: "/sell/sell-items", text: "Create" },
    { url: "/sell/auctions", text: "My auctions" },
    { url: "/sell/ratings", text: "My ratings" },
  ],
};

export const MENU_ITEMS: AccountMenuItem[] = [BUY_SECTION, SELL_SECTION];
