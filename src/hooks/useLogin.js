import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosInstance } from "../utils/AxiosInstance";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext;

  const login = async (email, password,nav) => {
    try {
      setIsLoading(true);
    setError(null);

    const { data } = await axiosInstance.post(
      "/user/login",
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("response login =========>", data);
    //save the user to local storage
    localStorage.setItem("user", JSON.stringify(data));
    //update the auth context
    // dispatch({ type: "LOGIN", payload: data });
    setIsLoading(false);
    if(data.role === "agent"){
      nav("/agentover")
    }else if(data.role === "client"){
      nav("/clientover")
    }
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.error);
    }
    
  };

  return { login, isLoading, error };
};
