import React from 'react'
import UserCard from './components/UserCard'

function App() {
  return (
    <div className='container'>
      <UserCard name="Mohit Yadav" desc="desc1" image={Mohitpi} />
      <UserCard name="Mohit Yadav" desc="desc1" image={Mohitpi}  />
      <UserCard name="Mohit Yadav" desc="desc1" image={Mohitpi}  />
    </div>
  );
}

export default App;
