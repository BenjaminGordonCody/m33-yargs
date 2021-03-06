# m33-yargs
- This project was undertaken as part of a Code nation bootcamp# m33-yargs
- We were asked to create a program that took in information about multiple films on the command line, and then transformed this information into an array of film-objects, each having details of one film. 
- Users can submit details of one film as follows:
  - `"add" --title="matrix" --actor="keanu" --genre="sci-fi"`
- multiple films can be added at once by labelling the attributes with a digit:
  - `"addMany" --title1="Legally Blonde" --genre1="self-help" --date1="timeless" --title2="Dirty Dancing" director2="Emile Ardolino" genre2="activism"`
- All attributes are optional. Users can choose from title, actor, genre, date and director.

## Things I'm happy with
- I think the constructor element for the Movie class is elegant:
   ```  
  constructor(args) {
    const possAttributes = ["title", "actor", "date", "genre", "director"];
    possAttributes.forEach((element) => {
      this[element] = args[element] ? args[element] : "unspecified";
    });
    ```

## Choices that could be different
- I set the maximum number of films that could be entered as 9, because I was too lazy to explain numbers with multiple digits to the app. 
- If I foresaw a situation where a user needed to imput more than 9 films, I would refactor the code so the for-loop that searches through the args for digits started with the highest number and then worked downwards.
  - ie, the app would find and remove all the arguments that referenced film 119 before it started searching for 19, 11, 9 or 1.