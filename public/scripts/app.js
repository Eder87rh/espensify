'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.toggleVisible = _this.toggleVisible.bind(_this);
        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(Toggle, [{
        key: 'toggleVisible',
        value: function toggleVisible() {
            this.setState(function (prevState) {
                return {
                    visible: !prevState.visible
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visible'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleVisible },
                    this.state.visible ? 'hide' : 'show'
                ),
                this.state.visible && 'Showing some text'
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app'));

/* let visible = false

const toggleFunction  = () => {
    visible = !visible
    render();
}

const render = () => {
    const jsx =(
        <div>
            <h1>Visible</h1>
            <button onClick = {toggleFunction}>
                { visible ? 'hide' : 'show'}
            </button>
            {visible && (<p>showing details</p>)}
        </div>
    )

    const app = document.getElementById('app')
    ReactDOM.render(jsx,app)
}

render(); */
