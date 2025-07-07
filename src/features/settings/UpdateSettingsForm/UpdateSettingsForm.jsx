import { Form } from "../../../ui/Form";
import { FormRow } from "../../../ui/FormRow";
import { Input } from "../../../ui/Input";
import { Spinner } from "../../../ui/Spinner";
import { useSettings } from "../useSettings";
import { useUpdateSettings } from "../useUpdateSettings";

export const UpdateSettingsForm = () => {
	const { isUpdating, updateSettings } = useUpdateSettings();
	const {
		isLoading,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {},
	} = useSettings();

	function handleSubmit(e, name) {
		const { value } = e.target;
		if (!value) return;

		updateSettings({ [name]: value });
	}

	if (isUpdating) return <Spinner />;

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				<p>Minimum nights</p>
				<Input
					type="number"
					id="min-nights"
					disabled={isUpdating || isLoading}
					placeholder={minBookingLength}
					onBlur={(e) => handleSubmit(e, "minBookingLength")}
				/>
			</FormRow>

			<FormRow label="Maximum nights/booking">
				<p>Maximum nights</p>
				<Input
					type="number"
					id="max-nights"
					disabled={isUpdating || isLoading}
					placeholder={maxBookingLength}
					onBlur={(e) => handleSubmit(e, "maxBookingLength")}
				/>
			</FormRow>

			<FormRow label="Maximum guests/booking">
				<p>Maximum guests</p>
				<Input
					type="number"
					id="max-guests"
					disabled={isUpdating || isLoading}
					placeholder={maxGuestsPerBooking}
					onBlur={(e) => handleSubmit(e, "maxGuestsPerBooking")}
				/>
			</FormRow>

			<FormRow label="Breakfast price">
				<p>Breakfast price</p>
				<Input
					type="number"
					id="breakfast-price"
					disabled={isUpdating || isLoading}
					placeholder={breakfastPrice}
					onBlur={(e) => handleSubmit(e, "breakfastPrice")}
				/>
			</FormRow>
		</Form>
	);
};

export default UpdateSettingsForm;
