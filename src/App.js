import { useState } from 'react';
import { data } from './data';
import './App.css';
import { dataBook } from './dataBook';



  function App () {
 
 const [books, setBooks]=useState(data)
 const [ showText, setShowText] = useState (false)

//  для слайдов
 const [newBook, setNewBook] =useState(0);
 const {nameBook, authorBook, imageBook} = dataBook[newBook];

 const previousBook = () =>{
setNewBook((book=>{
  book--;
  if ( book < 0) {
     return dataBook.length-1;
  }
     return book;
}))
 }

 const nextBook = () => {
   setNewBook ( (book => {
     book ++;
     if (book > dataBook.length-1){
     book = 0;
     }
     return book;
   }))
 }

// ---------

 const removeBook = (id) => {
   const newBooks = books.filter((book)=>
   book.id !==id);
   setBooks(newBooks)
 }


  const showTextClick = (book)=>{
    book.showMore = !book.showMore;
    setShowText(!showText)
  }

    return ( <div>
      <div className="container">
      <h1> {books.length} books must-read  </h1>
      </div>
{books.map (( book =>{
  const {id, name, description, author, image, showMore } = book;

  return( 
    <div key={id}> 
<div className="top container">
     <h2> {name} </h2>
      </div>
<div className="container">
  <h2>{author} </h2>
</div>

<div className="container">
  <img src={image} width='300px' alt='book'/>
</div>

<div className="container">
 <p className="par"> {showMore ? description : description.substring(0, 220) + '...'} <button className='btnMore' onClick={()=> showTextClick(book)}>{showMore ? '':'Подробнее'} </button> </p>
</div>  

<div className="container">
<button className='btn' onClick={() => removeBook(id)}> Удалить </button>
</div>  
 </div>
  )
}))
}

<div className="container">
<button className='btn' onClick={() =>setBooks([])}> Удалить все</button>
</div> 

{/* слайды */}
<div className="container">
      <h1> Рекомендуем почитать</h1> 
      </div>
<div className="container">
     <h2> {nameBook} </h2>
      </div>
<div className="container">
  <h2>{authorBook} </h2>
</div>

<div className="container">
  <img src={imageBook} width='250px' height='350px'  alt='newbook'/>
</div> 

<div className="btnSlade container">
  <button onClick={previousBook}>Previous</button>
  <button onClick={nextBook}>Next </button>
</div> 

</div>    
);
}      

export default App;
