import { render, screen } from '@testing-library/svelte';

import type { IItem } from '@/models/items/Item.interface';
import component from './Item.component.svelte';

describe('Item.component: rendering', () => {
    it('render an Item text', () => {
        const item: IItem = { id: 1, name: 'Unit test item 1', isSelected: false };
        const testid = 'unit-test-appearance-1';

        render(component, { item, testid });

        const liEl = screen.getByTestId(testid);
        expect(liEl).not.toBeNull();
        expect(liEl.innerHTML).toContain(item.name);
    });

    it('has expected CSS class when selected is true', () => {
        const item: IItem = { id: 1, name: 'Unit test item 2', isSelected: true };
        const testid = 'unit-test-appearance-2';

        render(component, { item, testid });

        const liEl = screen.getByTestId(testid);
        expect(liEl).not.toBeNull();
        expect(liEl.className).toContain('selected');
    });

    it('has expected CSS class when selected is false', () => {
        const item: IItem = { id: 1, name: 'Unit test item 3', isSelected: false };
        const testid = 'unit-test-appearance-3';

        render(component, { item, testid });

        const liEl = screen.getByTestId(testid);
        expect(liEl).not.toBeNull();
        expect(liEl.className).not.toContain('selected');
    });
});

