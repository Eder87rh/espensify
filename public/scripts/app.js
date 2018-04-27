'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSumbit = function onFormSumbit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll(e) {
    app.options.length = 0;
    renderApp();
};

var onMakeDesicion = function onMakeDesicion() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            ' ',
            app.subtitle,
            ' '
        ),
        React.createElement(
            'p',
            null,
            ' ',
            app.options.length > 0 ? 'Here are your options' : 'No options',
            ' '
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDesicion },
            ' What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    ' option: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSumbit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
