import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import { withKnobs } from '@storybook/addon-knobs';
import CardHeader from '../components/common/card/cardHeader/CardHeader';
import CardTitle from '../components/common/card/cardTitle/CardTitle';
import { Delete } from 'baseui/icon';
import ButtonEndEnhancer from '../components/common/button/withEnhancer/ButtonEndEnhancer';

const stories = storiesOf('Common/Generic Card', module)
  .addDecorator(StoryContainerDecorator)
  .addDecorator(withKnobs({ escapeHTML: false }));
stories.add('Card Header', () => (
  <CardHeader height="80px">
    <CardTitle title="Sign Up" />
    <ButtonEndEnhancer
      title="Close"
      enhancer={() => <Delete size={24} />}
      titleColor="#9BA8B3"
    />
  </CardHeader>
));
