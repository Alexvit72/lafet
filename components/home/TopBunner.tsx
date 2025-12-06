import { PhoneFilled } from '@ant-design/icons';
import CustomButton from '@/components/shared/CustomButton';

export default function TopBunner() {
  return (
    <div className='main_bunner min-h-[500px] px-8 sm:px-16 py-10 sm:py-20'>
      <h1 className='mb-8 text-5xl sm:text-7xl font-bold text-orange-500'>
        Прокат прицепов и лафетов в Витебске
      </h1>
      <div className='mb-8 text-4xl sm:text-5xl font-bold text-white'>
        От 20 рублей в сутки
      </div>
      <div className='mb-16 text-3xl sm:text-4xl font-bold text-white'>
        Без выходных с 8.00 до 20.00
      </div>
      <div>
        <CustomButton icon={<PhoneFilled style={{ fontSize: '24px' }} />}>
          <a href='tel:+375296344554' className='text-2xl font-medium mb-1'>Позвонить</a>
        </CustomButton>
      </div>
    </div>
  );
}
