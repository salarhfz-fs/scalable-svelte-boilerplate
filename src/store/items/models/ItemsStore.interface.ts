import * as SvelteStore from 'svelte/store';

import type { IItem } from '@/models/items/Item.interface';

/**
 * @name IItemsStoreActions
 * @description Interface to represent Items store actions
 */
export interface IItemsStoreActions {
    loadItems(): Promise<void>
    toggleItemSelected(item: IItem): Promise<void>
}

/**
 * @name IItemsStoreGetters
 * @description Getters are used to consume data from the store
 */
export interface IItemsStoreGetters {
    isLoading: SvelteStore.Readable<boolean>
    items: SvelteStore.Readable<IItem[]>
}

/**
 * @name IItemsStore
 * @description Interface to represent Items store
 */
export interface IItemsStore {
    actions: IItemsStoreActions
    getters: IItemsStoreGetters
}

