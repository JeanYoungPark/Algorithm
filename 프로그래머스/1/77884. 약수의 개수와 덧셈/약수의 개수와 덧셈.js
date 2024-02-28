function solution(left, right) {
    var answer = 0;
    
    for(var i = left; i < right + 1; i++){
        answer += Math.sqrt(i) % 1 === 0 ? -i : i;
    }
    
    return answer;
}