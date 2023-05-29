import * as SvelteStore from 'svelte/store';

import type { IItemsState, IItemsStore, IItemsStoreActions, IItemsStoreGetters } from './models';
import type { IItem } from '@/models/items/Item.interface';

const writableItemsStore = SvelteStore.writable<IItemsState>({ isLoading: false, items: [] });

export function useItemsStore(): IItemsStore {
    const actions: IItemsStoreActions = {
        loadItems: async () => {
            writableItemsStore.update(state => {
                state.isLoading = true;
                state.items = [];
                return state;
        });
        const mockData: IItem[] = [
            { id: 1, name: 'Item 1', isSelected: false },
            { id: 2, name: 'Item 2', isSelected: false },
            { id: 3, name: 'Item 3', isSelected: false },
        ];
        setTimeout(() => {
            writableItemsStore.update(state => {
                state.items = mockData;
                state.isLoading = false;
                return state;
            });
            console.log('ItemsStore > loadItems: state updated');
        }, 2000);
        },
        toggleItemSelected: async (item: IItem) => {
            writableItemsStore.update(state => {
                const itemIndex = (state.items || []).findIndex(x => x.id === item.id);
                if (itemIndex < 0) {
                    console.warn('ItemsStore > toggleSelectedItem > Could not find item in the state');
                    return;
                }
                state.items[itemIndex].isSelected = !state.items[itemIndex].isSelected;
                state.isLoading = state.isLoading;
                console.log('ItemsStore > loadItems: state updated');
                return state;
            });
        }
    };

    const isLoading = SvelteStore.derived(writableItemsStore, ($state) => $state.isLoading);
    const items = SvelteStore.derived(writableItemsStore, ($state) => $state.items);

    const getters: IItemsStoreGetters = { isLoading, items };

    return { getters, actions };
}

