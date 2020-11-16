import Reader from './libs/reader/Reader';
import { generateRandomFile, processFile, generateProcessedEntriesFile } from "./libs/helpers/index"

let filename = process.env.INPUT_FILE;
const makeAFile = process.env.RANDOM;
// Comment out lines 5-7 to not generate random ascii
// Generate a file of 500 random ASCII serial numbers

if (makeAFile === 'true') {
  filename = "file.txt";
  const NUMBER_OF_LINES: number = 500;
  generateRandomFile(NUMBER_OF_LINES, filename);
}

if (filename) {
  // Take in generated file (change 'filename' to read from different source)
  const entries = processFile(filename);
  const parsedEntries: {[keyof: string]: string} = {};

  // Loop through all processed entries to see the result
  entries.forEach((entry) => {
    const convertedValue = Reader.convert(entry);
    const isLegal = Reader.isIllegal(convertedValue);
    const isValid = Reader.isValid(convertedValue);

    // Setup parsed entries for later file write
    parsedEntries[convertedValue] = isLegal ? "ILL" : isValid ? "" : "ERR";
  });

  console.log({ parsedEntries });

  generateProcessedEntriesFile(parsedEntries);
} else {
  console.log("[‼️] A file path is required to read from if not --random=true [‼️]");
}
