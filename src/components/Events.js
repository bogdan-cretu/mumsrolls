import React from 'react'
import event from "../images/pictures/event.jpg"

function Events() {
  return (
    <div>
        <h1 className='title primary-text'> Evenimente & Catering</h1>
        <div className='text-wrapper'>
            <div className='right-texts'>
                <h4 >Perfect pentru nunti, petreceri de aniversare si festivaluri.</h4>
                <p>Personalizarea ice cream rolls pentru evenimente private sau corporate.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla 
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
            <img className='events-pic' src={event}alt=''></img>
        </div>
    </div>
  )
}

export default Events