import React from 'react';
import {Button, KIND} from 'baseui/button';
import { ReactComponentLike } from 'prop-types';

type ButtonEndEnhancerProps = {
  title: string;
  kind: any;
  enhancer: ReactComponentLike;
};

const ButtonEndEnhancer = ({
  title,
  kind,
  enhancer,
}: ButtonEndEnhancerProps) => {
  return (
    <Button
      kind={kind}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return kind === KIND.minimal && {
              paddingRight: 0,
              paddingLeft: 0,
              ':active': {
                background: $theme.colors.buttonMinimalFill,
                color: $theme.colors.buttonMinimalActive
              }
            };
          },
        },
      }}
      endEnhancer={enhancer}
    >
      {title.toUpperCase()}
    </Button>
  );
};

ButtonEndEnhancer.defaultProps = {
  title: '',
  kind: KIND.primary,
  enhancer: null,
};

export default ButtonEndEnhancer;
