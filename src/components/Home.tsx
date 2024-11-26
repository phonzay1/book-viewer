import { HomeProps } from "../types";
import ChapterLinks from "./ChapterLinks";

function Home({ chapters }: HomeProps): JSX.Element {
  return (
    <>
      <h2 className="content-subhead">Table of Contents</h2>

      <div className="pure-menu">
        <ChapterLinks chapters={chapters} />
      </div>
    </>
  )
}

export default Home