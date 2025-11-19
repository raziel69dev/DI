import dress1_1 from '@/assets/dresses/dress1.webp'
import dress1_2 from '@/assets/dresses/dress1.webp'
import dress1_3 from '@/assets/dresses/dress1.webp'
import dress2_1 from '@/assets/dresses/dress2.webp'
import dress2_2 from '@/assets/dresses/dress2.webp'

const dresses = [
  {
    id: 1,
    name: 'Красное вечернее платье',
    images: [dress1_1, dress1_2, dress1_3],
    description: 'Элегантное красное платье для торжественных мероприятий.',
    price: 12000,
    rentPrice: 4000,
  },
  {
    id: 2,
    name: 'Белое летнее платье',
    images: [dress2_1, dress2_2],
    description: 'Легкое и воздушное платье для летних прогулок.',
    price: 8000,
    rentPrice: 3000,
  },
  {
    id: 3,
    name: 'Черное коктейльное платье',
    images: [dress1_1], // пример одного фото
    description: 'Идеально для вечеринок и коктейльных мероприятий.',
    price: 10000,
    rentPrice: 3500,
  },
  {
    id: 4,
    name: 'Черное коктейльное платье',
    images: [dress1_1], // пример одного фото
    description: 'Идеально для вечеринок и коктейльных мероприятий.',
    price: 10000,
    rentPrice: 3500,
  },
]

export default dresses
