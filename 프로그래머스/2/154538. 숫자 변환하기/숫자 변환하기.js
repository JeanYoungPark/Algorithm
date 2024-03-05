function solution(x, y, n) {
    if (x === y) return 0;

    const dp = {};
    dp[x] = 0;

    let data = [x];

    while (data.length) {
        const newData = [];
        
        for (const d of data) {
            for (const e of [d + n, d * 2, d * 3]) {
                //이미 계산한 적있거나 목표 숫자보다 크면 패스
                if (e > y || dp[e]) continue;
                // 목표한 값과 동일하면 리턴
                if (e === y) return dp[d] + 1;
                //아니라면 더하거나 곱한 값을 key, 횟수 + 1을 진행
                dp[e] = dp[d] + 1;
                //새로 검사해볼 배열 정의
                newData.push(e);
            }
        }
        data = newData;
    }

    return -1;
}