import { useState } from "react";
import { CotizadorContext } from "./CotizadorContext";
import {
	CalcularMarca,
	CalcularPlan,
	FormatearCantidad,
	ObtenerDiferenciasYear,
} from "../helpers";

interface props {
	children: JSX.Element | JSX.Element[];
}

export interface DatosSelect {
	marca: string;
	anio: string;
	plan: string;
}

export const CotizadorProvider = ({ children }: props) => {
	const [datos, setDatos] = useState<DatosSelect>({
		marca: "",
		anio: "",
		plan: "",
	});

	const [resultado, setResultado] = useState(0);
	const [cargando, setCargando] = useState(false);

	const [selectInteractuadoMarc, setSelectInteractuadoMarc] = useState(false);
	const [selectInteractuadoYear, setSelectInteractuadoYear] = useState(false);

	const onHandleChangeDatos = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value,
		});

		setSelectInteractuadoMarc(true);
		setSelectInteractuadoYear(true);
	};

	const cotizarSeguro = () => {
		// Una base
		let resultado: number = 2000;

		// Obtener las diferencias de año console.log(datos.anio); 2 años menor al actual si selecciona 2022
		const diferenciaYear = ObtenerDiferenciasYear(Number(datos.anio));

		//! Hay que restar el 3% por cada año son 60
		resultado -= (diferenciaYear * 3 * resultado) / 100;

		//! No es lo mismo un seguro de una honda- que toyota
		// Europeo 30%
		// Americano 15%
		// Coreano
		resultado *= CalcularMarca(datos.marca);

		//! Incrementan
		// Básico 20%
		// Completo 50%
		resultado *= CalcularPlan(datos.plan);

		resultado = FormatearCantidad(resultado);

		setCargando(true);

		setTimeout(() => {
			setResultado(resultado);
			setCargando(false);
		}, 1000);
	};

	return (
		<>
			<CotizadorContext.Provider
				value={{
					datos,
					onHandleChangeDatos,
					cotizarSeguro,
					resultado,
					cargando,
					selectInteractuadoMarc,
					selectInteractuadoYear,
				}}
			>
				{children}
			</CotizadorContext.Provider>
		</>
	);
};

// const onHandleChangeDatos: (e: ChangeEvent<HTMLInputElement>) => void = (
// 	e,
// ) => {
// 	console.log(e.target.name);
// 	console.log(e.target.value);
// };
