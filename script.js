// le boutton
const box = document.getElementById("box");
// le texte
const p = document.createElement("P");
 // url request
const url = "https://api.chucknorris.io/jokes/random";
// la requete de l'api
function quotegen(){
  fetch(url)
    .then(response => 
        // recuperation de l'url
        {
      return response.json()
    })
    .then(data =>
        // injection de la reponse dans le html
        {
    p.innerHTML = data.value;
    box.appendChild(p);
    })
};