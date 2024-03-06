function solution(numbers) {
    var answer = [];
    
    for(var i = 0; i < numbers.length; i++){
        answer.push(fn(numbers[i]));
    }
    
    function fn(num){
        if(num % 2 === 0) return num+1;
        else{
            var bit = num.toString(2);
            var idx = bit.lastIndexOf('01');
            
            if(idx === -1){
                bit = '10'+bit.slice(1);
            }else{
                bit = bit.slice(0, idx)+'10'+bit.slice(idx+2);
            }
            
            return parseInt(bit, 2)
        }
    }
    return answer;
}