<script lang="ts">
    import type { IItem } from './models/items/Item.interface';
    import ItemsList from './components/items/ItemsList.component.svelte';   

    const items: IItem[] = [
        { id: 1, name: 'Item 1', isSelected: false },
        { id: 2, name: 'Item 2', isSelected: false },
        { id: 3, name: 'Item 3', isSelected: false },
    ];
</script>

<main>
    <div class="home">
        <ItemsList items={items} />
    </div>
</main>
