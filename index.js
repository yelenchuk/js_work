"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("ok");
    } else {
      console.log("err");
      i--;
    }
  }
}
//rememberMyFilms();

function detectPersanalFilms() {
  switch (true) {
    case personalMovieDB.count <= 10:
      alert("Просмотрено довольно мало фильмов");
      break;
    case personalMovieDB.count <= 10 && personalMovieDB.count > 30:
      alert("Вы классический зритель");
      break;
    case personalMovieDB.count >= 30:
      alert("Вы киноман");
      break;
    default:
      alert("Произошла ошибка");
      break;
  }
}
//detectPersanalFilms();

function showMeDB() {
  if (personalMovieDB.privat === false) {
    return console.log(personalMovieDB);
  }
}
showMeDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
