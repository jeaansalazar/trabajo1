let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]


let imprimir = (arreglo) =>
{
    for(var i = 0; i<arreglo.length;i++){
        document.write( arreglo[i].id + " "+
                        arreglo[i].name+" "+
                        arreglo[i].type+" "+
                        arreglo[i].base_damage+" "+
                        arreglo[i].base_hp+" "+
                        arreglo[i].speed+" <br/>")
    }
}


//imprimir(pokemons);


//1. Ordernar los pokemons por base_damage de menor a mayor.


// document.write("<br/>Ordenar los pokemons por base damage de menor a mayor<br/><br/>")

// pokemons.sort((a,b) => a.base_damage - b.base_damage)

// console.log(pokemons)
// imprimir(pokemons);

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

let sortPokemons = (argument) =>
{
    let validInput = ["type","base_damage","base_hp","speed","name","id"]

    if(validInput.includes(argument)){
        argument === "type" || argument === "name"?
        (pokemons.sort((a,b) => a[argument].localeCompare(b[argument]))) :
        (pokemons.sort((a,b) => a[argument] - b[argument]))

        console.log(pokemons)
        //document.write("<br/>Ordenar los pokemons por argumento: "+argument+"<br/><br/>")

        //imprimir(pokemons)
    } else {

        //document.write("<br/>Debes ingresar un argumeno valido<br/>")
        console.log("Debes ingresar un argumento valido")
    }
}

// let arg = prompt("Ingrese el argumento: ")

// sortPokemons(arg)

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.

let filter = (argument) => {
    let filteredPokemons = pokemons.filter(pokemon => pokemon.type === argument)
    let result = filteredPokemons.length === 0 ? "Tipo de pokemon no encontrado " : filteredPokemons

    console.log(result)
}

// filter("water")

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

let pokemonMaster ={id: 1, name: "joseph", created_date: Date(), pokemons_id:[]}

console.log(pokemonMaster)

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

let randomPokemon = () => {
    pokemonMaster.pokemons_id.push(pokemons[parseInt(Math.random()*(10-1)+1)])
}

// console.log(pokemonMaster)


//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

let randomDamage = () => {
    for(let i = 0; i<pokemons.length; i++){
        pokemons[i].min_damage = (parseInt(Math.random()*(2-1)+1))
        pokemons[i].max_damage = (parseInt(Math.random()*(5-3)+3))
    }
}


//console.log(pokemons)
//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage


let damage = (index) => {
    if(index < pokemons.length){
        randomDamage()
        let selectedPokemon = pokemons[index]
        let total_damage = selectedPokemon.base_damage + Math.floor(Math.random()*(selectedPokemon.max_damage-1+selectedPokemon.min_damage)+selectedPokemon.min_damage)

        console.log(total_damage)
    } else{
        console.log(`Ingrese un numero menor a ${pokemons.length - 1}`)
    }
}


//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.


const ordenarPokemonMaster = () => {

    pokemonMaster.pokemons.sort((prev, next) => {
        return  (next.base_damage + next.max_damage) - (prev.base_damage + prev.max_damage)       
    })
}

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
const root = document.getElementById("root")
const ul = document.createElement('ul')
//root.append(ul)
 
pokemons.forEach(pokemon => {
    const li = document.createElement('li')
    li.textContent = pokemon.name
    ul.append(li)
})
 
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
const keys = Object.keys(pokemons[0])
const table = document.createElement('table')
root.append(table)
const tr = document.createElement('tr')
table.append(tr)

keys.forEach((key) =>{
    const th = document.createElement('th')
    th.textContent = key
    th.style.cursos = "pointer"
    th.addEventListener("click", (event) => {
        event.preventDefault()
        sortPokemons(key)
        table.innerHTML = ""
        table.append(tr)
        renderBody()
    })

    tr.append(th)

})

const renderBody= () =>{
    pokemons.forEach(pokemon => {
        const tr = document.createElement('tr')
         for(const key in pokemon){
            const td = document.createElement('td')
            td.textContent = pokemon[key]
            tr.append(td)
         }
         table.append(tr)
    })
}


renderBody()

//console.log(atributos)

//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.
 
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.