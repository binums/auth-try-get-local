import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, object, text, withKnobs } from '@storybook/addon-knobs';
import { StoryContainerDecorator } from '../utils/storybook-helpers.stories';
import ProductCard from '../template/components/UiElements/ProductCard/ProductCard';
import Image from '../template/components/UiElements/Image/Image';
import InstagramCard from '../template/components/UiElements/InstagramCard/InstagramCard';
import PricingCard from '../template/components/UiElements/PricingCard/PricingCard';
import ListGridCard from '../template/components/UiElements/ListGridCard/ListGridCard';
import { Button } from 'baseui/button';
import WidgetCard from '../template/components/UiElements/WidgetCard/WidgetCard';
import { Avatar } from 'baseui/avatar';

const stories = storiesOf('Template Elements/Card Types', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(StoryContainerDecorator);

stories
  .add('Product', () => (
    <ProductCard
      title={text('Title', 'Product')}
      alignItem={text('Alignment', 'start')}
      price={text('Price', '20.00')}
      href="./"
      thumb={text('Image', '/images/placeholder.png')}
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
  .add('Listing', () => (
    <ListGridCard
      title={text('Title', 'Product')}
      author={text('Author', 'Erica')}
      authorUrl={text('Author Url', 'https://github.com/ericaolliges')}
      websiteUrl={text('Website Url', 'https://get-local.com')}
      description={text(
        'Description',
        "I'm baby organic keytar keffiyeh flexitarian intelligentsia mumblecore. Hashtag aesthetic chicharrones letterpress mustache DIY. Taiyaki everyday carry af farm-to-table man braid subway tile. Vegan letterpress pickled, mustache yuccie food truck roof party seitan tacos. "
      )}
      thumb={text('Image', 'https://placekitten.com/400/400')}
      thumbWidth={text('Width', '10rem')}
      thumbHeight={text('Height', '10rem')}
      variant={text('Variant', 'grid')}
      btn={<Button>I want this!</Button>}
    />
  ))
  .add('Widget', () => (
    <WidgetCard
      color={text('Color', 'rgb(255, 0, 128)')}
      icon={<Avatar name="Kitty" src="https://placekitten.com/400/400" />}
      title={text('Title', 'Widget')}
      description={text(
        'Description',
        "I'm baby organic keytar keffiyeh flexitarian intelligentsia mumblecore. Hashtag aesthetic chicharrones letterpress mustache DIY. Taiyaki everyday carry af farm-to-table man braid subway tile. Vegan letterpress pickled, mustache yuccie food truck roof party seitan tacos. "
      )}
      btntext={text('Button', 'I Click')}
    />
  ))
  .add('Pricing', () => (
    <PricingCard
      title={text('Title', 'Product')}
      type={text('Type', 'Services')}
      price={text('Price', '20.00')}
      btn={text('Button', 'Buy Me!')}
      items={object('Items', [{ id: 0, title: 'Stuff' }])}
      onClick={() => {}}
    />
  ))
  .add('Image Only', () => (
    <Image url={text('Image', '/images/placeholder.png')} alt="Kitty!" />
  ));
