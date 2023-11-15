import { FILTER_DEFINITIONS } from "./FilterDefinitions";

export const inputFields = [
    {
      label: 'Titel',
      placeholder: 'Eks. Fodbold',
      inputType: 'text',
      class: 'roundedInput',
      model: 'title',
      formControlName: 'title'
    },
    {
      label: 'Undertitel',
      placeholder: 'Eks. Fodbold i parken',
      inputType: 'text',
      class: 'roundedInput',
      model: 'subtitle',
      formControlName: 'subtitle'
    },
    {
      label: 'Max. deltagere',
      placeholder: 'Eks. 5',
      inputType: 'number',
      class: 'roundedInput',
      model: 'participants',
      formControlName: 'participants'
    },
   
    {
      label: 'Aldersgruppe',
      placeholder: 'Vælg aldersgruppe',
      options: FILTER_DEFINITIONS.ageGroups.values,
      inputType: 'select',
      class: 'roundedInput',
      model: 'ageGroup',
      formControlName: 'ageGroup'
    },
    {
      label: 'Kategori',
      placeholder: 'Vælg kategori',
      options: FILTER_DEFINITIONS.categories.values,
      inputType: 'select',
      class: 'roundedInput',
      model: 'category',
      formControlName: 'category'
    },
    {
      label: 'Lokation',
      placeholder: 'Roskilde',
      inputType: 'text',
      class: 'roundedInput',
      model: 'location',
      formControlName: 'location'
    },
    {
      label: 'Region',
      placeholder: 'Vælg Region',
      inputType: 'select',
      class: 'roundedInput',
      options: FILTER_DEFINITIONS.regions.values,
      model: 'region',
      formControlName: 'region'
    },
    {
      label: 'Dato',
      placeholder: '31-10-2023',
      inputType: 'date',
      class: 'dateTimeInput',
      model: 'date',
      formControlName: 'date'

    },
    {
      label: 'Tid',
      placeholder: '17:00',
      inputType: 'time',
      class: 'dateTimeInput',
      model: 'time',
      formControlName: 'time'
    },
    {
      label: 'Beskrivelse',
      inputType: 'textarea',
      placeholder: 'Beskrivelse af aktivitet',
      model: 'description',
      class: 'roundedInput',
      formControlName: 'description'
    },
    {
      label: 'Billede',
      placeholder: 'F.eks. Fodbold',
      inputType: 'file',
      model: 'image',
      formControlName: 'image'
    },
  ];