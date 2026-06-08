import { useState } from "react";
import { COLOR } from "../constants/theme";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function QuizSection1({ onNext, onHome }) {
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setIsSubmitted(true);

    if (!year.trim() || !hour.trim() || !minute.trim()) {
      return;
    }

    onNext([year, hour, minute]);
  };

  return (
    <div
      style={{
        width: 390,
        background: COLOR.bg,
        color: COLOR.textDark,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Header title="문제에 답변하세요 1/3" />

      <div
        style={{
          flex: 1,
          padding: "22px 20px 100px",
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              background: COLOR.white,
              borderRadius: 16,
              padding: "18px 16px",
              border: `1.5px solid ${COLOR.border}`,
              marginBottom: isSubmitted && !year.trim() ? 6 : 0,
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: COLOR.textMid,
                marginBottom: 8,
              }}
            >
              문제 1
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              오늘은 몇 년인가요? (숫자로)
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>답변:</span>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <input
                  type="tel"
                  style={{
                    flex: 1,
                    border: `2px solid ${COLOR.border}`,
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontSize: 16,
                    background: COLOR.bg,
                    outline: "none",
                    color: COLOR.textDark,
                  }}
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value.replace(/[^0-9]/g, ""));
                  }}
                  placeholder="숫자만 입력하세요"
                />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: COLOR.textDark,
                    paddingRight: 4,
                  }}
                >
                  년
                </span>
              </div>
            </div>
          </div>
          {isSubmitted && !year.trim() && (
            <div
              style={{
                color: COLOR.wrong,
                fontSize: 18,
                fontWeight: 800,
                marginTop: 6,
                paddingLeft: 4,
              }}
            >
              ⚠️ 연도를 입력해주세요
            </div>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              background: COLOR.white,
              borderRadius: 16,
              padding: "18px 16px",
              border: `1.5px solid ${COLOR.border}`,
              marginBottom: isSubmitted && !hour.trim() ? 6 : 0,
            }}
          >
            <div
              style={{ fontSize: 13, color: COLOR.textMid, marginBottom: 8 }}
            >
              문제 2
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              지금은 몇 시인가요? (숫자로)
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>답변:</span>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <input
                  type="tel"
                  style={{
                    flex: 1,
                    border: `2px solid ${COLOR.border}`,
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontSize: 16,
                    background: COLOR.bg,
                    outline: "none",
                    color: COLOR.textDark,
                  }}
                  value={hour}
                  onChange={(e) => {
                    setHour(e.target.value.replace(/[^0-9]/g, ""));
                  }}
                  placeholder="숫자만 입력하세요"
                />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: COLOR.textDark,
                    paddingRight: 4,
                  }}
                >
                  시
                </span>
              </div>
            </div>
          </div>
          {isSubmitted && !hour.trim() && (
            <div
              style={{
                color: COLOR.wrong,
                fontSize: 18,
                fontWeight: 800,
                marginTop: 6,
                paddingLeft: 4,
              }}
            >
              ⚠️ 시간을 입력해주세요
            </div>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              background: COLOR.white,
              borderRadius: 16,
              padding: "18px 16px",
              border: `1.5px solid ${COLOR.border}`,
              marginBottom: isSubmitted && !minute.trim() ? 6 : 0,
            }}
          >
            <div
              style={{ fontSize: 13, color: COLOR.textMid, marginBottom: 8 }}
            >
              문제 3
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              지금은 몇 분인가요? (숫자로)
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>답변:</span>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <input
                  type="tel"
                  style={{
                    flex: 1,
                    border: `2px solid ${COLOR.border}`,
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontSize: 16,
                    background: COLOR.bg,
                    outline: "none",
                    color: COLOR.textDark,
                  }}
                  value={minute}
                  onChange={(e) => {
                    setMinute(e.target.value.replace(/[^0-9]/g, ""));
                  }}
                  placeholder="숫자만 입력하세요"
                />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: COLOR.textDark,
                    paddingRight: 4,
                  }}
                >
                  분
                </span>
              </div>
            </div>
          </div>
          {isSubmitted && !minute.trim() && (
            <div
              style={{
                color: COLOR.wrong,
                fontSize: 18,
                fontWeight: 800,
                marginTop: 6,
                paddingLeft: 4,
              }}
            >
              ⚠️ 분을 입력해주세요
            </div>
          )}
        </div>

        <div style={{ height: 6 }} />

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
