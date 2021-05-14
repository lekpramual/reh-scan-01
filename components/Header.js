import { Avatar, Badge, Layout, Menu } from "antd";
import {
  BarChart,
  Bell,
  ChevronsDown,
  Maximize,
  Minimize,
  Settings,
  Search,
  List,
  Home
} from "react-feather";
import DashHeader, { Notification } from "./styles/Header";

import Link from "next/link";
import MockNotifications from "../demos/mock/notifications";
import { useAppState } from "./shared/AppProvider";
import { useState } from "react";

// const serializedState = localStorage.getItem("state");

const { SubMenu } = Menu;
const { Header } = Layout;

const MainHeader = () => {
  const [state, dispatch] = useAppState();
  const [notifications] = useState(MockNotifications);

  return (
    <DashHeader>
      <Header>
        {state.mobile && (
          <a
            onClick={() => dispatch({ type: "mobileDrawer" })}
            className="trigger"
          >
            <BarChart size={20} strokeWidth={1} />
          </a>
        )}
        <Link href="/">
          <a className="brand">
            {/* โลโก้ */}
            {/* <Triangle size={24} strokeWidth={1} /> */}
            <Avatar src="/static/logo/logo512.png" />
            <strong className="mx-1 text-black">{state.name}</strong>
          </a>
        </Link>

        <Menu mode="horizontal" className="menu-divider">
          {/* Dasktop */}
          {!state.mobile && (
            <Menu.Item>
              <Link href="/scans/inout">
                <a>
                  <Search size={20} strokeWidth={1} /> สแกนเข้า-ออก
                </a>
              </Link>
            </Menu.Item>
          )}
          {!state.mobile && (
            <Menu.Item>
              <Link href="/scans/list">
                <a>
                  <List size={20} strokeWidth={1} /> ข้อมูลสแกน
                </a>
              </Link>
            </Menu.Item>
          )}
          {!state.mobile && (
            <Menu.Item>
              <Link href="/scans/qrcord">
                <a>
                  <Home size={20} strokeWidth={1} /> ข้อมูลสถานที่
                </a>
              </Link>
            </Menu.Item>
          )}
          {/* is Mobile */}
          {state.mobile && (
            <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
              <Menu.Item>
                <Link href="/scans/inout">
                  <a>
                    <Search size={20} strokeWidth={1} /> สแกนเข้า-ออก
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/scans/list">
                  <a>
                    <List size={20} strokeWidth={1} /> ข้อมูลสแกน
                  </a>
                </Link>
              </Menu.Item>
            </SubMenu>
          )}
        </Menu>

        <span className="mr-auto" />

        <Menu mode="horizontal">
          {!state.mobile && (
            <Menu.Item onClick={() => dispatch({ type: "fullscreen" })}>
              {!state.fullscreen ? (
                <Maximize size={20} strokeWidth={1} />
              ) : (
                <Minimize size={20} strokeWidth={1} />
              )}
            </Menu.Item>
          )}

          <Menu.Item onClick={() => dispatch({ type: "options" })}>
            <Settings size={20} strokeWidth={1} />
          </Menu.Item>

          <SubMenu title={<Avatar src="/static/images/avatar.jpg" />}>
            <Menu.Item>ข้อมูลผู้ใช้งาน</Menu.Item>
            <Menu.Item>ออกจากระบบ</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </DashHeader>
  );
};

export default MainHeader;
