// ! import/export

export const arraySum = (arr) => {
    return arr.reduce((acc, number) => acc + number, 0);
};

export const filterEvenNumbers = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};

export default function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}
