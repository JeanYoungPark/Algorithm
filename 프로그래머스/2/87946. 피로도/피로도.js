function solution(k, dungeons) {
    var answer = -1;
    
    function fn(cnt, leftDungeons, hp){
        if(leftDungeons.length === 0) {
            answer = Math.max(answer, cnt);
            return;
        }
        
        for(var i = 0; i < leftDungeons.length; i++){
            var newDungeons = leftDungeons.slice(0, i).concat(leftDungeons.slice(i+1));
            
            if(hp >= leftDungeons[i][0]){
                fn(cnt+1, newDungeons, hp-leftDungeons[i][1]);
            }else{
                fn(cnt, newDungeons, hp);
            }
            
        }
        
    }
    
    fn(0, dungeons, k);
    return answer;
}