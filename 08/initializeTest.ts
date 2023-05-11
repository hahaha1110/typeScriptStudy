class WithVlaue {
  immediate = 0;
  later: number;
  myBeUndefind: number | undefined; // undefined 허용이라 오류안남
  unused!: MutationObserver;

  constructor() {
    this.later = 1;
  }
}
