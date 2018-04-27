console.log('App.js is running');

//JSX - JavaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSumbit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = (e) => {
    app.options.length = 0;
    renderApp();
}

const onMakeDesicion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
}

const appRoot = document.getElementById('app');


const renderApp =() => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p> { app.subtitle } </p> }
            <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
            <button disabled={app.options.length===0} onClick={onMakeDesicion}> What should i do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option,index) => <li key={index}> option: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSumbit}>
                <input type="text" name="option" />
                <button >Add Option</button>
            </form>
        </div>
    )
    
    ReactDOM.render(template,appRoot)
}

renderApp();
