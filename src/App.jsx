import './App.css'

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <form className='form'>
        <label>
          Put the movie name
          <input placeholder='Avenger, Star Wars, The Matrix...' />
          <button type='submit'>Find</button>
        </label>
      </form>
    </>
  )
}

export default App
