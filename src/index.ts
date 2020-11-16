import Reader from './libs/reader/Reader';
import { generateRandomFile, processFile, generateProcessedEntriesFile } from "./libs/helpers/index"

const filename = process.env.INPUT_FILE || "filez.txt";

// Comment out lines 5-7 to not generate random ascii
// Generate a file of 500 random ASCII serial numbers
const NUMBER_OF_LINES: number = 500;
generateRandomFile(NUMBER_OF_LINES, filename);

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

generateProcessedEntriesFile(parsedEntries)