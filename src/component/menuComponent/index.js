import 'boxicons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import Crown from '../../assets/images/png/crown.png';
import Padlock from '../../assets/images/png/padlock.png';
import Saweria from '../../assets/images/png/saweria.png';
import Add from '../../assets/images/svg/add.svg';
import Download from '../../assets/images/svg/donlot.svg';
import HTML5 from '../../assets/images/svg/html5.svg';
import PHP from '../../assets/images/svg/php.svg';
import Right from '../../assets/images/svg/right.svg';
import Data from '../../dataComponent/index.json';

class MenuComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
    data: [],
    active: 'HTML',
    bgColor1: 'white',
    bgColor2: '#00684A',
    textColor1: 'black',
    textColor2: 'white',
    username: ''
  };
};

componentDidMount = () => {

    this.setState({
        data: Data
    })

    const BASE_URL2 = `https://api-dragme.vercel.app/api/users/${this.props.data.email}`  
    
    fetch(`${BASE_URL2}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        this.setState({
           statusNew: data.message.status,
           username: data.message.username  
        })
    })
    .catch((error) => {
        console.log(error)
    })

    document.querySelector('.fa-times').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
    })

    document.querySelector('.fa-times2').addEventListener('click', () => {
        document.querySelector('.menu2').classList.remove('show2')
    })

    document.querySelector('.fa-times3').addEventListener('click', () => {
        document.querySelector('.menu3').classList.remove('show3')
    })

    document.querySelector('.fa-times4').addEventListener('click', () => {
        document.querySelector('.menu4').classList.remove('show4')
    })

    document.querySelector('.fa-times5').addEventListener('click', () => {
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('navbar').addEventListener('click', () => {
        document.querySelector('.menu1').classList.add('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('heroes').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.add('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('content').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.add('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('footer').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.add('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    // document.getElementById('pages').addEventListener('click', () => {
    //     document.querySelector('.menu1').classList.remove('show1')
    //     document.querySelector('.menu2').classList.remove('show2')
    //     document.querySelector('.menu3').classList.remove('show3')
    //     document.querySelector('.menu4').classList.remove('show4')
    //     document.querySelector('.menu5').classList.add('show5')
    // })
}

download = (e) => {
    const name = e;
    const header = 
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    `
    const sourceHTML = header + document.querySelector(`.${name}`).innerHTML ;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `index.${this.state.active === 'HTML' ? 'html' : 'php'}`;
    fileDownload.click();
    document.body.removeChild(fileDownload);

    Swal.fire({
        icon: "success",
        timer: 1160,
        title: "Download Successfully", 
        showConfirmButton: false 
    });
}

handleChangeActive = (e) => {
    if(e === 'HTML') {
      this.setState({
        active: e,
        bgColor1: 'white',
        bgColor2: '#00684A',
        textColor1: 'black',
        textColor2: 'white',
      })
    }else {
      this.setState({
        active: e,
        bgColor1: '#00684A',
        bgColor2: 'white',
        textColor1: 'white',
        textColor2: 'black',
      })
    }
  }

  render() {
    const { status } = this.props.data;
    return (
        <>
            <a href="/">
                <div className='absolute left-7 active:scale-[0.96] bg-mongo top-3 w-max p-[10px] border border-[1] border-black cursor-pointer hover:brightness-[95%] duration-100 h-max rounded-full flex items-center justify-center'>
                    <img src={Right} className='rotate-[180deg] w-[20px] h-[20px]' alt='icon' />
                </div>
            </a>
            <div className='flex items-center absolute top-3 right-7'>
                <a href="/pricing">
                    {
                        status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                            <div className='flex items-center relative bg-bgMongo text-white border-[1] mr-4 border border-black px-4 w-max h-max py-[8.6px] rounded-md hover:text-black'>
                                Go premium
                            </div>
                        ):
                            <></>
                    }
                </a>
                <div className='flex items-center relative mr-2 border-[1] border border-black px-4 w-max h-max py-[8.6px] rounded-md hover:text-black'>
                    {this.state.username}
                </div>
                <div className='h-[20px] w-[1px] bg-slate-400 ml-1'></div>
                <div className='h-[30px] w-[1px] bg-slate-400 mx-2'></div>
                <div className='h-[20px] w-[1px] bg-slate-400 mr-3'></div>
                <div className='flex items-center relative mr-2 hover:text-black'>
                    <a href="https://saweria.co/dragmeTEam" target='__blank' className='no-underline hover:text-black text-black'>
                        <div className='rounded-md px-3 flex items-center justify-center py-[5.5px] border border-[1] hover:text-black border-black cursor-pointer active:scale-[0.97] duration-100'>
                            <img src={Saweria} className='w-[30px]' alt="icon" />
                            <span className='sawer hover:text-black'>
                                Saweria
                            </span>
                        </div>
                    </a>
                </div>
                <div className='h-[20px] w-[1px] bg-slate-400 ml-1'></div>
                <div className='h-[30px] w-[1px] bg-slate-400 mx-2'></div>
                <div className='h-[20px] w-[1px] bg-slate-400 mr-3'></div>
                <div onClick={() => this.handleChangeActive('PHP')} className={`d-flex items-center justify-center rounded-md border-[1px] bg-[${this.state.bgColor1}] text-${this.state.textColor1} border-slate-300 mx-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
                    <img src={PHP} alt="img" className='bg-white rounded-full w-[20px] px-1 h-[20px] mr-2' /> <p className='mt-3'>PHP language</p>
                </div>
                <div onClick={() => this.handleChangeActive('HTML')} className={`d-flex items-center justify-center rounded-md border-[1px] bg-[${this.state.bgColor2}] text-${this.state.textColor2} border-slate-300 mx-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
                    <img src={HTML5} alt="img" className='w-[20px] bg-white rounded-full w-[20px] px-1 py-[0.9px] mr-2' /> <p className='mt-3'>HTML code</p>
                </div>
            </div>
            <div className="menuComponents">
                <div className="menuAll">
                    <div className="card-menu menu1">
                        <i className='fas fa-times'></i>
                        <div className='child-card-menu'>
                        {
                            this.state.data.map((data, index) => {
                                if(data.title === "navbar") {
                                    return (
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-navbar-standar' : 'cardImage-navbar'}`} key={index}>
                                            <img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" />
                                            {
                                                data.type === 'premium' ? (
                                                    status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                                                        <>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[-80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Crown} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Padlock} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                        </>
                                                    ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>
                                            }
                                        </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="card-menu menu2">
                        <i className='fas fa-times fa-times2'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                if(data.title === "hero") {
                                    return (
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-standar' : 'cardImage'}`} key={index}>
                                            <img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" />
                                            {
                                                data.type === 'premium' ? (
                                                    status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                                                        <>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[-80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Crown} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Padlock} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                        </>
                                                    ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>
                                            }
                                        </div>
                                        )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div className="card-menu menu3">
                        <i className='fas fa-times fa-times3'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                if(data.title === "content") {
                                    return (
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-content-standar' : 'cardImage-content'}`} key={index}>
                                            <img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" />
                                            {
                                                data.type === 'premium' ? (
                                                    status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                                                        <>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[-80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Crown} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Padlock} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                        </>
                                                    ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>
                                            }
                                        </div>
                                        )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div className="card-menu menu4">
                        <i className='fas fa-times fa-times4'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                if(data.title === "footer") {
                                    return (
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-footer-standar' : 'cardImage-footer'}`} key={index}>
                                            <img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" />
                                            {
                                                data.type === 'premium' ? (
                                                    status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                                                        <>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[-80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Crown} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                            <div className="w-[40px] h-[39px] border-[1px] border-slate-400 absolute ml-[80px] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px] bg-white shadow-lg">
                                                                <img src={Padlock} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                            </div>
                                                        </>
                                                    ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>
                                            }
                                        </div>
                                        )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div className="card-menu menu5">
                        <i className='fas fa-times fa-times5'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                return (
                                    <div className="cardImage" key={index}><img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" />
                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}} onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}>
                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className='btn-downloadsss shadow-lg hover' style={{borderRadius: 90, backgroundColor: '#00684A', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'}}>
                    {/* <box-icon type="icon" style={{color: 'white'}} name="download" onClick={() => this.download("templateCurrent")} /> */}
                    <img src={Download} alt="icon-download" style={{width: '47%'}} onClick={() => this.download("templateCurrent")} />
                </div>
                <div className="squareComponents" id='navbar'>
                    <box-icon type="icon" name="collection" />
                    <b><p>Navbar</p></b>
                </div>
                <div className="squareComponents" id='heroes'>
                    <box-icon name='objects-vertical-bottom'></box-icon>
                    <b><p>Heroes</p></b>
                </div>
                <div className="squareComponents" id='content'>
                    <box-icon name='objects-horizontal-center'></box-icon>
                    <b><p>Content</p></b>
                </div>
                <div className="squareComponents" id='footer'>
                    <box-icon name='objects-vertical-top' ></box-icon>
                    <b><p>Footer</p></b>
                </div>
                {/* <div className="squareComponents" onClick={() => this.notOpen()}>
                    <box-icon type="icon" name="collection" />
                    <b><p>Pages</p></b>
                </div> */}
            </div>
        </>
    );
  }
}

const mapStateToProps = state => {
    return {
      data: state.authReducers.user.payload // Replace 'data' with the actual state slice you want to access
    };
};

export default connect(mapStateToProps)(MenuComponent);