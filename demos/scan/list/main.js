import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Divider, Card } from "antd";

import { withauth } from "../../../lib/withauth";

import Search from "./search";
import Table from "./table";
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
          ข้อมูลการสแกน :
          {state !== undefined ? `${state.label} (${state.value})` : ""}
        </middle>
      </Divider>
      <div className="p-4" style={{ textAlign: "center" }}>
        <Search />
      </div>
      <div className="p-4">
        <Table />
      </div>
    </Card>
  );
};

export default main;
