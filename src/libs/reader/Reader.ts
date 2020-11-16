import {Numbers} from '../constants/index';
import ASCII_Number from '../helpers/ASCII_Number';

class Reader {
  constructor(public asciiNumbers: Map<string, number>) { }

  convert(entry: string[]): string {
    const chunks: string[][] = entry.map(line => line.match(/.{1,3}/g));
    let matched: string = "";

    for (let i = 0; i < chunks[0].length; i++) {
      const reconstructed: string[] = []; 

      for (let j = 0; j < chunks.length; j++) {
        reconstructed.push(chunks[j][i])
      }

      matched += this.asciiNumbers.get(reconstructed.join(""));
    }
    
    return matched;
  }

  isIllegal(policyNumber: string): boolean {
    return isNaN(+policyNumber)
  }
  isValid(policyNumber: string): boolean {
    const numbers: string[] = policyNumber.split("");
    const d1 = +numbers.shift();
    const d9 = +numbers.pop();
    const sum = numbers.reverse().reduce((accumulator, n, i) => accumulator + (i + 2) * +n, d1) * d9;
    return (sum % 11 === 0);
  }
}

export default new Reader(Numbers);