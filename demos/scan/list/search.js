import React, { useState } from "react";
import { Input, Row, Col, DatePicker, Button } from "antd";

import { Search } from "react-feather";

import "moment/locale/th";
const { RangePicker } = DatePicker;

// const Search = Input.Search;

const search = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Row gutter={24}>
      {/*
            Stat cards
          */}
      <Col xs={24} sm={24} md={20} style={{ margin: 2 }}>
        <RangePicker
          style={{ width: "100%" }}
          placeholder={["วันที่เริ่มต้น", "วันที่สิ้นสุด"]}
          onChange={onChange}
        />
      </Col>

      <Col xs={24} sm={24} md={3} style={{ margin: 2 }}>
        <Button type="primary" block>
          <Search size={20} strokeWidth={1} /> ค้นหา
        </Button>
      </Col>
    </Row>
  );
};

export default search;
