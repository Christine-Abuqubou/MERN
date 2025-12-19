
export default function PlayerTable({ players, onDelete, onPlayerClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.map(p => (
          <tr key={p._id}>
            {/* Make player name clickable */}
            <td>
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => onPlayerClick(p._id)} // Call onPlayerClick when name is clicked
              >
                {p.name}
              </span>
            </td>
            <td>{p.position || "-"}</td>
            <td>
              <button onClick={() => onDelete(p._id, p.name)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
