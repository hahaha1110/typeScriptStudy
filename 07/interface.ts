// 타입별칭
type Poet = {
  born: number;
  name: string;
};

// 인터페이스
interface Poet2 {
  born: number;
  name: string;
}

interface Page {
  readonly text: string;
}

function read(page: Page) {
  console.log(page.text);
  //   page.text = 'ggg';
}

const pageConst: Page = {
  text: "ggg",
};

read(pageConst);
