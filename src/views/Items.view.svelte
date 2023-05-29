<script lang="ts">
    import { onMount } from 'svelte';

    import type { IItem } from '@/models/items/Item.interface';
    import ItemsList from '../components/items/ItemsList.component.svelte';
    import { useAppStore } from '../store';

    const { itemsStore } = useAppStore();
    const { isLoading, items } = itemsStore.getters;

    function onSelectItem(e: CustomEvent<{ item: IItem }>) {
        itemsStore.actions.toggleItemSelected(e.detail.item);
    }

    onMount(async () => {
        itemsStore.actions.loadItems()
    });
</script>

<div>
    <ItemsList isLoading={$isLoading} items={$items} handleSelectItem={onSelectItem} />
</div>
