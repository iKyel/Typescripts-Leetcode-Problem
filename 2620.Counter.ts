function createCounter(n: number): () => number {
    let cur = n;
    return () => {
        return cur++
    };
}

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12