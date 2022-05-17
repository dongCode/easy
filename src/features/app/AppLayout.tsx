import './AppLayout.less';
import { Layout, Menu } from 'apusic-ui';
import { Content } from 'apusic-ui/lib/layout/layout';
import Sider from 'apusic-ui/lib/layout/Sider';
import { Link, Outlet } from 'react-router-dom';
import { useSubMenu } from './useSubMenu';
const AppLayout = () => {
  const { SubMenu, Item } = Menu;
  const subMenuProps = useSubMenu();
  return (
    <Layout className="g-h100 app-layout">
      <header className="header">
        <div>
          <span className="logo">logo</span>
          <span className="logo">text</span>
        </div>
        <div>
          <span className="logo">其他</span>
          <span className="logo"> dd</span>
        </div>
      </header>
      <Layout className="g-row calc-50">
        <Sider theme="light" collapsible>
          <Menu mode="inline">
            <Item key="1">
              <Link to="/index">
                <span>首页</span>
              </Link>
            </Item>
            <Item key="2">
              <Link to="/protected">
                <span>权限页</span>
              </Link>
            </Item>
            <SubMenu {...subMenuProps('key', 'title', () => {})}>
              <Item>item 3</Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content
          className="app-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
