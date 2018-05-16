// ## Array Cardio Day 2
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const hasAdult = people.some((p, i) => (new Date().getFullYear() - p.year) > 18);
console.log(hasAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every((p, i) => new Date().getFullYear() - p.year > 18);
console.log(allAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const targetComment = comments.find((c, i) => c.id === 823423);
console.log(targetComment);

// Array.prototype.findIndex()
// Find the comment with this ID
const targetCommentIndex = comments.findIndex((c, i) => c.id === 823423);
console.log(targetCommentIndex);

// delete the comment with the ID of 823423
const resultComments = [
  ...comments.slice(0, targetCommentIndex),
  ...comments.slice(targetCommentIndex + 1)
];
console.log(resultComments);