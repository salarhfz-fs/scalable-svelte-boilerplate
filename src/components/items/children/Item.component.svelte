<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { IItem } from '../../../models/items/Item.interface'; 

    export let testid: string = 'not-set';
    export let item: IItem = { id: -1, name: '', isSelected: false };

    const dispatch = createEventDispatcher();

    $: cssClass = (): string => {
        let css = 'item';
        if (item.isSelected) css += ' selected';
        return css.trim();
    }

    function handleClick(item: IItem) {
        dispatch('selectItem', { item });
    }
</script>

<li data-testid={testid} role="button" class={cssClass()} on:click={() => handleClick(item)}>
    <div class="selected-indicator">*</div>
    <div class="name">{item.name} [{item.isSelected}]</div>
</li>

<style>
    li.item {
        padding: 5px;
        outline: solid 1px #eee;
        display: flex;
        align-items: center;
        height: 30px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    li.item .name {
        margin-left: 6px;
    }

    li.item .selected-indicator {
        font-size: 2em;
        line-height: 0.5em;
        margin: 10px 8px 0 8px;
        color: lightgray;
    }

    li.item.selected .selected-indicator {
        color: skyblue;
    }

    li.item:hover {
        background-color: #eee;
    }
</style>

