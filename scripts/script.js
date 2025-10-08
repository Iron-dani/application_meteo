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

/* 
 const currentWeather = {
        localisation:{
            pays: data.location.country,
            ville: data.location.name,
            region: data.location.region,
            id_fh: data.location.tz_id,
            longitude:data.location.lon,
            latitude:data.location.lat,
            heure_locale:data.location.localtime,
            epoch_local:data.location.localtime_epoch,
        },
        meteoActuel:{
          dernier_maj_epoch: data.current.last_updated_epoch,
          dernier_maj:data.current.last_updated,
          condition : {
                text : data.current.condition.text,
                icon : data.current.condition.icon,
                code : data.current.condition.code,
            },
          temperature:{
            c: data.current.temp_c,
            f: data.current.temp_f,
          },
          etat_jour:data.current.is_day,
          vent:{
            vitesse_mph: data.current.wind_mph,
            vitesse_kph: data.current.wind_kph,
            direction: data.current.wind_dir,
            dir_degree: data.current.wind_degree
          },
          humidite:data.current.humidity,
          nuage: data.current.cloud,
          uv: data.current.uv,
          temperature_ressenti:{
            c: data.current.feelslike_c,
            f:data.current.feelslike_f
          },
          indice_de_chaleur:{
            c: data.current.heatindex_c ,
            f:data.current.heatindex_f,
          }

        }
    };
*/