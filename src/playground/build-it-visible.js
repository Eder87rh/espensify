
let visible = false

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

render();

