import { Meta } from '@storybook/react/types-6-0';
import InformationCard from './InformationCard';

const containerStyle = {
  display: 'flex',
  background: 'black',
};

export default {
  title: 'molecules/InformationCard',
  component: InformationCard,
} as Meta;

export const Rounded = () => (
  <div style={containerStyle}>
    <InformationCard>
      <p>Coins arrondis</p>
    </InformationCard>
  </div>
);
