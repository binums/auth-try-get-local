import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainerDecorator } from '../../utils/storybook-helpers.stories';
import Area from '../../template/pages/charts/area';
import Bar from '../../template/pages/charts/bar';
import Column from '../../template/pages/charts/column';
import Radar from '../../template/pages/charts/radar';
import Mixed from '../../template/pages/charts/mixed';
import ProductView from '../../template/pages/charts/product-view';
import CashFlow from '../../template/pages/charts/cash-flow';
import Pie from '../../template/pages/charts/pie';

const stories = storiesOf('Template Elements/Apex Charts', module).addDecorator(
  StoryContainerDecorator
);
stories
  .add('Area', () => <Area />)
  .add('Bar', () => <Bar />)
  .add('Column', () => <Column />)
  .add('Pie', () => <Pie />)
  .add('Radar', () => <Radar />)
  .add('Mixed', () => <Mixed />)
  .add('Product View', () => <ProductView />)
  .add('Cash Flow', () => <CashFlow />);
