import { Link, useLocation } from "react-router-dom";

export const NavbarSimple = () => {
	const location = useLocation();

	const { pathname } = location;
	// console.log("pathname: ", pathname);

	return (
		<>
			<div className="min-h-full bg-slate-700/50 shadow-md shadow-black">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<div className=" flex items-baseline ">
								<Link
									className={`${
										pathname === "/home" && "text-sky-200 font-bold"
									} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
									to="/home"
								>
									Home
								</Link>
								<Link
									className={`${
										pathname === "/resultado" && "text-sky-200 font-bold"
									} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
									to="/resultado"
								>
									Resultado
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
