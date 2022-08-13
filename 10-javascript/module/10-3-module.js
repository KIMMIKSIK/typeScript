
export let c = 4
c = 9;

// 디폴트는 변수 선언자체는 안되나>? 답: 디폴트 키워드 사용시 const, let, var 키워드 사용불가


export default function add(a,b) {
    return a+b;
}

add(1,2)

// 이름충돌