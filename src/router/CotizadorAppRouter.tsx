import { Navigate, Route, Routes } from "react-router-dom";
import { ResultPage } from "../pages/ResultPage";
import { HomePage } from "../pages/HomePage";

export const CotizadorAppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/resultado" element={<ResultPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/*" element={<Navigate to="/home" />} />
			</Routes>
		</>
	);
};
