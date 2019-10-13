'use strict';

function createElement(el, style, text) {
    let newLi = document.createElement(`${el}`);

    newLi.innerHTML = `${text}`;
    
    newLi.setAttribute("style", `${style}`);
    return newLi;
}

function render(fn, id) {
    return id.appendChild(fn);
}

const React = {
    createElement,
    render
  };

const app = React.createElement(
    'div',
    "background-color: red;",
    'Hello',
  );


React.render(app, document.getElementById('app'));