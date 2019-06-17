import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Badge } from '../badge';

describe('badge', () => {
    beforeEach(() => cleanup());

    it('should be rendered correctly', () => {
        const { asFragment } = render(<Badge />);
        expect(asFragment()).toMatchSnapshot();
    });
});
