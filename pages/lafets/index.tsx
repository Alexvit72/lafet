import ItemCard from '@/components/shared/ItemCard';
import { lafets } from '@/data';


export default function Catalog() {
  return (
    <div className='p-8 sm:p-16 mx-auto w-min-xs sm:w-min-sm'>
      <h2 className='mb-8 sm:mb-16 text-center text-4xl sm:text-6xl font-bold text-orange-700'>
        Лафеты
      </h2>
      <div className='flex flex-wrap justify-center sm:justify-between'>
        {lafets.map((item, index) => (
          <div key={index} className='mb-8'>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
