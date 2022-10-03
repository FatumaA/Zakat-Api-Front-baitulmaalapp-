import { Card, CardContent } from "@material-ui/core";
import ZakatForm from "./ZakatForm";
import ZakatQues from "./ZakatQues";
import DisplayResults from "./DisplayResults";
import FormContext from "./formContext";

const WrapperForForm = () => {
	return (
		<Card>
			<CardContent>
				<FormContext>
					<ZakatForm />
					<ZakatQues />
					{/* <DisplayResults values={} /> */}
				</FormContext>
			</CardContent>
		</Card>
	);
};

export default WrapperForForm;
