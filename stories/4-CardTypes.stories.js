import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import ProductCard from '../template/components/UiElements/ProductCard/ProductCard';
import Image from '../template/components/UiElements/Image/Image';
import InstagramCard from '../template/components/UiElements/InstagramCard/InstagramCard';
import PricingCard from '../template/components/UiElements/PricingCard/PricingCard';

const stories = storiesOf('Template Elements/Card Types', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryContainerDecorator);

stories
  .add('Product', () => (
    <ProductCard
      title={text('Title', 'Product')}
      alignItem={text('Alignment', 'start')}
      price={text('Price', '20.00')}
      href="./"
      thumb={text('Image', 'https://placekitten.com/400/400')}
    />
  ))
  .add('Pricing', () => (
    <PricingCard
      title={text('Title', 'Product')}
      type={text('Type', 'Services')}
      price={text('Price', '20.00')}
      btn={text('Button', 'Buy Me!')}
    />
  ))
  .add('Instagram', () => (
    <InstagramCard
      image={text('Image', 'https://placekitten.com/400/400')}
      type={text('Card Type', 'gallery')}
      numberOflike={number('Likes', 125)}
      numberOfView={number('Views', 376)}
      numberOfcomment={number('Comments', 42)}
    />
  ))
  .add('Image Only', () => (
    <Image
      url={text('Image', 'https://placekitten.com/400/400')}
      alt="Kitty!"
    />
  ));
