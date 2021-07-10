<script lang="ts">
    export let json: string;
    export let error: string;
</script>

<div style="padding-left: 1rem; padding-right: 1rem; margin-bottom: 1rem;">
    <textarea
        placeholder="Paste JSON array here"
        bind:value={json}
        style="width: 100%; height: 12rem; resize: vertical;"
    />
</div>
{#if json?.trim() && error}
    <div style="color: red; margin-bottom: 1rem; text-align: center;">{error}</div>
{/if}
