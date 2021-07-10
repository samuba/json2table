<script lang="ts">
    import { onMount } from "svelte";

    export let json: string;
    export let error: string;

    let textArea: HTMLTextAreaElement;
    onMount(() => {
        textArea.placeholder = `Paste JSON array here. 

Structure:
[
    {"name": "alice", "id": 1},
    {"name": "bob", "id": 2}
]`;
    });
</script>

<div style="padding-left: 1rem; padding-right: 1rem; margin-bottom: 1rem; ">
    <textarea
        bind:this={textArea}
        bind:value={json}
        style="width: 100%; height: 12rem; resize: vertical;"
    />
</div>
{#if json?.trim() && error}
    <div style="color: red; margin-bottom: 1rem; text-align: center;">
        {error}
    </div>
{/if}
