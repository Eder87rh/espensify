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

const user = {
    name: 'Andrew',
    age:18,
    location:'Morelia'
}

function getLocation(loc) {
    if(loc){
        return <p>Location:{loc}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonimous' }</h1>
        { user.age >= 18 && <p>Age: { user.age } </p> }
        { getLocation(user.location) }
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);