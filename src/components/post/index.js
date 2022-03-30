import React from 'react'
import { Button, Card } from 'antd';


const Post = ({ title, body, id, deletePost }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{body}</p>
      <Button onClick={() => deletePost(id)} type='primary'>Delete</Button>
    </Card>
  )
}

export default Post;