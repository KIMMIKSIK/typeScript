{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    //가령 성공했다면
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }
  // 과제 수행
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`✨ ${state.response.body}`);
    } else {
      console.log(`✨ ${state.reason}`);
    }
  }
}
