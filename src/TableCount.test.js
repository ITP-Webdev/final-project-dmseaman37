import React from 'react';
import TableCount from './TableCount';
import Bio from './Bio';
import { render } from '@testing-library/react';

it('renders the totatl content of an array', () => {
  const { container } = render(<TableCount table={['a', 'b', 'c']} />);

  expect(container.textContent).toBe('3 Entries');
});

it('renders the children prop', () => {
  const table = ['a', 'b', 'c'];
  const { container } = render(
    <TableCount table={table}>
      {
        (table) => {
          return (
            <p>{table.length} letters</p>
          );
        }
      }
    </TableCount>
  );

  expect(container.textContent).toBe('3 letters');
});

it('throws an error when table is not included', () => {
  expect(<Bio />).toThrow();
})
