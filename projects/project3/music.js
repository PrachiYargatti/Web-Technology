const container = document.getElementById("artistsContainer");
const songsList = document.getElementById("songsList");
const songsTitle = document.getElementById("songsTitle");
const searchInput = document.getElementById("searchInput");

const BASE_URL = "http://localhost:3000";

// LOAD ALL ARTISTS
function loadArtists() {
  fetch(`${BASE_URL}/artists`)
    .then(res => res.json())
    .then(data => displayArtists(data));
}

// DISPLAY ARTISTS
function displayArtists(artists) {
  container.innerHTML = "";

  artists.forEach((artist) => {
    const li = document.createElement("li");

    li.className = "col-6 col-md-4 col-lg-3 artist-card";

    li.innerHTML = `
      <img src="${artist.src}" class="artist-img">
      <h4 class="artist-name">${artist.name}</h4>
    `;

    li.addEventListener("click", () => {
      loadSongs(artist.id);
    });

    container.appendChild(li);
  });
}

// LOAD SONGS
function loadSongs(id) {
  fetch(`${BASE_URL}/artists/${id}`)
    .then(res => res.json())
    .then(artist => {

      songsTitle.textContent = "Songs by " + artist.name;
      songsList.innerHTML = "";

      artist.songs.forEach(song => {
        const li = document.createElement("li");

        li.textContent = song;

        // track play
        li.addEventListener("click", () => {
          fetch(`${BASE_URL}/play`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ song })
          });
        });

        songsList.appendChild(li);
      });

    });
}

// SEARCH
searchInput.addEventListener("input", () => {
  const query = searchInput.value;

  fetch(`${BASE_URL}/search?q=${query}`)
    .then(res => res.json())
    .then(data => displayArtists(data));
});

loadArtists();