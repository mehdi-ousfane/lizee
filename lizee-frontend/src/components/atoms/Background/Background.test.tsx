import { render } from '@testing-library/react';
import Background from './Background';

describe('<Background />', () => {
  test('should render without crashing', () => {
    const { container } = render(<Background>Child content</Background>);
    expect(container).toMatchSnapshot();
  });

  test('should display children content', () => {
    const { getByText } = render(<Background>Child content</Background>);
    expect(getByText('Child content')).toBeTruthy();
  });
});
