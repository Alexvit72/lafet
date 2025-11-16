import ItemCard from '@/components/shared/ItemCard';
import { lafets } from '@/data';


export default function Catalog() {
  return (
    <div className='p-16'>
      <h2 className='mb-16 text-center text-6xl font-bold text-orange-700'>
        Лафеты
      </h2>
      <div className='flex flex-wrap justify-between'>
        {lafets.map((item, index) => (
          <div key={index} className='mb-8'>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
