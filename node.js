// import './style.css';

function hideMenu(element) {
  element.setAttribute('class', 'drops hidden');
}

function showMenu(event) {
  const { target } = event;
  if (target.className === 'dropper') {
    const childs = Array.from(target.childNodes);
    childs.forEach((element) => {
      if (element.className === 'drops hidden') {
        element.classList.remove('hidden');
        element.parentNode.addEventListener('mouseleave', () => {
          hideMenu(element); // pass the function by reference!
        });
      }
    });
  }
}
const createDropDownMenu = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.addEventListener('mouseover', showMenu);
};

module.exports = { createDropDownMenu };
