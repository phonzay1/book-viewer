import { useEffect, useState } from "react";
import { TableOfContents } from "./types";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [title, setTitle] = useState<string>('')
  const [chapters, setChapters] = useState<string[]>([]);
  const baseURL = '/api';

  useEffect(() => {
    async function fetchChapters(): Promise<void> {
      try {
        const response = await fetch(`${baseURL}/toc`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json: TableOfContents = await response.json();
        setTitle(json.book);
        setChapters(json.chapters);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          throw new Error("Unknown error encountered");
        }
      }
    }

    fetchChapters();
  }, [])

  // console.log('chapters: ', chapters);

  return (
    <>
      <NavBar chapters={chapters} id={"menu"}/>
      <Main title={title} chapters={chapters}/>
    </>
  )
}

export default App;
