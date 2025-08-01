import { useSearchParams } from "react-router-dom";
import { Menus } from "../../../ui/Menus";
import { Spinner } from "../../../ui/Spinner";
import { Table } from "../../../ui/Table";
import { CabinRow } from "../CabinRow";
import { useCabin } from "../useCabin";

export const CabinTable = () => {
	const { isLoading, cabins } = useCabin();
	const [searchParams] = useSearchParams();

	if (isLoading) return <Spinner />;

	const filterValue = searchParams.get("discount") || "all";

	let filteredCabins;
	if (filterValue === "all") {
		filteredCabins = cabins;
	}

	if (filterValue === "no-discount") {
		filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
	}

	if (filterValue === "with-discount") {
		filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
	}
	if (filterValue === "3") {
		filteredCabins = cabins.filter((cabin) => cabin.maxCapacity > 3);
	}

	const sortvalue = searchParams.get("sort") || "name-asc";
	const [field, direction] = sortvalue.split("-");

	const modifier = direction === "asc" ? 1 : -1;
	const sortedCabins = filteredCabins.sort(
		(a, b) => (a[field] - b[field]) * modifier,
	);

	return (
		<Menus>
			<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
				<Table.Header>
					<div />
					<div>Cabin</div>
					<div>Max capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div />
				</Table.Header>

				<Table.Body
					data={sortedCabins}
					render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Menus>
	);
};

export default CabinTable;
