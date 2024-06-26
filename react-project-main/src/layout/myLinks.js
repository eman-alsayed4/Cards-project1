import ROUTES from "../routes/ROUTES";

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.ABOUT, children: "About Us page" },
];
const loggedInLinks = [];
const bizLinks = [{ to: ROUTES.CREATECARD, children: "Create page" }];
const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
];

export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks };
