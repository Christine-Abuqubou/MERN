import { useState } from "react";

export default function PlayerForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const valid = name.length >= 2;

  const handleSubmit = e => {
    e.preventDefault();
    if (!valid) return;
    onSubmit({ name, position });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Position (optional)"
        value={position}
        onChange={e => setPosition(e.target.value)}
      />
      <button type="submit" disabled={!valid}>
        ADD
      </button>
    </form>
  );
}
