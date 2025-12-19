const colors = {
  Playing: "green",
  "Not Playing": "red",
  Undecided: "yellow"
};

export default function StatusButtons({ current, onChange }) {
  return ["Playing", "Not Playing", "Undecided"].map(s => (
    <button
      key={s}
      style={{
        backgroundColor: current === s ? colors[s] : "lightgray"
      }}
      onClick={() => onChange(s)}
    >
      {s}
    </button>
  ));
}
