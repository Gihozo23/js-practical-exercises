function arrayStats(arr) {
    if (arr.length === 0) {
        return {
            sum: 0,
            average: 0,
            min: undefined,
            max: undefined
        };
    }

    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    const average = sum / arr.length;
    return {
        sum: sum,
        average: parseFloat(average.toFixed(2)),
        min: min,
        max: max
    };
}

console.log(arrayStats([1, 2, 3, 4, 5])); // { sum: 15, average: 3.00, min: 1, max: 5 }
