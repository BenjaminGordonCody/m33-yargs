const { Movie, movieArr, addMany } = require("./utils");
const yargs = require("yargs");

const app = (args) => {
  if (args.add) {
    const movie = new Movie(args);
    movie.add();
  } else if (args.addMany) {
    addMany(args);
  } else {
    console.log("incorrect command");
  }
  console.log(movieArr);
};

app(yargs.argv);
