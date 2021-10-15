<script lang="ts">
  import DataTable from "./lib/DataTable.svelte";
  import JsonInput from "./lib/JsonInput.svelte";
  import jsonUrl from "json-url";
  import { onMount } from "svelte";

  let json: string;
  let toolbarHeight: number;
  let mainHeight: number;
  let mainWidth: number;
  let editData = false;
  let shareUrl = "";
  let creatingUrl = false;
  let title = "";
  let doNotNavigateOnHashChange = false;
  const codec = jsonUrl("lzma");

  $: jsonParsed = parseJson(json);

  $: showTable = jsonParsed.data || editData;

  // poor mans router
  const locationHashChanged = () => {
    if (doNotNavigateOnHashChange) {
      doNotNavigateOnHashChange = false;
      return;
    }
    if (!window.location.hash) {
      // the start page
      json = "";
      shareUrl = "";
    } else {
      // table is shown with data from shareable link
      loadDataFromLocationHash();
    }
  };

  onMount(() => {
    loadDataFromLocationHash();
  });

  const loadDataFromLocationHash = () => {
    const encodedData = window.location.hash.substring(0);
    if (!encodedData) return;

    // site was opened via sharable url
    shareUrl = window.location.hash;
    codec.decompress(encodedData).then((decodedData) => {
      console.log("decoded from URL", decodedData);
      json = JSON.stringify(decodedData.json.data, null, 2);
      title = decodedData.title;
      document.title = decodedData.title;
    });
  };

  const createShareUrl = () => {
    creatingUrl = true;
    codec
      .compress({ json: jsonParsed, title })
      .then((encodedData) => {
        shareUrl = "#" + encodedData;
        window.location.hash = shareUrl;
        creatingUrl = false;
      })
      .catch((err) => {
        creatingUrl = false;
        console.error("Could not create sharable url", err);
      });
  };

  const clearShareUrl = () => {
    shareUrl = "";
    doNotNavigateOnHashChange = true;
    window.location.hash = "";
  };

  const parseJson = (json: string) => {
    try {
      return { data: JSON.parse(json), error: "" };
    } catch (error) {
      return { data: undefined, error: error + "" };
    }
  };

  const setDummyData = async () => {
    const result = await fetch("movies.json");
    json = await result.text();
  };
</script>

<main
  style="height: 100%; width: 100%;"
  bind:clientHeight={mainHeight}
  bind:clientWidth={mainWidth}
>
  {#if showTable}
    <div
      style="height: 2.5rem; display: flex; justify-content: space-between; align-items: center; "
      bind:clientHeight={toolbarHeight}
    >
      <div style="margin-left: 1rem;">
        <h1 style="font-size: 1rem;">{title}</h1>
      </div>

      <div style="margin-right: 1rem;">
        {#if shareUrl}
          <a href={shareUrl} target="_blank" style="">Link to this table</a>
        {:else}
          <button
            on:click={createShareUrl}
            disabled={creatingUrl}
            title="No data is saved on any servers!"
          >
            {creatingUrl
              ? "Creating permanent link..."
              : "Create permanent link to this table"}
          </button>
        {/if}
        <label for="editDataBox" style="margin-left: 1rem;">
          <input bind:checked={editData} type="checkbox" id="editDataBox" />
          Edit
        </label>
      </div>
    </div>

    {#if editData || jsonParsed.error}
      <JsonInput
        bind:json
        bind:title
        error={jsonParsed.error}
        on:inputChanged={clearShareUrl}
      />
    {/if}
    <DataTable
      data={jsonParsed.data}
      jsonParseError={jsonParsed.error}
      pagination={true}
      height={mainHeight - (toolbarHeight + 5)}
      width={mainWidth}
    />
  {:else}
    <div style="display: flex; flex-direction: column; align-items: stretch;">
      <h1 style="margin-top: 3rem; text-align: center;">JSON ➡️ Table</h1>
      <h4 style="text-align: center; margin-bottom: 3rem;">
        Create an interactive spreadsheet table and share it with others.
        <br />
        No data is ever stored on the server! ✨
      </h4>
      <JsonInput bind:json bind:title error={jsonParsed.error} />
      <center>
        <button on:click={setDummyData} style="align-self: stretch;">
          Use dummy data
        </button>
      </center>
    </div>
  {/if}
</main>

<svelte:window on:hashchange={locationHashChanged} />

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
