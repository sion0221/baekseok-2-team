import { useState } from "react";
import { COLOR } from "../constants/theme";
import { SECTION3_QUESTION } from "../data/quizData";
import Header from "../components/Header";
import OptionButton from "../components/OptionButton";
import NavBar from "../components/NavBar";

export default function QuizSection3({ onNext, onHome }) {
  const [selected, setSelected] = useState(null);
  const [showWarn, setShowWarn] = useState(false);

  const q = SECTION3_QUESTION;

  const handleNext = () => {
    if (selected === null) {
      setShowWarn(true);
      return;
    }

    setShowWarn(false);
    onNext(selected);
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
        boxSizing: "border-box",
      }}
    >
      <Header title="문제에 답변하세요 3/3" />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "22px 20px 100px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 22,
          }}
        >
          {q.instruction}
        </div>

        <div
          style={{
            background: COLOR.white,
            borderRadius: 16,
            border: `1.5px solid ${COLOR.border}`,
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 800,
            padding: "26px",
            marginBottom: 24,
            letterSpacing: 1,
          }}
        >
          {q.sentence}
        </div>

        {showWarn && (
          <div
            style={{
              background: "#FFF3F3",
              border: `1.5px solid ${COLOR.wrong}`,
              borderRadius: 10,
              padding: "11px 14px",
              color: COLOR.wrong,
              fontSize: 14,
              fontWeight: 700,
              marginTop: 8,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            ⚠️ 정답을 선택해주세요
          </div>
        )}

        {q.options.map((opt, id) => (
          <OptionButton
            key={id}
            label={opt}
            selected={selected === id}
            onClick={() => setSelected(id)}
          />
        ))}

        <div style={{ height: 16 }} />

        <button
          style={{
            width: "100%",
            background: COLOR.btn,
            color: COLOR.white,
            border: "none",
            borderRadius: 14,
            padding: "16px 0",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          다음으로
        </button>
      </div>

      <NavBar onHome={onHome} />
    </div>
  );
}
