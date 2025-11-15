import Image from "next/image";
import { Card, Divider  } from 'antd';
import { PhoneFilled } from '@ant-design/icons';
import Link from "next/link";

const { Meta } = Card;

type ItemCardProps = {
  item: { image: string, title: string, description: string, price: string };
};

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <div style={{ minHeight: '300px' }}>
          <Link href="/trailers">
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
        <a key="phone" href='tel:+375296344554'>
          <PhoneFilled className='text-2xl font-light' />
        </a>,
      ]}
    >
      <Meta title={item.title} description={item.description} />
    </Card>
  );
};

export default ItemCard;
