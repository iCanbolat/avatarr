import React from 'react'

const Last = () => {
  return (
    <div class="flex-container">
    <div class="spinner"><p>
      <div class="cube1"></div>
      <div class="cube2"></div>
      Loading...
      </p>
    </div>
    <div class="flex-slide home">
      <div class="flex-title flex-title-home">Home</div>
      <div class="flex-about flex-about-home"><p>Click here to navigate to the home section of the website</p></div>
    </div>
    <div class="flex-slide about">
      <div class="flex-title">About</div>
      <div class="flex-about"><p>Click here to navigate to the About section of the website</p></div>
    </div>
    <div class="flex-slide work">
      <div class="flex-title">Work</div>
      <div class="flex-about"><p>Listing relevant snippets of work:</p>
        <ul>
          <li>First piece of work</li>
          <li>Second piece of work</li>
          <li>Third piece of work</li>
        </ul>
      </div>
    </div>
    <div class="flex-slide contact">
      <div class="flex-title">Contact</div>
          <div class="flex-about">
            <p>Use the contact form below</p>
            <form class="contact-form">
              <p>Email dsadas</p>
              <p>Comment <textarea type="text" name="comment" row="5"></textarea></p>
              <p>asdasdas</p>
            </form>
  
      </div>
    </div>
  </div>
  )
}

export default Last