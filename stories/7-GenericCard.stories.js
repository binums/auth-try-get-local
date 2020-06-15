import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import { withKnobs } from '@storybook/addon-knobs';
import CardHeader from '../components/common/card/cardHeader/CardHeader';
import CardTitle from '../components/common/card/cardTitle/CardTitle';
import CardDivider from '../components/common/card/cardDivider/CardDivider';
import { Delete } from 'baseui/icon';
import ButtonEndEnhancer from '../components/common/button/withEnhancer/ButtonEndEnhancer';
import CustomForm from '../components/common/formik/CustomForm';
import { KIND } from 'baseui/button';
import Card from '../components/common/card/Card';

const stories = storiesOf('Common/Generic Card', module)
  .addDecorator(StoryContainerDecorator)
  .addDecorator(withKnobs({ escapeHTML: false }));
stories.add('Login', () => (
  <Card style={{ display: 'flex', flexFlow: 'column' }}>
    <CardHeader>
      <CardTitle title="Sign Up" />
      <ButtonEndEnhancer
        title="Close"
        enhancer={() => <Delete size={24} />}
        kind={KIND.minimal}
      />
    </CardHeader>
    <CardDivider />
    <CustomForm />
  </Card>
));
