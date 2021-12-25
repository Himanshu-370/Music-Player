let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Sorry - Justin Bieber",
    filepath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Peaches - Justin Bieber",
    filepath: "songs/2.mp3",
    coverPath: "covers/2.png",
  },
  {
    songName: "10,000 Hours - Justin Bieber",
    filepath: "songs/3.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Kun Faya Kun - A.R Rahman",
    filepath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Closer - Chainsmokers",
    filepath: "songs/5.mp3",
    coverPath: "covers/10.png",
  },
  {
    songName: "What Do You Mean ? - Justin Bieber",
    filepath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "O Rangrez - Javed Bashir",
    filepath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Hotline Bling - Drake",
    filepath: "songs/8.mp3",
    coverPath: "covers/11.jpg",
  },
  {
    songName: "I Don't Care - Ed Sheeran & JB",
    filepath: "songs/9.mp3",
    coverPath: "covers/12.jpg",
  },
  {
    songName: "I like me Better - Lauv",
    filepath: "songs/10.mp3",
    coverPath: "covers/13.jpg",
  },
  {
    songName: "Lean On - DJ Snake",
    filepath: "songs/11.mp3",
    coverPath: "covers/14.jpg",
  },
  {
    songName: "PillowTalk - Zayn Malik",
    filepath: "songs/12.mp3",
    coverPath: "covers/15.jpg",
  },
  {
    songName: "Uptown Funk - Bruno Mars",
    filepath: "songs/13.mp3",
    coverPath: "covers/16.jpg",
  },
];

// --------To change songname and cover image----------

songItems.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// ---------Play Pause Button Function----------

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// ---------Progress Bar Function----------

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    myProgressBar.value * (audioElement.duration / 100);
});

// ---------Individual song play Function----------

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (Element) => {
      Element.classList.remove("fa-pause-circle");
      Element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (Element) => {
    Element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

// ---------Next Button Function----------

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 12) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

// ---------Previous Button Function----------

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
