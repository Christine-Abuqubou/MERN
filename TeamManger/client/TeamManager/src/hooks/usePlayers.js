// import axios from "axios";
// import { useEffect, useState } from "react";


// export default function usePlayers(){
//     const [players, setPlayers] = useState([]);

//     const fetchPlayers = () =>{
//         axios.get("http://localhost:1337/api/players")
//         .then(res => setPlayers(res.data))
        
//     }

//     const addPlayer = (data) => {
//         axios.post("http://localhost:1337/api/players", data)
       
        
//     }

//     const deletePlayer =(id)=>{
//         axios.delete(`http://localhost:1337/api/players/${id}`)
//     }


//    const updateStatus=(id ,game,status) =>{
//     axios.patch(`http://localhost:1337/api/players/${id}/status/${game}`,{status})
//    }
//         useEffect(() => {
//             fetchPlayers();
//         }, []);

//     return {
//         players,
//         fetchPlayers,
//         addPlayer,
//         deletePlayer,
//         updateStatus
//     }
// }

import axios from "axios";
import { useEffect, useState } from "react";

export default function usePlayers() {
    const [players, setPlayers] = useState([]);

    // Fetch players
    const fetchPlayers = () => {
        axios.get("http://localhost:1337/api/players")
            .then(res => setPlayers(res.data))
            .catch((error) => console.error("Error fetching players:", error));
    };

    // Add a player
    // const addPlayer = (data) => {
    //     axios.post("http://localhost:1337/api/players", data)
    //         .then((res) => {
    //             // Immediately add the new player to the state
    //             setPlayers(prevPlayers => [...prevPlayers, res.data]);
    //         })
    //         .catch((error) => console.error("Error adding player:", error));
    // };
    const addPlayer = (data) => {
    return axios.post("http://localhost:1337/api/players", data)
        .then((res) => {
            // Immediately add the new player to the state
            setPlayers(prevPlayers => [...prevPlayers, res.data]);
        })
        .catch((error) => console.error("Error adding player:", error));
};


    // Delete a player
    const deletePlayer = (id) => {
        axios.delete(`http://localhost:1337/api/players/${id}`)
            .then(() => {
                // Immediately remove the deleted player from the state
                setPlayers(prevPlayers => prevPlayers.filter(player => player._id !== id));
            })
            .catch((error) => console.error("Error deleting player:", error));
    };

    // Update player status
    const updateStatus = (id, game, status) => {
        return axios.patch(`http://localhost:1337/api/players/${id}/status/${game}`, { status })
            .catch((error) => console.error("Error updating status:", error));
    };

    // Fetch players when the component mounts
    useEffect(() => {
        fetchPlayers();
    }, []);

    return {
        players,
        fetchPlayers,
        addPlayer,
        deletePlayer,
        updateStatus
    };
}
