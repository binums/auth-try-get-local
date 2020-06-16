import React from 'react';
import { isEmpty } from 'lodash';
import { getIn, FormikConsumer, FormikProps } from 'formik';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Checkbox } from 'baseui/checkbox';
import { RadioGroup, Radio } from 'baseui/radio';
import { Datepicker } from 'baseui/datepicker';
import { Select } from 'baseui/select';
import { FormField } from './types';

interface Props {
  name: string;
  placeholder?: string;
  field: FormField;
}

export default function Field({ field, name, placeholder }: Props) {
  return (
    <FormikConsumer>
      {(formikProps) => {
        const { errors, touched, values } = formikProps;
        const error: string | undefined = getIn(errors, name);
        const isTouched: boolean = !!getIn(touched, name);
        const value = getIn(values, name);
        return (
          <FieldSwitch
            name={name}
            field={field}
            placeholder={placeholder}
            pristine={!isTouched || isEmpty(value)}
            hasError={!!error}
            isValid={!error}
            value={value}
            {...formikProps}
          />
        );
      }}
    </FormikConsumer>
  );
}

type FieldSwitchProps = {
  name: string;
  placeholder: string;
  field: FormField;
  pristine: boolean;
  hasError: boolean;
  isValid: boolean;
  value: any;
  handleBlur: Function;
  handleChange: Function;
} & FormikProps<any>;

function FieldSwitch({
  name,
  placeholder,
  pristine,
  isValid,
  field,
  handleChange,
  setFieldValue,
  setFieldTouched,
  value,
}: FieldSwitchProps) {
  const onBlur = () => setFieldTouched(name);

  switch (field.type) {
    case 'text': {
      return (
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          type="text"
          overrides={{
            InputContainer: {
              style: ({ $theme, $isFocused }) => {
                let inputStyle: any = {
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  borderBottomWidth: '2px',
                };
                if (!pristine && isValid && !$isFocused) {
                  inputStyle = {
                    ...inputStyle,
                    borderColor: $theme.colors.mono1000,
                  };
                }
                return inputStyle;
              },
            },
            Input: {
              style: ({ $theme, $isFocused }) => {
                if (!pristine && isValid && !$isFocused) {
                  return {
                    color: $theme.colors.mono1000,
                  };
                }
              },
            },
          }}
        />
      );
    }

    case 'password': {
      return (
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          type="password"
          overrides={{
            InputContainer: {
              style: ({ $theme, $isFocused }) => {
                let inputStyle: any = {
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  borderBottomWidth: '2px',
                };
                if (!pristine && isValid && !$isFocused) {
                  inputStyle = {
                    ...inputStyle,
                    borderColor: $theme.colors.mono1000,
                    color: $theme.colors.mono1000,
                  };
                }
                return inputStyle;
              },
            },
            Input: {
              style: ({ $theme, $isFocused }) => {
                if (!pristine && isValid && !$isFocused) {
                  return {
                    color: $theme.colors.mono1000,
                  };
                }
              },
            },
          }}
        />
      );
    }

    case 'textarea': {
      return (
        <Textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          overrides={{
            InputContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    case 'integer': {
      return (
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={onBlur}
          type="number"
          overrides={{
            InputContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    case 'checkbox': {
      const { checkboxLabel } = field;
      return (
        <Checkbox
          checked={value}
          onChange={(e: any) => setFieldValue(name, e.target.checked)}
          onBlur={onBlur}
        >
          {checkboxLabel}
        </Checkbox>
      );
    }

    case 'radio': {
      const { options } = field;
      return (
        <RadioGroup
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
        >
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      );
    }

    case 'date': {
      return (
        <Datepicker
          value={value}
          placeholder={placeholder}
          onChange={({ date }) => setFieldValue(name, date)}
        />
      );
    }

    case 'select': {
      const { options } = field;
      return (
        <Select
          options={options}
          value={value}
          placeholder={placeholder}
          onChange={(params) => setFieldValue(name, params.value)}
          onBlur={onBlur}
          overrides={{
            ControlContainer: {
              style: () => {
                return { backgroundColor: 'transparent' };
              },
            },
          }}
        />
      );
    }

    default:
      return null;
  }
}
