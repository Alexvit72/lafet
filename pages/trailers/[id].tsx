import Image from "next/image";
import { Card } from 'antd';
import { PhoneFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import CustomButton from '@/components/shared/CustomButton';
import { trailers } from '@/data';

const { Meta } = Card;


const TrailerItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = trailers.find((trailer) => trailer.id === id);

  if (!item) return <></>;

  return (
    <div className="flex flex-wrap justify-center p-16">
      <div className="mr-8">
        <Image
          draggable={false}
          width={600}
          height={600}
          alt="image"
          src={item.image}
        />
      </div>
      <div>
        <Card
          style={{ width: 400 }}
          actions={[
            <CustomButton key="phone" icon={<PhoneFilled className='text-2xl font-light' />}>
              <a href='tel:+375296344554' style={{ color: '#fff' }}>Заказать</a>
            </CustomButton>,
          ]}
        >
          <Meta title={item.title} description={item.description} />
        </Card>
      </div>
    </div>
  );
};

export default TrailerItem;
