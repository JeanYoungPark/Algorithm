function solution(price, money, count) {
    var answer = -1;
    var total = 0;
    
    while(count){
        total += count * price;
        count--;
    }
    
    answer = total - money > 0 ? total - money : 0;
    return answer;
}