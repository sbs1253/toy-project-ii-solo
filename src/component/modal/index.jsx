import { Modal, Button, Form, Input, DatePicker } from 'antd';

const CorrectionRequestModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      open={visible}
      title="정정신청"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          취소
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          제출
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="제목" rules={[{ required: true, message: '제목을 입력해주세요' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="date" label="날짜" rules={[{ required: true, message: '날짜를 선택해주세요' }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="content" label="내용" rules={[{ required: true, message: '내용을 입력해주세요' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="note" label="비고">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CorrectionRequestModal;
