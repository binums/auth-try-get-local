import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import PageTitle from '../components/template/UiElements/PageTitle/PageTitle';

const stories = storiesOf('UI Elements/Page Title', module);
stories.addDecorator(withKnobs).addDecorator(StoryContainerDecorator);
stories.add('Default', () => (
  <PageTitle
    title={text('title', 'Page Title')}
    subtitle={text('subtitle', 'Subtitle')}
    backdrop={boolean('show backdrop', false)}
    bgColor={text('background', '')}
  />
));
