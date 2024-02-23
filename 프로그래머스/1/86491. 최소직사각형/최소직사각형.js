function solution(sizes) {
    var answer = 0;
    var x = 0;
    var y = 0;
    
    for(var i = 0; i < sizes.length; i++) {
        x = Math.max(x, Math.max(...sizes[i]));
        y = Math.max(y, Math.min(...sizes[i]));
    }
    
    answer = x*y
    
    return answer;
}