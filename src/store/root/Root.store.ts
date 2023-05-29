import type { IRootStore } from './models';
import { useItemsStore } from '../items';

export function useAppStore(): IRootStore {
    return {
        itemsStore: useItemsStore(),
    };
}

