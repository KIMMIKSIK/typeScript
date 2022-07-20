{
  // Union Types: OR

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  let login = function (): LoginState {
    //가령 성공했다면
    return {
      response: {
        body: "logged in!",
      },
    };
  };
  // 과제 수행
  let printLoginState = function (state: LoginState) {
    if ("response" in state) {
      console.log(`✨ ${state.response.body}`);
    } else {
      console.log(`✨ ${state.reason}`);
    }
  };
}
