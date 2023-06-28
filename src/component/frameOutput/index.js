import { faArrowsRotate, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Data from '../../dataComponent/index.json';

class FrameOutput extends Component {
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
       ok: false
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

  hire = (e) => {
    e.preventDefault()
    this.setState({
      situation: false,
      situation2: false,
    })
  }
  
  hire2 = (e) => {
    e.preventDefault()
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
    this.props.dataHTML.splice(index, 1)
    this.props.dataStyle.splice(index, 1)
    this.props.dataComponentUsed.splice(index, 1)
    this.setState({
      situation: true,
      situation2: true,
    })
    let web = '';
    let webStyle = '';
    this.props.dataHTML.forEach(function(data) {
        web += data;
    }); 
    this.props.dataStyle.forEach(function(data2) {
        webStyle += data2;
    }); 

    const prevSelectFont = this.props.selectFont; 
    const fontToReplace = this.props.nowSelectFont; 
    console.log('FOnt sebelumnya 2:', this.props.selectFont)
    console.log('FOnt sekarang 2:', this.props.nowSelectFont)
    
    const importRegex2 = new RegExp(`@import\\s+url\\('https:\\/\\/fonts\\.googleapis\\.com\\/css2\\?family=${prevSelectFont}:wght@300;400;500;600;700&display=swap'\\);`, 'g');
    const importURL = `@import url('https://fonts.googleapis.com/css2?family=${fontToReplace}:wght@300;400;500;600;700&display=swap');`;
    const uniqueImportCodeHTMLDone = webStyle.replace(importRegex2, importURL);
    if(uniqueImportCodeHTMLDone) {
      console.log('MASIH ADA PERUBAHAN')
      webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
      document.querySelector('.template').innerHTML = web;
      document.querySelector('.styles').innerHTML = webStyle;
      console.log('css disini2', webStyle)
    }else {
      console.log('TIDAK ADA PERUBAHAN')
      webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
      document.querySelector('.template').innerHTML = web;
      document.querySelector('.styles').innerHTML = webStyle;
      console.log('css disini2', webStyle)
    }
  }
  
  componentDidUpdate = (prevProps) => {
    if (this.props.mode !== prevProps.mode || this.props.dataStyle !== prevProps.dataStyle) {
        let web = '';
        let webStyle = '';
      
        if(this.props.mode === 'automaticaly') {
          if(this.props.isLoadingBuild === 'success') {
        
            if(this.props.dataHTML[0]?.html) {
                for(let i = 0;i < this.props.dataHTML.length;i++) {
                web += this.props.dataHTML[i]?.html;
              } 
            }
            
            if(this.props.dataStyle[0]?.style) {
              for(let i = 0;i < this.props.dataStyle.length;i++) {
                webStyle += this.props.dataStyle[i]?.style;
              } 
            }
            console.log('html disini1', web)
            console.log('css disini1', webStyle)

            
            const prevSelectFont = this.props.selectFont; 
            const fontToReplace = this.props.nowSelectFont; 
            console.log('FOnt sebelumnya 1:', this.props.selectFont)
            console.log('FOnt sekarang 1:', this.props.nowSelectFont)
            
            const importRegex2 = new RegExp(`@import\\s+url\\('https:\\/\\/fonts\\.googleapis\\.com\\/css2\\?family=${prevSelectFont}:wght@300;400;500;600;700&display=swap'\\);`, 'g');
            const importURL = `@import url('https://fonts.googleapis.com/css2?family=${fontToReplace}:wght@300;400;500;600;700&display=swap');`;
            const uniqueImportCodeHTMLDone = webStyle.replace(importRegex2, importURL);
            if(uniqueImportCodeHTMLDone) {
              webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
              document.querySelector('.template').innerHTML = web;
              document.querySelector('.styles').innerHTML = webStyle;
            }else {
              webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
              document.querySelector('.template').innerHTML = web;
              document.querySelector('.styles').innerHTML = webStyle;
            }
      
          }else {
            if(this.props.dataHTML[0]?.html) {
                for(let i = 0;i < this.props.dataHTML.length;i++) {
                web += this.props.dataHTML[i]?.html;
              } 
            }
            
            if(this.props.dataStyle[0]?.style) {
              for(let i = 0;i < this.props.dataStyle.length;i++) {
                webStyle += this.props.dataStyle[i]?.style;
              } 
            }

            const prevSelectFont = this.props.selectFont; 
            const fontToReplace = this.props.nowSelectFont; 
            console.log('FOnt sebelumnya 2:', this.props.selectFont)
            console.log('FOnt sekarang 2:', this.props.nowSelectFont)
            
            const importRegex2 = new RegExp(`@import\\s+url\\('https:\\/\\/fonts\\.googleapis\\.com\\/css2\\?family=${prevSelectFont}:wght@300;400;500;600;700&display=swap'\\);`, 'g');
            const importURL = `@import url('https://fonts.googleapis.com/css2?family=${fontToReplace}:wght@300;400;500;600;700&display=swap');`;
            const uniqueImportCodeHTMLDone = webStyle.replace(importRegex2, importURL);
            if(uniqueImportCodeHTMLDone) {
              console.log('MASIH ADA PERUBAHAN')
              webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
              document.querySelector('.template').innerHTML = web;
              document.querySelector('.styles').innerHTML = webStyle;
              console.log('css disini2', webStyle)
            }else {
              console.log('TIDAK ADA PERUBAHAN')
              webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
              document.querySelector('.template').innerHTML = web;
              document.querySelector('.styles').innerHTML = webStyle;
              console.log('css disini2', webStyle)
            }
            }
        }else {
          this.props.dataHTML.forEach(function(data) {
              web += data;
          }); 
          this.props.dataStyle.forEach(function(data2) {
              webStyle += data2;
          }); 

            const prevSelectFont = this.props.selectFont; 
            const fontToReplace = this.props.nowSelectFont; 
            console.log('FOnt sebelumnya 3:', this.props.selectFont)
            console.log('FOnt sekarang 3:', this.props.nowSelectFont)
            
            const importRegex2 = new RegExp(`@import\\s+url\\('https:\\/\\/fonts\\.googleapis\\.com\\/css2\\?family=${prevSelectFont}:wght@300;400;500;600;700&display=swap'\\);`, 'g');
            const importURL = `@import url('https://fonts.googleapis.com/css2?family=${fontToReplace}:wght@300;400;500;600;700&display=swap');`;
            const uniqueImportCodeHTMLDone = webStyle.replace(importRegex2, importURL);
            if(uniqueImportCodeHTMLDone) {
              console.log('MASIH ADA PERUBAHAN')
              webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
              document.querySelector('.template').innerHTML = web;
              document.querySelector('.styles').innerHTML = webStyle;
              console.log('css disini3', webStyle)
            }else {
              console.log('TIDAK ADA PERUBAHAN')
              webStyle = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
              document.querySelector('.template').innerHTML = web;
              document.querySelector('.styles').innerHTML = webStyle;
              console.log('css disini3', webStyle)
            }
        }
    }
  }

  render() {
    return (
      <> 
        {
          this.state.situation2 ? (
            <div className='listComponentUsed listNonUsed'>
              {

              this.state.situation ? (
                <div className='btn-list' onClick={(e) => this.hire(e)}>
                <i className='fas fa-list-alt'></i>
              </div>
              ):
              <div className='btn-list' onClick={(e) => this.hire(e)}>
                <i className='fas fa-list-alt topz'></i>
              </div>
              }
                <div className='wrap-listComponentUsed'>
                  <div className='wrap-ListComponent'>                  
                  {
                  this.props.mode === 'automaticaly' && this.props.dataComponentUsed[0] ? (
                    <>
                      <div style={{border: '1px dashed black', borderRadius: '12px', padding: '26px 12px', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <p style={{textAlign: 'center', fontSize: '12px', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>There is no component list for the <strong>automatic build feature</strong></p>
                      </div>
                      <div className='flex relative justify-center ml-auto mr-auto mt-[40px] items-center'>
                          <div onClick={() => window.location.reload()} className='active:scale-[0.96] w-[40px] p-[10px] border-dashed border-[1px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                              <FontAwesomeIcon icon={faArrowsRotate} /> 
                          </div>
                      </div>
                    </>
                  ) : (
                    this.props.dataComponentUsed.map((data, index) => {
                      if (data.title === 'navbar') {
                        return (
                          <div className="cardImage-navbar" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      } else if (data.title === 'hero') {
                        return (
                          <div className="cardImage" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      } else if (data.title === 'content') {
                        return (
                          <div className="cardImage-content" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      } else if (data.title === 'footer') {
                        return (
                          <div className="cardImage-footer" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      }
                    })
                  )
                }
                  </div>
                </div>
            </div>
          ):
          <div className='listComponentUsed'>
            {
              this.state.situation ? (
              <div className='btn-list' onClick={(e) => this.hire2(e)}>
                <i className='fas fa-list-alt'></i>
              </div>
              ):
              <div className='btn-list' onClick={(e) => this.hire2(e)}>
                <i className='fas fa-list-alt topz'></i>
              </div>
              }
                <div className='wrap-listComponentUsed'>
                {
                  this.props.mode === 'automaticaly' && this.props.dataComponentUsed[0] ? (
                    <div style={{border: '1px dashed black', borderRadius: '12px', padding: '26px 12px', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                      <p style={{textAlign: 'center', fontSize: '12px', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>There is no component list for the <strong>automatic build feature</strong></p>
                    </div>
                  ) : (
                    this.props.dataComponentUsed.map((data, index) => {
                      if (data.title === 'navbar') {
                        return (
                          <div className="cardImage-navbar" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      } else if (data.title === 'hero') {
                        return (
                          <div className="cardImage" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      } else if (data.title === 'content') {
                        return (
                          <div className="cardImage-content" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      } else if (data.title === 'footer') {
                        return (
                          <div className="cardImage-footer" key={index}>
                            <img src={`${data.image}`} alt="img-component" />
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                this.remove(index);
                                this.props.handleMinus(1);
                              }}
                            ></i>
                          </div>
                        );
                      }
                    })
                  )
                }
                </div>
            </div>
        }
        <div className='frameOutput'>
          {
            this.props.mode === 'automaticaly' && (
              this.props.isLoadingBuild === 'run' && (
                <div className="overlayLoad2">
                  <FontAwesomeIcon icon={faSpinner} spin />
                  <p className='text-[16px] mt-4'>Assemble components</p>
                </div>
              )
            )
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

export default React.memo(FrameOutput);