console.log('App.js is running');

//JSX - JavaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{ app.title }</h1>
        { app.subtitle && <p> { app.subtitle } </p> }
        <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

let count = 0;
const addOne = () => {
    console.log('addOne')
}
const minusOne = () => {
    console.log('minusOne')
}
const reset = () => {
    console.log('reset')
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} >+1</button>
        <button onClick={minusOne}> -1</button>
        <button onClick={reset}>reset</button>
    </div>
);
//Challenge
//Make button "-1" setup minusOne function and register - log "minusOne"
//Make reset button "reset" - setup reset function - log "reset"



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);