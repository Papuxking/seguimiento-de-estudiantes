import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, Upload, message } from 'antd';
import { supabase } from '../../supabase/supabaseClient';

const { TextArea } = Input;

const FormEstudiante = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const onFinish = async (values) => {
    const { nombre, apellido, carrera, tema, fechaAprobacion, estado, observacion } = values;

    let fotoUrl = null;
    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('uploads')
        .upload(`public/${file.name}`, file);

      if (uploadError) {
        message.error(`Error al cargar la foto: ${uploadError.message}`);
        return;
      }

      fotoUrl = uploadData.Key;
    }

    const { error } = await supabase
      .from('Estudiantes')
      .insert([
        {
          nombre,
          apellido,
          carrera,
          tema,
          fechaAprobacion: fechaAprobacion ? fechaAprobacion.format('YYYY-MM-DD') : null,
          estado,
          observacion,
          foto: fotoUrl ? { url: supabase.storage.from('uploads').getPublicUrl(fotoUrl).data.publicUrl } : null,
        },
      ]);

    if (error) {
      message.error(`Error al insertar datos: ${error.message}`);
    } else {
      message.success('Estudiante agregado con éxito');
      form.resetFields();
      setFileList([]);
    }
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <br />
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="apellido"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Carrera"
          name="carrera"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tema"
          name="tema"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<span>Fecha de<br />Aprobación<br />_</span>}
          name="fechaAprobacion"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Estado"
          name="estado"
        >
          <Select>
            <Select.Option value="Activo">Activo</Select.Option>
            <Select.Option value="Graduado">Graduado</Select.Option>
            <Select.Option value="Retirado">Retirado</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Observaciones"
          name="observacion"
        >
          <TextArea rows={4} />
        </Form.Item>

        {/* <Form.Item
          label="Foto"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            onChange={handleFileChange}
          >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item> */}

        <Form.Item style={{ paddingLeft: 30 }}>
          <Button type="primary" htmlType="submit">Agregar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormEstudiante;
