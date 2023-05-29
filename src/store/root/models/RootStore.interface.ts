import type { IItemsStore } from '@/store/items/models';

/**
 * @name IRootStore
 * @description Interface to represent global store
 */
export interface IRootStore {
    itemsStore: IItemsStore
}

