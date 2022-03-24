import { useState, useEffect, useRef } from 'react';

function MakeALobby(props) {

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  const [formData, setFormData] = useState({
    //! Names Needed Here
  })

  // Action Handlers
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }


  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Create A Lobby</h1>
      <form onSubmit={handleSubmit} ref={formElement}>
        <label htmlFor="lobby-name">Lobby Name</label>
        <input
          type="text"
          id='lobby-name'
          name='lobby-name'
          onChange={handleChange}
        />
        <label htmlFor="choose-game">Choose A Game</label>
        <select id='choose-game' onChange={handleChange} name='choose-game'>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <label htmlFor="lobby-limit">Player Limit</label>
        <input
          type="text"
          id='lobby-limit'
          name='lobby-limit'
          onChange={handleChange} />
        <label htmlFor="player-rank">Minimum Rank</label>
        <select id='player-rank' name='player-rank' onChange={handleChange}>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <button type='submit' disabled={!validForm}>Create</button>
      </form>
    </>
  );
}

export default MakeALobby;