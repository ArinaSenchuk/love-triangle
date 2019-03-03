/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    var canseled = [];
    for (var i = 0; i < preferences.length; i++) {
        if (!canseled.includes(i)) {
            var num1 = preferences[i];
            var num2 = preferences[num1-1];
            var num3 = preferences[num2-1];

            if ( (i+1) === num3 && i+1 !== num1) {
                count++;
                canseled.push(num1-1, num2-1, num3- 1);
            }
        }
    }

    return count;
};
