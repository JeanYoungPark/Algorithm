function solution(strings, n) {
    var answer = [];
    var obj = [];
    
    strings.sort();
    
    answer = strings.sort((a,b) => {
        return a[n].charCodeAt()-b[n].charCodeAt();
    })
    
    return answer;
}