import React from 'react';
import { Form, Input, Modal, TimePicker, DatePicker } from 'antd';

const FormItem = Form.Item;
const { RangePicker } = TimePicker;

const CreateForm = props => {
  const [form] = Form.useForm();
  const { modalVisible, onSubmit: handleAdd, onCancel } = props;

  const onCallback = ok => {
    if (ok) {
      form.resetFields();
    }
  };

  const okHandle = async () => {
    const fieldsValue = await form.validateFields();
    handleAdd(fieldsValue, onCallback);
  };

  return (
    <Modal
      destroyOnClose
      title="创建规则"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
    >
      <Form form={form}>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="功课名称"
          name="lesson_name"
          rules={[
            {
              required: true,
              message: '输入不能为空！',
            },
          ]}
        >
          <Input placeholder="请输入功课名称" />
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="考勤日期"
          name="date"
          rules={[
            {
              required: true,
              message: '输入不能为空！',
            },
          ]}
        >
          <DatePicker onChange={() => {}} placeholder="请输入考勤日期" />
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="考勤时间"
          name="time"
          rules={[
            {
              required: true,
              message: '输入不能为空！',
            },
          ]}
        >
          <RangePicker format="HH:mm" />
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="纬度"
          name="lat"
          rules={[
            {
              required: true,
              message: '输入不能为空！',
            },
          ]}
        >
          <Input placeholder="请输入考勤中心点的纬度" />
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="经度"
          name="lng"
          rules={[
            {
              required: true,
              message: '输入不能为空！',
            },
          ]}
        >
          <Input placeholder="请输入考勤中心点的经度" />
        </FormItem>
        <FormItem
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          label="考勤范围"
          name="range_radius"
          rules={[
            {
              required: true,
              message: '输入不能为空！',
            },
          ]}
        >
          <Input placeholder="请输入考勤范围（单位：米）" />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default CreateForm;
