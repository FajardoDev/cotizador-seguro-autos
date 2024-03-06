import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppCotizadorCar from "./AppCotizadorCar.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppCotizadorCar />
		</BrowserRouter>
	</React.StrictMode>,
);
