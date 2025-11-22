//const { createElement } = require("react");

const API_KEY = "266dd225eb1e45aabca125802252609";
//let ville = "Miami";
var ville = document.getElementById("texte_ville");
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


async function forecast(url) {
    info.textContent = "Chargement...";

    try {
        const firstreponse = await fetch(url);
        const data = await firstreponse.json();
        console.log(data);
        affiche_Météo(data);
        affiche_Localisation(data);
        //affiche_Alert(data);
        //const { icon, text } = data.current.condition;
        //const { feelslike_c, humidity, last_updated, precip_mm, temp_c, uv, vis_km, wind_dir, wind_kph } = data.current;
        //const { name, country, region, localtime, lon, lat, tz_id } = data.location;
        //const { forecastday } = data.forecast;
        info.textContent = ""; // Réinitialiser le message
    } catch (error) {
        console.log("Erreur", error);
    }

}

function affiche_Météo(data) {

    const { icon, text } = data.current.condition;
    const { feelslike_c, humidity, last_updated, precip_mm, temp_c, uv, vis_km, wind_dir, wind_kph } = data.current;
    //console.log(data);
    temp.textContent = temp_c + " °C";
    desc.textContent = text;
    img.src = icon;
    img.alt = "Icône météo :" + text;
    lst.textContent = last_updated;
    rsc.textContent = feelslike_c + " °C";
    hmd.textContent = humidity + " %";
    prcpm.textContent = precip_mm + " mm";
    u_v.textContent = uv
    vskm.textContent = vis_km + " Km";
    //dir_vent = wind_dir;
    //vis_vent = wind_kph + "Km/h";
}

function affiche_Localisation(data) {
    const { name, country, region, localtime, lon, lat, tz_id } = data.location;
    //console.log(data);
    afficheville.textContent = name + ", " + region + ", " + country;
    h.textContent = localtime;
    lo.textContent = lon + "°";
    la.textContent = lat + "°";
    //position.textContent = tz_id;


}
/*
function affiche_Alert(data) {
    //const alert = data.alerts;
    if (data.alerts && data.alerts.alert.length > 0) {
        const { alert } = data.alerts;
        //let nom ="";

        alert.forEach(a => {
            /*let container_alert = createElement("div");
            container_alert.forEach(a => {
                ["event", "zones", "dates", "desc", "instructions"].forEach(a => {
                    const p = document.createElement("p")

                })*/

                /*const div = createElement(div);
                div.forEach(a =>{
                    ["event", "zones", "dates", "desc", "instructions"].forEach(a=>{
    
                    })
                })*/
                //document.getElementById("ev").textContent = a.event;
                //console.log(a.event);
                /*a.zones;
                a.dates;
                a.desc;
                a.instructions;//

            });
        }else {
            document.getElementById("ev").textContent = "Aucune alerte météo";
        }
}
*/

    btn.addEventListener("click", function () {
        if (!ville.value.trim())/*vérifie si le champ est vide après suppression des espaces*/ {
            info.textContent = "Veuillez entrer une ville valide";
            return;
        }

        forecast(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${ville.value}&days=7&aqi=yes&alerts=yes&lang=fr`);
    })


























