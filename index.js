const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(🚀 Serveur démarré sur http://localhost:${PORT});

    // 🔄 Boucle infinie : exécute toutes les 5 secondes
    setInterval(() => {
        console.log("🔁 Le serveur tourne... Mise à jour en cours !");
    }, 5000); // 5000 ms = 5 secondes
});
