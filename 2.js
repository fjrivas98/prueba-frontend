// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
    let result = []
    let temp = {};
    array.forEach(item =>{
        if(temp[item] === undefined){
            temp[item] = 1;
        }else{
            temp[item]+=1;
        }
    })
    let arr_key_values = Object.entries(temp).sort(([,a],[,b]) => b-a);
    for (let i = 0; i < 3 ; i++){
        result.push(arr_key_values[i][0])
    }
    return result;
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]
