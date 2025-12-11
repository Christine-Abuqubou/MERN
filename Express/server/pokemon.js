const express = require("express");
const axios = require("axios");
const app = express();
const port = 8070;

app.use(express.json());

app.get("/api/pokemon/:name", (req, res) => {
    const pokemonName = req.params.name;  
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    axios.get(url)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            res.status(404).json({ error: `Pokémon "${pokemonName}" no found` });
        });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
