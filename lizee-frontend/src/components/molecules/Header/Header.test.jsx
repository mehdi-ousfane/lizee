import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
