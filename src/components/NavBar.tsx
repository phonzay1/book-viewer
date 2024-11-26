import { NavBarProps } from "../types";
import ChapterLinks from "./ChapterLinks";

function NavBar({ chapters, id }: NavBarProps): JSX.Element {
  return (
    <div id={id}>
      <div className="pure-menu">
          <a className="pure-menu-heading" href="/">Table of Contents</a>

          <ChapterLinks chapters={chapters}/>
      </div>
    </div>
  )
}

export default NavBar;
