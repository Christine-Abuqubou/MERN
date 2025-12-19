import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/players/list">Players</Link> |{" "}
      <Link to="/players/addplayer">Add Player</Link> |{" "}
      <Link to="/status/game/1">Manage Status</Link>
    </nav>
  );
}