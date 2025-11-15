import { Button } from 'antd';
import { PhoneFilled } from '@ant-design/icons';

export default function TopBunner() {
  return (
    <div className='main_bunner min-h-[500px] px-16 py-20'>
      <h1 className='mb-8 text-7xl font-bold text-orange-500'>
        Прокат прицепов и лафетов в Витебске
      </h1>
      <div className='mb-8 text-5xl font-bold text-white'>
        От 20 рублей в сутки
      </div>
      <div className='mb-16 text-4xl font-bold text-white'>
        Без выходных с 8.00 до 20.00
      </div>
      <div>
        <Button
          variant='solid'
          color='volcano'
          size='large'
          icon={<PhoneFilled style={{ fontSize: '24px' }} />}
          style={{ padding: '28px 20px' }}
        >
          <a href='tel:+375296344554' className='text-2xl font-medium mb-1'>Позвонить</a>
        </Button>
      </div>
    </div>
  );
}
