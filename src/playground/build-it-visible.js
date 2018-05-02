class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.toggleVisible = this.toggleVisible.bind(this)
        this.state = {
            visible:false
        }
    }

    toggleVisible(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render(){
        return (
            <div>
      
                <h1>Visible</h1>
                <button onClick={this.toggleVisible}>{this.state.visible ? 'hide' : 'show'}</button>
                {this.state.visible && 'Showing some text'}
            </div>
        )
    }
}

ReactDOM.render(<Toggle/>, document.getElementById('app'))



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

