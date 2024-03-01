function solution(s) {
    var answer = /^\d{4}$|^\d{6}$/.test(s);
    return answer;
}