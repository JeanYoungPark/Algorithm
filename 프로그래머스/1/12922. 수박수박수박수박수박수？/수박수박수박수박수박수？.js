function solution(n) {
    var answer = '';
    var str = '수박';
    var i = Math.floor(n/2);
    
    while(i--){
        answer += str;
    }
    
    answer += n % 2 ? '수' : '';
    return answer;
}