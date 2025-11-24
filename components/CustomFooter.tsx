import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";


export default function CustomFooter() {
  const router = useRouter();
  const route = router.route;
  

  const items = [
    { key: "/", label: <Link href="/">Главная</Link> },
    { key: "/lafets", label: <Link href="/lafets">Лафеты</Link> },
    { key: "/trailers", label: <Link href="/trailers">Прицепы</Link> },
    { key: "/conditions", label: <Link href="/conditions">Условия аренды</Link> },
    { key: "/contacts", label: <Link href="/contacts">Контакты</Link> },
  ];


  return (
    <div className="flex flex-col sm:flex-row p-8 text-white" style={{ background: "#001529" }}>
      <div>
        <h4 className="ml-5 mb-4 font-bold">Меню</h4>
        <Menu
          theme="dark"
          selectedKeys={[route]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
      <div className="ml-5 mt-8 sm:mt-0 sm:ml-20">
        <h4 className="mb-5 font-bold">Контакты</h4>
        <div className="mb-4">
          <div>
            г. Витебск
          </div>
          <div>
            ул. Гагарина, 186а
          </div>
        </div>
        <div>
          <a href='tel:+375296344554' className='mb-4'>
            <span className="text-[rgba(255,255,255,0.65)] hover:text-white">+375 29 634 45 54</span>
          </a>
        </div>
        <div>
          <a href='tel:+375296344554' className='mb-4'>
            <span className="text-[rgba(255,255,255,0.65)] hover:text-white">+375 29 634 45 54</span>
          </a>
        </div>
        <div className="mt-5">
          <a href='mailto:aleksandrvitebsk@tut.by' className='mb-4'>
            <span className="text-[rgba(255,255,255,0.65)] hover:text-white">
              example@test.com
            </span>
          </a>
        </div>
      </div>
      <div className="ml-5 mt-8 sm:mt-0 sm:ml-20">
        <h4 className="mb-5 font-bold">Соцсети</h4>
        <div>
          <a href='#' className='mb-4'>
            <span className="text-[rgba(255,255,255,0.65)] hover:text-white">ВК</span>
          </a>
        </div>
        <div>
          <a href='#' className='mb-4'>
            <span className="text-[rgba(255,255,255,0.65)] hover:text-white">Инстаграм</span>
          </a>
        </div>
      </div>
    </div>
  );
}
