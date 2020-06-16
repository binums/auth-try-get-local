import React from 'react';
import { Button, KIND } from 'baseui/button';

interface Props {
  title: string;
  kind?: any;
  type?: any;
}

const ButtonFullWidth: React.FC<Props> = ({ title, kind, type }) => {
  return (
    <Button
      kind={kind}
      type={type}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              width: '100%',
            };
          },
        },
      }}
    >
      {title.toUpperCase()}
    </Button>
  );
};

ButtonFullWidth.defaultProps = {
  title: '',
  kind: KIND.primary,
  type: '',
};

export default ButtonFullWidth;
