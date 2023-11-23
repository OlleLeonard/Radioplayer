const parentElement = document.getElementById("channels");

async function fetchJson(){
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json")
    const data = await response.json()

console.log(data)

    data.channels.forEach((radiokanal) => {
        console.log(radiokanal);
        const sound = document.createElement("div");
        sound.className = "styling";
        sound.innerHTML = `<img src="${radiokanal.image}"/>
        <div>
        <h2>${radiokanal.name}</h2>
        <audio controls>
        <source src= "${radiokanal.liveaudio.url}" type="audio/mpeg" />
        </audio>
        </div>`
        sound.style.backgroundColor = `#${radiokanal.color}`;
        parentElement.appendChild(sound);
});

};

fetchJson()