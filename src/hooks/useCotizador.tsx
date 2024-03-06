import { useContext } from "react";
import { CotizadorContext } from "../context";
import { User } from "../context/CotizadorContext";

export const useCotizador = (): User => {
	return useContext(CotizadorContext);
};
