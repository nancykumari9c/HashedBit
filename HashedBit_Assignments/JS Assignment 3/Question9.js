//9. Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

console.log(countWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit')); // Output: 8

