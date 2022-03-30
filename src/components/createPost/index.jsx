import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";

import { createPost as createPostAction } from "../../reduxReducer/posts";

const CreatePost = ({ createPost }) => {
  const onSubmit = (values) => {
    console.log(values);
    createPost(values);
  };

  return (
    <Form name="basic" onFinish={onSubmit}>
      <Form.Item label="title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="body" name="body">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, {
  createPost: createPostAction,
})(CreatePost);
