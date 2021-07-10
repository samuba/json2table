<script lang="ts">
	import Tabulator from "tabulator-tables";
	import "tabulator-tables/dist/css/tabulator.min.css";

	export let data: any[];
	export let pagination: boolean;
	export let height = 600;
	export let jsonParseError: string;

	let tableError: string;
	let tabulatorTable: any;

	$: {
		console.log({ data });
		buildTable(data, pagination, height);
	}

	const extractColumns = (data: any[]) => {
		// extract columns from every entry 
		// because we do not know if every entry has every field
		const colObj = data.reduce((prev, curr) => {
			Object.entries(curr).forEach(([key, _]) => {
				prev[key] = {
					title: key.toUpperCase(),
					field: key,
					headerFilter:"input", 
				};
			});
			return prev;
		}, {});
		return Object.entries(colObj).reduce((prev, [_, val]) => {
			prev.push(val);
			return prev;
		}, []);
	};

	const buildTable = (data: any[], pagination: boolean, height: number) => {
		if (jsonParseError) {
			tabulatorTable.destroy()
			return;
		}
		tableError = undefined;
		setTimeout(() => { // needs a little bit delay to make table div accessible directly after error
			try {
				const paginationConfig = pagination ? {
					pagination: "local",
					height: height + "px",
				} : {}

				if (tabulatorTable) tabulatorTable.destroy();
				tabulatorTable = new Tabulator("#table", {
					data,
					// persistence:  true, // TODO: ? fetch users config from localstorage and save in url
					resizableColumns: true,
					movableColumns: true,
					headerFilterPlaceholder: "filter...",
					height: "100%",
					layout: "fitDataTable",
					columns: extractColumns(data),
					...paginationConfig,
				});
				console.log({tabulatorTable})
			} catch (err) {
				tableError = err;
			}
		}, 10);
	};
</script>

<center>
	{#if tableError}
		<div style="color: red; margin-top: 1rem">{tableError}</div>
	{:else}
		<div id="table">no data yet</div>
	{/if}
</center>

