function solution(phone_number) {
    var answer = '';
    answer = phone_number.replace(/.(?=.{4})/g, "*");
    return answer;
}