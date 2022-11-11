import InformationCard from './InformationCard';
import { render, fireEvent } from '@testing-library/react';

describe('<InformationCard />', () => {
  test('should match snapshots', () => {
    const { container } = render(<InformationCard />);
    expect(container).toMatchSnapshot();
  });

  test('should call onClick prop', () => {
    const onClick = jest.fn();
    const { container } = render(<InformationCard onClick={onClick} />);

    fireEvent.click(container.querySelector('div') as HTMLElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
