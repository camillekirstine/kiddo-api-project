// import { FILTER_DEFINITIONS } from "./FilterDefinitions";

export const InputFields = [
    {
      label: 'Forældres Navn',
      placeholder: 'Fornavn Efternavn',
      inputType: 'text',
      class: 'roundedInput',
      model: 'parentName',
      formControlName: 'parentName'
    },
    {
      label: 'Barns Navn',
      placeholder: 'Fornavn Efternavn',
      inputType: 'text',
      class: 'roundedInput',
      model: 'childName',
      formControlName: 'childName'
    },
    {
      label: 'E-mail',
      placeholder: 'mail@mail.dk',
      inputType: 'text',
      class: 'roundedInput',
      model: 'email',
      formControlName: 'email'
    },
    {
      label: 'Telefon',
      placeholder: '12 34 56 78',
      inputType: 'text',
      class: 'roundedInput',
      model: 'phone',
      formControlName: 'phone'
    },
  ];