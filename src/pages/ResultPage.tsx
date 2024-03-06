import { useNavigate } from "react-router-dom";
import { useCotizador } from "../hooks";
import { brand, plans } from "../constants";
import { useEffect, useMemo, useRef } from "react";

export const ResultPage = () => {
	const { resultado, datos } = useCotizador();
	const { anio, marca, plan } = datos;

	const yearRef = useRef(anio);

	const [nombreMarca] = useMemo(
		() => brand.filter((m) => m.id === Number(marca)),
		[resultado],
	);
	const [nombrePlan] = useMemo(
		() => plans.filter((p) => p.id === Number(plan)),
		[resultado],
	);

	const navigate = useNavigate();

	useEffect(() => {
		if (resultado === 0) {
			navigate("/home", {
				replace: true,
			});
		}
	}, [resultado]);

	return (
		<div>
			<div className="flex justify-end">
				<button
					// onClick={() => navigate("/")}
					onClick={() => navigate(-1)}
					type="button"
					className="bg-blue-800 text-white m-4 px-6 py-2 hover:bg-blue-600 transition-colors font-bold rounded-md"
				>
					Volver
				</button>
			</div>

			<header className="my-8">
				<h1 className=" bg-clip-text text-transparent bg-gradient-to-t from-white to-fuchsia-500 text-center font-bold py-2">
					Cotización del Seguro
				</h1>
			</header>

			<main className=" md:w-2/3 lg:w-2/4 md:mx-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-red-300 dark:from-yellow-800 dark:to-emerald-800 mx-4">
				<div className="rounded-[calc(1.5rem-1px)] p-8 bg-white dark:bg-gray-900 text-white dark:text-slate-300 text-center">
					<h2 className="font-bold text-3xl">Resumen</h2>

					<p className="my-2">
						<span className="font-bold">Marca: </span>
						{nombreMarca?.nombre}
					</p>
					<p className="my-2">
						<span className="font-bold">Plan: </span>
						{nombrePlan?.nombre}
					</p>
					<p className="my-2">
						<span className="font-bold">Año del Auto: </span>
						{yearRef?.current}
					</p>
					<p className="my-2 text-2xl">
						<span className="font-bold">Total Cotización: </span>
						{resultado}
					</p>
				</div>
			</main>
		</div>
	);
};
