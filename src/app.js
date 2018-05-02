class IndecisionApp extends React.Component{
    render(){
        const title ='Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options =['one','two','four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Actions/>
                <Options options={options}/>
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
    handlePick(){
        alert('Handle pick')
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll(){
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}>RemoveAll</button>
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