import './App.css'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Movies Searching..</h1>
        <form className='form'>
          <input placeholder='Avenger, Star Wars, The Matrix...' />
          <button type='submit'>Find</button>
        </form>
        </header>
      <body>
        Movie lists
      </body>
    </div>
  )
}

export default App
