const express = require("express");
const app = express();
const port = 8070;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//API
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


app.get("/api/user", (req, res) => {
    res.json({firstName : {users}});
});

app.listen(port, () => console.log({users}));


app.post("/api/user", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});