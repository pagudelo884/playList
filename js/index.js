const requestURL = `../json/playList.json`;

    async function fetchPlayListJson(){
        const response = await fetch(requestURL);
        const playLists = await response.json();  
        return playLists; 
    }

    fetchPlayListJson().then(playLists =>{
        for(let index = 0; index < playLists.playList.length; index++){

    const PlayListSection = document.getElementById('playListSection');

        let id = playLists.playList[index].id;
        let cover = playLists.playList[index].cover;
        let song = playLists.playList[index].song;
        let genres = playLists.playList[index].genres;
        let artist = playLists.playList[index].artist;
        let album = playLists.playList[index].album;

    // console.log(playLists.playList[index]);

        playListSection.innerHTML  +=`
        <div class="card" style="width: 18rem;">
            <img src="${cover}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title text-light">${id}.${artist}</h3>
                    <h5 class="card-title text-light">Genres: ${genres}</h5>
                    <h5 class="card-title text-light">song: ${song}</h5>
                </div>
        </div>`
    };

})