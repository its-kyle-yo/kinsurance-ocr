import * as fs from 'fs';
import {nums} from '../constants/index';
   
export default function generateRandomFile(numberOfEntries: number, filename: string): void {
  let string: string[] = [];

  for (let i = 0; i < numberOfEntries; i++) {
    const serialNumber: number[] = Array.from(Array(8)).map(x => Math.floor(Math.random() * 10));
    
    for (let i = 0; i < 4; i++) {
      let str: string = "";
      
      serialNumber.forEach(n => {
        str += nums[n].print(i)
      });

      string.push(str);
    }
  }

  fs.writeFileSync(filename, string.join("\n"));
}