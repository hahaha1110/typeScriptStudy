// 함수 매개변수
makeSinger("노래명", "하하하");

// 선택 매개변수
makeSinger("노래명2", "하하하2", "하회사");

function makeSinger(song: string, memger: string, companyName?: string) {
  console.log(`이 그룹의 멤버의 이름은 ${memger}이고 노래는 ${song} 입니다.`);
  if (companyName) {
    console.log(`이 그룹을 만든 회사는 ${companyName} 입니다.`);
  }
}

// 기본값 지정
function makeSinger2(
  song: string,
  memger: string,
  companyName = "하하하의 회사"
) {
  console.log(`이 그룹의 멤버의 이름은 ${memger}이고 노래는 ${song} 입니다.`);
  if (companyName) {
    console.log(`이 그룹을 만든 회사는 ${companyName} 입니다.`);
  }
}

makeSinger2("노래명", "하하하");

// 나머지 매개변수
function girlGroup(singer: string, ...song: string[]) {
  // 0개 이상의 song 사용 가능
  console.log(
    `제가 좋아하는 걸그룹은 ${singer}이고, 그들의 노래는 ${song} 입니다.`
  );
}

girlGroup("뉴진스", "Ditto", "hypeBoy", "attention");
girlGroup("아이브"); // 이것도 오류안남
