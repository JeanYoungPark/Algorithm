function solution(n)
{
    var answer = 0;
    var answer = [...String(n)].reduce((a,b) => {return Number(a)+Number(b)}, 0)
    

    return answer;
}