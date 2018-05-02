//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: ['one','two','four']
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options : []
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }
    render(){
        const title ='Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Actions 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Actions extends React.Component {
    render(){
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What Should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
                { this.props.options.map((option,index) => <Option option={option} key={index}/>) }
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>{this.props.option}</div>
        )
    }
}

class AddOption extends React.Component{
    handleSubmit(e){
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()

        if(option){
            alert(option)
           /*  this.options.push(value)
            e.target.elements.option.value = '' */
        }
    }



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="option" type="text"/>
                    <button >AddOption</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))