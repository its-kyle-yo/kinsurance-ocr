import ASCII_Number from '../helpers/ASCII_Number';

const Numbers: Map<string, number> = new Map();

Numbers.set([
  " _ ",
  "| |",
  "|_|",
  "   "].join(""), 0);

Numbers.set([
  "   ",
  " | ",
  " | ",
  "   "].join(""), 1);

Numbers.set([
  " _ ",
  " _|",
  "|_ ",
  "   "].join(""), 2);

Numbers.set([
  " _ ",
  " _|",
  " _|",
  "   "].join(""), 3);

Numbers.set([
  "   ",
  "|_|",
  "  |",
  "   "].join(""), 4);

Numbers.set([
  " _ ",
  "|_ ",
  " _|",
  "   "].join(""), 5);

Numbers.set([
  " _ ",
  "|_ ",
  "|_|",
  "   "].join(""), 6);

Numbers.set([
  " _ ",
  "  |",
  "  |",
  "   "].join(""), 7);

Numbers.set([
  " _ ",
  "|_|",
  "|_|",
  "   "].join(""), 8);

Numbers.set([
  " _ ",
  "|_|",
  " _|",
  "   "].join(""), 9);

const nums = [
  new ASCII_Number([
    " _ ",
    "| |",
    "|_|",
    "   "], 0),
  new ASCII_Number([
    "   ",
    " | ",
    " | ",
    "   "], 1),
  new ASCII_Number([
    " _ ",
    " _|",
    "|_ ",
    "   "], 2),
  new ASCII_Number([
    " _ ",
    " _|",
    " _|",
    "   "], 3),
  new ASCII_Number([
    "   ",
    "|_|",
    "  |",
    "   "], 4),
  new ASCII_Number([
    " _ ",
    "|_ ",
    " _|",
    "   "], 5),
  new ASCII_Number([
    " _ ",
    "|_ ",
    "|_|",
    "   "], 6),
  new ASCII_Number([
    " _ ",
    "  |",
    "  |",
    "   "], 7),
  new ASCII_Number([
    " _ ",
    "|_|",
    "|_|",
    "   "], 8),
  new ASCII_Number([
    " _ ",
    "|_|",
    " _|",
    "   "], 9)
];

export { nums, Numbers };
export default {Numbers, nums};