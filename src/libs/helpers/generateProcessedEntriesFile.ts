import * as fs from 'fs';

type ParseEntries = {
  [keyof: string]: string
}

export default function generateProcessedEntriesFile(parsedEntries: ParseEntries): void {
  let output: string = "";
  for (const [key, value] of Object.entries(parsedEntries)) {
    output += `${key} ${value}\n`;
  }

  fs.writeFileSync("processed.txt", output);
}
