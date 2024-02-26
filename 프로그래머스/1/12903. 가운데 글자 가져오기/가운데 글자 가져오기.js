function solution(s) {
    var answer = s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2)
    return answer;
}