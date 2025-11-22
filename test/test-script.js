/*La fonction getCoordinates demande a l'user s'il veut qu'on utilise sa position pour 
afficher automatiquement les donnée méteo sans recherche  prealable de ville 
Elle retourne une promese d'objet qui contiennent la longitude et la latitude */
function getCoordinates() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject("Erreur de géolocalisation : " + error.message);
                }
            );
        } else {
            reject("Géolocalisation non disponible");
        }
    });
}
/*
la fonction reverseGeoCoding() utilise la promesse de la fonction getCoordinatite() 
(longitude et latidute) puis effectue une requete api a l'api de OSM , cet appel renvoie une un objet et c'est la ville qui 
nous interesser donc on vas faire directement appel a la fonction main() et avec parametre la ville acceuilli
L'interet de la fonction reverseCoding() est que les coordonner latitude et longitude de la fonction getCoordonate()
ne sont pas directement utilisable dans le parametre q de l'api meteo donc on doit changer les 
coordonner en ville avant de faire la requete 
*/
async function reverseGeoCoding(){
    try{
        const coords = await getCoordinates();
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
        const response = await fetch(url);
        const data = await response.json(); 

        const { country, state, suburb } = data.address;
        await main(state);
        //return {country, state, suburb};
    }catch(err){  
        console.error(err);
        return null;
    }
    
}
/*Cette fonction afficheInfo() 
recupere les donnée de l'appel API et les afiche c'est ici qu'on affiche toutes les données   */
function afficheInfo(data){
    
    let afficheville = document.getElementById("ville_pays_region");
    let temp = document.getElementById("temp");
    let desc = document.getElementById("description");
    let img = document.getElementById("img");
    let lst = document.getElementById("lst");
    let rsc = document.getElementById("rsc");
    let hmd = document.getElementById("hmd");
    let prcpm = document.getElementById("prcpm");
    let u_v = document.getElementById("u_v");
    let vskm = document.getElementById("vskm");
    let h = document.getElementById("h");
    let lo = document.getElementById("lo");
    let la = document.getElementById("la");

    const { icon, text } = data.current.condition;
    const { feelslike_c, humidity, last_updated, precip_mm, temp_c, uv, vis_km } = data.current;
    const { name, country, region, localtime, lon, lat } = data.location;

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
    
}
/*La fonction main() prend en parametre la ville puis fait une requete a l'APi meteo  */
async function main(city){
    let info = document.getElementById("inf");
    const API_KEY = "266dd225eb1e45aabca125802252609";
    if(city){
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=fr`;
        info.textContent = "Chargement...";
        response = await fetch(url);
        data = await response.json();
        afficheInfo(data);
        info.textContent = ""; 
    }
    /*
    const cityInfo = await reverseGeoCoding();
    if(cityInfo ){
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityInfo.state}&lang=fr`;
        response = await fetch(url);
        data = await response.json();  
        //afficheInfo(data);
        console.log(data);
    }
   */
}

let ville = document.getElementById("texte_ville");
let btn = document.getElementById("rechercher");

reverseGeoCoding();
btn.addEventListener("click", () => {
    let nom_ville = ville.value;
    main(nom_ville)
});