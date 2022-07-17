/* Javascript */

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p1 = document.createElement('p');
p1.classList.add('p1');
p1.textContent = "Hey I'm red!";
p1.style.color = 'red';

container.appendChild(p1);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

const divBox = document.createElement('div');
divBox.classList.add('divBox');
divBox.style.borderColor = 'black';
divBox.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div!";

divBox.appendChild(h1);

const p2 = document.createElement('p');
p2.classList.add('p2');
p2.textContent = "ME TOO!";

divBox.appendChild(p2);

container.appendChild(divBox);