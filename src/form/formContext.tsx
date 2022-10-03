import { createContext, useState } from "react";

export const FormContext = createContext(null);

const FormProvider = ({ children }) => {
	const [values, setVals] = useState();
	const value = {
		values,
		setVals,
	};

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
