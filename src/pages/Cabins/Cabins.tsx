import React from "react";
import { AddCabin } from "../../features/cabins/AddCabin";
import { CabinTable } from "../../features/cabins/CabinTable";
import { CabinTableOperation } from "../../features/cabins/CabinTableOperation";
import { Heading } from "../../ui/Heading";
import { Row } from "../../ui/Row";

const Cabins: React.FC = () => {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All cabins</Heading>
				<CabinTableOperation />
			</Row>

			<Row>
				<CabinTable />

				<AddCabin />
			</Row>
		</>
	);
};
export default Cabins;
