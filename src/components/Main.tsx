import { MainProps } from "../types";
import Home from "./Home";

function Main({ title, chapters }: MainProps): JSX.Element {
  return (
    <div id="main">
      <div className="header">
        <h1>{title}</h1>
        <h2>by Sir Arthur Conan Doyle</h2>
      </div>
      <div className="content">
        <Home chapters={chapters}/>
      </div>
    </div>
  )
}

export default Main;
