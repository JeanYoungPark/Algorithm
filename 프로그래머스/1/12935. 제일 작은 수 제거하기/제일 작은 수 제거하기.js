function solution(arr) {
    var answer = [];
    
    if(arr.length === 1){
        answer = [-1]
    }else{
        var min = Math.min(...arr);
        arr.splice(arr.indexOf(min), 1);
        answer = arr;
    }
    
    return answer;
}