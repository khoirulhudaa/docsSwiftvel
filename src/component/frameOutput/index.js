import React, { Component } from 'react';
import Data from '../../dataComponent/index.json';
import Logo from '../../assets/images/drag/Drag-me-JPG-logoonly.jpg';
import HTML5 from '../../assets/images/svg/html5.svg';
import PHP from '../../assets/images/svg/php.svg';

export default class FrameOutput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dataComponentUsed: [],
       data: [],
       situation: false,
       situation2: false,
       js: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
       integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
       cross: 'anonymous',
       active: 'HTML',
       bgColor1: 'white',
       bgColor2: 'orange-500',
       textColor1: 'black',
       textColor2: 'white',
    };
  };

  componentDidMount = () => {
    this.setState({
      data: Data
    })
  }

  componentDidUpdate = () => {
    this.setState({
      data: Data
    })
  }

  hire = () => {
    this.setState({
      situation: false,
      situation2: false,
    })
  }

  hire2 = () => {
    this.setState({
      situation: true,
      situation2: true,
    })
  }

  handleChangeActive = (e) => {
    if(e === 'HTML') {
      this.setState({
        active: e,
        bgColor1: 'white',
        bgColor2: 'orange-500',
        textColor1: 'black',
        textColor2: 'white',
      })
    }else {
      this.setState({
        active: e,
        bgColor1: 'indigo-500',
        bgColor2: 'white',
        textColor1: 'white',
        textColor2: 'black',
      })
    }
  }

  remove = (index) => {
    console.log(index)
    console.log(index)
    this.props.dataHTML.splice(index, 1)
    this.props.dataStyle.splice(index, 1)
    this.props.dataComponentUsed.splice(index, 1)
    this.setState({
      situation: true,
      situation2: true,
    })
  }
  
  componentDidUpdate = () => {
    let web = '';
    let webStyle = '';
    this.props.dataHTML.forEach(function(data) {
        web += data;
    }); 
    this.props.dataStyle.forEach(function(data2) {
        webStyle += data2;
    }); 
    document.querySelector('.template').innerHTML = web;
    document.querySelector('.styles').innerHTML = webStyle;

    console.log(this.props.dataComponentUsed)
  }

  render() {
    return (
      <> 
      {
        this.state.situation2 ? (
          <div className='listComponentUsed listNonUsed'>
            {

            this.state.situation ? (
              <div className='btn-list' onClick={this.hire}>
              <i className='fas fa-list-alt'></i>
            </div>
            ):
            <div className='btn-list' onClick={this.hire}>
              <i className='fas fa-list-alt topz'></i>
            </div>
            }
              <div className='wrap-listComponentUsed'>
                <div className='wrap-ListComponent'>                  
                  {
                    this.props.dataComponentUsed.map((data, index) => {
                      if(data.title === 'navbar') {
                        return (
                            <div className="cardImage-navbar" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                          )
                        }else if(data.title === 'hero') {
                          return (
                            <div className="cardImage" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                        )
                        }else if(data.title === 'content') {
                          return (
                            <div className="cardImage-content" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                        )
                        }else if(data.title === 'footer') {
                          return (
                            <div className="cardImage-footer" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                        )
                      }
                    })
                  }
                </div>
              </div>
          </div>
        ):
        <div className='listComponentUsed'>
          {
            this.state.situation ? (
            <div className='btn-list' onClick={this.hire2}>
              <i className='fas fa-list-alt'></i>
            </div>
            ):
            <div className='btn-list' onClick={this.hire2}>
              <i className='fas fa-list-alt topz'></i>
            </div>
            }
              <div className='wrap-listComponentUsed'>
              {
                  this.props.dataComponentUsed.map((data, index) => {
                    if(data.title === 'navbar') {
                      return (
                          <div className="cardImage-navbar" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                        )
                      }else if(data.title === 'hero') {
                        return (
                          <div className="cardImage" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                      }else if(data.title === 'content') {
                        return (
                          <div className="cardImage-content" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                      }else if(data.title === 'footer') {
                        return (
                          <div className="cardImage-footer" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                    }
                  })
                }
              </div>
          </div>
        }
        <div className='frameOutput'>
          {
            !this.props.dataHTML.length ? (
              <img src={Logo} alt="logo-dragMe" className="logo-drag" />
                ):
              null
          }
              <div className="templateCurrent">
                <style className="styles">
                </style>
                <div className="template">
                </div>
                <script src={this.state.js} integrity={this.state.integrity} crossorigin={this.state.cross}></script>
            </div>
        </div>
      </>
    );
  }
}
