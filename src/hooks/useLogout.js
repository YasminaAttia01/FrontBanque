import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = (navigate) => {
    try {
      // Remove user from storage
      localStorage.removeItem("user"); //taamel f haja hedhi? khater meksh tejjbed f variable localstorage w localstorage l adeya mta3 google chrome wala les navigateurs en general todkhlelha b window.localstorage thabet feha ba3d béhi? behi
      // Dispatch logout action
      dispatch({ type: "LOGOUT" });
      navigate("/");
      //
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle error, show an error message, etc.
    }
  };

  return { logout };
};
