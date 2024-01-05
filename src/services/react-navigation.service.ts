export const getCurrentRouteFromState = state => {
  let actualRoute = state?.routes[state.index];

  while (actualRoute?.state) {
    actualRoute = actualRoute.state.routes[actualRoute.state.index];
  }

  return actualRoute;
};
