const ADMIN_PASSWORD = "Donatien1";

// 🔹 Choix du rôle
function choisirRole(role) {
    if (role === "admin") {
        const password = prompt("Entrez le mot de passe administrateur :");
        if (password === ADMIN_PASSWORD) {
            document.getElementById("adminSection").style.display = "block";
            afficherUtilisateurs();
        } else {
            alert("Mot de passe incorrect !");
        }
    } else {
        document.getElementById("userSection").style.display = "block";
        afficherUtilisateurs();
    }
}

// 🔹 Enregistrer un utilisateur
document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const nom = document.getElementById("nom").value;
    
    const response = await fetch(${SUPABASE_URL}/rest/v1/users_data, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization": Bearer ${SUPABASE_KEY}
        },
        body: JSON.stringify({ nom })
    });

    if (response.ok) {
        alert("Utilisateur enregistré !");
        afficherUtilisateurs();
    }
});

// 🔹 Afficher la liste des utilisateurs
async function afficherUtilisateurs() {
    const response = await fetch(${SUPABASE_URL}/rest/v1/users_data, {
        headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": Bearer ${SUPABASE_KEY}
        }
    });

    const utilisateurs = await response.json();
    const userList = document.getElementById("userList");
    const adminUserList = document.getElementById("adminUserList");

    userList.innerHTML = utilisateurs.map(user => <li>${user.nom}</li>).join("");
    adminUserList.innerHTML = utilisateurs.map(user =>
        <li>${user.nom} <button onclick="supprimerUtilisateur('${user.id}')">Supprimer</button></li>
    ).join("");
}

// 🔹 Supprimer un utilisateur (admin uniquement)
async function supprimerUtilisateur(id) {
    await fetch(${SUPABASE_URL}/rest/v1/users_data?id=eq.${id}, {
        method: "DELETE",
        headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": Bearer ${SUPABASE_KEY}
        }
    });

    afficherUtilisateurs();
}

// 🔹 Retour à la sélection de rôle
function retourAccueil() {
    document.getElementById("adminSection").style.display = "none";
    document.getElementById("userSection").style.display = "none";
}
