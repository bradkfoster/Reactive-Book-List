import React, {Component} from 'react';

class AddBookForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        author: '',
        title: ''
      }
  }
  
    handleChangeTitle(event){
      this.setState({title: event.target.value})
    }

    handleChangeAuthor(event){
      this.setState({author: event.target.value})
    }

    handleSubmit(event) {
      event.preventDefault()
      console.log('in function')
      this.props.newBook({title: this.state.title, author: this.state.author})
      
    }
    
    render(){
      return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input
        type="text"
       // value={this.state.title}
        onChange={this.handleChangeTitle.bind(this)}
        placeholder="title"
      />
      <input
        type="text"
       // value={this.state.author}
        onChange={this.handleChangeAuthor.bind(this)}
        placeholder="author"
      />
      <input type="submit" value="submit" />
      </form>
      )
    }
  }


export default AddBookForm;