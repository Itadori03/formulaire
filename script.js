document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const nom = document.getElementById("nom").value;
    
    const response = await fetch(${SUPABASE_URL}/rest/v1/users_data, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1anhhYWRpeHpubml1aXByc210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzU3MDIsImV4cCI6MjA2MjkxMTcwMn0.nscE_gkfSG8Mog2yLuDy0v1aCuFYK7DmTL3aHmVarH8,
            "Authorization": Bearer ${SUPABASE_KEY}
        },
        body: JSON.stringify({ nom })
    });

    if (response.ok) {
        alert("Utilisateur enregistré !");
        afficherUtilisateurs();
    }
});

async function afficherUtilisateurs() {
    const response = await fetch(${SUPABASE_URL}/rest/v1/users_data, {
        headers: {
            "apikey": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1anhhYWRpeHpubml1aXByc210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzU3MDIsImV4cCI6MjA2MjkxMTcwMn0.nscE_gkfSG8Mog2yLuDy0v1aCuFYK7DmTL3aHmVarH8,
            "Authorization": Bearer ${SUPABASE_KEY}
        }
    });

    const utilisateurs = await response.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = utilisateurs.map(user => <li>${user.nom}</li>).join("");
}

afficherUtilisateurs();
