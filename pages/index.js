import { useState } from 'react';

import styles from '../styles/Home.module.css';

const specialNames = ['kiki', 'banuki', 'nuki', 'rebeca', 'beca'];

function Home() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClickButton = () => {
    console.log('Você não dá brecha hein :D');

    if (specialNames.includes(name.toLowerCase())) {
      return alert('TE AMO, AMOR DA MINHA VIDA 🖤');
    }

    alert(`${name}, obrigado por ter me clicado XD. Good news are coming...`);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <input
          className={styles.input}
          value={name}
          onChange={handleNameChange}
          placeholder={!name ? 'Digite seu nome' : ''}
        />
      </section>
      ssss
      {name ? (
        <button className={styles.button} onClick={handleClickButton}>
          {name}, por favor me clique :(
        </button>
      ) : null}
    </div>
  );
}

export default Home;
