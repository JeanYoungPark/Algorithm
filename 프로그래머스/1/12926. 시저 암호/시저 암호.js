function solution(s, n) {
    var answer = '';
    var arr = s.split('').map(data => data.charCodeAt());
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 65 && arr[i] <= 90){
            arr[i] += n;
            
            if(arr[i] > 90){
                arr[i] -= 26
            }
         }else if(arr[i] >= 97 && arr[i] <= 122){
             arr[i] += n;
             
             if(arr[i] > 122){
                arr[i] -= 26
            }
             console.log(arr[i])
         }
        
        answer += String.fromCharCode(arr[i]);
    }
    
    return answer;
}