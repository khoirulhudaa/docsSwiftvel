import React from 'react';
import './App.css';
import MenuComponent from './component/menuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameOutput from './component/frameOutput';
import Alert1 from './assets/images/png/alert1.png';
import Water from './assets/images/png/water.png';
import Cookies from 'js-cookie';

class App extends React.Component {
  constructor(props) {
    super(props)

    // variable penampung data component
    this.state = {
      dataHTML: [],
      dataStyle: [],
      dataImages: [],
      screen: window.innerWidth,
      status: false
    };

  };
  
  componentDidMount = () => {
    
    this.setState({
      status: Cookies.get('status')
    })

    const data = {
      datas: `<section>
      <div class='container pt-4'>
          <div class='row'>
              <div class='col-lg-3'>
                  <div class='footer-brand'>
                      <img src='assets/icon/logo.svg' alt=''>
                      <h5 class='footer-product my-auto'>Product</h5>
                  </div>
                  <div class='socmed'>
                      <div class='socmed-icon'>
                          <img class='mr-3' src='assets/icon/ig.svg' alt='ig'>
                      </div>
                      <div class='socmed-icon'>
                          <img class='mr-3' src='assets/icon/fb.svg' alt='fb'>
                      </div>
                      <div class='socmed-icon'>
                          <img class='mr-3' src='assets/icon/twt.svg' alt='twitter' />
                      </div>
                  </div>
              </div>
              <div class='col-lg-3'>
                  <div class='footer-nav'>
                      <ul>
                          <li><span class='fw-bold'>Resource</span></li>
                          <li><a href=''>About Us</a></li>
                          <li><a href=''>Blog</a></li>
                          <li><a href=''>Contact</a></li>
                          <li><a href=''>FAQ</a></li>
                      </ul>
                  </div>
              </div>
              <div class='col-lg-3'>
                  <div class='footer-nav'>
                      <ul>
                          <li><span class='fw-bold'>Legal Stuff</span></li>
                          <li><a href=''>Disclaimer</a></li>
                          <li><a href=''>Financing</a></li>
                          <li><a href=''>Privacy Policy</a></li>
                          <li><a href=''>Terms of Service</a></li>
                      </ul>
                  </div>
              </div>
              <div class='col-lg-3'>
                  <p class='footer-desc'>knowing you're always on the best energy deal.</p>
                  <form action=''>
                      <input type='text' class='form-control shadow' id='signup' />
                      <label class='btn px-0' for='signup'>
                          <a class='nav-link px-4 py-2 btn-signup'>Sign up now</a>
                      </label>
                  </form>
              </div>
          </div>
          <p class='copyright text-center'>Made With Love By Figmaland All Right Reserved
          </p>
      </div>
  </section>`
    }
  }

  createComponent =(title, img, html, style) => {

    // kode add data kode html dan css ke frame
    let joinedHTML = this.state.dataHTML.concat(`${html}`)
    this.setState({ dataHTML: joinedHTML })
    let joinedStyle = this.state.dataStyle.concat(`${style}`)
    this.setState({ dataStyle: joinedStyle })

    // kode add data component yang sudah ditambah ke frame
    let dataUsed = {
      image: `https://images-builder.vercel.app/img/${img}`,
      title: title
    }
    let dataImg = this.state.dataImages.concat(dataUsed)
    this.setState({ dataImages: dataImg })

  }

  render() {
    // state dan function yang dikirim ke html
    const {createComponent} = this;
    const {dataStyle, dataHTML, dataImages} = this.state;
    return (
      this.state.status ? (
        <>
          {
            // kode untuk menampilkan alert ketika lebar layar dibawah 1240px
            this.state.screen < 1200 ? (
              <div className="alert-page">
                <img src={Alert1} alt="alert-logo" />
                <h1>Open in laptop/pc or desktop mode</h1>
                <p>can only be accessed on screen widths above 1200px, while those below that size cannot access including mobile phones</p>
              </div>
            ):
            null
          }
          <div className="row d-flex">
            <div className="col-sm-0 col-12">
              {/* Menu komponent */}
              <MenuComponent createComponent ={createComponent}/>
            </div>
            <div className='col-sm-12 col-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {/* frame yang akan menampilkan semua component terpilih */}
              <FrameOutput dataStyle={dataStyle} dataHTML={dataHTML} dataComponentUsed={dataImages} />
            </div>
          </div>
        </>
      ):
      <>
        <div className='w-screen h-[105vh] lg:h-screen flex flex-col items-center justify-center'>
            <img src={Water} className='w-[60%] lg:w-[26%] mb-4' alt="img" />
            <p className='font-normal w-[75%] lg:w-[50%] text-center ml-auto mr-auto relative leading-[1.4em]'>Don't forget to log in before creating your desired website, thank you.</p>
            <a href="/signIn" className='no-underline'>
              <div className='bg-darkMongo w-max px-[26px] py-[16px] h-max font-normal text-white rounded-md shadow-lg mt-5 cursor-pointer hover:brightness-[90%] active:scale-[0.97] duration-100'>
                Login now
              </div>
            </a>
        </div>
      </>
    );
  }
}


export default App;