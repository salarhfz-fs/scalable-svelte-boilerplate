<script lang="ts">
    import ItemsList from './components/items/ItemsList.component.svelte';   

    const items: any[] = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
</script>

<main>
    <div class="home">
        <ItemsList items={items} />
    </div>
</main>
