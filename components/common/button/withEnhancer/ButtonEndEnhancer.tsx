import React from 'react';
import { Button, KIND } from 'baseui/button';
import { ReactComponentLike } from 'prop-types';

interface Props {
  title: string;
  kind: any;
  enhancer: ReactComponentLike;
}

const ButtonEndEnhancer: React.FC<Props> = ({ title, kind, enhancer }) => {
  return (
    <Button
      kind={kind}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return (
              kind === KIND.minimal && {
                paddingRight: 0,
                paddingLeft: 0,
                ':active': {
                  background: $theme.colors.buttonMinimalFill,
                  color: $theme.colors.buttonMinimalActive,
                },
              }
            );
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
