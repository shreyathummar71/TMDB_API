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
