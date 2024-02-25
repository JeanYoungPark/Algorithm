function solution(numbers, target) {
    var answer = 0;
    var visited = Array(numbers.length).fill().map(() => false);
    
    function dfs(idx, arr){
        if(idx === numbers.length) {
            var val = arr.reduce((data, curr) => data+curr);
            if(val === target) answer += 1;
            return;
        }
        
        dfs(idx+1, arr.concat(numbers[idx]));
        dfs(idx+1, arr.concat(-1*numbers[idx]));
    }
    
    dfs(0, []);
    return answer;
}