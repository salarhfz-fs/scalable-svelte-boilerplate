<script lang="ts">
    import type { IItem } from './models/items/Item.interface';
    import ItemsList from './components/items/ItemsList.component.svelte';   

    let items: IItem[] = [
        { id: 1, name: 'Item 1', isSelected: false },
        { id: 2, name: 'Item 2', isSelected: false },
        { id: 3, name: 'Item 3', isSelected: false },
    ];

    function onSelectItem(e: CustomEvent<{ item: IItem }>) {
        const item = e.detail.item;
        item.isSelected = !item.isSelected;
        items = items;
    }
</script>

<main>
    <div class="home">
        <ItemsList items={items} on:selectItem={onSelectItem} />
    </div>
</main>

<style>
    .home {
        padding: 20px;
    }
</style>

