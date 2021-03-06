import { FormDataSchema, FormUISchema } from '../components/common/formik/types';

export const dataSchema: FormDataSchema = {
  fields: {
    email: {
      type: 'text',
      label: 'Email',
      placeholder: 'Select to enter your email...',
      caption:
        'Make sure to enter a functional email to avoid account closure due to non compliance.',
      required: true,
    },
    password: {
      type: 'password',
      label: 'Password',
      placeholder: 'Password should be 8 characters long',
      caption:
        'Do not share with anyone, instead invite others to your account for shared shopping experience.',
      required: true,
    },
    mobile: {
      type: 'text',
      label: 'Mobile Number',
      placeholder: '+1 type your mbile number here',
      caption:
        'Next, You will receive a text message to confirm your account with a 4 digit PIN.',
      required: true,
    },
  },
};

export const uiSchema: FormUISchema = {
  sections: [
    {
      title: 'Formik Form',
      fields: ['email', 'password', 'mobile'],
    },
  ],
};
