"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersanalFilms: function () {
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
  },
  showMeDB: function (hidden) {
    if (!hidden) {
      // в if приходит да, в else нет
      return console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      // personalMovieDB.genres[i - 1] = prompt(
      //   `Ваш любимый жанр под номером ${i}`
      // );
      const z = prompt(`Ваш любимый жанр под номером ${i}`);
      console.log(z);
      if (z != null && z != "") {
        personalMovieDB.genres[i - 1] = z;
      } else {
        i--;
      }
    }
  },
  consoleResulte: function () {
    personalMovieDB.genres.forEach((genre, index) =>
      console.log(`Любимый жанр ${index + 1} - это ${genre}`)
    );
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
};

personalMovieDB.start();
personalMovieDB.showMeDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.consoleResulte();
