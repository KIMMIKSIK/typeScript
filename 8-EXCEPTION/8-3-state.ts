{
  class TimeoutError extends Error {}
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    constructor(private state: ResultState) {}
    // try를 남발하기 보다는 어떤 상태가 되는지 ResultState를 만드는게 좋음
    tryConnect(): ResultState {
      if (this.state.result === "success") {
        return this.state;
      } else {
        return this.state;
      }
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
}
