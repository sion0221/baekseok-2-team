import { useState } from "react";
import { COLOR } from "../constants/theme";
import QuizSection1 from "./QuizSection1";
import QuizSection2 from "./QuizSection2";
import QuizSection3 from "./QuizSection3";
import ResultPage from "./ResultPage";

export default function TrainingPage({ onHome }) {
  const [step, setStep] = useState(1);

  const [s1Answers, setS1Answers] = useState(["", "", ""]);
  const [s2Answer, setS2Answer] = useState(null);
  const [s3Answer, setS3Answer] = useState(null);

  const handleSection1Next = (answers) => {
    setS1Answers(answers);
    setStep(2);
  };

  const handleSection2Next = (selectedOption) => {
    setS2Answer(selectedOption);
    setStep(3);
  };

  const handleSection3Next = (selectedOption) => {
    setS3Answer(selectedOption);
    setStep("result");
  };

  return (
    <div
      style={{
        width: 390,
        minHeight: "100vh",
        background: COLOR.bg,
        color: COLOR.textDark,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {step === 1 && (
        <QuizSection1 onNext={handleSection1Next} onHome={onHome} />
      )}

      {step === 2 && (
        <QuizSection2 onNext={handleSection2Next} onHome={onHome} />
      )}

      {step === 3 && (
        <QuizSection3 onNext={handleSection3Next} onHome={onHome} />
      )}

      {step === "result" && (
        <ResultPage
          s1Answers={s1Answers}
          s2Answer={s2Answer}
          s3Answer={s3Answer}
          onHome={onHome}
        />
      )}
    </div>
  );
}
