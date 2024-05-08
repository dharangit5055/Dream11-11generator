// import React, { useState } from 'react';

// const Raadh11Generator = () => {
//   const [addressValue, setAddressValue] = useState('');
//   const [selectedNames, setSelectedNames] = useState([]);

//   const handleChange = (event) => {
//     setAddressValue(event.target.value);
//   };

//   const handleGenerateNames = () => {
//     const addressesArray = addressValue.split(',').map(address => address.trim());
//     const shuffledAddresses = addressesArray.sort(() => Math.random() - 0.5).slice(0, 11);
//     setSelectedNames(shuffledAddresses);
//   };

//   return (
//     <div>
//         <h1>Raadhan 11</h1>
//       <label htmlFor="address">Enter names (comma-separated):</label>
//       <textarea
//         id="address"
//         value={addressValue}
//         onChange={handleChange}
//         style={{ width: '300px', height: '120px' }} // Adjust the width and height here
//       />
//       <button onClick={handleGenerateNames}>Generate Random names</button>
//       <ul>
//         {selectedNames.map((address, index) => (
//           <li key={index}>{address}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Raadh11Generator;

// import React, { useState } from 'react';

// const Raadh11Generator = () => {
//   const [selectedNumbers, setSelectedNumbers] = useState([]);

//   const handleGenerateNumbers = () => {
//     const numbers = [];
//     while (numbers.length < 11) {
//       const randomNumber = Math.floor(Math.random() * 22) + 1;
//       if (!numbers.includes(randomNumber)) {
//         numbers.push(randomNumber);
//       }
//     }
//     setSelectedNumbers(numbers);
//   };

//   return (
//     <div>
//       <button onClick={handleGenerateNumbers}>Generate 11 Random Numbers</button>
//       <ul>
//         {selectedNumbers.map((number, index) => (
//           <li key={index}>{number}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Raadh11Generator;

// import React, { useState } from 'react';

// const Raadh11Generator = () => {
//   const leftArray = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11'];
//   const rightArray = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11'];

//   const [selectedCharacters, setSelectedCharacters] = useState([]);
//   const [buttonClicked, setButtonClicked] = useState(false);

//   const handleGenerateCharacters = () => {
//     const combinedArray = [...leftArray, ...rightArray];
//     const selectedChars = [];

//     while (selectedChars.length < 11) {
//       const randomIndex = Math.floor(Math.random() * combinedArray.length);
//       const randomChar = combinedArray[randomIndex];
//       if (!selectedChars.includes(randomChar)) {
//         selectedChars.push(randomChar);
//       }
//     }

//     setSelectedCharacters(selectedChars);
//     setButtonClicked(true); // Set buttonClicked to true after generating characters
//   };

//   return (
//     <div>
//       <h1>Raadhan 11 Dream team 😎</h1>
//       <button onClick={handleGenerateCharacters}>Generate 11 Random Characters</button>
//       <ul>
//         {selectedCharacters.map((char, index) => (
//           <li key={index} className={leftArray.includes(char) ? 'green' : 'red'}>{char}</li>
//         ))}
//       </ul>
//       {buttonClicked && <h2>வெற்றி நமதே!!!</h2>}
//     </div>
//   );
// };

// export default Raadh11Generator;


// import React, { useState } from 'react';
// import './Raadh11Generator.css'; // Import CSS file for styling

// const Raadh11Generator = () => {
//   const leftArray = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11'];
//   const rightArray = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11'];

//   const [selectedCharacters, setSelectedCharacters] = useState([]);
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const [cAndVcGenerated, setCAndVcGenerated] = useState(false);
//   const [c, setC] = useState('');
//   const [vc, setVc] = useState('');

//   const handleGenerateCharacters = () => {
//     const combinedArray = [...leftArray, ...rightArray];
//     const selectedChars = [];

//     while (selectedChars.length < 11) {
//       const randomIndex = Math.floor(Math.random() * combinedArray.length);
//       const randomChar = combinedArray[randomIndex];
//       if (!selectedChars.includes(randomChar)) {
//         selectedChars.push(randomChar);
//       }
//     }

//     setSelectedCharacters(selectedChars);
//     setButtonClicked(true);
//     setCAndVcGenerated(false); // Reset the state when generating new characters
//   };

//   const handleGenerateCAndVc = () => {
//     const randomIndex1 = Math.floor(Math.random() * selectedCharacters.length);
//     let randomIndex2 = Math.floor(Math.random() * selectedCharacters.length);
//     while (randomIndex2 === randomIndex1) {
//       randomIndex2 = Math.floor(Math.random() * selectedCharacters.length);
//     }
//     setC(selectedCharacters[randomIndex1]);
//     setVc(selectedCharacters[randomIndex2]);
//     setCAndVcGenerated(true);
//   };

