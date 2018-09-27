/* The Bookcase where you can select a book and change the shelf it is on
  Shelves include: Read, Reading, Want to Read
*/





  render () {
    
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193 }}>
                    <img alt="" src={this.props.book.imageLinks.thumbnail} style={{ width: 128, height: 193 }}/>
                </div>
                <div className="book-shelf-changer">
                    <select onChange={this.handleShelfChange} defaultValue={this.props.book.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }




