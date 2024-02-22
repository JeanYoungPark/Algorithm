function solution(a, b) {
    var answer = 0;
    
    if( a === b ) answer = a;
    else {
        var min = Math.min(a, b);
        var max = Math.max(a, b);
        
        for(var i = min; i < max+1; i++){
            answer += i;
        }
    }
    return answer;
}