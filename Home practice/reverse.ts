// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';

let numList: number[] = [3, 4, 5, 6, 7];

for (let i: number = numList.length-1; i >= 0; i--) {
    let newList = [];
    newList.push(numList.splice(i));
    console.log(newList);
}
