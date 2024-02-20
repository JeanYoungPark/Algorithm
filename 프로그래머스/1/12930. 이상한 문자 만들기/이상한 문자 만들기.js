function solution(s) {
    var answer = '';
    var idx = 0;
    
    for(var data of [...s]){
        var alpha = data;
        
        if(alpha === ' ') {
            idx = 0;   
        }else{
            if(idx % 2 === 0) alpha = alpha.toUpperCase()
            else if (idx % 2 === 1) alpha = alpha.toLowerCase()
            
            idx += 1;
        }
        
        answer += alpha;
    }
    
    return answer;
}