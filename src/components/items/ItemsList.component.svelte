<script lang="ts">
    export let items: any[] = [];
</script>

<div>
    <h3>Items</h3>
    <ul>
        {#each items as item}
            <li>{item.name}</li>
        {/each}
    </ul>
</div>

