function solution(numbers, target) {
    var answer = 0;
    var visited = Array(numbers.length).fill().map(() => false);
    
    function dfs(idx, val){
        if(idx === numbers.length) {
            if(val === target) answer += 1;
            return;
        }
        
        dfs(idx+1, val + numbers[idx]);
        dfs(idx+1, val - numbers[idx]);
    }
    
    dfs(0, 0);
    return answer;
}