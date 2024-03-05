function solution(s) {
    var answer = 0;
    var chart = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(var i = 0; i < chart.length; i++){
        s = s.replaceAll(chart[i], i);
    }
    
    answer = parseInt(s);
    return answer;
    
}