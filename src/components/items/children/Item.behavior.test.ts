import { render, screen, fireEvent } from '@testing-library/svelte';

import type { IItem } from '@/models/items/Item.interface';
import ItemComponent from './Item.component.svelte';

describe('Item.component: behavior', () => {
    it('click event invokes onItemSelect handler as expected', async () => {
        const item: IItem = { id: 1, name: 'Unit test item 1', isSelected: false };
        const testid = 'unit-test-behavior-1';

        const { component } = render(ItemComponent, { item, testid });

        const liEl = screen.getByTestId(testid);
        const mockOnItemSelect = vitest.fn();
        component.$on('selectItem', mockOnItemSelect);
        await fireEvent.click(liEl);
        expect(mockOnItemSelect).toHaveBeenCalledTimes(1);
    });
});

