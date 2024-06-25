import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const useUserContext = () => {
	return useContext(UserContext);
};
