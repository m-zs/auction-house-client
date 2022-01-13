import { AccountMenuItem } from "../../items";

export const ACCOUNT_SECTION: AccountMenuItem = {
  name: "Account",
  items: [
    { url: "/account/overview", text: "My account" },
    { url: "/account/support", text: "Support" },
    { url: "/account/logout", text: "Logout" },
  ],
};
