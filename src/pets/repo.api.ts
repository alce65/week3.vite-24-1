import { Pet } from './model/pet';

const urlBase = 'http://localhost:3000';

export class RepoPets {
  urlPets: URL;
  constructor() {
    this.urlPets = new URL('pets', urlBase);
  }

  async getAll(): Promise<Pet[]> {
    const response = await fetch(this.urlPets);
    if (!response.ok) {
      const message = `Error fetching pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async add(pet: Omit<Pet, 'id'>): Promise<Pet> {
    const response = await fetch(this.urlPets, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const message = `Error adding pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async addWithId(pet: Pet): Promise<Pet> {
    const response = await fetch(this.urlPets, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const message = `Error adding pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async update(pet: Pet): Promise<Pet> {
    const response = await fetch(this.urlPets + '/' + pet.id, {
      method: 'PATCH',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const message = `Error updating pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async delete(pet: Pet): Promise<Pet> {
    const response = await fetch(this.urlPets + '/' + pet.id, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const message = `Error deleting pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }
}
