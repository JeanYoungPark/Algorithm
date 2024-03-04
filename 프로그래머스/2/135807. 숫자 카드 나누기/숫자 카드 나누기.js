function solution(arrayA, arrayB) {
    var answer = 0;
    var len = arrayA.length;
    arrayA.sort();
    arrayB.sort();
    
    function fn(arr1, arr2){
        var i = 0;
        var min = arr1[0];
        
        while(min > 0){
            for(i = 0; i < len; i++){
                if(arr1[i] % min > 0 || arr2[i] % min === 0){
                    min--;
                    break;
                }
            }

            if(i === len) break;
        }
        
        return min;
    }
    
    answer = Math.max(fn(arrayA, arrayB), fn(arrayB, arrayA));
    
    return answer;
}
