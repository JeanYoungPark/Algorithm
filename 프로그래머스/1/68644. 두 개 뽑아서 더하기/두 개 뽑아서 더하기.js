function solution(numbers) {
    var answer = [];
    var num = 0;
    
    for(var i = 0; i < numbers.length; i++){
        for(var j = i+1; j < numbers.length; j++){
            num = numbers[i]+numbers[j];
            if(answer.indexOf(numbers[i]+numbers[j]) === -1){
                answer.push(num);
            }
        }
    }
    
    return answer.sort((a,b)=> a-b);
}