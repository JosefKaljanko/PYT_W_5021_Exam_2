
// const moviesList = document.getElementById("movies")

fetch("https://fer-api.coderslab.pl/v1/be-exam/movies")
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
    data.forEach(movie => {
        const moviesList = document.getElementById("movies")
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        h2.innerText = movie.title;
        h3.innerText = movie.year;
        li.appendChild(h2);
        li.appendChild(h3);
        moviesList.appendChild(li);
    })
    })
    .catch(function(err) {
        console.log("ERROR", err);
    })
