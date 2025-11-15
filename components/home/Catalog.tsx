import { Button } from 'antd';
import ItemCard from '@/components/shared/ItemCard';
import { title } from 'process';

const items = [
  {
    image: "/item_1.png",
    title: "Прицеп 1",
    description: "Очень хороший",
    price: "20 руб / сутки",
  },
  {
    image: "/item_2.png",
    title: "Прицеп 2",
    description: "Супер пупер",
    price: "25 руб / сутки",
  },
  {
    image: "/item_3.png",
    title: "Прицеп 3",
    description: "Офигительный",
    price: "30 руб / сутки",
  },
];

export default function Catalog() {
  return (
    <div>
      <h2 className='mt-16 text-center text-6xl font-bold text-orange-700'>
        Каталог
      </h2>
      <div className='flex flex-wrap justify-between p-16'>
        {items.map((item, index) => <ItemCard key={index} item={item} /> )}
      </div>
    </div>
  );
}
