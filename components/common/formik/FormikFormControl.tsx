import React from 'react';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { getIn, FormikConsumer } from 'formik';

interface Props {
  name: string;
  label?: string;
  caption?: string;
}

const FormikFormControl: React.FC<Props> = ({
  name,
  label,
  caption,
  children,
}) => {
  return (
    <FormikConsumer>
      {({ errors, touched, isValid }) => {
        const error: string | undefined = getIn(errors, name);
        return (
          <Block marginBottom="30px">
            <FormControl
              label={label.toUpperCase()}
              caption={caption}
              error={error}
              overrides={{
                Label: {
                  style: ({ $theme }) => {
                    return {
                      color: $theme.colors.mono600,
                      'label + div:focus-within': {
                        color: $theme.colors.primary
                      }
                    };
                  }
                }
              }}
            >
              {children}
            </FormControl>
          </Block>
        );
      }}
    </FormikConsumer>
  );
};

export default FormikFormControl;
