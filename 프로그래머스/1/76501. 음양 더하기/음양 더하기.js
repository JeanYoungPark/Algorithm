function solution(absolutes, signs) {
    var answer = 0;
    absolutes = absolutes.map((data, i) => signs[i] ? data : data * -1)
    answer = absolutes.reduce((a, b) => a+b, 0)
    
    return answer;
}