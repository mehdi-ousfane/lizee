import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  test('should match snapshots', () => {
    const { container } = render(<Button>My button</Button>);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshots when disabled', () => {
    const { container } = render(<Button disabled>My button</Button>);
    expect(container).toMatchSnapshot();
  });

  test('should call onClick prop', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>My button</Button>);

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("shouldn't call onClick prop when disabled", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClick} disabled={true}>
        My button
      </Button>,
    );

    fireEvent.click(getByRole('button'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
