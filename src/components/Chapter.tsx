import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Chapter(): JSX.Element {
  const name = useParams().name
  const baseURL = '/api';
  // console.log('chapter name: ', name)
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchChapterText(): Promise<void> {
      try {
        const response = await fetch(`${baseURL}/${name}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const chapterText: string = await response.text();
        setText(chapterText);
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

  // console.log(text);

  return (
    <>
      {text}
    </>
  )
}

export default Chapter;