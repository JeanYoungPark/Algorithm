function solution(arrayA, arrayB) {
    var answer = 0;
    arrayA.sort();
    arrayB.sort();
    
    function fn(arr1, arr2){
        var min = arr1[0];
        
        for(var i = min; i > 0; i--){
            if(arr1.every((data) => data % i === 0) && arr2.every((data) => data % i > 0)) return i;
        }
        
        return 0;
    }
    
    answer = Math.max(fn(arrayA, arrayB), fn(arrayB, arrayA));
    return answer;
}
