function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    
    const allWords = [];
    for (let i = 1; i <= 5; i++) {
        generateWords('', 0, i);
    }
    
    function generateWords(currentWord, depth, maxDepth) {
        if (depth === maxDepth) {
            allWords.push(currentWord);
            return;
        }
        for (const vowel of vowels) {
            generateWords(currentWord + vowel, depth + 1, maxDepth);
        }
    }
    
    allWords.sort();
    answer = allWords.indexOf(word) + 1;
    
    return answer;
}
