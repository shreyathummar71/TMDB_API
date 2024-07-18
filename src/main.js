//On pageload calls the fetch

document.addEventListener("DOMContentLoaded", async () => {
  const apikey = "fddc45029159988c8c3aca4c9d7c477e";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;

  //Fetching Movies data
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network issue, ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    fetchData(data.results);
  } catch (error) {
    console.log("Fetch Error", error);
  }
});

const fetchData = (movies) => {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";
  moviesContainer.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-x-4",
    "gap-y-4",
    "px-2",
    "py-10",
    "mx-auto",
    "mt-8",
    "mb-8",
    "md:ml-10",
    "md:mr-10",
    "justify-items-center",
    "items-center"
  );
  movies.forEach((movie) => {
    const title = movie.title;
    const thumbNail = movie.poster_path;
    const overview = movie.overview;
    const card = document.createElement("div");
    card.classList.add(
      "max-w-md",
      "rounded-lg",
      "overflow-hidden",
      "shadow-lg",
      "m-2",
      "h-auto",
      "w-full"
    );
    card.innerHTML = `
    <img src= "${`https://image.tmdb.org/t/p/w500${thumbNail}`}" alt="${title}" class="w-full h-auto object-cover">
    <div class="px-6 py-4 h-80 w-full">
     <div class="font-bold text-xl mb-2">${title}</div>
    <p class="text-gray-700 text-base">${overview}</p>
    
    </div>
   `;

  moviesContainer.appendChild(card);
  });
};



// const API_KEY="api_key=7d7770ef343d65dd472d4fcc1705245c";
// const movieURL="https://api.themoviedb.org/3/discover/movie?";
// const BASE_URL=movieURL+API_KEY;


/*async function getMovies(url)
    {
        fetch(BASE_URL)
        .then((response) => {
            if(!response.ok) throw new Error('Something Went Wrong');
            return response.json();
        })
        .then(data => {
            console.log(data);
            const movies = data.results;
            console.log("movies :",movies);
            for (let i = 0; i < movies.length; i++) 
            {
                console.log("Title: " + movies[i].title);
            }
            })
            
    .catch(error => console.error('Error:', error));
    }
console.log("get movies :" ,getMovies(BASE_URL)) ;






/*function searchMovies() {
  
  //const searchInput = document.getElementById('searchInput');
//const moviesGrid = document.getElementById('MoviesGrid');
  const query = searchInput.value;
  fetch(BASE_URL)
  .then((response) => {
      if(!response.ok) throw new Error('Something Went Wrong');
      return response.json();
  })
  .then(data => {
      console.log(data);
      const movies = data.results;
      console.log("movies :",movies);
      movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
          <h2>${movie.Title}</h2>
          <img src="${movie.poster_path}" alt="${movie.Title}">
          <p>${movie.release_date}</p>
        `;
        moviesGrid.appendChild(movieDiv);
      });
    });
}

console.log("earchMovies :",searchMovies());
/*function searchMoviebyName()
{
  const movieObject=getMovies(BASE_URL);
  document.getElementById('searchMovie').addEventListener('click',function()
  {
    //localStorage.setItem('movieObject',JSON.stringify(movieObject));
    console.log(movieObject);
  }
);
}

// console.log("searchMoviebyName :",searchMoviebyName());*/

// ####################################

document.getElementById('searchMovie').addEventListener('click', async() => {
  let found = 0;
  const apikey = "fddc45029159988c8c3aca4c9d7c477e";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;

  //Fetching Movies data
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network issue, ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    searchData(data.results);
  } catch (error) {
    console.log("Fetch Error", error);
  }
});

const searchData = (movies) => {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";
  moviesContainer.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-x-4",
    "gap-y-4",
    "px-2",
    "py-10",
    "mx-auto",
    "mt-8",
    "mb-8",
    "md:ml-10",
    "md:mr-10",
    "justify-items-center",
    "items-center"
  );
  movies.forEach((movie) => {
    const title = movie.title;
    const thumbNail = movie.poster_path;
    const overview = movie.overview;
    const card = document.createElement("div");
    card.classList.add(
      "max-w-md",
      "rounded-lg",
      "overflow-hidden",
      "shadow-lg",
      "m-2",
      "h-auto",
      "w-full"
    );
    card.innerHTML = `
    <img src= "${`https://image.tmdb.org/t/p/w500${thumbNail}`}" alt="${title}" class="w-full h-auto object-cover">
    <div class="px-6 py-4 h-80 w-full">
     <div class="font-bold text-xl mb-2">${title}</div>
    <p class="text-gray-700 text-base">${overview}</p>
    
    </div>
   `;


  var element = document.getElementById('searchInput');
  if(element) {
    var text = element.value;
    console.log(text);
  } else {
      console.log('Element not found');
  }
    let stringTitle = String(title).toLowerCase();
    if( stringTitle.includes(text.toLowerCase()))
    {
      moviesContainer.appendChild(card);
    }
  });
};