export interface Candidate {
  id: number;
  name: string;
  photo: string;
  number: number;
  batch: number;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Anies Baswedan",
    photo: "/Anies.jpg",
    number: 1,
    batch: 2020,
  },
  {
    id: 2,
    name: "Ridwal Kamil",
    photo: "/Ridwan_Kamil.png",
    number: 2,
    batch: 2021,
  },
  {
    id: 3,
    name: "Sandiaga Uno",
    photo: "/sandiaga.jpeg",
    number: 3,
    batch: 2022,
  },
];
