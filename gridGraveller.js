const gridGraveller = (m, n, memo={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridGraveller(m - 1, n) + gridGraveller(m, n - 1)
    return memo[key];
}

console.log(gridGraveller(1, 1));
console.log(gridGraveller(2, 3));
console.log(gridGraveller(3, 2));
console.log(gridGraveller(3, 3));
console.log(gridGraveller(18, 18));