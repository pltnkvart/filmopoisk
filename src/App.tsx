import { Header } from "./components/Header/Header";
import { UserContextProvider } from "./contexts/userContext";

export function App() {
	return (
		<UserContextProvider>
			<Header></Header>
		</UserContextProvider>
	);
}
