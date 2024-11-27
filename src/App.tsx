import { useEffect, useState } from "react";
import { z } from "zod";
import { TableOfContents, tocSchema } from "./types";
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
        tocSchema.parse(json);
        setTitle(json.book);
        setChapters(json.chapters);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        } else if (error instanceof z.ZodError) {
          console.error("Invalid response data!", { error: error.issues });
        } else {
          throw new Error("Unknown error encountered");
        }
      }
    }

    fetchChapters();
  }, [])

  return (
    <>
      <NavBar chapters={chapters} id={"menu"}/>
      <Main title={title} chapters={chapters}/>
    </>
  )
}

export default App;
