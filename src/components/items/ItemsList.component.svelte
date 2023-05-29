<script lang="ts">
    import type { IItem } from '../../models/items/Item.interface';
    export let items: IItem[] = [];
</script>

<div>
    <h3>Items</h3>
    <ul>
        {#each items as item}
            <li>{item.name}</li>
        {/each}
    </ul>
</div>

