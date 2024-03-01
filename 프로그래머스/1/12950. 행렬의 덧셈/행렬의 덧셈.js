function solution(arr1, arr2) {
    var answer = [];
    
    for(var i = 0; i < arr1.length; i++){
        var innerArr = [];
        
        for(var j = 0; j < arr1[0].length; j++){
            innerArr.push(arr1[i][j]+arr2[i][j]);
        }
        
        answer.push(innerArr);
    }
    
    return answer;
}