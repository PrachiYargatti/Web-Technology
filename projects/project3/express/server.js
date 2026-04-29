const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const artists = [
  {
    id: 1,
    name: "Arijit Singh",
    src: "https://artistbookingcompany.com/wp-content/uploads/2024/03/arjit-singh-680x680.png",
    songs: ["Tum Hi Ho", "Kesariya", "Channa Mereya", "Raabta"]
  },
  {
    id: 2,
    name: "Shreya Ghoshal",
    src: "https://th.bing.com/th?q=Shreya+Ghoshal+Singing",
    songs: ["Teri Ore", "Sun Raha Hai", "Deewani Mastani", "Manwa Laage"]
  },
  {
    id: 3,
    name: "A. R. Rahman",
    src: "https://th.bing.com/th/id/OIP.uEEjSK-5c9_swiCuCY9awQAAAA",
    songs: ["Jai Ho", "Kun Faya Kun", "Dil Se Re", "Roja"]
  },
  {
    id: 4,
    name: "Atif Aslam",
    src: "https://th.bing.com/th/id/OIP.VHxs6KxqQCPpfg9JTx_iaAHaFZ",
    songs: ["Jeene Laga Hoon", "Tera Hone Laga Hoon", "Dil Diyan Gallan", "O Saathi"]
  },
  {
    id: 5,
    name: "Neha Kakkar",
    src: "https://th.bing.com/th?q=Neha+Kakkar+Recent+Pics",
    songs: ["Kala Chashma", "Aankh Marey", "Dilbar", "London Thumakda"]
  },
  {
    id: 6,
    name: "Vishal Mishra",
    src: "https://th.bing.com/th/id/OIP.pKqjKKxO_GnjFr3TPYZTeAHaI5",
    songs: ["Kaise Hua", "Manjha", "Aaj Bhi", "Pehla Pyaar"]
  },
  {
    id: 7,
    name: "Shilpa Rao",
    src: "https://th.bing.com/th/id/OIP.VnjWbPKhvCZWHn2wLHKXtwHaEK",
    songs: ["Ghungroo", "Malang", "Bulleya", "Tose Naina"]
  },
  {
    id: 8,
    name: "Vishal Shekhar",
    src: "https://th.bing.com/th?id=OIP.aIcgRPOOpROc_LA6PRNeQAHaHa",
    songs: ["Desi Girl", "Student of the Year", "Besharam Rang", "Radha"]
  }
];

// MEMORY (user behavior)
let userHistory = [];

// ROUTES

// 1. Get all artists (for homepage)
app.get("/artists", (req, res) => {
  res.json(artists);
});

// 2. Get single artist (with songs)
app.get("/artists/:id", (req, res) => {
  const artist = artists.find(a => a.id == req.params.id);

  if (!artist) {
    return res.status(404).json({ message: "Artist not found" });
  }

  res.json(artist);
});

// 3. Search artist (NEW - makes your app smarter)
app.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const results = artists.filter(a =>
    a.name.toLowerCase().includes(query)
  );

  res.json(results);
});

// 4. Track played song
app.post("/play", (req, res) => {
  const { song } = req.body;

  if (!song) {
    return res.status(400).json({ message: "Song required" });
  }

  userHistory.push(song);

  res.json({
    message: "Tracked",
    history: userHistory
  });
});

// 5. Smart recommendation
app.get("/recommend", (req, res) => {
  if (userHistory.length === 0) {
    return res.json({
      message: "No history",
      recommendations: []
    });
  }

  const lastSong = userHistory[userHistory.length - 1];

  const artist = artists.find(a => a.songs.includes(lastSong));

  let recommendations = [];

  if (artist) {
    recommendations = artist.songs.filter(s => s !== lastSong);
  }

  res.json({
    basedOn: lastSong,
    artist: artist?.name,
    recommendations
  });
});

// SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});