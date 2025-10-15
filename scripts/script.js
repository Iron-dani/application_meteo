/*On procède par destructuration*/

const API_KEY = "266dd225eb1e45aabca125802252609";
let ville = document.getElementById("texte_ville");
let btn = document.getElementById("rechercher");
let affiche = document.getElementById("affiche");


async function meteo(url) {
  try {
    const firstreponse = await fetch(url);
    const data = await firstreponse.json();

    /*destructuration*/
    //const { text } = data.current.condition;
    const { feelslike_c, humidity, last_updated, precip_mm, temp_c, uv, vis_km } = data.current;
    //const { ville, pays, region, heure_date, longitude, latitude } = data.location;

    console.log(`Température: ${temp_c}`);

  }catch (error) {
    console.log('Erreur:', error);
  }
}

btn.addEventListener("click", function () {
  meteo(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${ville.value}&lang=fr`)
});











































/*const API_KEY = "266dd225eb1e45aabca125802252609"
const city = "Abidjan"
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const ville = data.location.name;
    alert(ville);
  } catch (error) {
    console.error('Erreur:', error);
  }
}
fetchData(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=fr`);
*/
/*
const API_KEY = "266dd225eb1e45aabca125802252609";
var city = document.getElementById("texte_ville");
var btn = document.getElementById("rechercher");
var txt = document.getElementById("affiche");

btn.addEventListener("click", async function fetchData(url) {
  try{
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log(data);
    const ville = data.location.name;
    txt.innerHTML(ville);
  }catch (error){
    console.log('Erreur:',error);
  }
});

fetchData(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=fr`);
*/


/*bon
const API_KEY = "266dd225eb1e45aabca125802252609";
var city = document.getElementById("texte_ville");
var btn = document.getElementById("rechercher");
var txt = document.getElementById("affiche");


async function fetchData(url) {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log(data);
    const ville = data.location.name;
    const hr = data.location.localtime;
    txt.innerHTML = ville+" "+hr;
  } catch (error) {
    console.log('Erreur:', error);
  }

}

btn.addEventListener("click", function () {
  fetchData(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.value}&lang=fr`);
});
*/

