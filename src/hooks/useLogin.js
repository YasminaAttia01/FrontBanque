import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosInstance } from "../utils/AxiosInstance";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password, nav) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await axiosInstance.post("/user/login", {
        email,
        password,
      });
      console.log(data);
      console.log("response login =========>", data);
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(data));
      //update the auth context
      dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
      console.log(data.role);
      //jit besh n9olek nzidou hedhi deja amletha bravo :D
      if (data.role === "agent") {
        nav("/agent");
      } else if (data.role === "client") {
        nav("/client");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.error);
    }
  };

  return { login, isLoading, error };
};
