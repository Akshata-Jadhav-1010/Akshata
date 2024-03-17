import React, { useState} from 'react';
import axios from 'axios';

function ConnToDb() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = async () => {
    try {

      // Check if both name and age are entered
      if (!name || !age) {
        alert('Please enter both name and age before submitting.');
        return;
      }

      const currentDate = new Date();

      // Make a POST request to the backend to save the name
      await axios.post('http://localhost:3001/api/submitName', { 
          name, 
          age,
          createdAt: currentDate.toISOString()
        });

      alert('Name submitted successfully!');
      setName('');
      setAge('');
    } catch (error) {
      console.error('Error submitting name:', error);
      alert('Error submitting name. Please try again.');
    }
  };

const handleDisplay = async () => {
  try {
    // Make a GET request to retrieve all records
    const response = await axios.get('http://localhost:3001/api/getAllNames');
    setRecords(response.data);
  } catch (error) {
    console.error('Error fetching records:', error);
    alert('Error fetching records. Please try again.');
  }
};
  return ( 
    <div>
      <h1>Name Submission</h1>
      <label>
        Enter Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <label>
        Enter Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <button onClick={handleDisplay}>Display All Records</button>
      <div>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              {`Name: ${record.name}, Age: ${record.age}, Date: ${record.createdAt}`}
              </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default ConnToDb;