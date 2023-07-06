export const SwitchNavLink = (state, action) => {
    switch (action.type) {
      case "homeClick":
        return { home: true, starShips: false };
      case "starshipsClick":
        return { home: false, starShips: true };
      default:
        return state;
    }
  };