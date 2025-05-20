import React from 'react'
import event from "../images/pictures/event.jpg"

function Events() {
  return (
    <div id="events">
        <h1 className='title primary-text'> Evenimente & Catering</h1>
        <div className='text-wrapper'>
            <div className='right-texts'>
                <h4 >Perfect pentru nunti, petreceri de aniversare si festivaluri.</h4>
                <p>Personalizarea ice cream rolls pentru evenimente private sau corporate.</p>
                <p>La noi, fiecare porție de înghețată este făcută cu plăcere și atenție. Rețeta gelato este proaspătă. Nu folosim pre-mixuri sau ingrediente artificiale. Fiecare sortiment este preparat cu ingrediente de calitate pentru a aduce în cupa ta adevărata savoare a gelato-ului italian.<br></br><br></br>
                În plus, știm că fiecare eveniment este unic, așa că îți oferim posibilitatea de a crea sortimente personalizate, adaptate gusturilor tale și ale invitaților tăi. Fie că este vorba de o petrecere, un eveniment corporate sau o nuntă, noi suntem aici pentru a transforma orice moment într-o experiență dulce și memorabilă.</p>
            </div>
            <img className='events-pic' src={event}alt=''></img>
        </div>
    </div>
  )
}

export default Events