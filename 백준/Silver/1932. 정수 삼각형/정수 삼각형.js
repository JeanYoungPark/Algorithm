const fs = require('fs');
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 인풋 처리
[N, ...arr] = input;
N = Number(N);
arr = arr.map(i => i.split(' ').map(i => Number(i)));
solution(N, arr);

function solution(N, arr) {
    for (let i = N - 2; i >= 0; i--) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
        }
    }
    console.log(arr[0][0]);
}
