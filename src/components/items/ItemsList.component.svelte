<script lang="ts">
    import type { IItem } from '../../models/items/Item.interface';
    import Item from './children/Item.component.svelte';
    import Loader from '../shared/Loader.component.svelte';
    
    export let isLoading = false;
    export let items: IItem[] = [];
    export let handleSelectItem: (e: CustomEvent<{ item: IItem }>) => void;

</script>

<div>
    <h3>Items</h3>
    {#if isLoading}
        <Loader />
    {/if}
    {#if !isLoading}
        <ul>
            {#each items as item}
                <Item item={item} on:selectItem={handleSelectItem} />
            {/each}
        </ul>
    {/if}
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
