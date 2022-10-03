import { Button, Grid } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import { useContext } from "react";
import { FormContext } from "./formContext";

const ZakatForm = () => {
	const { setVals } = useContext(FormContext);

	const passFormValsOn = (vals: any) => {
		return setVals(vals);
	};

	const initialWealthValues = {
		Gold: false,
		Silver: false,
		Cash: false,
		Livestock: false,
		AgriculturalProduce: false,
		GrainsDriedFruits: false,
		SeaWealth: false,
		MerchandiseOrGoods: false,
		BusinessOrTrade: false,
		BurriedTreasure: false,
	};
	const handleSubmit = (values: any, actions: any) => {
		console.log(values);

		passFormValsOn(values);
		actions.resetForm();
		actions.setSubmitting(false);
	};

	return (
		<div className="App">
			<h1> Calculate Your Zakat </h1>

			<Formik initialValues={initialWealthValues} onSubmit={handleSubmit}>
				{() => (
					<>
						<Form>
							<h3> Choose Your Wealth Category </h3>
							<Grid container spacing={1}>
								<Grid item xs={4}>
									<Field
										name="Gold"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Gold" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="Silver"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Silver" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="Cash"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Cash" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="Livestock"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Livestock" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="AgriculturalProduce"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Agricultural Produce" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="GrainsDriedFruits"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Grains & Dried Fruits" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="SeaWealth"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Sea Wealth" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="MerchandiseOrGoods"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Merchandise Goods" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="BusinessOrTrade"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Business Or Trade" }}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										name="BurriedTreasure"
										type="checkbox"
										component={CheckboxWithLabel}
										Label={{ label: "Burried Treasure" }}
									/>
								</Grid>
							</Grid>
							<Button
								className="btn"
								type="submit"
								variant="contained"
								color="secondary"
							>
								Next
							</Button>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};

export default ZakatForm;
