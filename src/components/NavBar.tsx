import {
  Link
} from 'react-router-dom';
import { NavBarProps } from "../types";
import ChapterLinks from "./ChapterLinks";

function NavBar({ chapters, id }: NavBarProps): JSX.Element {
  return (
    <div id={id}>
      <div className="pure-menu">
          <Link to="/" className="pure-menu-heading">Table of Contents</Link>

          <ChapterLinks chapters={chapters}/>
      </div>
    </div>
  )
}

export default NavBar;
