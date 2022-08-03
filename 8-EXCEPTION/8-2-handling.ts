class NetworkClient {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    this.client.tryConnect();
    // 로그인.....
  }
}

class App {
  constructor(private userServie: UserService) {}

  run() {
    // 내가 처리하는 장소가 의미있는 곳인지를 파악하는 것이 중요!
    try {
      this.userServie.login();
    } catch (e) {
      // show dialog to user
    }
  }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();

//클래스를 타입으로 사용할 때는 공통 내용을 포함하고 있으면 얼마든지 인자로 넣어주고 사용할 수 있다.

interface Mam {
  login(): void;
}
class AAA {
  login() {
    console.log("hi");
  }
  logout() {}
}

class MMM {
  login() {
    console.log("hi");
  }
}

class Kma {
  constructor(M: MMM) {}
}
const m = new AAA();
const aa = new Kma(m);
