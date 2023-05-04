type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type ComicBook = Artwork & Writing;

type grapicNorvel = { name: string } & (
  | { author: string; genre: "action" }
  | { nationality: string; genre: "romance" }
);

const superHero: grapicNorvel = {
  name: "spiderman",
  author: "stanLee",
  genre: "action",
};

type NotPossible = number & string; // 타입 never
// let notNumber: NotPossible = 1;
// let notString: NotPossible = "ggg";
