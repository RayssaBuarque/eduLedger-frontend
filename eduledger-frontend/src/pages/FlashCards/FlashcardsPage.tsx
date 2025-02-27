import { useState } from "react";
import styles from "./FlashcardsPage.module.css";
import TopBar from '../../components/TopBar/TopBar';
import StarRating from "../../components/StarRating/StarRating"
import Sidebar from '../../components/SideBar/SideBar';

const questions = [
  { question: "O que é blockchain?", answer: "Blockchain é um sistema de registro distribuído que garante segurança e transparência nas transações." },
  { question: "O que é um smart contract?", answer: "Um smart contract é um contrato autoexecutável com regras codificadas diretamente na blockchain." },
  { question: "Qual a principa"}]

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); // Estado para saber se o flashcard está virado

  const { question, answer } = questions[index];

  const nextCard = () => {
    setFlipped(false); // Reseta para a frente ao trocar de card
    setIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div>
      <TopBar />
      <Sidebar/>
      <StarRating/>
      <div className={styles.container}>
        <div className={`${styles.flashcard} ${flipped ? styles.flipped : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className={styles.front}>{question}</div>
          <div className={styles.back}>{answer}</div>
        </div>
        <button onClick={nextCard} className={styles.button}>Próximo</button>
      </div>
    </div>
  );
}