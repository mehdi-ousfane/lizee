import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

export const Active = () => <Button>Mon bouton</Button>;
export const Inactive = () => <Button disabled>Mon bouton</Button>;
