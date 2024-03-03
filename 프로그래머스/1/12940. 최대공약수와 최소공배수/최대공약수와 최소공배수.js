function solution(n, m) {
    var answer = [];
    var min = Math.min(n,m);
    var max = Math.max(n,m);
    
    for(var i = min; i > 0; i--){
        if(n%i === 0 && m%i === 0){
            answer.push(i);
            break;
        }
    }
    
    while(true){
        if(max%n === 0 && max%m === 0){
            answer.push(max);
            break;
        }
        max++;
    }
    
    return answer;
}