import React from 'react'

const year = document.getElementById("year")
if (year){
    year.innerHTML = new Date().getFullYear();
}


function Footers() {
  return (
    <div className='footer primary'>
        <h3 className='title'>Link-uri rapide:</h3>
        <a className='margin-bottom' href=''>Politica de confidențialitate</a>
        <a href=''>Termeni și condiții</a>
        <p>Copyright: „© <span id="year"></span> Thai Ice Cream Rolls. Toate drepturile rezervate.”</p>
    </div>
  )
}

export default Footers