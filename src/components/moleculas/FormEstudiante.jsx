import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormEstudiante = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <br />
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>

        <Form.Item label="Apellido">
          <Input />
        </Form.Item>

        <Form.Item label="Carrera">
          <Input />
        </Form.Item>

        <Form.Item label="Tema">
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Fecha de<br />Aprobación<br/>_
            </span>
          }
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="Estado">
          <Select>
            <Select.Option value="Activo">Activo</Select.Option>
            <Select.Option value="Graduado">Graduado</Select.Option>
            <Select.Option value="Retirado">Retirado</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item> */}

        <Form.Item label="Observaciones">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Foto" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item style={{paddingLeft: 30}}>
          <Button

          >Agregar</Button>
        </Form.Item>


      </Form>
    </>
  );
};
export default FormEstudiante;
