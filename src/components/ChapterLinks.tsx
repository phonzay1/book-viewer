import { ChapterProps, HomeProps } from "../types"

function ChapterLink({ number, chapter }: ChapterProps): JSX.Element {
  return (
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link">Chapter {number}: {chapter}</a>
    </li>
  )
}

function ChapterLinks({ chapters }: HomeProps ): JSX.Element {
  return (
    <ul className="pure-menu-list">
      {chapters.map((chapter, idx) => {
        const number = idx + 1;
        return <ChapterLink key={chapter} chapter={chapter} number={number}/>;
      })}            
    </ul>
  )
}

export default ChapterLinks