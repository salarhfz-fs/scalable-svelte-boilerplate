import type { IItem } from '@/models/items/Item.interface';
/**
 * @name IItemsState
 * @description Interface to represent Items state
 */
export interface IItemsState {
    isLoading: boolean
    items: IItem[]
}

