<script lang="ts">
    import type { IItem } from '@models/items/Item.interface';
    import Item from './children/Item.component.svelte';
    export let items: IItem[] = [];

</script>

<div>
    <h3>Items</h3>
    <ul>
        {#each items as item}
            <Item item={item} on:selectItem />
        {/each}
    </ul>
</div>

<style>
    ul {
        padding-inline-start: 0;
        padding-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
</style>
