process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let stars = '';
    
    for(var i = 0; i < a; i++){
        stars += '*';
    }
    
    for(var i = 0; i < b; i++){
        console.log(stars);   
    }
});