import { COLOR } from "../constants/theme";

export default function OptionButton({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        background: selected ? "#FFF3EF" : COLOR.white,
        border: selected
          ? `2.5px solid ${COLOR.btn}`
          : `1.5px solid ${COLOR.border}`,
        borderRadius: 12,
        padding: "14px 18px",
        marginBottom: 10,
        textAlign: "left",
        fontSize: 16,
        fontWeight: selected ? 700 : 500,
        color: selected ? COLOR.btn : COLOR.textDark,
        cursor: "pointer",
        boxSizing: "border-box",
        lineHeight: 1.5,
      }}
    >
      {label}
    </button>
  );
}
