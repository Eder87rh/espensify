var namevar = 'Andrew';
var nameVar = 'Mike';
console.log('namevar',nameVar);

let nameLet = 'Eder';
nameLet = 'Jose';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName() {
    var petName = 'hal';
    return petName;
}

const petName = getPetName(petName);
console.log(petName)

//babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch