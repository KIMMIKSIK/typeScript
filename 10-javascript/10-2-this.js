console.log(this) // 기본적으로는 전역객체를 가리킨다.

 
class aa {
    go() {
        console.log(this)
        return function() {
            console.log(this) // 이거는 모듈 혹은 클래스는 strict모드기 때문에 undefined가나온다.

        }
    }
}
 
let abc = new aa();
let b = abc.go();
b();

 
// const, let은 전역객체의 프로퍼티가 안되기 때문에 변수가 이걸로 선언되면 this를 써도 전역객체로 나오진 않는다!
////


class Counter {
    count =0;
    increase = function (){
        console.log(this);
    }
}
const counter = new Counter();
const caller = counter.increase.bind(counter);
// 이렇게 바인딩 하게 되면 외부에서 이를 가져가도 무조건 counter를 기준으로 호출하게됨
// 혹은 클래스 내부에서 함수 표현식으로 화살표함수를 사용하게 되면 그 내부의 this는 스코프 체이닝을 따라 다른 객체가 호출해도 본인이
// 생성될 당시의 객체를 기억하고 있다. 
const bob = {}
bob.run = counter.increase;
bob.run();