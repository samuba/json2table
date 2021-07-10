<script lang="ts">
  import DataTable from "./lib/DataTable.svelte";
  import JsonInput from "./lib/JsonInput.svelte";
  import testData from "../testData.json";

  let json: string; // JSON.stringify(testData, null, 2);
  let toolbarHeight: number;
  let mainHeight: number;
  let pagination = true;
  let editData = false;

  $: jsonParsed = parseJson(json);

  const parseJson = (json: string) => {
    try {
      return { data: JSON.parse(json), error: "" };
    } catch (error) {
      return { data: undefined, error: error + "" };
    }
  };
</script>

<main style="height: 100%;" bind:clientHeight={mainHeight}>
  {#if jsonParsed.data || editData}
    <div
      style="height: 50px; display: flex; justify-content: center; align-items: center; "
      bind:clientHeight={toolbarHeight}
    >
      <label for="editDataBox" style="margin-left: 1rem;">
        <input bind:checked={editData} type="checkbox" id="editDataBox" />
        Edit Data
      </label>
      <label for="paginationBox" style="margin-left: 1rem;">
        <input bind:checked={pagination} type="checkbox" id="paginationBox" />
        Pagination
      </label>
    </div>

    {#if editData || jsonParsed.error}
      <JsonInput bind:json={json} error={jsonParsed.error} />
    {/if}
    <DataTable
      data={jsonParsed.data}
      jsonParseError={jsonParsed.error}
      {pagination}
      height={mainHeight - (toolbarHeight + 6)}
    />
  {:else}
    <center>
      <h1 style="margin-top: 3rem; margin-bottom: 3rem;">JSON ➡️ Table</h1>
      <JsonInput bind:json={json} error={jsonParsed.error} />
    </center>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
    background-color: #f7fdfd;
  }
  :global(html) {
    height: 100%;
  }
</style>
