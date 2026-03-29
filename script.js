// Selecting existing DOM elements
let searchMovie = document.querySelector("input");
let addMovie = document.querySelector("#watchlist");
let main = document.querySelector("#main");

// Creating ul once - movies will be appended inside this
let lists = document.createElement("ul");

addMovie.addEventListener("click", () => {
  let value = searchMovie.value.trim();

  // Guard - stop if input is empty
  if (!value) return;

  // Duplicate check - compare against existing span texts
  // using span specifically because li.textContent includes button text too
  let existingMovie = lists.querySelectorAll("span");
  for (let movie of existingMovie) {
    if (movie.textContent.toLowerCase() === value.toLowerCase()) {
      alert("Movie already in watchlist!");
      return;
    }
  }

  // Creating movie card elements
  let movie = document.createElement("li");
  let movieName = document.createElement("span");
  let buttons = document.createElement("div");
  let watchedBtn = document.createElement("button");
  let removeBtn = document.createElement("button");

  // Assigning classes for styling
  movie.className = "movie";
  buttons.className = "btns";
  watchedBtn.className = "btn";
  removeBtn.className = "btn";

  // Setting content
  movieName.textContent = value;
  watchedBtn.textContent = "Watched";
  removeBtn.textContent = "Remove";

  // Building the card structure
  // li -> span + div.btns -> watchedBtn + removeBtn
  movie.appendChild(movieName);
  movie.appendChild(buttons);
  buttons.appendChild(watchedBtn);
  buttons.appendChild(removeBtn);
  lists.appendChild(movie);
  main.appendChild(lists);

  // Toggle watches style on movie name
  watchedBtn.addEventListener("click", () => {
    movieName.classList.toggle("watched");
  });

  // Remove movie card from list
  removeBtn.addEventListener("click", () => {
    lists.removeChild(movie);
  });

  // Clear input after adding
  searchMovie.value = "";
});
