import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import React from 'react';
import './App.css';
import Alert1 from './assets/images/png/alert1.png';
import Water from './assets/images/png/water.png';
import FrameOutput from './component/frameOutput';
import MenuComponent from './component/menuComponent';
import jsonData from './dataComponent/index.json';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataHTML: [],
      dataStyle: [],
      dataImages: [],
      screen: window.innerWidth,
      status: false,
      limit: 0,
      statusLimit: false,
      limitStatus: false,
      jenisWeb: '',
      selectedObjects: [],
      mode: 'manually',
      isLoading: true,
      isLoadingBuild: 'stop',
      selectFont: 'Poppins',
      nowSelectFont: 'Poppins',
      typeColor: '',
      dataColors:[],
      activeColor2: '',
      activeColorComponent: '',
      activeAnimate: false,
    };

};
  
componentDidMount = () => {
  this.setState({
    status: Cookies.get('status')
  })
  window.addEventListener('load', this.handleLoad);
}

componentWillUnmount() {
  window.removeEventListener('load', this.handleLoad);
}

handleLoad = () => {
  this.setState({ isLoading: false });
};

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

handleAdd = (e) => {
  if (this.state.limit !== 6) {
    this.setState(prevState => ({
      limit: prevState.limit + e
    }));
  }
  if(this.state.limit === 6) this.setState({ statusLimit: true })
}

handleMinus = (e) => {
  if (this.state.limit !== 0) {
    this.setState(prevState => ({
      limit: prevState.limit - e
    }));
  }
  if(this.state.limit !== 6) this.setState({ statusLimit: false })
}

showModal = () => {
  this.setState({
      limitStatus: true
  })
};

closeModal = () => {
  this.setState({
      limitStatus: false
    })
}
  
// Fungsi untuk mengacak array
shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

handleAutomaticBuild = () => {
  this.setState({
    isLoadingBuild: 'run'
  })
  setTimeout(() => {
    this.setState({
      isLoadingBuild: 'success'
    })
  }, 3500)

  setTimeout(() => {
    this.setState({ mode: 'automaticaly' })
      // Mengambil objek-objek dengan jenisWeb yang sama dengan pilihan user
      const filteredObjects = jsonData.filter((obj) => obj.type === "premium");
      
      // Mengacak array objek
      const shuffledObjects = this.shuffleArray(filteredObjects);

      // Memilih objek-objek dengan kriteria yang ditentukan
      const selectedNavbar = shuffledObjects.find((obj) => obj.title === 'navbar');
      const selectedHero = shuffledObjects.find((obj) => obj.title === 'hero');
      const selectedContent = shuffledObjects.filter((obj) => obj.title === 'content').slice(0, 4);
      const selectedFooter = shuffledObjects.find((obj) => obj.title === 'footer');

      // Menyimpan objek-objek yang dipilih dalam state array
      this.setState({
        selectedObjects: [selectedNavbar, selectedHero, ...selectedContent, selectedFooter],
      });
      
      this.handleAuthBuildCompoennt([selectedNavbar, selectedHero, ...selectedContent, selectedFooter])
  }, 1000)
}

handleAuthBuildCompoennt = (e) => {
  // Menyimpan semua object ke props HMTL dan Styles
  this.setState({
    dataHTML: e,
    dataStyle: e,
    dataImages: e,
  })
}

handleChangeFontGlobalState = (e) => {
  this.setState({
    nowSelectFont: e
  })
}

handlePrevSelectFontGlobalState = (e) => {
  this.setState({
    selectFont: e
  })
}

handleUpdateStateColors = (e) => {
  console.log('BISA:', e)
  console.log('BISA:', e.activeColor2)
  console.log('BISA:', e.activeColorComponent)
  this.setState({
    activeColorComponent: e.activeColorComponent,
    activeColor2: e.activeColor2
  })
}

handleChangeColorState = () => {
  const updatedColors = this.state.dataStyle.map((color) => {
    return color.replace(new RegExp(this.state.activeColorComponent, 'g'), this.state.activeColor2);
  });

  this.setState({ dataStyle: updatedColors });
}

handleAnimate = () => {
    this.setState({
      activeAnimate: !this.state.activeAnimate
    })
}

