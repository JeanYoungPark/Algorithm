function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const carRecords = {};
    const result = [];
    
    // records 배열 파싱
    records.forEach(record => {
        const [time, carNumber, status] = record.split(' ');
        if (!carRecords[carNumber]) {
            carRecords[carNumber] = [];
        }
        carRecords[carNumber].push(time);
    });
    
    // 각 차량에 대한 주차 시간과 요금 계산
    for (const carNumber in carRecords) {
        const parkingTimes = carRecords[carNumber];
        let totalParkingTime = 0;
        
        // 주차 시간 계산
        if (parkingTimes.length % 2 !== 0) {
            parkingTimes.push('23:59');
        }
        for (let i = 0; i < parkingTimes.length; i += 2) {
            const startTime = parseTime(parkingTimes[i]);
            const endTime = parseTime(parkingTimes[i + 1]);
            totalParkingTime += endTime - startTime;
        }
        
        // 주차 요금 계산
        let totalFee = baseFee;
        if (totalParkingTime > baseTime) {
            totalFee += Math.ceil((totalParkingTime - baseTime) / unitTime) * unitFee;
        }
        
        result.push([carNumber, totalFee]);
    }
    
    // 결과 정렬 후 반환
    result.sort((a, b) => Number(a[0]) - Number(b[0]));
    return result.map(item => item[1]);
}

// 문자열 형태의 시간을 분으로 변환하는 함수
function parseTime(timeStr) {
    const [hour, minute] = timeStr.split(':').map(Number);
    return hour * 60 + minute;
}
