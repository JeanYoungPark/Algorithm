function solution(numbers) {
    let answer = 0;
    let total = numbers.reduce((prev, curr) => prev + curr);
    answer = total / numbers.length;
    return answer;
}