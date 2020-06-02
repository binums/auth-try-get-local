import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import ProductCard from '../template/components/UiElements/ProductCard/ProductCard';
import Image from '../template/components/UiElements/Image/Image';

const stories = storiesOf('Template Elements/Product Card', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryContainerDecorator);

stories
  .add('Default', () => (
    <ProductCard
      title={text('Title', 'Product')}
      alignItem={text('Alignment', 'start')}
      price={text('Price', '20.00')}
      href="./"
      thumb={text('Image', 'https://placekitten.com/400/400')}
    />
  ))
  .add('Image Only', () => (
    <Image
      url={text('Image', 'https://placekitten.com/400/400')}
      alt="Kitty!"
    />
  ));
