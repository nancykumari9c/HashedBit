function createDiv(width, height, text) {
    var addNewDiv = document.createElement('div');
    addNewDiv.style.width = width + 'px';
    addNewDiv.style.height = height + 'px';
    addNewDiv.style.color="beige"
    addNewDiv.style.backgroundColor="lightcoral"
    addNewDiv.textContent = text;

    // Appending the new div to the #container div
    document.getElementById('container').appendChild(addNewDiv);
  }
  createDiv(200, 100, 'Hello, World!');