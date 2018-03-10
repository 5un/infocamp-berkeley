import React from 'react'
import * as firebase from 'firebase';

class BigScreeDisplay extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      slides: [],
      currentSlideIndex: 0
    }
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDSE_n49AuZEer4rfk91dMC7C_GGooPUuw",
        databaseURL: "https://infocampberkeley.firebaseio.com/"
      });
    }
    this.database = firebase.database();

    var slidesRef = this.database.ref('slides');
    slidesRef.once('value').then((snapshot) => {
      this.setState({ slides: snapshot.val(), currentSlideIndex: 0 })
    });
    slidesRef.on('value', (snapshot) => {
      this.setState({ slides: snapshot.val(), currentSlideIndex: 0 })
    });

    setInterval(() => {
      console.log('tick');
      if(this.state.currentSlideIndex + 1 < this.state.slides.length) {
        this.setState({ currentSlideIndex: this.state.currentSlideIndex + 1 })
      } else {
        this.setState({ currentSlideIndex: 0 })
      }
    }, 10000)

  }

  render() {
    const { slides, currentSlideIndex } = this.state;
    const currentSlideUrl = slides[currentSlideIndex]
    return (<div>
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10
      }}>
        <img src={currentSlideUrl} style={{
          minWidth: '100%',
          minHeight: '100%'
        }}/>
      </div>
    </div>)
  }

}

export default BigScreeDisplay
