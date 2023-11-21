// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'


// Make a GET request to the API

const parentElement = document.getElementById("channels");

async function fetchJson(){
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json")
    const data = await response.json()

console.log(data)

    data.channels.forEach((radiokanal) => {
        console.log(radiokanal);
        const audioTag = document.createElement("div");
        audioTag.className = "styling";
        audioTag.innerHTML = `<img src="${radiokanal.image}"/>
        <div>
        <h2>${radiokanal.name}</h2>
        <audio controls>
        <source src= "${radiokanal.liveaudio.url}" type="audio/mpeg" />
        </audio>
        </div>`
        audioTag.style.backgroundColor = `#${radiokanal.color}`;
        parentElement.appendChild(audioTag);
});

};

fetchJson()