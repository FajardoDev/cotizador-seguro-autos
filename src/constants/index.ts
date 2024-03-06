export interface MARCA {
	id: number;
	nombre: string;
}
interface PLANES {
	id: number;
	nombre: string;
}

export const brand: MARCA[] = [
	{ id: 1, nombre: "Europeo" },
	{ id: 2, nombre: "Americano" },
	{ id: 3, nombre: "Coreano" },
];

const yearMax = new Date().getFullYear(); // 2024

export const year: number[] = Array.from(
	new Array(20),
	(valor, index): number => yearMax - index,
);

export const plans: PLANES[] = [
	{ id: 1, nombre: "Básico" },
	{ id: 2, nombre: "Completo" },
];
