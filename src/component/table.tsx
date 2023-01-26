import standardStyle from "./standard.module.css";

type TableArguments = {
	styles?: { [key: string]: string },
	data?: { [key: string]: string | number }[],
	checkbox?: boolean,
	filter?: boolean
}

const dummyData: { ID: number, Vorname: string, Nachname: string }[] = [{
	ID: 1,
	Vorname: "Luca",
	Nachname: "Sonntag"
}, {
	ID: 2,
	Vorname: "Jennifer",
	Nachname: "Schmidt"
}, {
	ID: 3,
	Vorname: "Nicolas",
	Nachname: "Wolf"
}, {
	ID: 4,
	Vorname: "Arne",
	Nachname: "Rosenberger"
},];

export default function Table({styles = standardStyle, data = dummyData, checkbox = true, filter}: TableArguments) {

	function checkBox(name: string, id: string) {
		return <input type="checkbox" name={name} id={id} className={styles.selectCheckbox}/>;
	}

	const dataKeys: string[] = Object.keys(data[0]);
	const tableHead: JSX.Element[] = dataKeys?.map((value, index) => {
		return <th className={styles.tableHeadRowColumn} key={"table-head-row-column" + index}>{value}</th>;
	});


	const tableHeadRow: JSX.Element[] = checkbox ? [<th className={styles.tableHeadRowColumnCheckbox}
														key={"table-head-row-column-empty"}></th>].concat(tableHead) : tableHead;

	const tableBodyRows: JSX.Element[] = data?.map((value, index) => {
		const rows: JSX.Element[] = [];

		if (checkbox) {
			rows.push(
				<td className={styles.tableBodyRowColumn} key={"table-body-row-column-checkbox" + index}>
					{checkBox("checkBoxSelect", index.toString())}
				</td>
			);
		}

		for (let valueKey in value) {
			rows.push(
				<td className={styles.tableBodyRowColumn} key={"table-body-row-column" + valueKey}>
					{value[valueKey]}
				</td>
			);
		}
		return <tr className={styles.tableBodyRow} key={"table-body-row" + index}>
			{rows}
		</tr>;
	});


	return (
		<table className={styles.table}>
			<thead className={styles.tableHead}>
			<tr className={styles.tableHeadRow} key={"tableHeadRow"}>
				{tableHeadRow}
			</tr>
			</thead>
			<tbody className={styles.tableBody}>
			{tableBodyRows}
			</tbody>
		</table>
	);
}