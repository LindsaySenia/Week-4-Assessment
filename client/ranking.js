const songRatings = document.querySelector('#song-ratings');
const form = document.querySelector('form');

const baseURL = `http://localhost:4000/api/songs`;

const songsCallback = ({ data: songs }) => displaySongs(songs)
const errCallback = err => console.log(err.response.data)

const getAllSongs = () => axios.get(baseURL).then(songsCallback).catch(errCallback)
const createSong = body => axios.post(baseURL, body).then(songsCallback).catch(errCallback)
const deleteSong = id => axios.delete(`${baseURL}/${id}`).then(songsCallback).catch(errCallback)
const updateSong = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(songsCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()

    let title = document.querySelector('#title')
    let artist = document.querySelector('#artist')
    let rating = document.querySelector('input[name="ratings"]:checked')
 

    let bodyObj = {
        title: title.value,
        artist: artist.value,
        rating: rating.value
    }
    
    createSong(bodyObj)

    title.value = ''
    artist.value = ''
    rating.checked = false
}

function createSongCard(song) {
    const songCard = document.createElement('div')
    songCard.classList.add('song-card')

    songCard.innerHTML = 
        `<p class='song-title'>${song.title}</p>
        <p class='artist-name'>${song.artist}</p>
        <div class='button-container'>
            <button onclick="updateSong(${song.id}, 'minus')">-</button>
            <p class='song-rating'>${song.rating} out of 10</p>
            <button onclick="updateSong(${song.id}, 'plus')">+</button>
        </div>
        <button onclick="deleteSong(${song.id})">delete</button>
        `
        songRatings.appendChild(songCard)

}

function displaySongs(arr) {
    songRatings.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllSongs()