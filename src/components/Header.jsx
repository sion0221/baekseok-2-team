import { COLOR } from "../constants/theme";

export default function Header({ title }) {
  return (
    <div
      style={{
        background: COLOR.headerBg,
        padding: "18px 20px",
        fontSize: 30,
        fontWeight: 700,
        borderBottom: `2px solid ${COLOR.border}`,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 8,
        justifyContent: "center",
      }}
    >
      {title}
    </div>
  );
}
