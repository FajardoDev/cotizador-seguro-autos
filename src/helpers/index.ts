export const ObtenerDiferenciasYear = (anio: number): number => {
	return new Date().getFullYear() - anio;
};

export const CalcularMarca = (marca: string): number => {
	let incremento: number;

	switch (marca) {
		case "1":
			incremento = 1.3; // 30% europeo
			break;

		case "2":
			incremento = 1.15; // 15% americano
			break;
		case "3":
			incremento = 1.05; // 5% coreano
			break;
		default:
			incremento = 0; // Asigna un valor predeterminado si 'marca' no coincide con ningún caso
			break;
	}

	return incremento;
};

export const CalcularPlan = (plan: string) => {
	return plan === "1" ? 1.2 : 1.5;
};

export const FormatearCantidad = (cantidad: number | string | any) => {
	return cantidad.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};
