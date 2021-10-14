<script lang="ts">
	import Tabulator from "tabulator-tables";
	import "tabulator-tables/dist/css/tabulator.min.css";

	export let data: any[];
	export let pagination: boolean;
	export let height = 600;
	export let width = 600;
	export let jsonParseError: string;

	let tableElement: HTMLElement;
	let tableError: string;
	let tabulatorTable: any;

	$: {
		console.log({ data });
		buildTable(data, pagination, height);
	}

	const extractFormatter = (val: any) => {
		if (typeof val == "string") {
			if (val.startsWith("https://") || val.startsWith("http://")) {
				return "link";
			}
		}
	};

	const extractColumns = (data: any[]) => {
		// extract columns from every entry
		// because we do not know if every entry has every field
		const colObj = data.reduce((prev, curr) => {
			Object.entries(curr).forEach(([key, val]) => {
				prev[key] = {
					title: key.toUpperCase(),
					field: key,
					headerFilter: "input",
					formatter: extractFormatter(val),
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
			tabulatorTable.destroy();
			return;
		}
		tableError = undefined;
		setTimeout(() => {
			// needs a little bit delay to make table div accessible directly after error
			try {
				const paginationConfig = pagination
					? {
							pagination: "local" as "local" | "remote",
							height: height + "px",
					  }
					: {};

				if (tabulatorTable) tabulatorTable.destroy();
				tabulatorTable = new Tabulator("#table", {
					data,
					resizableColumns: true,
					movableColumns: true,
					headerFilterPlaceholder: "filter...",
					height: "100%",
					layout: "fitDataTable",
					columns: extractColumns(data),
					...paginationConfig,
				});
				if (pagination) {
					tableElement.style.maxWidth = width - 2 + "px";
				}
				console.log({ tabulatorTable });
			} catch (err) {
				tableError = err;
			}
		}, 10);
	};
</script>

<center style="background-color: #e6e6e6;">
	{#if tableError}
		<div style="color: red; margin-top: 1rem">{tableError}</div>
	{:else}
		<div id="table" bind:this={tableElement}>Loading...</div>
	{/if}
</center>

<style>
	:global(.tabulator-tableHolder) {
		min-height: calc(100% - 79px) !important;
		height: calc(100% - 79) !important;
		max-height: calc(100% - 79) !important;
	}

	#table {
		border-bottom: 0 !important;
	}
</style>
