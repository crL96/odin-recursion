function fibs(n) {
    const fibArray = [0, 1];

    if (n <= 1) {
        return [0];
    }

    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2])
    }
    return fibArray;
}


function fibsRec(n) {
    if (n <= 0) {
        return [];
    }
    if (n == 1) {
        return [0]
    }
    if (n == 2) {
        return [0, 1]
    }
    const prevArray = fibsRec(n - 1)
    return [...prevArray, prevArray[n-2] + prevArray[n-3]]
}