handleClear = () => {
  this.setState({ 
    dataHTML: [],
    dataStyle: [],
    dataImages: [],
    limit: 0,
   })
}


  render() {
    // state dan function yang dikirim ke html
    const { createComponent, handleAutomaticBuild , handleChangeFontGlobalState, handlePrevSelectFontGlobalState} = this;
    const { selectedObjects } = this.state;
    const { dataStyle, dataHTML, dataImages } = this.state;
    return (
      this.state.status ? (
        <>
          {
            // kode untuk menampilkan alert ketika lebar layar dibawah 1240px
            this.state.screen < 1000 ? (
              <div className="alert-page">
                <img src={Water} alt="alert-logo" />
                <h1>Open in laptop/pc or desktop mode</h1>
                <p>can only be accessed on screen widths above 1000px, while those below that size cannot access including mobile phones</p>
              </div>
            ):
            null
          }
          {
            this.state.limitStatus ? (
              <div className='w-screen z-[9999999999] fixed h-screen bg-[#00000073]'>
                <div className='w-[70vw] h-[70vh] relative z-[999999] bg-darkMongo rounded-[20px] duration p-12 shadow-lg flex ml-auto mr-auto mt-[8%]'>
                  <div className='w-[50%] h-full flex flex-col pl-8 justify-center'>
                    <h3 className='text-white text-[48px] font-normal leading-[1.5em]'>Come on, be premium for no limits</h3>
                    <div className='flex items-center'>
                      <a href="/pricing" target='__blank'>
                        <div className='rounded-[4px] mt-5 w-max h-max px-4 py-2 cursor-pointer hover:brightness-[90%] active:scale-[0.98] bg-mongo text-white'>
                          Go premium
                        </div>
                      </a>
                      <div onClick={this.closeModal} className='rounded-[4px] ml-6 mt-5 w-max h-max px-4 py-2 cursor-pointer hover:brightness-[90%] active:scale-[0.98] border-[1px] border-slate-500 text-white'>
                        Decline
                      </div>
                    </div>
                  </div>
                  <div className='w-[50%] h-full flex items-center justify-center'>
                  <div className='z-10 overflow-hidden relative rounded-[20px] px-8 border-[3px] shadow-saweria border-[#00ED64] pb-4 pt-[35px] lg:pt-[45px] lg:mt-[-10px] bg-white w-[96%] lg:w-[70%] h-max lg:h-max'>
                      <ul className='list-none'>
                          <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                              <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                              </div>
                              <p className='text-mongo ml-4 lg:ml-7 text-[15px] lg:text-[17px] relative top-1 font-normal'>All Components</p>
                          </li>
                          <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                              <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                              </div>
                              <p className='text-mongo ml-4 lg:ml-7 text-[15px] lg:text-[17px] relative top-1 font-normal'>No component limit</p>
                          </li>
                          <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                              <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                              </div>
                              <p className='text-mongo ml-4 lg:ml-7 text-[15px] lg:text-[17px] relative top-1 font-normal'>No download limit</p>
                          </li>
                          <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                              <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                              </div>
                              <p className='text-mongo ml-4 lg:ml-7 text-[15px] lg:text-[17px] relative top-1 font-normal'>Full features</p>
                          </li>
                          <li className='list-none mb-[40px] lg:mb-[30px] lg:ml-0 ml-[-20px] flex items-center'>
                              <div className='h-[15px] w-[25px] border-[#00ED64] rotate-[-45deg] border-l-[4px] border-b-[4px]'>
                              </div>
                              <p className='text-mongo ml-4 lg:ml-7 text-[15px] lg:text-[17px] relative top-1 font-normal'>Export to React</p>
                          </li>
                      </ul>
                  </div>
                  </div>
                </div>
              </div>
            ):
            null
          }
          <div className="w-screen h-max overflow-x-hidden">
            <div className="col-sm-0 col-12">
              {/* Menu komponent */}
              <MenuComponent handleClear={this.handleClear} handleAnimate={this.handleAnimate} mode={this.state.mode} handleChangeColorState={(e) => this.handleChangeColorState(e)} handleUpdateStateColors={(e) => this.handleUpdateStateColors(e)} handlePrevSelectFontGlobalState={(e) => handlePrevSelectFontGlobalState(e)} dataStyle={dataStyle} selectFont={this.state.selectFont} handleChangeFontGlobalState={(e) => handleChangeFontGlobalState(e)} dataHTML={dataHTML} isLoading={this.state.isLoading} selectedObjects={selectedObjects} handleAutomaticBuild={handleAutomaticBuild} showModal={this.showModal} closeModal={this.closeModal} limit={this.state.limit} handleAdd={this.handleAdd} createComponent ={createComponent}/>
            </div>
            <div className='col-sm-12 col-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {/* frame yang akan menampilkan semua component terpilih */}
              <FrameOutput activeAnimate={this.state.activeAnimate} activeColor2={this.state.activeColor2} activeColorComponent={this.state.activeColorComponent} handlePrevSelectFontGlobalState={(e) => handlePrevSelectFontGlobalState(e)} selectFont={this.state.selectFont} nowSelectFont={this.state.nowSelectFont} handleChangeFontGlobalState={handleChangeFontGlobalState} isLoadingBuild={this.state.isLoadingBuild} mode={this.state.mode} selectedObjects={selectedObjects} dataStyle={dataStyle} handleMinus={this.handleMinus} dataHTML={dataHTML} dataComponentUsed={dataImages} />
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