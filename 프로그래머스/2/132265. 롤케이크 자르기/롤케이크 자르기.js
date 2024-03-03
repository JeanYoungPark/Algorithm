function solution(topping) {
    var answer = 0;
    var arr = {};
    var arr_ = {};
    var topping1 = 0;
    var topping2 = 0
    
    for(var i = 0; i < topping.length; i++){
        if(arr[topping[i]] === undefined) {
            topping1++;
            arr[topping[i]] = 0;
        }
        
        arr[topping[i]]++;
    }
    
    for(var i = 0; i < topping.length; i++){    
        if(arr_[topping[i]] === undefined){
            topping2++;
            arr_[topping[i]] = 0;
        }
        
        arr_[topping[i]]++;
        arr[topping[i]]--;
        
        if(arr[topping[i]] === 0){
            topping1--;
            delete arr[topping[i]];
        }
        
        if(topping1 === topping2) answer++;
    }
    
    return answer;
}