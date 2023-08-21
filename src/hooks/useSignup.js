import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosInstance } from "../utils/AxiosInstance";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext;

  const signup = async (
    Role,
    Nom,
    Prenom,
    DateNaiss,
    Adresse,
    PhoneNumber,
    email,
    password,
    nav
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axiosInstance.post(
        "/user/signup",
        { Role, Nom, Prenom, DateNaiss, Adresse, PhoneNumber, email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      //save the user to local storage
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      
      //update the auth context
      // TODO : fix user data in context state
      // dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
      nav("/login")
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.error);
    }
  };

  return { signup, isLoading, error };
};
