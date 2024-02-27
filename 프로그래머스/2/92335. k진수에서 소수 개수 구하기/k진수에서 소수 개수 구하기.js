function solution(n, k) {
    var answer = 0;
    var arr = n.toString(k).split('0').map(Number);
    
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > 1) {
            if(fn(arr[j])){
                answer++;
            }  
        }
    }
    
    function fn(val){
        if(val === 2) return true;
        
         for(var i = 2; i <= Math.floor(Math.sqrt(val)); i++){
            if(val % i === 0){
                return false;
            }
        }
        
        return true;
    }
    
    return answer;
}