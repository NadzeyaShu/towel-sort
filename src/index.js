// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    matrix.forEach((value, index) => {
        if (index % 2 !== 0) {
            value.sort((a, b) => b - a);
        }
    })

    return matrix.reduce((sumValue, currentValue) => sumValue.concat(currentValue), []);
}
