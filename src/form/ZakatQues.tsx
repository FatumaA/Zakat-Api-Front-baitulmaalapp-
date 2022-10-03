import {
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
} from "@material-ui/core";
import { Form, Field, Formik } from "formik";
import { RadioGroup, TextField } from "formik-material-ui";
import { useContext } from "react";
import { FormContext } from "./formContext";

const ZakatQues = () => {
	const { values } = useContext(FormContext);
	console.log(`Zakat Ques, vals from store - ${JSON.stringify(values)}`);

	const initialWealthToDefine = {
		estimateValueGold: "",
		estimateValueSilver: "",
		estimateValueCash: "",
		estimateValueLiveStock: "",
		irrigationType: "",
		sheepAmount: "",
		cowsAmount: "",
		camelAmount: "",
		estimateValueSeaWealth: "",
		estimateValueGrainsDriedFruits: "",
		estimateValueAgriculturalProduce: "",
		estimateValueMerchantGoods: "",
		estimateValueBusTrade: "",
		estimateValueSeaTreasure: "",
	};

	const handleSubmit = (vals: any) => {
		console.log("valscalc", vals);
	};

	return (
		<div className="App">
			{values && (
				<>
					<h1> Calculate Your Zakat </h1>
					<h3> Provide Information on Selected Wealth </h3>
					<Formik initialValues={initialWealthToDefine} onSubmit={handleSubmit}>
						{() => {
							values && (
								<Form>
									values.Gold && (
									<div>
										<h4> Have you had the gold for a full lunar year?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyrGold"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</div>
									); values.Gold && values.fullyrGold === "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueGold"
											type="number"
											component={TextField}
											variant="outlined"
											label="Input Amount in Grams"
											required
										/>
									</>
									); values.Silver && (
									<>
										<h4> Have you had the silver for a full lunar year?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyrSilver"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.Silver && values.fullyrSilver === "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueSilver"
											type="number"
											component={TextField}
											variant="outlined"
											label="Input Amount in Grams"
											required
										/>
									</>
									); values.Cash && (
									<>
										<h4> Have you had the cash for a full lunar year?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyrCash"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.Cash && values.fullyrCash === "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueCash"
											type="number"
											component={TextField}
											variant="outlined"
											label="Input Amount in Grams"
											required
										/>
									</>
									); values.Livestock && (
									<>
										<h4> Are the livestock for Trade?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="livestockfortrade"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.Livestock && values.livestockfortrade === "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueLiveStock"
											type="number"
											component={TextField}
											variant="outlined"
											label="Total Estimated Value"
											required
										/>
									</>
									); values.Livestock && values.livestockfortrade === "no" && (
									<>
										<Grid container spacing={2}>
											<Grid item xs={4}>
												<h5> Enter Number of Sheep </h5>
												<Field
													name="sheepAmount"
													type="number"
													variant="outlined"
													component={TextField}
													label="No. of sheep"
													required
												/>
												{/* {props.values.sheepAmount} */}
											</Grid>
											<Grid item xs={4}>
												<h5> Enter Number of Cows </h5>
												<Field
													name="cowsAmount"
													type="number"
													variant="outlined"
													component={TextField}
													label="No. of cows"
													required
												/>
											</Grid>
											<Grid item xs={4}>
												<h5> Enter Number of Camels </h5>
												<Field
													name="camelAmount"
													type="number"
													variant="outlined"
													component={TextField}
													label="No. of camel"
													required
												/>
											</Grid>
										</Grid>
									</>
									); values.AgriculturalProduce && (
									<>
										<h4>
											{" "}
											How have you produced/farmed your Agricultural Produce ?{" "}
										</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="irrigationType"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio required />}
														value="naturalIrrigation"
														label="Fully Naturally Irrigated"
													/>
													<FormControlLabel
														control={<Radio required />}
														value="artificialIrrigation"
														label="Fully Artificially Irrigated"
													/>
													<FormControlLabel
														control={<Radio required />}
														value="mixedIrrigation"
														label="Mixed Irrigation"
													/>
												</div>
											</Field>
										</FormControl>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueAgriculturalProduce"
											type="number"
											component={TextField}
											variant="outlined"
											label="Total Estimated Kgs"
											required
										/>
									</>
									); values.SeaWealth && (
									<>
										<h4> Is the sea treasure for Trade?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="seatrade"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.SeaWealth && values.seatrade === "yes" && (
									<>
										<h4> Have you had it for one full lunar year?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyrSeaTreasure"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.SeaWealth && values.seatrade === "yes" &&
									values.fullyrSeaTreasure === "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueSeaWealth"
											type="number"
											component={TextField}
											variant="outlined"
											label="Total Estimated Value"
											required
										/>
									</>
									); values.GrainsDriedFruits && (
									<>
										<h4>
											{" "}
											Have the Grains and Dried Fruits been with you for a full
											lunar year?{" "}
										</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyrGrainsDriedFruits"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.GrainsDriedFruits && values.fullyrGrainsDriedFruits
									=== "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueGrainsDriedFruits"
											type="number"
											component={TextField}
											variant="outlined"
											label="Amount in kgs"
											required
										/>
									</>
									); values.MerchandiseOrGoods && (
									<>
										<h4> Are the merchant/physical goods for Trade?</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="areGoodsForTrade"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.MerchandiseOrGoods && values.areGoodsForTrade ===
									"yes" && (
									<>
										<h4>
											{" "}
											Have you had the merchant/physical goods with you for a
											full lunar year?{" "}
										</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyrMerchantGoods"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.MerchandiseOrGoods && values.areGoodsForTrade ===
									"yes" && values.fullyrMerchantGoods === "yes" && (
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueMerchantGoods"
											type="number"
											component={TextField}
											variant="outlined"
											label="Total Estimated Value"
											required
										/>
									</>
									); values.BusinessOrTrade && (
									<>
										<h4>
											{" "}
											Has the business principle (business and trade) been with
											you for a full lunar year?{" "}
										</h4>
										<FormControl component="fieldset">
											<Field
												type="radio"
												component={RadioGroup}
												name="fullyBusTrade"
											>
												<div className="flex">
													<FormControlLabel
														control={<Radio />}
														value="yes"
														label="Yes"
													/>
													<FormControlLabel
														control={<Radio />}
														value="no"
														label="No"
													/>
												</div>
											</Field>
										</FormControl>
									</>
									); values.BusinessOrTrade && values.fullyBusTrade === "yes" &&
									(
									<>
										<h4> Total Estimated Value </h4>
										<Field
											name="estimateValueBusTrade"
											type="number"
											component={TextField}
											variant="outlined"
											label="Total Estimated Value"
											required
										/>
									</>
									); values.BurriedTreasure && (
									<div className="btn">
										<h4> Enter estimated value of buried treasure: </h4>
										<Field
											name="estimateValueSeaTreasure"
											type="number"
											component={TextField}
											variant="outlined"
											label="Total Estimated Value"
											required
										/>
									</div>
									); (values.Gold || values.Silver || values.Cash ||
									values.Livestock || values.GrainsDriedFruits ||
									values.AgriculturalProduce || values.SeaWealth ||
									values.MerchandiseOrGoods || values.BusinessOrTrade ||
									values.BurriedTreasure) && (
									<>
										<Button
											className="btn"
											type="submit"
											variant="contained"
											color="secondary"
										>
											Calculate Zakat
										</Button>
									</>
									);
								</Form>
							);
						}}
					</Formik>
				</>
			)}
		</div>
	);
};

export default ZakatQues;
