import { Button } from "../../../ui/Button";
import { useCheckout } from "../useCheckout";

export const CheckoutButton = ({ bookingId }) => {
	const { checkout, isCheckingOut } = useCheckout();

	return (
		<Button
			variations="primary"
			size="small"
			onClick={() => checkout(bookingId)}
			disabled={isCheckingOut}
		>
			{isCheckingOut ? "Checking out..." : "Check out"}
		</Button>
	);
};
