import React from 'react'


class Backdrop extends React.Component {
    render () {
        return (
          <div style={{
              width: '100vw',
              height: '100vh',
              background: '#003262',
              backgroundImage: "url(\"images/homepage-image.png\")",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50.9% 8.4%'
          }}>
          </div>
        )
      }
}

export default Backdrop
