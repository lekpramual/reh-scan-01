import React, { useState } from "react";
import {
  Table,
  Divider,
  Card,
  Row,
  Col,
  Button,
  Form,
  Input,
  Modal,
  Icon,
  Message
} from "antd";
import { Search, Save, Plus } from "react-feather";

const FormItem = Form.Item;

const createmodal = ({ form }) => {
  const [visible, setVisible] = useState(false);

  const showModal = (e) => {
    setVisible(true);
    form.resetFields();
  };

  const thandleOk = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        Message.success("บันทึกข้อมูลเรียบร้อย").then(() => setVisible(false));
      }
    });
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={showModal} type="primary" block>
        <Plus size={20} strokeWidth={1} /> เพิ่ม
      </Button>
      <Modal
        title="เพิ่มสถานที่จุดสแกน"
        visible={visible}
        onOk={thandleOk}
        okText="บันทึก"
        cancelText="ปิด"
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <FormItem label="ละติจูด">
            {form.getFieldDecorator("latitude", {
              initialValue: "",
              rules: [
                {
                  required: true,
                  message: "ละติจูด ต้องไม่ว่าง!"
                }
              ]
            })(
              <Input
                type="text"
                prefix={
                  <Icon
                    type="environment"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="กรอก ละติจูด"
              />
            )}
          </FormItem>
          <FormItem label="ลองจิจูด">
            {form.getFieldDecorator("longitude", {
              initialValue: "",
              rules: [
                {
                  required: true,
                  message: "ลองจิจูด ต้องไม่ว่าง!"
                }
              ]
            })(
              <Input
                type="text"
                prefix={
                  <Icon
                    type="environment"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="กรอก ลองจิจูด"
              />
            )}
          </FormItem>
          <FormItem label="สถานที่">
            {form.getFieldDecorator("location", {
              initialValue: "",
              rules: [
                {
                  required: true,
                  message: "สถานที่ ต้องไม่ว่าง!"
                }
              ]
            })(
              <Input
                type="text"
                prefix={
                  <Icon
                    type="environment"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="กรอก สถานที่"
              />
            )}
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};

export default Form.create()(createmodal);
