import { useUser } from "../useUser";
import { Avatar, StyledUserAvatar } from "./UserAvatar.styled";

export const UserAvatar = () => {
	const { user } = useUser();
	const { fullName, avatar } = user.user_metadata;

	return (
		<StyledUserAvatar>
			<Avatar
				src={avatar || "default-user.jpg"}
				alt={`avatar of ${fullName}`}
			/>
			<span>{fullName} </span>
		</StyledUserAvatar>
	);
};
