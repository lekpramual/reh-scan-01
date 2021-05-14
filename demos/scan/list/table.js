import React from "react";

import { Table, Icon } from "antd";
import { LogIn, LogOut } from "react-feather";

const table = () => {
  //const [state, setState] = useState([]);

  const columns = [
    {
      title: "วันที่",
      dataIndex: "date"
    },
    {
      title: "เวลา",
      dataIndex: "time"
    },

    {
      title: "สถานะ",
      key: "สถานะ",
      dataIndex: "status",
      render: (status) => (
        <span style={{ textAlign: "center" }}>
          {status === "เข้า" ? (
            <LogIn color="#52c41a" size={20} strokeWidth={1} />
          ) : (
            <LogOut color="#eb2f96" size={20} strokeWidth={1} />
          )}
        </span>
      )
    },

    {
      title: "สถานที่",
      dataIndex: "location"
    }
  ];

  // const data = [];
  // for (let i = 1; i < 1000; ++i) {
  //   data.push({
  //     key: i,
  //     date: "19 เม.ย. 2564",
  //     time: "08:20",
  //     status: "เข้า",
  //     location: "ตึกจุฬาภรณ์"
  //   });
  // }

  const data = [
    {
      key: "1",
      date: "19 เม.ย. 2564",
      time: "08:20",
      status: "เข้า",
      location: "ศูนย์คอมพิวเตอร์"
    },
    {
      key: "2",
      date: "19 เม.ย. 2564",
      time: "16:20",
      status: "ออก",
      location: "ศูนย์คอมพิวเตอร์"
    }
  ];

  return <Table columns={columns} dataSource={data} size="small" />;
};

export default table;
