const songRatings = document.querySelector('#song-ratings');
const form = document.querySelector('form');

const baseURL = `http://localhost:4000/api/songs`;

const songsCallback = ({ data: songs }) => displaySongs(songs)