import { ReactNode } from 'react';
import { Button } from 'antd';


type CustomButtonProps = {
  icon?: ReactNode,
  children: ReactNode,
  onClick?: () => void,
};

const CustomButton = ({ icon, onClick, children }: CustomButtonProps) => {
  return (
    <Button
      variant='solid'
      color='volcano'
      size='large'
      icon={icon}
      style={{ padding: '28px 20px' }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
