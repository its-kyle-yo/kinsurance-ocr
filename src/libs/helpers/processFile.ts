import * as fs from 'fs';

type Entries = string[][]

export default function processFile(filename: string): Entries  {
  let entries: Entries = [];
  let entry: string[] = [];

  fs.readFileSync(filename, 'utf-8').split(/\n/).forEach((line, i) => {
    
    entry.push(line);

    if ((i + 1) % 4 === 0) {
      entries.push(entry);
      entry = [];
    }
  });

  return entries;
}
