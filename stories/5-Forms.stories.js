import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import HookForm from '../template/containers/HookForm/Form';
import Form from '../template/containers/Formik/Form';

const stories = storiesOf('Template Elements/Forms', module).addDecorator(
  StoryContainerDecorator
);

stories.add('Hook Form', () => <HookForm />).add('Formik Form', () => <Form />);
