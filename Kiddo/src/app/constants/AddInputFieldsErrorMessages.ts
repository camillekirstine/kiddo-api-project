import { ErrorMessages } from "../types/ErrorMessage";

export const errorMessages: ErrorMessages = {
  name: [
    { type: 'required', message: 'Indtast dit navn' },
    { type: 'minlength', message: 'Dit navn skal være minimum 2 karakterer.' },
  ],
  email: [
    { type: 'required', message: 'Indtast din email ' },
    { type: 'email', message: 'Ugyldig email, tjek evt formatet og prøv igen' },
  ],
  phone: [
    { type: 'required', message: 'Indtast telefonnummer' },
    { type: 'pattern', message: 'Dit nummer skal være på 8 tal' },
  ],
  title: [{ type: 'required', message: 'Indtast Aktivitets navn' }],
  ageGroup: [{ type: 'required', message: 'Vælg en aldersgruppe' }],
  category: [{ type: 'required', message: 'Vælg en kategori' }],
  location: [{ type: 'required', message: 'Indtast lokation' }],
  region: [{ type: 'required', message: 'Vælg en region' }],
  date: [{ type: 'required', message: 'Vælg en dato' }],
  time: [{ type: 'required', message: 'Vælg et tidspunkt' }],
  description: [{ type: 'required', message: 'Skriv en kort beskrivelse' }],
};
