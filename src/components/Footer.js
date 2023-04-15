import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
// import { socialLinks } from "./data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLink parentClass="footer-links" elementClass="footer-link" />

        <SocialLink parentClass={"footer-icons"} elementClass={"footer-icon"} />

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
