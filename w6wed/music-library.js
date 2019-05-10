function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
  this.addPlaylist = function(newPlaylist) {
    this.playlist.push(newPlaylist);
  }
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.addTrack = function(newTracks) {
    this.tracks = [...this.tracks, ...newTracks];
  }
  this.overallLength = function() {
    return this.tracks.map(track => track.length).reduce((acc, cur) => acc + cur);
  }
  this.overallRating = function() {
    const allRatings = this.tracks.map(track => track.rating).reduce((acc, cur) => acc + cur);
    return (allRatings / this.tracks.length).toFixed(2);
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const library1 = new Library('test', 'tim');
const playlist1 = new Playlist('fun list');
const track1 = new Track('best', 5, 4.02);
const track2 = new Track('best', 2, 4.00);
const track3 = new Track('best', 1, 3.00);


playlist1.addTrack([track1, track2, track3]);
library1.addPlaylist(playlist1);
console.log(library1);
console.log(playlist1);
console.log(playlist1.overallLength());
console.log(playlist1.overallRating());
