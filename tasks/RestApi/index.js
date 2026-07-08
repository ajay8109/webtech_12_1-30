const expres = require("express");

const app = expres();
const PORT = 3000;

app.use(expres.json());

app.get("/rest-api",  (req,res) => {
    res.send("hy How are you")
} )


app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`))