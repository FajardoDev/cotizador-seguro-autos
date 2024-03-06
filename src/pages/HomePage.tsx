import { Formulario } from "../components";
import { Spinner } from "../components/Spinner";
import { useCotizador } from "../hooks";

export const HomePage = () => {
	const { cargando } = useCotizador();
	return (
		<>
			<header className="my-8">
				<h1 className=" bg-clip-text text-transparent bg-gradient-to-t from-white to-yellow-200 text-center font-bold py-2">
					Cotizador de Seguros de Autos
				</h1>
			</header>

			{cargando ? (
				<Spinner />
			) : (
				<>
					<main className=" md:w-2/3 lg:w-2/4 md:mx-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 mx-4">
						<div className="rounded-[calc(1.5rem-1px)] p-8 bg-white dark:bg-gray-900 ">
							<Formulario />
						</div>
					</main>
				</>
			)}
		</>
	);
};

{
	/* <main className=" md:w-2/3 lg:w-2/4 md:mx-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 mx-4">
				<div className="rounded-[calc(1.5rem-1px)] p-8 bg-white dark:bg-gray-900 ">
					{cargando ? <Spinner /> : <Formulario />}
				</div>
			</main> */
}
