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
    password
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await axiosInstance.post(
      "/user/signup",
      // TODO must add all input data
      { Role, Nom, Prenom, DateNaiss, Adresse, PhoneNumber, email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
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

  return { signup, isLoading, error };
};
