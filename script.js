console.log("welcome ti spotify");

//initialize the Variable

let songIndex = 0;
let audioElement =new Audio('SONG-LIST/Love Me Again- 1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Love Me Again", filePath: "SONG-LIST/Love Me Again- 1.mp3", coverPath: "IMAGES/lovemeagainimage.jpeg"},
    {songName: "KTMBK", filePath: "SONG-LIST/KTMBK - 2.mp3", coverPath: "IMAGES/KTMBKimage.jpeg"},
    {songName: "Shiddat-Title-Track", filePath: "SONG-LIST/Shiddat Title Track - Shiddat 3.mp3", coverPath: "IMAGES/ShiddatTitleTrackimage.jpeg"},
    {songName: "Jab Tak", filePath: "SONG-LIST/Shiddat Title Track - Shiddat 3.mp3", coverPath: "IMAGES/jab-takimage.jpeg"},
    {songName: "Fitoor", filePath: "SONG-LIST/Fitoor - Shamshera 5.mp3", coverPath: "IMAGES/fitoorimage.jpeg"},
    {songName: "Janiye", filePath: "SONG-LIST/Janiye - Chor Nikal Ke Bhaga 5.mp3", coverPath: "IMAGES/janiyeimage.jpeg"},
]


// Update song items with cover images and names
songItems.forEach((Element, i)=>{
    // console.log(Element, i)
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songname")[0].innerText = songs[i].songName
})

//handel play/pause click
masterPlay.addEventListener('click',( )=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play( );
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause( );
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ( )=>{
    //update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ( )=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ( ) =>{
    Array.from( document.getElementsByClassName('song-itemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
    };


// Handle individual song item play click
Array.from(document.getElementsByClassName('song-itemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = i;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});


document.getElementById('previous').addEventListener('click', ( )=>{
    if(songIndex<= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
   
})

document.getElementById('next').addEventListener('click', ( )=>{
    if(songIndex<= 6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    
})



