import { useState } from 'react'
import styles from './styles/App.module.css';
import axios from 'axios'

function App() {

  const [message, setMessage] = useState({ message: '', to: '', urlImage: '' })

  const sendMessage = () => {
    axios.post('http://localhost:9000/send', { message: message.message, to: message.to })
      .then(() => console.log('Message sent succesfully'))
      .catch(err => console.error(err))
  }

  const sendMedia = () => {
    axios.post('http://localhost:9000/sendMedia',
      {
        message: message.message,
        to: message.to,
        urlImage: message.urlImage
      })
      .then(() => console.log('Media sent succesfully'))
      .catch(err => console.error(err))
  }

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <input
          className={styles.button}
          name='to'
          placeholder='573024639509'
          type="text"
          onChange={handleChange}
        />
        <textarea
          className={`${styles.message} ${styles.button}`}
          name='message'
          placeholder='Hey there!'
          type="text"
          onChange={handleChange}
        />
        <input
          className={styles.button}
          type="text"
          name="urlImage"
          placeholder='URL image'
          onChange={handleChange}
        />
        <button className={styles.sendButton} onClick={message.urlImage === '' ? sendMessage : sendMedia}>
          Send message
        </button>
      </header>
    </div>
  );
}

export default App;
