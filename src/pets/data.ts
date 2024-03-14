import { Pet } from './model/pet';

export const getPets = (): Pet[] => {
  const PETS = [
    {
      id: crypto.randomUUID(),
      name: 'Buddy',
      breed: 'Golden Retriever',
      image: 'https://source.unsplash.com/random/300x300/?golden-retriever',
      // Alt 'https://unsplash.com/es/fotos/golden-retriever-con-collar-negro-f0Y_FDt0xJo',
      isAdopted: false,
      adopter: '',
    },
    {
      id: crypto.randomUUID(),
      name: 'Daisy',
      breed: 'Beagle',
      image: 'https://source.unsplash.com/random/300x300/?beagle',
      isAdopted: false,
      adopter: '',
    },
    {
      id: crypto.randomUUID(),
      name: 'Charlie',
      breed: 'Poodle',
      image: 'https://source.unsplash.com/random/300x300/?poodle',
      isAdopted: false,
      adopter: '',
    },
    {
      id: crypto.randomUUID(),
      name: 'Lucy',
      breed: 'Bulldog',
      image: 'https://source.unsplash.com/random/300x300/?bulldog',
      isAdopted: false,
      adopter: '',
    },
    {
      id: crypto.randomUUID(),
      name: 'Max',
      breed: 'Labrador',
      image: 'https://source.unsplash.com/random/300x300/?labrador',
      isAdopted: false,
      adopter: '',
    },
  ];

  const pets = localStorage.getItem('pets');

  if (!pets) {
    localStorage.setItem('pets', JSON.stringify(PETS));
    return PETS;
  }

  return JSON.parse(pets);
};
