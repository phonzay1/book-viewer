export interface TableOfContents {
  book: string,
  chapters: string[],
}

// named HomeProps bc of original usage...but used in other components too now
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
