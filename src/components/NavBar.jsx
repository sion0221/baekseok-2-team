import { Home } from "lucide-react";
import { COLOR } from "../constants/theme";

export default function NavBar({ onHome }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 390,
        background: COLOR.navBg,
        padding: "14px 0 18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 200,
        overflow: "visible",
      }}
    >
      <button
        onClick={onHome}
        style={{
          background: COLOR.btn,
          border: `3px solid ${COLOR.white}`,
          borderRadius: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80px",
          height: "80px",
          marginTop: "-40px",
          padding: 0,
        }}
      >
        <Home size={40} color={COLOR.white} />
      </button>
    </div>
  );
}
