interface NavPage {
  /** page url */
  url: string;
  /** anchor text displayed */
  text: string;
  /** protected page, visible only for logged in users */
  onlyForLoggedIn?: boolean;
  /** page only for not logged in users */
  hideForUser?: boolean;
}

export const NAV_PAGES: NavPage[] = [
  { url: "/", text: "Home" },
  { url: "/latest", text: "Latest" },
  { url: "/categories", text: "Categories" },
  { url: "/sign-up", text: "Sign Up", hideForUser: true },
  { url: "/sign-in", text: "Sign In", hideForUser: true },
];
