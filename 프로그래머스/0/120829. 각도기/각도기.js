function solution(angle) {
    var answer = 0;
    answer = [0, 90, 91, 180].filter(data => data <= angle).length;
    
    return answer;
}