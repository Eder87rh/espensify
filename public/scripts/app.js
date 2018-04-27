'use strict';

var visible = false;

var toggleFunction = function toggleFunction() {
    visible = !visible;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visible'
        ),
        React.createElement(
            'button',
            { onClick: toggleFunction },
            visible ? 'hide' : 'show'
        ),
        visible && React.createElement(
            'p',
            null,
            'showing details'
        )
    );

    var app = document.getElementById('app');
    ReactDOM.render(jsx, app);
};

render();
