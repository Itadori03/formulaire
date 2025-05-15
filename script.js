fetch("https://fujxaadixznniuiprsmt.supabase.co", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1anhhYWRpeHpubml1aXByc210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzU3MDIsImV4cCI6MjA2MjkxMTcwMn0.nscE_gkfSG8Mog2yLuDy0v1aCuFYK7DmTL3aHmVarH8",
    "Authorization": "Bearer TON_SUPABASE_KEY"
  },
  body: JSON.stringify({
    nom: "Brice",
    email: "brice@example.com",
    valeur: "Développeur Web"
  })
});
