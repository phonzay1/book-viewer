import { z } from "zod";

export interface TableOfContents {
  book: string,
  chapters: string[],
}

export const tocSchema = z.object({
  book: z.string(),
  chapters: z.string().array(),
})

// named HomeProps bc of original usage...but used in other components now too
export interface HomeProps {
  chapters: string[],
}

export interface MainProps {
  title: string,
  chapters: string[],
}

export interface NavBarProps {
  chapters: string[],
  id: string,
}

export interface ChapterProps {
  chapter: string,
  number: number,
}
