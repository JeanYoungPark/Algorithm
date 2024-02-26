function solution(n) {
    var answer = '';
    var str = '수박';
    answer = str.repeat(n/2)+( n % 2 ? '수' : '');
    return answer;
}