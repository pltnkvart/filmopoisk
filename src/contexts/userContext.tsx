import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export const UserContext = React.createContext(null);

interface IUserContextProviderProps {
	children: React.ReactNode;
}

export const UserContextProvider = ({
	children,
}: IUserContextProviderProps) => {
	const [user, setUser] = useState();

	const contextValue = useMemo(
		() => ({
			user,
			login: setUser,
			logout: () => {
				setUser(undefined);
			},
		}),
		[user]
	);

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};
