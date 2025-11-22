//On procède par destructuration 

const API_KEY = "266dd225eb1e45aabca125802252609";
let ville = document.getElementById("texte_ville");
let btn = document.getElementById("rechercher");
let afficheville = document.getElementById("ville_pays_region");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");
let img = document.getElementById("img");
let info = document.getElementById("inf");
let lst = document.getElementById("lst");
let rsc = document.getElementById("rsc");
let hmd = document.getElementById("hmd");
let prcpm = document.getElementById("prcpm");
let u_v = document.getElementById("u_v");
let vskm = document.getElementById("vskm");
let h = document.getElementById("h");
let lo = document.getElementById("lo");
let la = document.getElementById("la");
/*
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(
        (position) =>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;         
        },(error)=>{
            console.log("Erreur de geolocalisation", error.message);
        }
    );
}else{
    console.log("Geo loca non dispo");
}
*/


async function meteo(url) {
  info.textContent = "Chargement...";
  try {
    const firstreponse = await fetch(url);
    const data = await firstreponse.json();
    //console.log(data);

    //destructuration 
    const { icon, text } = data.current.condition;
    const { feelslike_c, humidity, last_updated, precip_mm, temp_c, uv, vis_km } = data.current;
    const { name, country, region, localtime, lon, lat } = data.location;

    //console.log(`Température: ${temp_c}`);
    //console.log(`nom ville: ${name}`);
    //afficheville.innerHTML = name + ", " + region + ", " + country;
    afficheville.textContent =  name + ", " + region + ", " + country;
    temp.textContent = temp_c+" °C";
    desc.textContent = text;
    img.src = icon;
    img.alt = "Icône météo :"+ text;
    lst.textContent = last_updated;
    rsc.textContent = feelslike_c+" °C";
    hmd.textContent = humidity+" %";
    prcpm.textContent = precip_mm+" mm";
    u_v.textContent = uv
    vskm.textContent = vis_km+" Km";
    h.textContent = localtime;
    lo.textContent = lon+"°";
    la.textContent = lat+"°";
    info.textContent = ""; // Réinitialiser le message
  } catch (error) {
    info.textContent = error.message;
    console.log('Erreur:', error);
  }

}

btn.addEventListener("click", function () {
  if (!ville.value.trim())
  //vérifie si le champ est vide après suppression des espaces {
    info.textContent = "Veuillez entrer une ville valide";
    return;
  },

meteo(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(ville.value)}&lang=fr`)
  //encodeURIComponent : pour éviter les erreurs avec des caractères spéciaux
);

