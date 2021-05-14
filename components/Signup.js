import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Message,
  Row,
  Tooltip,
  Avatar,
  Select,
  DatePicker,
  Switch
} from "antd";
import {
  Eye,
  HelpCircle,
  Mail,
  Triangle,
  User,
  CheckCircle,
  CheckSquare
} from "react-feather";

import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";

import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "moment/locale/th";
// import locale from "antd/es/date-picker/locale/th_TH";

import { withauth } from "../lib/withauth";

const FormItem = Form.Item;
const Option = Select.Option;
const dateFormat = "YYYY-MM-DD";

const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;

function handleChange(value) {
  console.log(`value ${value}`);
}

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

const Signup = ({ form }) => {
  const [fullname, setFullname] = useState([]);

  const handleChangeEven = (value, even) => {
    console.log(value);
    console.log(even.props.children);
    setFullname([{ label: even.props.children, value: value }]);
  };

  useEffect(() => {
    // setState(localStorage.getItem("state") || "");

    if (withauth() !== undefined) {
      Router.push("/index");
    }
  }, []);

  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      className="px-3 bg-white"
      style={{ minHeight: "100vh" }}
    >
      <Content>
        <div className="text-center mb-5">
          <Link href="/signup">
            <a className="brand mr-0">
              {/* <Triangle size={32} strokeWidth={1} /> */}
              <Avatar
                src="/static/logo/logo512.png"
                style={{ width: "100px", height: "100px" }}
              />
            </a>
          </Link>
          <h5 className="mb-0 mt-3">ลงทะเบียน รพ.ร้อยเอ็ด</h5>

          <p className="text-muted">ลงทะเบียน ผู้ใช้งาน สแกน รพ.ร้อยเอ็ด</p>
        </div>

        <Form
          layout="vertical"
          onSubmit={(e) => {
            e.preventDefault();
            form.validateFields((err, values) => {
              if (!err) {
                const serializedState = JSON.stringify({
                  date: moment(values.date).format("YYYY-MM-DD"),
                  value: fullname[0].value,
                  label: fullname[0].label,
                  serial: values.serial,
                  phone: values.phone
                });
                console.log(fullname[0].value);
                // Set Local Storage State
                localStorage.setItem("state", serializedState);
                Message.success("ลงทะเบียนเรียบร้อย").then(() =>
                  Router.push("/index")
                );
              }
            });
          }}
        >
          <FormItem
            label={
              <span>
                ชื่อ - นามสกุล&nbsp;
                <Tooltip title="สามารถเลือกได้แค่ครั้งเดียว?">
                  <HelpCircle size={16} strokeWidth={1} />
                </Tooltip>
              </span>
            }
          >
            {form.getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "ชื่อ-สกุล ต้องไม่ว่าง!"
                }
              ]
            })(
              <Select
                showSearch
                // style={{ width: 200 }}
                placeholder="เลือก ชื่อ-นามสกุล"
                optionFilterProp="children"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
                onSelect={(value, event) => handleChangeEven(value, event)}
              >
                <Select.Option
                  value={240}
                  name="ประมวล นัดทะยาย"
                  onChange={() => alert("test")}
                >
                  ประมวล นัดทะยาย
                </Select.Option>
                <Select.Option value={220} name="นายกอ นัดทะยาย">
                  นายกอ นัดทะยาย
                </Select.Option>
              </Select>
            )}
          </FormItem>

          <FormItem label={<span>เบอร์โทร&nbsp;</span>}>
            {form.getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "เบอร์โทร ต้องไม่ว่าง!"
                }
              ]
            })(
              <Input
                addonBefore={form.getFieldDecorator("prefix", {
                  initialValue: "88"
                })(
                  <Select style={{ width: 70 }}>
                    <Option value="88">+88</Option>
                  </Select>
                )}
                style={{ width: "100%" }}
              />
            )}
          </FormItem>

          <FormItem label="รหัสประจำเครื่อง">
            {form.getFieldDecorator("serial", {
              initialValue: uuidv4(),
              rules: [
                {
                  required: true,
                  message: "รหัสประจำเครื่อง ต้องไม่ว่าง!"
                }
              ]
            })(
              <Input
                type="text"
                placeholder="รหัสประจำเครื่อง"
                // value={""}
                // defaultValue="26888888"
                disabled
              />
            )}
          </FormItem>

          <FormItem label="วันที่">
            {form.getFieldDecorator("date", {
              initialValue: moment(new Date()),
              rules: [
                {
                  required: true,
                  message: "วันที่ ต้องไม่ว่าง!"
                }
              ]
            })(
              <DatePicker
                style={{ width: "100%" }}
                // locale={locale}
                placeholder="เลือกวันที่"
                format={dateFormat}
                // defaultValue={moment("2015-06-06", dateFormat)}
                disabled
              />
            )}
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit" block>
              ลงทะเบียน
            </Button>
          </FormItem>
        </Form>
      </Content>
    </Row>
  );
};

export default Form.create()(Signup);
