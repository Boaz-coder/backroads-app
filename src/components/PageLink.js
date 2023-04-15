import { pageLinks } from "./data";

const PageLink = ({ parentClass, elementClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={elementClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLink;
