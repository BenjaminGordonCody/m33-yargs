const movieArr = [];

class Movie {
  constructor(args) {
    const possAttributes = ["title", "actor", "date", "genre", "director"];
    possAttributes.forEach((element) => {
      this[element] = args[element] ? args[element] : "unspecified";
    });
  }

  add() {
    movieArr.push(this);
  }
}

const addMany = (args) => {
  if (args.entries > 9) {
    console.log("Max input is 9 movies");
  }

  const allMovieKeys = Object.keys(args);
  for (let i = 1; i < args.entries + 1; i++) {
    const movieIAttributes = {};
    allMovieKeys.forEach((element) => {
      if (element.includes(i)) {
        const newKey = element.slice(0, -1); //strip identifying digit
        movieIAttributes[newKey] = args[element];
      }
    });
    const movieI = new Movie(movieIAttributes);
    movieI.add();
  }
};
module.exports = { Movie, movieArr, addMany };
