export const SwitchNavLink = (state, action) => {
    switch (action.type) {
      case "homeClick":
        return { home: true, starships: false };
      case "starshipsClick":
        return { home: false, starships: true };
      case "none":
        return {home: false, starships: false,}
      default:
        return state;
    }
  };
