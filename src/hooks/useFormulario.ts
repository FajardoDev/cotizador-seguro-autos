import { ChangeEvent, useState } from "react";
import { User } from "../context/CotizadorContext";

export interface FormState {
	[key: string]: string;
}

export const useFormulario = (valorInicial = {}): User => {
	const [formState, setformState] = useState<FormState>(valorInicial);

	const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		const { name, value } = event.target;
		setformState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setformState(valorInicial);
	};

	const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = (
		event,
	) => {
		const { name, value } = event.target;
		console.log("Name:", name);
		console.log("Value:", value);
	};

	// La valor del form formState, y la función para cambiarlo onInputChange
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		handleChange,
	};
};
