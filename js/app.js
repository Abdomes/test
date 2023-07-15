const numberOfFlims = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
   count: numberOfFlims,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
