import { useState } from 'react';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>

      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Testing changes was successful.</p>}

      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}
