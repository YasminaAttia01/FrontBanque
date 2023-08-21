import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    try {
      // Remove user from storage
      localStorage.removeItem("user");
      // Dispatch logout action
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle error, show an error message, etc.
    }
  };

  return { logout };
};
