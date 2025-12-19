// import usePlayers from "../hooks/usePlayers";
// import PlayerTable from "../components/PlayerTable";
// export default function PlayerList(){
//     const {players,deletePlayer,fetchPlayers} = usePlayers();

//     const handleDelete=(id,name)=>{
//         if(window.confirm(`Are you sure you want to delete ${name}`)){
//             deletePlayer(id).then(fetchPlayers);
            
//         }}
//         return <PlayerTable players={players} onDelete={handleDelete} />
//     }
// import usePlayers from "../hooks/usePlayers";
// import PlayerTable from "../components/PlayerTable";

// export default function PlayerList() {
//     const { players,  deletePlayer } = usePlayers();

//     const handleDelete = (id, name) => {
//         if (window.confirm(`Are you sure you want to delete ${name}?`)) {
//             deletePlayer(id); // This will remove the player from the list immediately
//         }
//     };

//     // This will add the new player to the list immediately
    

//     return (
//         <div>

            
            
//             <PlayerTable players={players} onDelete={handleDelete} />
//         </div>
//     );
// }


import { useState } from "react";
import usePlayers from "../hooks/usePlayers";
import PlayerTable from "../components/PlayerTable";

export default function PlayerList() {
    const { players, deletePlayer } = usePlayers();
    const [selectedPlayer, setSelectedPlayer] = useState(null); // State to hold selected player details

    const handleDelete = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            deletePlayer(id); // This will remove the player from the list immediately
        }
    };

    // Handle clicking on a player's name
    const handlePlayerClick = (id) => {
        const player = players.find((p) => p._id === id); // Find the player by id
        setSelectedPlayer(player); // Set the selected player's details
    };

    return (
        <div>
            <h1>Player List</h1>
            <PlayerTable 
                players={players} 
                onDelete={handleDelete} 
                onPlayerClick={handlePlayerClick} // Pass the click handler to PlayerTable
            />

            {/* If a player is selected, show their details below the table */}
            {selectedPlayer && (
                <div>
                    <h2>{selectedPlayer.name}'s Details</h2>
                    <p><strong>Name:</strong> {selectedPlayer.name}</p>
                    <p><strong>Position:</strong> {selectedPlayer.position || "Not specified"}</p>
                    <p><strong>Status:</strong>
                        <ul>
                            <li>Game 1: {selectedPlayer.status.game1 || "Undecided"}</li>
                            <li>Game 2: {selectedPlayer.status.game2 || "Undecided"}</li>
                            <li>Game 3: {selectedPlayer.status.game3 || "Undecided"}</li>
                        </ul>
                    </p>
                </div>
            )}
        </div>
    );
}
