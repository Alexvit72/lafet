import Image from "next/image";
import { Card } from 'antd';
import { PhoneFilled } from '@ant-design/icons';
import Link from "next/link";
import CustomButton from '@/components/shared/CustomButton';
import { Item } from '@/types';

const { Meta } = Card;

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card
      className="min-w-2xs sm:min-w-sm"
      cover={
        <div className="min-w-xs min-h-[300px]">
          <Link href={`/trailers/${item.id}`}>
            <Image
              draggable={false}
              width={400}
              height={400}
              alt="image"
              src={item.image}
            />
          </Link>
        </div>
      }
      actions={[
        <CustomButton key="phone" icon={<PhoneFilled className='text-2xl font-light' />}>
          <a href='tel:+375296344554' style={{ color: '#fff' }}>Заказать</a>
        </CustomButton>,
      ]}
    >
      <Meta title={item.title} description={item.description} />
    </Card>
  );
};

export default ItemCard;
