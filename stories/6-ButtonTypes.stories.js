import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import ButtonEndEnhancer from '../components/common/button/withEnhancer/ButtonEndEnhancer';
import { Delete } from 'baseui/icon';
import { KIND } from 'baseui/button';
import ButtonFullWidth from '../components/common/button/fullWidth/ButtonFullWidth';

const stories = storiesOf('Common/Button Types', module).addDecorator(
  StoryContainerDecorator
);
stories
  .add('End Enhancer', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonEndEnhancer
        title="Close"
        enhancer={() => <Delete size={24} />}
        kind={KIND.minimal}
      />
    </div>
  ))
  .add('Full Width', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonFullWidth title="Close" kind={KIND.primary} />
    </div>
  ));
