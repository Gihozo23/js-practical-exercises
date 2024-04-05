// You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.
oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]

function oddSquares(arr){
    let oddNum = arr.filter((item)=>item%2!==0);

    let result =oddNum.map((item)=> item*item);
    console.log(result);

}
