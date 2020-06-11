import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { StoryContainerDecorator } from '../../utils/storybook-helpers.stories';
import PageTitle from '../../template/components/UiElements/PageTitle/PageTitle';
import ImplementedTitle from '../../template/pages/uielements/page-title';

const stories = storiesOf('Template Elements/Page Title', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(StoryContainerDecorator);
stories
  .add('Default', () => (
    <PageTitle
      title={text('title', 'Page Title')}
      subtitle={text('subtitle', 'Subtitle')}
      backdrop={boolean('show backdrop', false)}
      bgColor={text('background', '')}
    />
  ))
  .add('Implemented', () => <ImplementedTitle />);
