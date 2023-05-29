<script lang="ts">
    import type { IItem } from '../../models/items/Item.interface';
    export let items: IItem[] = [];

    function handleClick(item: IItem) {
        item.isSelected = !item.isSelected;
        items = items;
        console.log('handleClick', item.id, item.isSelected);
    }
</script>

<div>
    <h3>Items</h3>
    <ul>
        {#each items as item}
            <li on:click={() => handleClick(item)}>{item.name} [{item.isSelected}]</li>
        {/each}
    </ul>
</div>