//   const handleClearCharacters = () => {
//     setSelectedCharacters([]);
//     setC('');
//     setVc('');
//     setButtonClicked(false);
//     setCAndVcGenerated(false);
//   };

//   return (
//     <div className="raadh11-container">
//       <h1 className="raadh11-title">Raadhan 11 Dream team 😎</h1>
//       <button className="raadh11-button" onClick={handleGenerateCharacters}>Generate 11 Random Players</button>
//       <ul className="raadh11-list">
//         {selectedCharacters.map((char, index) => (
//           <li key={index} className={leftArray.includes(char) ? 'green' : 'red'}>{char}</li>
//         ))}
//       </ul>
     
//       {buttonClicked && (
//         <>
//           <button className="raadh11-generate-c-vc-button" onClick={handleGenerateCAndVc}>Generate C and VC</button><br />
//           {cAndVcGenerated && (
//         <div className="c-vc-container">
//           <p>Captain (C): {c}</p>
//           <p>Vice-Captain (VC): {vc}</p>
//         </div>
//       )}
//           <button className="raadh11-clear-button" onClick={handleClearCharacters}>Clear</button>
//         </>
//       )}
//       {buttonClicked && <h2 className="raadh11-message">வெற்றி நமதே!!!</h2>}
//     </div>
//   );
// };

// export default Raadh11Generator;

import React, { useState } from 'react';
import './Raadh11Generator.css'; // Import CSS file for styling

const Raadh11Generator = () => {
  const leftArray = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11'];
  const rightArray = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11'];

  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [cAndVcGenerated, setCAndVcGenerated] = useState(false);
  const [c, setC] = useState('');
  const [vc, setVc] = useState('');

  const handleGenerateCharacters = () => {
    const combinedArray = [...leftArray, ...rightArray];
    const selectedChars = [];

    while (selectedChars.length < 11) {
      const randomIndex = Math.floor(Math.random() * combinedArray.length);
      const randomChar = combinedArray[randomIndex];
      if (!selectedChars.includes(randomChar)) {
        selectedChars.push(randomChar);
      }
    }

    setSelectedCharacters(selectedChars);
    setButtonClicked(true);
    setCAndVcGenerated(false); // Reset the state when generating new characters
  };

  const handleGenerateCAndVc = () => {
    const randomIndex1 = Math.floor(Math.random() * selectedCharacters.length);
    let randomIndex2 = Math.floor(Math.random() * selectedCharacters.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * selectedCharacters.length);
    }
    setC(selectedCharacters[randomIndex1]);
    setVc(selectedCharacters[randomIndex2]);
    setCAndVcGenerated(true);
  };

  const handleClearCharacters = () => {
    setSelectedCharacters([]);
    setC('');
    setVc('');
    setButtonClicked(false);
    setCAndVcGenerated(false);
  };

  return (
    <div className="raadh11-container">
      <h1 className="raadh11-title">Raadhan 11 Dream team 😎</h1>
      <button className="raadh11-button" onClick={handleGenerateCharacters}>Generate 11 Random Players</button>
      <div className="raadh11-list-container">
        <ul className="raadh11-list left-list">
          {selectedCharacters.map((char, index) => (
            leftArray.includes(char) && (
              <li key={index} className="green">{char}</li>
            )
          ))}
        </ul>
        <ul className="raadh11-list right-list">
          {selectedCharacters.map((char, index) => (
            rightArray.includes(char) && (
              <li key={index} className="red">{char}</li>
            )
          ))}
        </ul>
      </div>
     
      {buttonClicked && (
        <>
          <button className="raadh11-generate-c-vc-button" onClick={handleGenerateCAndVc}>Generate C and VC</button><br />
          {cAndVcGenerated && (
            <div className="c-vc-container">
              <p className='cap'>Captain (C): <span className={leftArray.includes(c) ? 'black' : 'red'}>{c}</span></p>
              <p className='v-cap'>Vice-Captain (VC): <span className={leftArray.includes(vc) ? 'black' : 'red'}>{vc}</span></p>
            </div>
          )}
          <button className="raadh11-clear-button" onClick={handleClearCharacters}>Clear</button>
        </>
      )}
      {buttonClicked && <h2 className="raadh11-message">வெற்றி நமதே!!!</h2>}
    </div>
  );
};

export default Raadh11Generator;



