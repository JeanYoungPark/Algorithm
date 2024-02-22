function solution(num) {
    var answer = 0;
    
//     function fn(n){
//         if(answer > 500) {
//             answer = -1;
//             return;
//         }
            
//         if(n === 1) return;
        
//         answer += 1;
               
//         if(n % 2 === 1) {
//             fn(n * 3 + 1);
//         }else{
//             fn(n / 2)
//         }
//     }
    
    var tmp = num;
    
    while(tmp !== 1 && answer !== 500){
        answer += 1;
        
        if(tmp % 2 === 1) {
            tmp = tmp * 3 + 1;
        }else{
            tmp = tmp / 2;
        }
    }
    
    if(answer === 500) answer = -1;
    // fn(num)
    return answer;
}