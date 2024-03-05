function solution(s) {
    var answer = s;
    var chart = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(var i = 0; i < chart.length; i++){
        answer = answer.replaceAll(chart[i], i);
    }
    
    return parseInt(answer);
    
}