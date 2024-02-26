function solution(order) {
    var answer = 0;
    var belt = [];
    
    for(var i = 1; i < order.length+1; i++){
        belt.push(i);
        
        while(belt.length > 0 && belt[belt.length - 1] === order[answer]){
            belt.pop();
            answer += 1;
        }
    }
    
    return answer;
}