// Chiedi all’utente/essa il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina:
 // ? <nomecognomecolorepreferito24></nomecognomecolorepreferito24>

const userName = prompt("Inserisci il nome dell'utente")

const userSurname = prompt("Inserisci il cognome dell'utente")

const userFavColor = prompt ("Inserisci il colore preferito dell'utente")

//Tramite id passa informazioni all'html
document.getElementById('password').innerHTML = userName + userSurname + userFavColor + 24;
