import React, { useState, useEffect } from 'react'
import Navbar from "./components/_navbar";
import NavbarAdmin from "./components/_navarAdming";
import Rout from './components/_routes'
import Footer from './components/_footer'
import { getUserCurrent } from './api/auth'
function App() {

  const [user, setUser] = useState('')

  useEffect(() => {
    _getUserCurrent()
  }, [])

  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
    if (userCurrent.type_user === "1") console.log("admin");
  }

  return (
    <div className="App">

      {user.type_user === "1" ? <NavbarAdmin /> : <Navbar />}

      <Rout />
      {user.type_user !== "1" ? <Footer /> : <div></div>}

    </div>
  );
}

export default App;
