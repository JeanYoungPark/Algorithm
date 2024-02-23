function solution(arr, divisor) {
    var answer = [];
    
    arr.sort((a,b) => a-b);
    
    var answer = arr.filter((data) => data % divisor === 0);
    if(answer.length === 0) answer = [-1];
    
    return answer;
}