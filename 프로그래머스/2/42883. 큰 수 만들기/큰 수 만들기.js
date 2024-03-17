function solution(number, k) {
    var answer = '';
    var num = {};
    var tmp = '';
    
    for(var i = 0; i < number.length - k; i++){
        for(var j = i+1; j < number.length - k; j++){
            console.log(number.substr(i, 1),number.substr(j, number.length - k - 1));
        }
    }
    
    
    return answer;
}