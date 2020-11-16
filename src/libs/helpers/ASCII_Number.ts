export default class ASCII_Number {
  constructor(public ascii: string[], public value: number) { }
  
  print(line: number): string {
    return this.ascii[line];
  }
}
