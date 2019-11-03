
/**
 * take the container div and place h1 with hello world
 */

 const container = document.getElementById('container');

 const h1 = document.createElement('h1')
 h1.innerText = 'hello world with JS';

 container.appendChild(h1);

 