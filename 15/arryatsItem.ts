type ArraysItems<T> = T extends (infer Item)[] ? ArraysItems<Item> : T;

// 타입 string
type StringItem = ArraysItems<string>;
type StringArrayItem = ArraysItems<string[]>;
type String2DItem = ArraysItems<String[][]>;
