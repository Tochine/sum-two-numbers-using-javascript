const sumTwoNumbers = (arrNums, target) => {

    for(let i = 0; i < arrNums.length; i++){
        for(let x = i+1; x < arrNums.length; x++){
            if(arrNums[i] + arrNums[x] === target){
                return [i, x]
            }
        }
    }
}

console.log(sumTwoNumbers([2, 7, 11, 15],9));

module.exports = sumTwoNumbers;
