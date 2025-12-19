// import usePlayers from "../hooks/usePlayers";
// import { useNavigate } from "react-router-dom";
// import PlayerForm from "../components/PlayerForm";

// export default function AddPlayer() {
//   const { addPlayer } = usePlayers();
//   const navigate = useNavigate();

//   const submit = (data) => {
//     addPlayer(data).then(() => navigate("/players/list"));
//   };

//   return <PlayerForm onSubmit={submit} />;
// }


import usePlayers from "../hooks/usePlayers";
import { useNavigate } from "react-router-dom";
import PlayerForm from "../components/PlayerForm";

export default function AddPlayer() {
  const { addPlayer } = usePlayers();  // Access the addPlayer function from the hook
  const navigate = useNavigate();  // Navigate function to redirect

  const submit = (data) => {
    // Add the player, then navigate to the player list page
    addPlayer(data).then(() => {
      navigate("/players/list");  // Redirect to player list after adding player
    });
  };

  return <PlayerForm onSubmit={submit} />;  // Pass the submit function to the PlayerForm component
}

