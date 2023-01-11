import { useEffect, useState } from "react";
import { letters } from "./helpers/letters";
import './App.css';
import { HangImage } from "./components/HangImage";
import { Word } from "./helpers/newRandomWord";
import { Hash } from "./helpers/hash";

function App() {

  const [word, setWord] = useState(Hash.encrypt(Word.getInstance().getWord()));
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(Hash.decrypt(word).length));

  const [alreadySelected, setAlreadySelected] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //determinar si la persona perdió 
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);


  //determinar si la persona ganó 
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (Hash.decrypt(word).length === currentHiddenWord.length && currentHiddenWord === Hash.decrypt(word)) {
      setWon(true);
    }

  }, [hiddenWord])


  const checkLetter = (letter: string) => {
    const decryptedWord = Hash.decrypt(word);

    if (lose) return;
    if (won) return;

    if (!Hash.decrypt(word).includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      setAlreadySelected([...alreadySelected, letter]);

      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < decryptedWord.length; i++) {
      if (decryptedWord[i] === letter) {
        setAlreadySelected([...alreadySelected, letter]);
    
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(" "))
  }


  const newGame = () => {
    const newWord = Hash.encrypt(Word.getInstance(true).getWord());

    setWord(newWord);
    setHiddenWord("_ ".repeat(Hash.decrypt(newWord).length));
    setAttempts(0);
    setAlreadySelected([]);
    setLose(false);
    setWon(false);
  }

  return (
    <div className="App">

      {/* Imágenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3> Intentos: {attempts}</h3>

      {/* Mensaje si perdió  */}
      {
        (lose)
          ? <h2>Perdiste 😭 {word}</h2>
          : ""

      }
      {/* Mensaje si ganó  */}

      {
        (won)
          ? <h2>Ganaste 😎 {Hash.decrypt(word)}</h2>
          : ""}

      {
        (won && Hash.decrypt(word) === "ANA") ? <h2>   TE AMOOOOOOOO AMOR 😍❤️❤️❤️❤️❤️❤️</h2> : ""

      }
      {
        (won && Hash.decrypt(word) === "MARTHYNA") ? <h2> Hola Hermanita 😽❤️</h2> : ""
      }

      {/* Botones de letras */}

      {
        letters.map((letter) => (
          <button
            disabled={alreadySelected.includes(letter)}
            style={{
              borderColor: alreadySelected.includes(letter) ? "red" : "black",
            }}
            onClick={() => checkLetter(letter)}
            key={letter}>
            {letter}
          </button>
        ))
      }

      <br /><br />
      <button onClick={newGame}>¿Nuevo Juego? 👀</button>

    </div>
  )

};

export default App;
