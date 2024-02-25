function solution(arr) {
    var answer = [];
    
    if(arr.length === 1){
        answer = [-1]
    }else{
        var min = Math.min(...arr);
        answer = arr.filter((data) => data > min)
    }
    
    return answer;
}