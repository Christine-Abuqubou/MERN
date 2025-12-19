import { useParams } from "react-router-dom";
import usePlayers from "../hooks/usePlayers";
import StatusButtons from "../components/StatusButtons";

export default function PlayerStatus() {
  const { num } = useParams();
  const { players, updateStatus, fetchPlayers } = usePlayers();

  return (
    <div>
      <h2>Game {num} Status</h2>
      {players.map(p => (
        <div key={p._id}>
          <strong>{p.name}</strong>
          <StatusButtons
            current={p.status[`game${num}`]}
            onChange={status =>
              updateStatus(p._id, `game${num}`, status).then(fetchPlayers)
            }
          />
        </div>
      ))}
    </div>
  );
}
