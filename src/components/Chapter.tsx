import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HomeProps } from '../types';

function urlParamToChapterTitle(param: string | undefined): string {
  if (param) {
    return param
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/ Headed/, "-headed");
  }
  
  throw new Error('missing chapter name parameter');
}

function Chapter({ chapters }: HomeProps): JSX.Element {
  const name = useParams().name;
  const baseURL = '/api';
  const [text, setText] = useState('');
  const [chapterName, setChapterName] = useState('');

  useEffect(() => {
    async function fetchChapterText(): Promise<void> {
      try {
        const response = await fetch(`${baseURL}/${name}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const chapterText: string = await response.text();

        setText(chapterText);

        const chapterTitle = urlParamToChapterTitle(name);
        const chapterNumber = chapters
          .map(chapter => chapter.toLowerCase())
          .indexOf(chapterTitle.toLowerCase()) + 1;
        setChapterName(`Chapter ${chapterNumber}: ${chapterTitle}`);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          throw new Error("Unknown error encountered");
        }
      }
    }

    fetchChapterText();
  }, [name])

  // console.log('paragraphs: ', text.split('\n\n'));

  return (
    <>
      <h2>{chapterName}</h2>
      {text.split('\n\n').map(paragraph => <p>{paragraph}</p>)}
    </>
  )
}

export default Chapter;