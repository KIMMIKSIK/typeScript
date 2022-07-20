{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState1({ state: "loading" }); // 👀 loading...
  printLoginState1({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState1({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginState1(state: ResourceLoadState) {
    if (state.state === "loading") {
      console.log(`👀 ${state.state}...`);
    } else if (state.state === "success") {
      console.log(`😃 ${state.response.body}`);
    } else {
      console.log(`😱 ${state.reason}`);
    }
  }
}
