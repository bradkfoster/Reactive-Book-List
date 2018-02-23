import React, {Component} from 'react';

class AddBookForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        author: '',
        title: ''
      }
      console.log('this is the props',this.props.props.addBook);
  }
  
    handleChangeTitle(event){
      this.setState({title: event.target.value})
    }

    handleChangeAuthor(event){
      this.setState({author: event.target.value})
    }

    handleSubmit(event) {
      event.preventDefault()
      let addedBook = {
        title:this.state.title,
        author:this.state.author
      }
     this.props.props.addBook(addedBook);
      // this.props.newBook({title: this.state.title, author: this.state.author})
      
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