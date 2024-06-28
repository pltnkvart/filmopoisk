import { Provider } from "react-redux";
import { UserContextProvider } from "./contexts/userContext";
import { store } from "./store/store";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
	return (
		<UserContextProvider>
			<Provider store={store}>
				<Layout>
					<RouterProvider router={router} />
				</Layout>
			</Provider>
		</UserContextProvider>
	);
};
