let songs = [
    {
        name: "Yaad Me Zinda",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403038/Yaad-Me-Zinda_yoj0sm.mp3",
        img: "./song-img/Yaad-Me-Zinda.webp",
        singer: "OG Bodhi Tree Group",
    },
    {
        name: "Jo Tere Sang",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403026/jo-tere-sang_chkgtv.mp3",
        img: "./song-img/jo-tere-sang.webp",
        singer: "Mustafa Zahid",
    },
    {
        name: "Mann Mera",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403037/mann-mera_fiixl8.mp3",
        img: "./song-img/mann-mera.webp",
        singer: "Gajendra Varma",
    },
    {
        name: "Dhai Liter Dudh",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403004/Dhai-liter-dudh-audio-edit_bq9wex.mp3",
        img: "./song-img/dhai-liter-dudh.webp",
        singer: "Pawan Pilania",
    },
    {
        name: "Tu Hai Kahan",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403038/Tu-hai-Kahan_vwp6e4.mp3",
        img: "./song-img/tu-hai-kahan.webp",
        singer: "AUR",
    },
    {
        name: "Bhajan Jamming",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403047/Bhajan-Jamming_rnkz6l.mp3",
        img: "./song-img/bhajan-jamming.webp",
        singer: "Backstage Sibiling",
    },
    {
        name: "Aaoge Tum Kabhi",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403017/Aaoge-Tum-Kabhi_pudsga.mp3",
        img: "./song-img/Aaoge-tum-kabhi.avif",
        singer: "The Local Train",
    },
    {
        name: "Pyaar Deewana Hota Hai",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403026/Pyaar-deewana-hota-hai_aml4qa.mp3",
        img: "./song-img/Pyaar-deewana-hota-hai.avif",
        singer: "Atif Aslam",
    },
    {
        name: "Makhna",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403011/Makhna_nguj2n.mp3",
        img: "./song-img/Makhna.avif",
        singer: "Asees Kaur",
    },
    {
        name: "Abhi To Party Shuru Hui Hai",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403010/Abhi-to-party-shuru-hui-h_csuinc.mp3",
        img: "./song-img/abhi-to-party-shuru-hui-h.avif",
        singer: "Badshah"
    },
    {
        name: "Billo Rani",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403017/Billo-rani_pyl7if.mp3",
        img: "./song-img/Billo-rani.avif",
        singer: "Pritam"
    },
    {
        name: "Sau Tarah Ke",
        path: "https://res.cloudinary.com/dqufal6ec/video/upload/v1771403029/Sau-tarah-ke_mazmqp.mp3",
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
