import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const containerStyle = {
  display: 'flex',
  height: '50px',
  width: '80px',
  justifyContent: 'center',
};

export const Active = () => (
  <div style={containerStyle}>
    <Button>Mon bouton</Button>
  </div>
);
export const Inactive = () => (
  <div style={containerStyle}>
    <Button disabled>Mon bouton</Button>
  </div>
);
