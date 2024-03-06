function solution(numbers) {
    var answer = [];
    
    for(var i = 0; i < numbers.length; i++){
        answer.push(fn(numbers[i]));
    }
    
    function fn(num){
        //짝수라면 제일 왼쪽의 비트가 0일테니 +1
        if(num % 2 === 0) return num+1;
        else{
            var bit = num.toString(2);
            // 가장 뒤의 인덱스의 있는 01을 뒤집어 10으로 만들면 다음으로 가장 큰 수가 된다. (최대 2자리수만 바꿀 수 있음)
            var idx = bit.lastIndexOf('01');
            
            // 01이 없다면 1밖에 없는 이진수라는 뜻
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