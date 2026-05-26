import { useState } from "react";
import { COLOR } from "../constants/theme";
import { SECTION2_QUESTION } from "../data/quizData";
import Header from "../components/Header";
import OptionButton from "../components/OptionButton";
import NavBar from "../components/NavBar";

export default function QuizSection2({ onNext, onHome }) {
  const [selected, setSelected] = useState(null);
  const [showWarn, setShowWarn] = useState(false);

  const quiz = SECTION2_QUESTION;

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
      }}
    >
      <Header title="문제에 답변하세요 2/3" />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "22px 20px 100px",
        }}
      >
        <div
          style={{
            background: COLOR.white,
            borderRadius: 16,
            padding: "18px 16px",
            border: `1.5px solid ${COLOR.border}`,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            &lt;상황 문제&gt;
          </div>

          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            {quiz.scenario}
            <br />
            <br />
            {quiz.question}
          </div>

          <div
            style={{
              width: "100%",
              height: 180,
              background: "#D0EAD9",
              borderRadius: 12,
              overflow: "hidden",
              border: `1.5px dashed ${COLOR.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src={quiz.imageSrc}
              alt="문제 이미지"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
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
              marginBottom: 16,
            }}
          >
            ⚠️ 정답을 선택해주세요
          </div>
        )}

        <div style={{ marginTop: 4 }}>
          {quiz.options.map((opt, id) => (
            <OptionButton
              key={id}
              label={opt}
              selected={selected === id}
              onClick={() => setSelected(id)}
            />
          ))}
        </div>

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
            marginTop: 10,
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
