import { createContext } from "react";
import { DatosSelect } from "./CotizadorProvider";

export type User = {
	onHandleChangeDatos: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
	datos: DatosSelect;
	cotizarSeguro: () => void;
	resultado: number;
	cargando: boolean;
	selectInteractuadoMarc: boolean;
	selectInteractuadoYear: boolean;
};

export const CotizadorContext = createContext<User>({} as User);
