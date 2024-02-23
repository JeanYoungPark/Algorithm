function solution(arr, divisor) {
    var answer = [];
    
    var answer = arr.filter((data) => data % divisor === 0);
    answer = answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
    
    return answer;
}