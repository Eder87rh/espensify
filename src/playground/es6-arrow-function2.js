const add = (a,b ) =>{
    //console.log(arguments)
    return a + b ;
}

console.log(add(55,1,1001));

const user = {
    'name' :'Andrew',
    cities:['philadelphia', 'NY','LZC'],
    printPlacesLived: function(){
        this.cities.forEach((city) => {
            console.log(this.name + 'has lived in ' + city)
        })
    }
}

user.printPlacesLived();