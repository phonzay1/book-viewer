import {
  Link
} from 'react-router-dom';
import { ChapterProps, HomeProps } from "../types"

function convertChapterName(chapterName: string): string {
  const converted = chapterName.toLowerCase().replaceAll(/\s+/g, '-');

  return converted;
}

function ChapterLink({ number, chapter }: ChapterProps): JSX.Element {
  return (
    <li className="pure-menu-item">
      <Link 
        to={`/chapters/${convertChapterName(chapter)}`}
        className="pure-menu-link"
      >
        Chapter {number}: {chapter}
      </Link>
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