const songs = {

};
let globalId = 1

module.exports = {
    getSongs: (req, res) => res.status(200).send(songs),
    deleteSong: (req, res) => {
        let index = songs.findIndex(song => song.id === +req.params.id);
        songs.splice(index, 1);
        res.status(200).send(songs);
    },
    createSong: (req, res) => {
        let { title, artist, rating } = req.body;
        let newSong = {
            id: globalId,
            title,
            artist,
            rating
        };
        songs.push(newSong);
        res.status(200).send(songs);
        globalId++;
    },
    updateSong: (req, res) => {
        let { id } = req.params;
        let { type } = req.body;
        let index = songs.findIndex(song => +song.id === +id)

        if (songs[index].rating === 10 && type === 'plus') {
            res.status(400).send('10 is the highest rating')
        } else if (songs[index].rating === 1 && type === 'minus') {
            res.status(400).send('1 is the lowest rating')
        } else if (type === 'plus') {
            songs[index].rating++
            res.status(200).send(songs)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(songs)
        } else {
            res.sendStatus(400)
        }
    }
}