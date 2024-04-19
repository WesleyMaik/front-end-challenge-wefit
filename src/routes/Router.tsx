import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
