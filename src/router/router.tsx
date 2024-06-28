import { createBrowserRouter } from "react-router-dom";
import { FilmsPage } from "../components/Pages/FilmsPage/FilmsPage";
import { FilmPage } from "../components/Pages/FilmPage/FilmPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <FilmsPage />,
		errorElement: <div>Not Found</div>,
	},
	{
		path: "/movie/:filmId",
		element: <FilmPage />,
		errorElement: <div>Not Found</div>,
	},
]);
