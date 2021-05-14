import { Avatar, Badge, Layout, List, Menu } from "antd";
import {
  BarChart,
  Bell,
  ChevronsDown,
  Maximize,
  Minimize,
  Settings,
  Triangle
} from "react-feather";
import DashHeader, { Notification } from "./styles/Header";

import Link from "next/link";
import MockNotifications from "../demos/mock/notifications";
import { useAppState } from "./shared/AppProvider";
import { useState } from "react";

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
              <Link href="/apps/calendar">
                <a>ปฏิทิน D</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/messages">
                <a>ข้อความ D</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/social">
                <a>สังคม D</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/chat">
                <a>แชท D</a>
              </Link>
            </Menu.Item>
          )}

          {/* is Mobile */}
          {state.mobile && (
            // <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
            //   <Menu.Item>ปฏิทิน M</Menu.Item>
            //   <Menu.Item>ข้อความ M</Menu.Item>
            //   <Menu.Item>สังคม M</Menu.Item>
            //   <Menu.Item>แชท M</Menu.Item>
            // </SubMenu>
            <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
              <Menu.Item>
                <Link href="/scans/inout">
                  <a>สแกน</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/scans/list">
                  <a>ข้อมูลสแกน</a>
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
          <SubMenu
            title={
              <Badge count={5}>
                <span className="submenu-title-wrapper">
                  <Bell size={20} strokeWidth={1} />
                </span>
              </Badge>
            }
          >
            <Menu.Item
              className="p-0 bg-transparent"
              style={{ height: "auto" }}
            >
              <List
                className="header-notifications"
                itemLayout="horizontal"
                dataSource={notifications}
                footer={<div>5 Notifications</div>}
                renderItem={(item) => (
                  <Notification>
                    <List.Item>
                      <List.Item.Meta
                        avatar={item.avatar}
                        title={<a href="javascript:;">{item.title}</a>}
                        description={<small>{item.description}</small>}
                      />
                    </List.Item>
                  </Notification>
                )}
              />
            </Menu.Item>
          </SubMenu>

          <SubMenu title={<Avatar src="/static/images/avatar.jpg" />}>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Notifications</Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <Link href="https://one-readme.fusepx.com">
                <a>Help?</a>
              </Link>
            </Menu.Item>
            <Menu.Item>Signout</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </DashHeader>
  );
};

export default MainHeader;
