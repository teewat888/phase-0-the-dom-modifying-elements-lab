// Write your code here!
const main = document.querySelector('main');
main.remove();
const newHeader = document.createElement('H1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = '"Tee is the champion"';
document.body.appendChild(newHeader);