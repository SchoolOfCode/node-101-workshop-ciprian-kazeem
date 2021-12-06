import collection from "./collection.js";
import chalk from "chalk";
// console.log(myCollection)
// 👉 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have.

// If there's only one of the item in your collection, it should log "I have a `name`. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s. Here's what I like about them: `whatILike`".

// For example, the result of calling the `describeItem` function with the first item in our collection would be:
// _"I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"_

// Call your function below where you've defined it, handing in the first item in `myCollection`.

// Now run the file again (using `node index.js`);
function describeItem(item) {
  if (item.count === 1) {
    console.log(
      chalk.bold.bgGray(`I have a ${chalk.cyan(
        item.name
      )}. Here is what I like about it: ${chalk.green(item.whatILike)}.`
      ));
  } else {
    console.log(
      chalk.bold.bgGray(`I have ${chalk.yellow(item.count)} ${chalk.cyan(
        item.name
      )}s. Here is what I like about them: ${chalk.green(item.whatILike)}.`
      ));
  }
}

function describeCollection(array) {
  array.forEach(describeItem);
}
describeCollection(collection);
