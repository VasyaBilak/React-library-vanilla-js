'use strict';

function createElement(el, style, ...text) {
    let result = document.createElement(`${el}`);

    // let text = arr.forEach(function(element) {
    //   return element;
    // });

    result.innerHTML = `${text}`;

    let styleValue = JSON.stringify(style.style)
                      .replace('{', '')
                      .replace('}', '')
                      .replace('"', '')
                      .replace('"', '')
                      .replace('"', '')
                      .replace('"', '');

    let regex = /[A-Z]/g;
    let index = styleValue.match(regex);
    index = styleValue.indexOf(index);

    styleValue = styleValue.slice(0, index) + '-' + styleValue.slice(index, styleValue.length);

    result.setAttribute("style", `${styleValue}`);
    return result;
}

function render(fn, id) {
    return id.appendChild(fn);
}

const React = {
    createElement,
    render
  };

// const app = React.createElement(
//     'div',
//     "background-color: red;",
//     'Hello',
//   );

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  // [
  //   React.createElement('span', undefined, 'Hello world'),
  //   React.createElement('br'),
  //   'This is just a text node',
  //   React.createElement('div', { textContent: 'Text content' }),
  // ],
);

React.render(app, document.getElementById('app'));