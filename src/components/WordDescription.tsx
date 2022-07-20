import { hasAVowel } from "../utils/hasAVowel";
import { inputStrong } from "../utils/inputStrong";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  const hasSpecialCharacter = wordToDescribe.includes("?" || "€" || "&");
  const isImpressivelyStrong = inputStrong(wordToDescribe);

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialCharacter && <li>Contains a special letter</li>}
      {isImpressivelyStrong && <li>Impressively strong input!</li>}
    </ul>
  );
}

export default WordDescription;
