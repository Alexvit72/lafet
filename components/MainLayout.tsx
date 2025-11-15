import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;


export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const items = [
    { key: "/", label: <Link href="/">Главная</Link> },
    { key: "/lafets", label: <Link href="/lafets">Лафеты</Link> },
    { key: "/trailers", label: <Link href="/trailers">Прицепы</Link> },
    { key: "/conditions", label: <Link href="/conditions">Условия аренды</Link> },
    { key: "/contacts", label: <Link href="/contacts">Контакты</Link> },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content>
        {/* <Breadcrumb style={{ margin: "16px 0" }} items={[{ title: "Home" }]} /> */}
        <section className="min-h-[calc(100vh-133px)]">
          {children}
        </section>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        My contacts
      </Footer>
    </Layout>
  );
}
