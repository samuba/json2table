<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";

    export let json: string;
    export let title: string;
    export let error: string;

    const dispatch = createEventDispatcher();

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
    <div style="margin-bottom: 0.5rem; display: flex;">
        <label for="title" style="margin-right: 0.5rem;">Title</label>
        <input
            bind:value={title}
            on:input={() => dispatch("inputChanged", {  })}
            style=" width: 100%;"
        />
    </div>
    <textarea
        bind:this={textArea}
        bind:value={json}
        on:input={() => dispatch("inputChanged")}
        style="width: 100%; height: 12rem; resize: vertical;"
    />
</div>
{#if json?.trim() && error}
    <div style="color: red; margin-bottom: 1rem; text-align: center;">
        {error}
    </div>
{/if}
