export class Engineer {
  constructor(readonly area: string) {
    this.area = area;
    console.log(`i work in the ${area} area.`);
  }
}

new Engineer("seoul");
