export function inputStrong(wordToDescribe: string): boolean {
  if (wordToDescribe.length < 7) {
    return false;
  } else if (wordToDescribe === wordToDescribe.toLowerCase()) {
    return false;
  } else if (wordToDescribe === wordToDescribe.toUpperCase()) {
    return false;
  } else if (!wordToDescribe.includes("?" || "&" || "€" || "%" || "!")) {
    return false;
  }
  return true;
}
