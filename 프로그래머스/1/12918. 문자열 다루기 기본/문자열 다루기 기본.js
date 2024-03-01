function solution(s) {
    var answer = false;
    if(s.length === 4 || s.length === 6){
        answer = /^\d+$/.test(s);
    }
    return answer;
}