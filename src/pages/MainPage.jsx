import { COLOR } from "../constants/theme";
import NavBar from "../components/NavBar";
import { ChevronRight } from "lucide-react";

export default function MainPage({ user, onTraining, onHome }) {
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
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "22px 20px 100px",
        }}
      >
        <div style={{ marginBottom: 24, paddingTop: 4 }}>
          <div style={{ fontSize: 25, fontWeight: 800, marginBottom: 4 }}>
            안녕하세요, {user.name}님 ({user.age})
          </div>
          <div style={{ fontSize: 20, color: COLOR.textMid }}>
            오늘의 인지훈련을 시작하세요
          </div>
        </div>

        <button
          onClick={onTraining}
          style={{
            width: "100%",
            background: COLOR.btn,
            border: "none",
            borderRadius: 20,
            minHeight: 170,
            marginBottom: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
          }}
        >
          <div style={{ width: 36 }} />

          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: COLOR.white,
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            오늘의
            <br />
            훈련
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
            }}
          >
            <ChevronRight size={36} color={COLOR.white} strokeWidth={3} />
          </div>
        </button>
      </div>

      <NavBar onHome={onHome} />
    </div>
  );
}
