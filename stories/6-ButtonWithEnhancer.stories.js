import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import ButtonEndEnhancer from '../components/common/button/withEnhancer/ButtonEndEnhancer';
import { Delete } from 'baseui/icon';

const stories = storiesOf('Common/Button With Enhancer', module).addDecorator(
  StoryContainerDecorator
);
stories.add('End Enhancer', () => (
  <ButtonEndEnhancer
    title="Close"
    enhancer={() => <Delete size={24} />}
    titleColor="#9BA8B3"
  />
));
