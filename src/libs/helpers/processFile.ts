import * as fs from 'fs';

type Entries = string[][]

export default function processFile(filename: string): Entries  {
  let entries: Entries = [];
  let entry: string[] = [];

  try {
    fs.readFileSync(filename, 'utf-8').split(/\n/).forEach((line, i) => {
    
    entry.push(line);

    if ((i + 1) % 4 === 0) {
      entries.push(entry);
      entry = [];
    }
  });

  return entries;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("A path to a file was not found.");
    }
 }
}
