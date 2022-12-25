const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchAPI  = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const Movie = document.querySelector(".movie-container")

const getMovies = async (URL)=>{
    const response = await fetch(URL);
    const data = await response.json();
    showMovies(data.results)
}
const showMovies = (data)=>{
    Movie.innerHTML = "";
    data.forEach((item)=>{
        const movieBox = document.createElement('div')
        movieBox.classList.add('movie-box');
        movieBox.innerHTML = 
        `<img src="${imgPath+item.poster_path}" alt="" id="movie-image">
        <div class="overlay">
            <div class="title">
                <h3 id="movie-title">${item.title}</h3>
                <span id="ratings">${item.vote_average}</span>
            </div>
            <h4>overview</h4>
            <p id="movie-overview">${item.overview}</p>
        </div>`
        Movie.append(movieBox);
    })
}

// for searching the movies

search.addEventListener('input',(e)=>{
    if(e.target.value!==""){
        getMovies(searchAPI + e.target.value)
    }else{
        getMovies(URL)
    };
})
getMovies(URL)