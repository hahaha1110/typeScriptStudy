type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type ComicBook = Artwork & Writing;
