import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    let id = this.props.match.params.post_id
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        this.setState({ post: response.data })
      })
  }

  render() {
    const post = this.state.post
      ?
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
      :
      <p>Post not found!</p>

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}
