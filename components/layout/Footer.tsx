import SocialLinks from "../SocialLinks";
import { SITE } from "../utils/constants";

const Footer = () => (
  <footer className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
    <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
    <SocialLinks />
  </footer>
);

export default Footer;

