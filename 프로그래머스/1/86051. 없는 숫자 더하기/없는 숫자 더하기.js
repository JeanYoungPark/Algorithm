function solution(numbers) {
    var answer = 0;
    
    for(var i = 0; i< 10; i++){
        answer += numbers.indexOf(i) === -1 && i
    }
    
    return answer;
}