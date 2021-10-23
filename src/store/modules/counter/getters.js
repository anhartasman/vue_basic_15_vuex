export default {
  testAuth(state, getters, rootState, rootGetters) {
    console.log(getters.isLoggedIn);
    console.log(rootState.isLoggedIn);
    console.log(rootGetters.isLoggedIn);
    return rootState.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(_, getteers) {
    const finalCounter = getteers.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }

    return finalCounter;
  }
};
