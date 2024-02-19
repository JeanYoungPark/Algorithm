function solution(x, n) {
    var answer = [];
    var i = x;
    
    while(n--){
        answer.push(i);
        i += x;
    }
    return answer;
}