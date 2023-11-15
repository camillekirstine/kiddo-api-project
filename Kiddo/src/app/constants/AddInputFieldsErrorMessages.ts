import { ErrorMessages } from "../types/ErrorMessage";

export const errorMessages: ErrorMessages = {
  title: [
    { type: 'required', message: 'Indtast venligst titel' },
    { type: 'minlength', message: 'Din titel skal være minimum 2 karakterer.' },
  ],
  subtitle: [
    { type: 'required', message: 'Indtast venligst undertitel' },

  ],
  participants: [
    { type: 'required', message: 'Indtast antal deltagere' },
    { type: 'maxlength', message: 'Antal deltagere kan max være 2 tal' },
  ],
  
  ageGroup: [{ type: 'required', message: 'Vælg en aldersgruppe' }],
  category: [{ type: 'required', message: 'Vælg en kategori' }],
  location: [{ type: 'required', message: 'Indtast lokation' }],
  region: [{ type: 'required', message: 'Vælg en region' }],
  date: [{ type: 'required', message: 'Vælg en dato' }],
  time: [{ type: 'required', message: 'Vælg et tidspunkt' }],
  description: [{ type: 'required', message: 'Skriv en kort beskrivelse' }],
  image: [{ type: 'required', message: 'Upload et billede' }],
};
