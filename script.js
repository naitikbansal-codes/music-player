let songs = [
    {
        name: "Yaad Me Zinda",
        path: "./songs/Yaad-Me-Zinda.mp3",
        img: "./song-img/Yaad-Me-Zinda.webp",
        singer: "OG Bodhi Tree Group",
    },
    {
        name: "Jo Tere Sang",
        path: "./songs/jo-tere-sang.mp3",
        img: "./song-img/jo-tere-sang.webp",
        singer: "Mustafa Zahid",
    },
    {
        name: "Mann Mera",
        path: "./songs/mann-mera.mp3",
        img: "./song-img/mann-mera.webp",
        singer: "Gajendra Varma",
    },
    {
        name: "Dhai Liter Dudh",
        path: "./songs/Dhai-liter-dudh-audio-edit.mp3",
        img: "./song-img/dhai-liter-dudh.webp",
        singer: "Pawan Pilania",
    },
    {
        name: "Tu Hai Kahan",
        path: "./songs/Tu-hai-Kahan.mp3",
        img: "./song-img/tu-hai-kahan.webp",
        singer: "AUR",
    },
    {
        name: "Bhajan Jamming",
        path: "./songs/Bhajan-Jamming.mp3",
        img: "./song-img/bhajan-jamming.webp",
        singer: "Backstage Sibiling",
    },
    {
        name: "Aaoge Tum Kabhi",
        path: "./songs/Aaoge-Tum-Kabhi.mp3",
        img: "./song-img/Aaoge-tum-kabhi.avif",
        singer: "The Local Train",
    },
    {
        name: "Pyaar Deewana Hota Hai",
        path: "./songs/Pyaar-deewana-hota-hai.mp3",
        img: "./song-img/Pyaar-deewana-hota-hai.avif",
        singer: "Atif Aslam",
    },
    {
        name: "Makhna",
        path: "./songs/Makhna.mp3",
        img: "./song-img/Makhna.avif",
        singer: "Asees Kaur",
    },
    {
        name: "Abhi To Party Shuru Hui Hai",
        path: "./songs/Abhi-to-party-shuru-hui-h.mp3",
        img: "./song-img/abhi-to-party-shuru-hui-h.avif",
        singer: "Badshah"
    },
    {
        name: "Billo Rani",
        path: "./songs/Billo-rani.mp3",
        img: "./song-img/Billo-rani.avif",
        singer: "Pritam"
    },
    {
        name: "Sau Tarah Ke",
        path: "./songs/Sau-tarah-ke.mp3",
        img: "./song-img/Sau-tarah-ke.avif",
        singer: "Pritam"
    },

];

let songName = document.querySelector(".song-name");
let songSinger = document.querySelector(".song-singer");
let songImg = document.querySelector(".song-img");
let playBtn = document.querySelector(".play-pause-div");
let previousBtn = document.querySelector(".previous-div");
let nextBtn = document.querySelector(".next-div");
let volumeRange = document.querySelector(".vol-range");
let volumeIcon = document.querySelector(".volume-icon");
let songDuration = document.querySelector(".song-duration");
let musicAnimation = document.querySelector(".music-animation");
let playlistIconDiv = document.querySelector(".playlist-div");
let playlistDiv = document.querySelector(".playlist");
let playlistSong = document.querySelectorAll(".playlist-songs");

let index = 0;
let isPlaying = false;
let playlistAppear = false;
let track = document.createElement("audio");

function loadTrack(index) {
    track.src = songs[index].path;
    songName.textContent = songs[index].name;
    songSinger.textContent = songs[index].singer;
    songImg.style.backgroundImage = `url(${songs[index].img})`;

    setInterval(() => {
        songDuration.max = track.duration;
        songDuration.value = track.currentTime;
    }, 1000);
};

loadTrack(index);

playBtn.addEventListener("click", () => {

    if (isPlaying === false) {
        track.play();
        isPlaying = true;
        playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
        musicAnimation.style.display = "initial";

    }
    else {
        track.pause();
        isPlaying = false;
        playBtn.innerHTML = `<i class="ri-play-line playbtn"></i>`;
        musicAnimation.style.display = "none";
    };

});

track.addEventListener("ended", () => {
    index++;

    if (index > songs.length - 1) index = 0;

    loadTrack(index);
    track.play();
    isPlaying = true;
    musicAnimation.style.display = "initial";
});

nextBtn.addEventListener("click", () => {

    if (index < songs.length - 1) {
        index++;
    }
    else {
        index = 0;
    };

    loadTrack(index);
    track.play();
    playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    isPlaying = true;
    musicAnimation.style.display = "initial";
});

previousBtn.addEventListener("click", () => {

    if (index > 0) {
        index--;
    }
    else {
        index = songs.length - 1;
    };

    loadTrack(index);
    track.play();
    playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    isPlaying = true;
    musicAnimation.style.display = "initial";
});

volumeRange.addEventListener("change", () => {

    track.volume = volumeRange.value / 100;

    if (volumeRange.value / 100 === 0) {
        volumeIcon.innerHTML = `<i class="ri-volume-mute-line volume-img"></i>`;
    }
    else {
        volumeIcon.innerHTML = `<i class="ri-volume-up-line volume-img"></i>`

    };
});

songDuration.addEventListener("change", () => {
    track.currentTime = songDuration.value;
});

playlistIconDiv.addEventListener("click", () => {

    if (!playlistAppear) {
        playlistDiv.style.transform = "translateX(0%)";
        playlistIconDiv.innerHTML = `<i class="ri-close-line" id="playlist"></i>`;
        playlistAppear = true;
    }
    else {
        playlistDiv.style.transform = "translateX(-150%)";
        playlistIconDiv.innerHTML = `<i class="ri-play-list-fill" id="playlist"></i>`;
        playlistAppear = false;
    };
});

playlistDiv.innerHTML = "";

songs.forEach((song, index) => {
    let div = document.createElement('div');
    div.classList.add('playlist-songs');

    let img = document.createElement('img');
    img.src = song.img;

    let div2 = document.createElement('div');
    div2.classList.add('detail-song');

    div2.innerHTML = `<h2>${song.name}</h2>
    <h4>${song.singer}</h4>`;

    div.appendChild(img);
    div.appendChild(div2);
    playlistDiv.appendChild(div);

    div.addEventListener('click', () => {
        loadTrack(index);
        track.play();
        playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
        isPlaying = true;
        musicAnimation.style.display = "initial";
        playlistDiv.style.transform = "translateX(-150%)";
        playlistIconDiv.innerHTML = `<i class="ri-play-list-fill" id="playlist"></i>`;
        playlistAppear = false;

    });
});
