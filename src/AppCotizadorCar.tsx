import { CotizadorProvider } from "./context";
import { CotizadorAppRouter } from "./router/CotizadorAppRouter";

function AppCotizadorCar() {
	return (
		<>
			<CotizadorProvider>
				<CotizadorAppRouter />
			</CotizadorProvider>
		</>
	);
}

export default AppCotizadorCar;
