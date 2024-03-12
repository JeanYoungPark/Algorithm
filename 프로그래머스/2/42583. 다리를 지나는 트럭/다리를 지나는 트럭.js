function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let time = 0;
    
    //다리 길이만큼
    while(bridge.length) {
        // 다리를 건던다
        bridge.shift();
        //대기 트럭
        if(truck_weights.length){
            //다리 위의 트럭 무게 함
            const sumBridge = bridge.reduce((a,b) => a + b, 0)

            // 다리 위의 트럭 무게합 + 대기트럭
            if(sumBridge + truck_weights[0] <= weight){
                // 다리 위에 트럭 추가
                bridge.push(truck_weights.shift())
            } else {
                //다리 위의 트럭무게가 작으면 탈출
                bridge.push(0)
            }    
        } 
        time++
    }
    
    return time
}