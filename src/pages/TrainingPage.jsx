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
  // 실제 사용자가 입력한 시간을 담을 변수
  const [realTimeAnswers, setRealTimeAnswers] = useState([]);

  const handleSection1Next = (answers) => {
    const now = new Date();

    // 12시간제와 24시간제 모두 정답 인정되도록 배열 형태로 저장
    const hours24 = now.getHours();
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

    const currentAnswers = [
      [String(now.getFullYear())], // 연도 정답
      [String(hours24), String(hours12)], // 시간 정답(24, 12시간제 모두 정답)
      [String(now.getMinutes()), String(now.getMinutes())], // 분 정답
    ];

    setRealTimeAnswers(currentAnswers);
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
          realTimeAnswers={realTimeAnswers}
          onHome={onHome}
        />
      )}
    </div>
  );
}
