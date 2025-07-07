import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constans";
import {
	Buttons,
	P,
	PaginationButton,
	StyledPagination,
} from "./Pagination.styled";

export const Pagination = ({ count, currentPage }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const pageCount = Math.ceil(count / PAGE_SIZE);

	function nextPage() {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;

		searchParams.set("page", next);
		setSearchParams(searchParams);
	}

	function pervPage() {
		const perv = currentPage === 1 ? currentPage : currentPage - 1;

		searchParams.set("page", perv);
		setSearchParams(searchParams);
	}

	if (count <= PAGE_SIZE) return null;
	return (
		<StyledPagination>
			<P>
				showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> of{" "}
				<span>
					{currentPage === pageCount ? count : currentPage * PAGE_SIZE}
				</span>{" "}
				from <span>{count}</span>
			</P>

			<Buttons>
				<PaginationButton onClick={pervPage} disabled={currentPage === 1}>
					<HiChevronLeft /> Previuse
				</PaginationButton>
				<PaginationButton
					onClick={nextPage}
					disabled={currentPage === pageCount}
				>
					Next
					<HiChevronRight />
				</PaginationButton>
			</Buttons>
		</StyledPagination>
	);
};
