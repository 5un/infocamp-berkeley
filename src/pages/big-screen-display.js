import React from 'react'
class BigScreeDisplay extends React.Component {
  
  componentDidMount() {
    if(window) {
      setInterval(() => {
        window.location.reload(true);
      }, 60000)
    }
  }

  render() {
    return (<div>
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10
      }}>
        <img src="/images/splash-big-screen-01.jpg" style={{
          minWidth: '100%',
          minHeight: '100%'
        }}/>
      </div>
    </div>)
  }

}

export default BigScreeDisplay
