import { Fragment, useState } from "react";
import { brand, plans, year } from "../constants";
import { useCotizador } from "../hooks";
import { Error } from "./Error";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
	const navigate = useNavigate();

	const {
		datos,
		onHandleChangeDatos,
		cotizarSeguro,
		selectInteractuadoMarc,
		selectInteractuadoYear,
	} = useCotizador();

	const [error, setError] = useState(false);

	const verificarCaracteres = (valor: any) => valor.trim().length > 0;

	const onHandleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (Object.values(datos).includes("")) {
			setError(true);
			return;
		}
		setError(false);
		cotizarSeguro();

		setTimeout(() => {
			navigate("/resultado", {
				replace: true,
			});
		}, 1000);
	};

	return (
		<>
			<form onSubmit={onHandleSubmit}>
				{error && <Error>Todos los campos son requeridos</Error>}
				<div className="my-5">
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-200 mb-2">
							Marca
						</span>

						<select
							onChange={onHandleChangeDatos}
							value={datos.marca}
							name="marca"
							className={`bg-gray-50 focus:outline-none border  text-gray-900 text-base rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:ring-2 dark:focus:border-blue-500  hover:border-green-500 hover:border transition-all ease-out duration-150 ${
								selectInteractuadoMarc
									? verificarCaracteres(datos.marca)
										? "focus:ring-blue-500 focus:border-blue-500 border border-gray-300 dark:focus:ring-blue-500 focus:ring-2 dark:focus:border-blue-500"
										: "focus:ring-red-500 focus:border-red-500 border border-red-600 dark:focus:ring-red-500 focus:ring-2 dark:focus:border-red-500 "
									: ""
							}`}
						>
							<option value="">-- Selecciona Marca --</option>
							{/* <option value="">
								{selectInteractuadoMarc
									? verificarCaracteres(datos.marca)
										? "-- Selecciona Marca --"
										: "El campo marca es requerido"
									: "-- Selecciona Marca --"}
							</option> */}

							{brand.map((marca) => (
								<option key={marca.id} value={marca.id}>
									{marca.nombre}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className="my-5">
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-200 mb-2">
							Año
						</span>

						<select
							onChange={onHandleChangeDatos}
							value={datos.anio}
							name="anio"
							className={`bg-gray-50 focus:outline-none border  text-gray-900 text-base rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:ring-2 dark:focus:border-blue-500   transition-all ease-out duration-150 hover:border-green-500 hover:border ${
								selectInteractuadoYear
									? verificarCaracteres(datos.anio)
										? "focus:ring-blue-500 focus:border-blue-500 border border-gray-300 dark:focus:ring-blue-500 focus:ring-2 dark:focus:border-blue-500"
										: "focus:ring-red-500 focus:border-red-500 border border-red-600 dark:focus:ring-red-500 focus:ring-2 dark:focus:border-red-500"
									: ""
							}`}
						>
							<option value="">-- Selecciona Año --</option>
							{/* <option value="">
								{selectInteractuadoYear
									? verificarCaracteres(datos.anio)
										? "-- Selecciona Año --"
										: "El campo año es requerido"
									: "-- Selecciona Año --"}
							</option> */}

							{year.map((anio) => (
								<option key={anio} value={anio}>
									{anio}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className="my-5">
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-200 mb-4">
							Elige un Plan
						</span>

						<div className="flex gap-3 items-center">
							{plans.map((plan) => (
								<Fragment key={plan.id}>
									<label className="text-slate-200">{plan.nombre}</label>

									<input
										className="cursor-pointer"
										type="radio"
										name="plan"
										value={plan.id}
										onChange={(e) => onHandleChangeDatos(e)}
									/>
								</Fragment>
							))}
						</div>
					</label>
				</div>
				<input
					type="submit"
					className="w-full mt-4 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white py-2 rounded-md text-lg font-semibold cursor-pointer hover:shadow-lg hover:shadow-black transition ease-linear duration-150"
					value="Cotizar"
				/>
			</form>
		</>
	);
};

{
	/* <input
		type="email"
		name="email"
		className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
		placeholder="you@example.com"
	/> */
}
