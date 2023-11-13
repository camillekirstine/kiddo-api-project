import { FILTER_DEFINITIONS } from "./FilterDefinitions";

export const inputFields = [
    {
      label: 'Navn',
      placeholder: 'Jens',
      inputType: 'text',
      class: 'roundedInput',
      model: 'name',
    },
    {
      label: 'Email',
      placeholder: 'email@email.dk',
      inputType: 'text',
      class: 'roundedInput',
      model: 'email',
    },
    {
      label: 'Telefon',
      placeholder: '88888888',
      inputType: 'text',
      class: 'roundedInput',
      model: 'phone',
    },
    {
      label: 'Aktivitets navn',
      placeholder: 'F.eks. Fodbold',
      inputType: 'text',
      class: 'roundedInput',
      model: 'title',
    },
    {
      label: 'Aldersgruppe',
      placeholder: 'Vælg aldersgruppe',
      options: FILTER_DEFINITIONS.ageGroups.values,
      inputType: 'select',
      class: 'roundedInput',
      model: 'ageGroup'
    },
    {
      label: 'Kategori',
      placeholder: 'Vælg kategori',
      options: FILTER_DEFINITIONS.categories.values,
      inputType: 'select',
      class: 'roundedInput',
      model: 'category',
    },
    {
      label: 'Lokation',
      placeholder: 'Roskilde',
      inputType: 'text',
      class: 'roundedInput',
      model: 'location',
    },
    {
      label: 'Region',
      placeholder: 'Vælg Region',
      inputType: 'select',
      class: 'roundedInput',
      options: FILTER_DEFINITIONS.regions.values,
      model: 'region'
    },
    {
      label: 'Dato',
      placeholder: '31-10-2023',
      inputType: 'date',
      class: 'dateTimeInput',
      model: 'date',
    },
    {
      label: 'Tid',
      placeholder: '17:00',
      inputType: 'time',
      class: 'dateTimeInput',
      model: 'time',
    },
    {
      label: 'Beskrivelse',
      inputType: 'textarea',
      placeholder: 'Beskrivelse af aktivitet',
      model: 'description',
      class: 'roundedInput'
    }
  ];