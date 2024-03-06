import { ReactNode } from "react";

interface ErrorProps {
	children: ReactNode;
}

export const Error = ({ children }: ErrorProps) => {
	return (
		<div className="text-red-500 max-w-full mx-auto">
			<p className="border border-red-600 text-center font-bold py-2 text-xs rounded-full">
				{children}
			</p>
		</div>
	);
};
