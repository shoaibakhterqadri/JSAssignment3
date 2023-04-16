fetch("data.json")
.then(response => response.json())
.then(data => {
  window.movies = data;
})
.catch(error => {
  console.error("Error fetching movie data:", error);
});

function getRecommendations() {
const genre = document.getElementById("genre").value;
const releaseYear = document.getElementById("releaseYear").value;
const filteredMovies = window.movies.filter(movie => {
  return (
    (!genre || movie.genre === genre) &&
    (!releaseYear || movie.releaseYear === releaseYear)
  );
});
const recommendationsDiv = document.getElementById("recommendations");
recommendationsDiv.innerHTML = "";
if (filteredMovies.length > 0) {
  const ul = document.createElement("ul");
  filteredMovies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = `${movie.title} (${movie.releaseYear}) -`;
    ul.appendChild(li);
  });
  recommendationsDiv.appendChild(ul);
} else {
  const p = document.createElement("p");
  p.textContent = "No recommendations found.";
  recommendationsDiv.appendChild(p);
}
}