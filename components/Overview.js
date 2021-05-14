import React, { useState, useEffect } from "react";
import { List, Bookmark } from "react-feather";
import { Col, Row } from "antd";

import StatCard from "./shared/StatCard";
import Router from "next/router";

import { withauth } from "../lib/withauth";

import { theme } from "./styles/GlobalStyles";

const Overview = () => {
  
  useEffect(() => {
    if (withauth() === undefined) {
      Router.push("/signup");
    }
  }, []);

  return (
    <div>
      <Row gutter={16}>
        {/*
            Stat cards
          */}
        <Col
          xs={24}
          sm={12}
          md={12}
          onClick={() => Router.push("/scans/inout")}
        >
          <StatCard
            title="เช็คอินเข้างาน-ออกงาน"
            value={"เช็คอินเข้างาน"}
            icon={<Bookmark size={20} strokeWidth={1} />}
            color={theme.successColor}
            // clickHandler={() => Message.info("Campaign stat button clicked")}
          />
        </Col>

        <Col xs={24} sm={12} md={12} onClick={() => Router.push("/scans/list")}>
          <StatCard
            title="ข้อมูลการสแกน เข้า-ออกทุกวัน"
            value={"ข้อมูลการสแกน"}
            icon={<List size={20} strokeWidth={1} />}
            color={theme.primaryColor}
            // clickHandler={() => Message.info("Queries stat button clicked")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
