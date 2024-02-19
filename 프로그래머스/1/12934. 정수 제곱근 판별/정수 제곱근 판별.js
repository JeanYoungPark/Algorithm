function solution(n) {
    var answer = 0;
    var sq = Math.sqrt(n)
    
    if(sq % 1 === 0) answer = Math.pow(sq+1, 2)
    else answer = -1
    
    return answer;
}