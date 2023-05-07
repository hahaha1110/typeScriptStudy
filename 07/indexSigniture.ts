interface WordCounts {
  [i: string]: number; // number값을 갖는 모든 string 키를 허용한다는 의미
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;
// counts.grape = false;

interface Writing {
  page: number;
}

interface ComicBook extends Writing {
  image: string;
}

let spiderman: ComicBook = {
  page: 100,
  image: "spidermanImage",
};
