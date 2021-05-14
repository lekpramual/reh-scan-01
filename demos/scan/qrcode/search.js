import React, { useState } from "react";
import { Input } from "antd";

const Search = Input.Search;

const search = () => {
  return (
    <Search
      placeholder="กรอกสถานที่"
      onSearch={(value) => console.log(value)}
      style={{ width: "100%" }}
    />
  );
};

export default search;
