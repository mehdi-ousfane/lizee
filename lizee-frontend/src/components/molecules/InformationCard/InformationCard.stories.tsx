import { Meta } from '@storybook/react/types-6-0';
import InformationCard from './InformationCard';

const containerStyle = {
  display: 'flex',
  background: 'black',
  height: '80px',
  justifyContent: 'center',
  padding: '50px 0',
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
