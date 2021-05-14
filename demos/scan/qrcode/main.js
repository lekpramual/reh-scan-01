import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Divider, Card, Row, Col } from "antd";

import Table from "./table";
import Search from "./search";
import Create from "./createmodal";

import { withauth } from "../../../lib/withauth";

const main = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (withauth() === undefined) {
      Router.push("/signup");
    }

    setState(withauth() || undefined);
  }, []);

  return (
    <Card bodyStyle={{ padding: 0 }} id="components-button-demo">
      <Divider orientation="left">
        <middle>
          ข้อมูลสถานที่จุดสแกน :
          {state !== undefined ? `${state.label} (${state.value})` : ""}
        </middle>
      </Divider>
      <div className="p-4">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={20}>
            <Search />
          </Col>
          <Col xs={24} sm={24} md={4}>
            <Create />
          </Col>
        </Row>
      </div>
      <div className="p-4" style={{ marginTop: "-30px" }}>
        <Table />
      </div>
    </Card>
  );
};

export default main;
