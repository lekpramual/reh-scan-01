import React, { Component } from "react";
import { Table, Icon } from "antd";
import { Printer } from "react-feather";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./tabletoprint";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record: []
    };
  }

  render() {
    const showModal = (record) => {
      console.log(record);

      this.setState({
        record: record
      });
    };

    const columns = [
      {
        title: "ลำดับ",
        dataIndex: "key"
      },
      {
        title: "ละติจูด",
        dataIndex: "latitude"
      },
      {
        title: "ลองจิจูด",
        dataIndex: "longitude"
      },

      {
        title: "สถานที่",
        dataIndex: "location"
      },
      {
        title: "สถานะ",
        key: "สถานะ",
        dataIndex: "status",
        render: (status) => (
          <span style={{ textAlign: "center" }}>
            {status === "เปิดใช้งาน" ? (
              <Icon
                type="check-circle"
                theme="twoTone"
                twoToneColor="#52c41a"
              />
            ) : (
              <Icon
                type="close-circle"
                theme="twoTone"
                twoToneColor="#eb2f96"
              />
            )}
          </span>
        )
      },
      {
        title: "คำสั่ง",
        key: "action",
        render: (text, record) => (
          <span>
            <ReactToPrint
              trigger={() => (
                <a href="javascript:;">
                  <Printer
                    size={20}
                    strokeWidth={1}
                    onClick={() => showModal(record)}
                  />
                </a>
              )}
              content={() => this.componentRef}
              pageStyle="@page { size: 11.694in 8.264in landscape} "
            />
            <div style={{ display: "none" }}>
              <ComponentToPrint
                ref={(el) => (this.componentRef = el)}
                record={this.state.record}
              />
            </div>
          </span>
        )
      }
    ];

    const data = [];
    for (let i = 1; i < 1000; ++i) {
      data.push({
        key: i,
        latitude: "16.0580",
        longitude: "103.6479",
        status: "เปิดใช้งาน",
        location: "ตึกจุฬาภรณ์"
      });
    }

    // const data = [
    //   {
    //     key: "1",
    //     latitude: "16.0580",
    //     longitude: "103.6479",
    //     status: "เปิดใช้งาน",
    //     location: "ตึกจุฬาภรณ์"
    //   },
    //   {
    //     key: "2",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "3",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "4",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "5",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "6",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "7",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "8",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "9",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "10",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   },
    //   {
    //     key: "11",
    //     latitude: "45.6521",
    //     longitude: "150.134",
    //     status: "เปิดใช้งาน",
    //     location: "ศูนย์คอมพิวเตอร์"
    //   }
    // ];

    return (
      <div>
        <Table columns={columns} dataSource={data} size="small" />
      </div>
    );
  }
}

export default Example;
