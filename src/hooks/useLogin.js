import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosInstance } from "../utils/AxiosInstance";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext;

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await axiosInstance.post(
      "/user/login",
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("response login =========>", response?.data);
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);

      if (response.ok) {
        //save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        //update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      }
    }
  };

  return { login, isLoading, error };
};
