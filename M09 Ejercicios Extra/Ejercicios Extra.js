/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var listOfList = [];
    
  for(var prop in objeto){
   var objecList = [];
   objecList.push(prop);
   objecList.push(objeto[prop]);
   listOfList.push(objecList);
  }
  return listOfList;

   
}
//console.log(deObjetoAarray({D: 1, B: 2, C: 3}));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var listChar = string.split(''); //convierto el string en un arreglo de strings
   listChar.sort();  //metodo sort() nos organiza en orden alfabetico
   const result = {};
   for(var char of listChar){
      result[char] = result[char] + 1 || 1;
   } 
   return result;
   
}
//console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var listChar = string.split('');
   var listToUpper = [];
   var listToLower = [];
   for(var char of listChar){
      if(!/[a-z]/.test(char)){
         listToUpper.push(char);
      }
      else{
         listToLower.push(char);
      }
   }

   var listFrase = listToUpper.concat(listToLower);
   var frase = listFrase.join('');

   return frase;
   
}
//console.log(capToFront('soyHENRY'));

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   

}
//console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string = numero.toString();
   var list = string.split('');
   var listInv = [...list].reverse();
   
   if(list[0]==listInv[0]){
      return  "Es capicua";
   }
   else{
      return  "No es capicua";
   }
   

}
//console.log(capicua(202));

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var list = string.split('');
   var listResult =[];
   for(var char of list){
      if(char == 'a'|| char =='b'|| char == 'c'){
         continue;
      }
      else{
         listResult.push(char);
      }
   }
   var nuevaFrase = listResult.join('');
   return nuevaFrase;

  
}
//console.log(deleteAbc('abecedario'));

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a,b){
      return a.length - b.length
   });
   return arrayOfStrings;
   
}
//console.log(sortArray(["You", "are", "beautiful", "looking"]));

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   var common = array1.filter(function(x){
      return array2.includes(x);
   });
   return common.sort();

   

}
//console.log(buscoInterseccion([4,2,3],[1,3,4]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
