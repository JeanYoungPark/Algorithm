function solution(s) {
    var answer = s.length % 2 ? s.substr(Math.floor(s.length / 2), 1) : s.substr(s.length / 2 - 1, 2)
    return answer;
}