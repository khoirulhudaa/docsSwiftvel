import { faArrowsRotate, faCompress, faExpand, faFont, faPaintBrush, faTimes, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'boxicons';
import introJs from 'intro.js';
import 'intro.js/minified/introjs.min.css';
import beautify from 'js-beautify';
import Cookies from 'js-cookie';
import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import Crown from '../../assets/images/png/crown.png';
import Padlock from '../../assets/images/png/padlock.png';
import Add from '../../assets/images/svg/add.svg';
import Download from '../../assets/images/svg/donlot.svg';
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
    bgColor3: 'white',
    textColor1: 'black',
    textColor2: 'white',
    textColor3: 'black',
    username: '',
    screen: false,
    limitReact: 0,
    typeFonts: false,
    selectFont: 'Poppins',
    typeColor: '',
    dataColors:[],
    activeColor: '',
    activeColor2: '',
    activeColorComponent: '',
    colorPicker: false,
    activeDownload: false,
    intro: 0,
    fontNow: 'Poppins'
 };
};

componentDidUpdate = () => {
    fetch(`https://api-dragme.vercel.app/api/users/${this.props.data.email}`)
        .then(response => response.json())
        .then(data => {
            // Perbarui state limitReact dengan data terbaru
            this.setState({ 
                limitReact: data.message.limitReact,
                intro: data.message.intro
            });
        })
        .catch(error => {
            console.log(error);
    });
}

componentDidMount = () => {

    this.setState({
        data: Data
    })

    fetch(`https://api-dragme.vercel.app/api/users/${this.props.data.email}`)
        .then(response => response.json())
        .then(data => {
            // Perbarui state limitReact dengan data terbaru
            this.setState({ limitReact: data.message.limitReact });
        })
        .catch(error => {
            console.log(error);
    });

    fetch(`https://api-dragme.vercel.app/api/users/initialIntro/${this.props.data.email}`)
        .then(response => response.json())
        .then(data => {
            // Perbarui state limitReact dengan data terbaru
            this.setState({ intro: data.message.intro });
            console.log('hasil initial', data)
        })
        .catch(error => {
            console.log(error);
            console.log('hasil initial', error)
    });

    const { data } = this.props;

    const BASE_URL2 = data && data.email ? `https://api-dragme.vercel.app/api/users/${data.email}` : '';
    
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
    
    this.startIntro()
    this.handleIntro()
}

startIntro = () => {
    const valueIntro = Cookies.get('intro');
        window.addEventListener('load', () => {
            if (valueIntro === '0' || valueIntro === 0) {
            introJs()
            .setOptions({
                steps: [
                {
                    element: '#Component',
                    tooltipClass: 'custom-tooltip',
                    intro: 'Welcome to Swiftvel. Continue to learn about tools in Swiftvel',
                },
                {
                    element: '#download',
                    intro: 'Get the code for the built web',
                },
                {
                    element: '#navbar',
                    intro: 'Choice of various navbar components navbar',
                },
                {
                    element: '#heroes',
                    intro: 'Choice of various navbar components heroes',
                },
                {
                    element: '#content',
                    intro: 'Choice of various navbar components content',
                },
                {
                    element: '#footer',
                    intro: 'Choice of various navbar components footer',
                },
                {
                    element: '#automatic',
                    intro: 'Create your website automatically',
                },
                {
                    element: '#frame',
                    intro: 'Broaden your view of the frame',
                },
                {
                    element: '#reload',
                    intro: 'Reload this page',
                },
                {
                    element: '#fonts',
                    intro: 'Customize fonts with web themes',
                },
                {
                    element: '#color',
                    intro: 'Change the color of some parts of the web',
                },
                {
                    element: '#language',
                    intro: 'Select the type of code you want to get',
                },
                ],
            })
            .start()
        }
    })
}

handleIntro = () => {
    const currentValue = parseInt(Cookies.get('intro'), 10) || 0;
    
    // Menyimpan nilai yang ditingkatkan ke dalam cookie jika belum berubah
    if(currentValue === 0) {
        Cookies.set('intro', 1);
        Cookies.set('introDone', true);
    }
}

handleDownload = (e) => {
    e.preventDefault()
    this.setState({
        typeColor: false,
        typeFonts: false,
        activeDownload: !this.state.activeDownload
    })
}


download = (e) => {
    const name = e;
    console.log('component name:', document.querySelector(`.${name}`))
    console.log('value codes:', document.querySelector(`.${name}`).innerHTML)
    console.log('styles codes:', document.querySelector(`.styles`).innerHTML)
    console.log('template codes:', document.querySelector(`.template`).innerHTML)
    const header = `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Ini adalah deskripsi halaman Anda." />
        <meta name="keywords" content="kata kunci, yang, relevan, dengan, halaman, Anda" />
        <meta name="keywords" content="kata kunci, yang, relevan, dengan, halaman, Anda" />
        <meta name="language" content="en" />
        <meta name="contributor" content="Nama Penyusun" />
        <meta name="copyright" content="Tahun Hak Cipta, Pemilik Hak Cipta" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    `;

    
    // Menghapus tag <script> beserta kontennya dari htmlReact
    
    const htmlReact = document.querySelector('.template').innerHTML;
    
    // Mencocokkan semua kode yang ada di dalam tag <script>
    // Mencocokkan semua kode yang ada di dalam tag <script>
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    const scriptTags = htmlReact.match(scriptRegex);
    
    const modifiedResult = htmlReact.replace(scriptRegex, '');
    // Mengambil konten dari setiap tag <script>
    const scriptContents = scriptTags
    ? scriptTags.map((tag) => {
        // Menghapus tag <script> di awal dan akhir
        const scriptContent = tag.replace(/<\/?script\b[^>]*>/gm, '');
        return scriptContent.trim();
        })
    : [];

    const codeJS = beautify.js(scriptContents.join('\n\n'));
    
    // Mengubah semua kata class menjadi className
    let modifiedHTML = modifiedResult.replace(/class\b/g, 'className');

    // Tambahkan "/" sebelum simbol ">" pada tag <br>
    modifiedHTML = modifiedHTML.replace(/<br>/g, '<br/>');

    // Tambahkan "/" sebelum simbol ">" pada tag <hr>
    modifiedHTML = modifiedHTML.replace(/<hr>/g, '<hr/>');

    // Tambahkan "/" sebelum simbol ">" pada tag <img>
    modifiedHTML = modifiedHTML.replace(/<img(.*?)>/g, '<img$1/>');

    // Menerapkan unminify menggunakan js-beautify
    const unminifiedCodeHTMLReact = beautify.html(modifiedHTML);
    
    const cssCode = document.querySelector('.styles').innerHTML;
    const uniqueImportCode = cssCode.replace(/@import[^;]+;/g, (match, offset, str) => {
        return str.indexOf(match) === offset ? match : '';
    });

    const codeStylesReact = uniqueImportCode;

    // Menerapkan unminify menggunakan js-beautify
    const unminifiedCodeStylesReact = beautify.css(codeStylesReact);

    const reactCode = `
import { React, useEffect } from "react";
    
const Swiftvel = () => {

    useEffect(() => {
        ${codeJS}

        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://unpkg.com/aos@next/dist/aos.css';
    
        // Tambahkan elemen link ke elemen head
        document.head.appendChild(linkElement);
    
        // Buat elemen script
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://unpkg.com/aos@next/dist/aos.js';
    
        // Tambahkan elemen script ke elemen head
        document.head.appendChild(scriptElement);

        // Tambahkan kode script langsung
        const inlineScriptElement = document.createElement('script');
        inlineScriptElement.innerHTML = "AOS.init();';
    
        // Tambahkan elemen script langsung ke elemen head
        document.head.appendChild(inlineScriptElement);
    
        return () => {
          // Hapus elemen link saat komponen di-unmount
          document.head.removeChild(linkElement);
    
          // Hapus elemen script saat komponen di-unmount
          document.head.removeChild(scriptElement);
          
          // Hapus elemen script langsung saat komponen di-unmount
          document.head.removeChild(inlineScriptElement);
        };
      }, []);
    
    const style = 
    \`${unminifiedCodeStylesReact}\`;
return (
    <>
    <style>
        {style}
    </style>

${unminifiedCodeHTMLReact}
        </>
    );
};

export default Swiftvel;
    `;

    // FOR REACT JS

    const sourceREACT = reactCode;

    // FOR HTML AND PHP


    const footerAOS = `
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init();
</script>
    `
    const sourceHTML = header + document.querySelector(`.${name}`).innerHTML + footerAOS;
    
    // Menerapkan unminify menggunakan js-beautify
    const beautifiedCode = beautify.html(sourceHTML);
    
    // Menghapus semua @import yang duplikat
    let importRegex = /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Poppins:wght@[0-9,;]+&display=swap'\);/g;
    let uniqueImportCodeHTML = beautifiedCode.replace(importRegex, (match, offset, str) => {
        return str.indexOf(match) === offset ? match : '';
    });

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(this.state.active === 'React' ? sourceREACT : uniqueImportCodeHTML);

    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `index.${this.state.active === 'React' ? 'js' : this.state.active === 'HTML' ? 'html' : 'php'}`;
    fileDownload.click();
    document.body.removeChild(fileDownload);

    Swal.fire({
        icon: "success",
        timer: 1160,
        title: "Download Successfully", 
        showConfirmButton: false 
    });
}

downloadAnimate = (e) => {
   this.handleAnimate()
   setTimeout(() => {
       this.download(e)
   }, 200)
}

handleChangeActive = (e) => {
    if(e === 'HTML') {
      this.setState({
          active: e,
          bgColor1: 'white',
          bgColor2: '#00684A',
          bgColor3: 'white',
          textColor1: 'black',
          textColor2: 'white',
          textColor3: 'black',
    })
    }else if(e === 'React') {
        this.setState({
            active: e,
            bgColor1: 'white',
            bgColor2: 'white',
            bgColor3: '#00684A',
            textColor1: 'black',
            textColor2: 'black',
            textColor3: 'white',
        })
    }else {
      this.setState({
            active: e,
            bgColor1: '#00684A',
            bgColor2: 'white',
            bgColor3: 'white',
            textColor1: 'white',
            textColor2: 'black',
            textColor3: 'black',
      })
    }
}

handleScreen = () => {

    this.setState({
        screen: !this.state.screen
    })
}

handleAddLimit = () => {
    const { data } = this.props;
    console.log('email saya:', data.email)
    const BASE_URL3 = data && data.email ? `https://api-dragme.vercel.app/api/users/updateLimitReact/${data.email}` : '';

    fetch(`${BASE_URL3}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}

handleFonts = (e) => {
    e.preventDefault()
    this.setState({
        typeFonts: !this.state.typeFonts,
        typeColor: false,
        activeDownload: false
    })
}

handleColor = (e) => {
    e.preventDefault()
    this.setState({
        typeColor: !this.state.typeColor,
        typeFonts: false,
        activeDownload: false
    })
}

handleChangeColor = (e) => {
    const { dataColors } = this.state;
   
    if (!dataColors.includes(e)) {
        this.setState((prevState) => ({
            dataColors: [...prevState.dataColors, e],
        }));
    }
}

handleChange = (e) => {
    e.preventDefault()
    const dataColorss = {
        activeColor2: this.state.activeColor2,
        activeColorComponent: this.state.activeColorComponent,
    }
    
    this.props.handleUpdateStateColors(dataColorss)

    const uniqueDataColors = this.state.dataColors.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    this.setState({ dataColors: uniqueDataColors });      
    
    const updatedColors = this.state.dataColors.map((color) => {
        if (color === this.state.activeColorComponent) {
            return this.state.activeColor2; // Mengganti nilai #FFFFF menjadi #GGGGG
        }
        return color; // Menjaga nilai yang tidak perlu diganti
    });

    this.setState({ dataColors: updatedColors });
    const activeColorComponents = new RegExp(this.state.activeColorComponent, 'g');
    const activeColors2 = this.state.activeColor2;
    const result = document.querySelector('.templateCurrent .styles').innerHTML.replace(activeColorComponents, activeColors2);
    document.querySelector('.templateCurrent .styles').innerHTML = result

    this.props.handleChangeColorState(e)

    this.setState({
        typeColor: !this.state.typeColor,
        typeFonts: false
    })
}
  
handleNavbar = (e) => {
    e.preventDefault()
    this.setState({
        typeColor: false
    })
    document.querySelector('.menu1').classList.add('show1')
    document.querySelector('.menu2').classList.remove('show2')
    document.querySelector('.menu3').classList.remove('show3')
    document.querySelector('.menu4').classList.remove('show4')
    document.querySelector('.menu5').classList.remove('show5')
}

handleSelectTypeFace = (e) => {
    this.setState({ fontNow: e })
    const prevSelectFont = this.state.selectFont;
    this.props.handlePrevSelectFontGlobalState(this.state.selectFont);
    this.props.handleChangeFontGlobalState(e);
    
    const fontToReplace = e;
    const importRegex2 = new RegExp(`@import\\s+url\\('https:\\/\\/fonts\\.googleapis\\.com\\/css2\\?family=${prevSelectFont}:wght@300;400;500;600;700&display=swap'\\);`, 'g');
    const importURL = `@import url('https://fonts.googleapis.com/css2?family=${fontToReplace}:wght@300;400;500;600;700&display=swap');`;
    const uniqueImportCodeHTMLDone = document.querySelector('.templateCurrent .styles').innerHTML.replace(importRegex2, importURL);
    document.querySelector('.templateCurrent .styles').innerHTML = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${prevSelectFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
    
    this.setState({ typeFonts: false });
    // Cek apakah regex menemukan nilai yang sama dengan prevSelectFont
    if (!importRegex2.test(document.querySelector('.templateCurrent .styles').innerHTML)) {
        // Jika tidak, ubah nilai prevSelectFont menjadi 'Poppins' atau nilai yang mirip
        const newFont = 'Poppins';
        const importRegex2 = new RegExp(`@import\\s+url\\('https:\\/\\/fonts\\.googleapis\\.com\\/css2\\?family=${newFont}:wght@300;400;500;600;700&display=swap'\\);`, 'g');
        const importURL = `@import url('https://fonts.googleapis.com/css2?family=${fontToReplace}:wght@300;400;500;600;700&display=swap');`;
        const uniqueImportCodeHTMLDone = document.querySelector('.templateCurrent .styles').innerHTML.replace(importRegex2, importURL);
        document.querySelector('.templateCurrent .styles').innerHTML = uniqueImportCodeHTMLDone.replace(new RegExp(`font-family:\\s*'${newFont}',\\s*sans-serif;`, 'g'), `font-family: '${fontToReplace}', sans-serif;`);
        this.props.handlePrevSelectFontGlobalState(this.state.selectFont);
        this.props.handleChangeFontGlobalState(e);
    }

}

handlePicker = (e) => {
    e.preventDefault()
    this.setState({
        colorPicker: !this.state.colorPicker
    })
}

handleChangeColorPicker = (selectedColor) => {
    this.setState({
        activeColor2: selectedColor.hex
    })
}

handleAnimate = () => {
    this.props.handleAnimate()
}

  render() {
    const { status, limitReact } = this.props.data || {};
    console.log('acticeColorCOmponent', this.state.activeColorComponent)
    console.log('acticeColor2', this.state.activeColor2)
    return (
        <>
            <a href="/">
                <div className='absolute left-12 active:scale-[0.96] bg-white top-3 w-max p-[10px] border border-[1] border-black cursor-pointer hover:brightness-[95%] duration-100 h-max rounded-full flex items-center justify-center'>
                    <img src={Right} className='rotate-[180deg] w-[20px] h-[20px]' alt='icon' />
                </div>
            </a>
            {/* {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[120px] items-center' id='automatic'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
            } */}
                    <div className='flex top-[13px] absolute left-[120px] items-center' id='automatic'>
                        <div onClick={
                            status == 'settlement' && this.state.statusNew == 'settlement' ? () => {
                            this.props.handleAutomaticBuild()
                            this.setState({ typeColor: false })
                        }: null} className={`w-[40px] p-[10px] border border-[2px] ${status == 'settlement' && this.state.statusNew == 'settlement' ? 'bg-transparent hover:brightness-[95%] active:scale-[0.96] cursor-pointer' : 'bg-slate-200 cursor-not-allowed hover:brightnes-[100%] active:scale-[1]'} border-black duration-100 h-[40px] rounded-full flex items-center justify-center`}>
                            <FontAwesomeIcon icon={faWandMagicSparkles} /> 
                        </div>
                    </div>
            {/* {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[260px] items-center' id='reload'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
            } */}
                    <div className='flex top-[13px] absolute left-[260px] items-center' id='reload'>
                        <div onClick={() => window.location.reload()} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faArrowsRotate} /> 
                        </div>
                    </div>
            {/* {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[330px] items-center' id='fonts'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
            } */}
                    <div className='flex top-[13px] absolute left-[330px] items-center' id='fonts'>
                        <div onClick={(e) => this.handleFonts(e)} className={`active:scale-[0.96] w-[40px] p-[10px] border border-[2px] ${this.state.typeFonts ? 'bg-bgMongo text-white hover:brightness-[90%]' : 'bg-transparent'} border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center`}>
                            <FontAwesomeIcon icon={faFont} /> 
                        </div>
                        <div className={`fixed font-mono ${this.state.typeFonts ? 'top-[13%] z-[9999999] left-[15%] opacity-[1] duration-100' : 'top-[10%] left-[15%] opacity-[0] z-[-3333] duration-[0.2s]'} w-[50vw] h-[84vh] shadow-lg overflow-hidden rounded-[30px] p-4 bg-white flex flex-col text-justify`}>
                            <div className='flex font-mono w-full h-max justify-center items-center'>
                                <div onClick={() => this.setState({ typeFonts: false })} className='absolute w-[35px] flex items-center justify-center h-[35px] bg-[red] text-white shadow-lg rounded-full right-8 top-8 z-[3333] cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className='h-ful font-monol pt-2 w-[33%] flex flex-col items-center justify-between'>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Poppins' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Poppins')}><p>Poppins</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Roboto' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Roboto')}><p>Roboto</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Montserrat' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Montserrat')}><p>Montserrat</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Inter' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Inter')}><p>Inter</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Bebas Neue' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Bebas Neue')}><p>Bebas Neue</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Oxygen' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Oxygen')}><p>Oxygen</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Fasthand' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Fasthand')}><p>Fasthand</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Righteous' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Righteous')}><p>Righteous</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Anton' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Anton')}><p>Anton</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Geologica' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Geologica')}><p>Geologica</p></div>
                                </div>
                                <div className='h-full pt-2 w-[33%] flex flex-col items-center justify-between'>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Merriweather' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Merriweather')}><p>Merriweather</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Oswald' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Oswald')}><p>Oswald</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Kanit' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Kanit')}><p>Kanit</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Inconsolata' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Inconsolata')}><p>Inconsolata</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Raleway' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Raleway')}><p>Raleway</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Mukta' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Mukta')}><p>Mukta</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Pacifico' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Pacifico')}><p>Pacifico</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Rajdhani' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Rajdhani')}><p>Rajdhani</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Kablammo' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Kablammo')}><p>Kablammo</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Orbit' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Orbit')}><p>Orbit</p></div>
                                </div>
                                <div className='h-full pt-2 w-[33%] flex flex-col items-center justify-between'>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Arvo' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Arvo')}><p>Arvo</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Caveat' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Caveat')}><p>Caveat</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Freehand' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Freehand')}><p>Freehand</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Kalam' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Kalam')}><p>Kalam</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Vollkorn' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Vollkorn')}><p>Vollkorn</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Rowdies' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Rowdies')}><p>Rowdies</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Acme' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Acme')}><p>Acme</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Alegreya' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Alegreya')}><p>Alegreya</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Orbitron' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Orbitron')}><p>Orbitron</p></div>
                                    <div className={`w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg ${this.state.fontNow === 'Cinzel' ? 'bg-slate-100' : 'bg-[white]'} hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify`} onClick={() => this.handleSelectTypeFace('Cinzel')}><p>Cinzel</p></div>
                                </div>
                            </div>
                        </div>
                    </div>  
            {/* {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[400px] items-center' id='color'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
            } */}
                    <div className='flex top-[13px] absolute left-[400px] items-center' id='color'>
                        <div onClick={(e) => this.handleColor(e)} className={`active:scale-[0.96] w-[40px] p-[10px] border border-[2px] ${this.state.typeColor ? 'bg-bgMongo text-white hover:brightness-[90%]' : 'bg-transparent'} border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center`}>
                            <FontAwesomeIcon icon={faPaintBrush} /> 
                        </div>
                        <div className={`fixed ml-[-160px] font-mono ${this.state.typeColor ? 'top-[13%] z-[9999999] opacity-[1] duration-100' : 'top-[11%] z-[-2222] opacity-[0] duration-200'} w-max pl-2 py-2 pr-3 flex h-max shadow-lg overflow-hidden rounded-[20px] bg-white text-justify`}>
                           <div className='w-[165px] relative min-h-[340px] border-r border-r-solid-black p-2'>
                                <p className='font-bold mb-3 ml-1'>From</p>
                                <div className='w-full h-max flex flex-wrap'>
                                    {
                                        this.state.dataColors.length > 0 ? (
                                            this.state.dataColors.map((e, i) => (
                                                <div key={i} onClick={() => this.setState({ activeColorComponent: e })} style={{ backgroundColor: e }} className={`${this.state.activeColorComponent === e ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} w-[40px] ml-[4px] mt-[6px] mb-[12px] mr-[20px] h-[40px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] border border-[1px] border-[black] shadow-lg`}></div>
                                            ))
                                        ):
                                            <div onClick={this.props.mode === 'automaticaly' ? null : (e) => this.handleNavbar(e)} className={`w-[40px] flex items-center justify-center m-[4px] h-[40px] ${this.props.mode === 'automaticaly' ? 'cursor-not-allowed bg-slate-300 text-slate-400 hover:scale-[1] active:scale-[1]' : 'cursor-pointer hover:scale-[0.98] active:scale-[0.97]'} text-[24px] border-dashed border-[1px] border-slate-500 rounded-lg`}>
                                                <p className='relative bottom-[-1.8px]'>
                                                    +
                                                </p>
                                            </div>
                                    }
                                </div>
                           </div>
                           <div className='w-max px-3 py-2'>
                            <div onClick={() => this.setState({ typeColor: false })} className='absolute w-[30px] flex items-center justify-center h-[30px] bg-[red] text-white shadow-lg rounded-full right-6 top-1 z-[3333] cursor-pointer right-4 top-4 hover:brightness-[90%] active:scale-[0.98]'>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                            <p className='font-bold mb-3 ml-1'>To</p>
                               <div className='w-max h-full flex'>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1a' })
                                            this.setState({ activeColor2: '#050505' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#050505]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1b' })
                                            this.setState({ activeColor2: '#333333' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#333333]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1c' })
                                            this.setState({ activeColor2: '#575757' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#575757]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1d' })
                                            this.setState({ activeColor2: '#7c7c7c' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#7c7c7c]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1e' })
                                            this.setState({ activeColor2: '#a3a3a3' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#a3a3a3]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1f' })
                                            this.setState({ activeColor2: '#c2c2c2' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#c2c2c2]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color1g' })
                                            this.setState({ activeColor2: '#e4e4e4' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#e4e4e4]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2a' })
                                            this.setState({ activeColor2: '#3d1010' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#3d1010]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2b' })
                                            this.setState({ activeColor2: '#5f1818' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#5f1818]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2c' })
                                            this.setState({ activeColor2: '#812121' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#812121]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2d' })
                                            this.setState({ activeColor2: '#972626' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#972626]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2e' })
                                            this.setState({ activeColor2: '#a72b2b' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#a72b2b]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2f' })
                                            this.setState({ activeColor2: '#c23232' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#c23232]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color2g' })
                                            this.setState({ activeColor2: '#e43939' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#e43939]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5a' })
                                            this.setState({ activeColor2: '#ff0000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#ff0000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5b' })
                                            this.setState({ activeColor2: '#df0000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#df0000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5c' })
                                            this.setState({ activeColor2: '#c00000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#c00000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5d' })
                                            this.setState({ activeColor2: '#a50000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#a50000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5e' })
                                            this.setState({ activeColor2: '#830000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#830000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5f' })
                                            this.setState({ activeColor2: '#6d0000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#6d0000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color5g' })
                                            this.setState({ activeColor2: '#530000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#530000]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3a' })
                                            this.setState({ activeColor2: '#ffa500' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#ffa500]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3b' })
                                            this.setState({ activeColor2: '#dd9000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#dd9000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3c' })
                                            this.setState({ activeColor2: '#c27f02' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#c27f02]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3d' })
                                            this.setState({ activeColor2: '#a36a00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#a36a00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3e' })
                                            this.setState({ activeColor2: '#8a5a00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#8a5a00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3f' })
                                            this.setState({ activeColor2: '#684300' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#684300]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color3g' })
                                            this.setState({ activeColor2: '#462d00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#462d00]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4a' })
                                            this.setState({ activeColor2: '#ffff00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#ffff00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4b' })
                                            this.setState({ activeColor2: '#e2e200' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#e2e200]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4c' })
                                            this.setState({ activeColor2: '#c7c700' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#c7c700]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4d' })
                                            this.setState({ activeColor2: '#8f8f00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#8f8f00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4e' })
                                            this.setState({ activeColor2: '#6e6e00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#6e6e00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4f' })
                                            this.setState({ activeColor2: '#555500' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#555500]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color4g' })
                                            this.setState({ activeColor2: '#313100' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#313100]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6a' })
                                            this.setState({ activeColor2: '#0000ff' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#0000ff]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6b' })
                                            this.setState({ activeColor2: '#0000e0' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#0000e0]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6c' })
                                            this.setState({ activeColor2: '#0000b9' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#0000b9]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6d' })
                                            this.setState({ activeColor2: '#00009b' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00009b]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6e' })
                                            this.setState({ activeColor2: '#00006d' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00006d]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6f' })
                                            this.setState({ activeColor2: '#000055' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#000055]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color6g' })
                                            this.setState({ activeColor2: '#00003b' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00003b]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7a' })
                                            this.setState({ activeColor2: '#00ff00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00ff00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7b' })
                                            this.setState({ activeColor2: '#00db00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00db00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7c' })
                                            this.setState({ activeColor2: '#00c000' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00c000]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7d' })
                                            this.setState({ activeColor2: '#00ac00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00ac00]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7e' })
                                            this.setState({ activeColor2: '#009200' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#009200]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7f' })
                                            this.setState({ activeColor2: '#007200' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#007200]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color7g' })
                                            this.setState({ activeColor2: '#004d00' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#004d00]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8a' })
                                            this.setState({ activeColor2: '#b700ff' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#b700ff]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8b' })
                                            this.setState({ activeColor2: '#9d00db' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#9d00db]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8c' })
                                            this.setState({ activeColor2: '#8400b8' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#8400b8]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8d' })
                                            this.setState({ activeColor2: '#6e0099' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#6e0099]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8e' })
                                            this.setState({ activeColor2: '#540075' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#540075]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8f' })
                                            this.setState({ activeColor2: '#41005a' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#41005a]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color8g' })
                                            this.setState({ activeColor2: '#2d003f' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#2d003f]`}></div>
                                </div>
                                <div className='w-[50px] h-max flex flex-col items-center justify-center'>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9a' })
                                            this.setState({ activeColor2: '#00fff2' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9a' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00fff2]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9b' })
                                            this.setState({ activeColor2: '#00dfd3' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9b' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00dfd3]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9c' })
                                            this.setState({ activeColor2: '#00c4ba' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9c' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00c4ba]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9d' })
                                            this.setState({ activeColor2: '#00ada5' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9d' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00ada5]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9e' })
                                            this.setState({ activeColor2: '#00928b' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9e' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00928b]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9f' })
                                            this.setState({ activeColor2: '#01726c' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9f' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#01726c]`}></div>
                                        <div onClick={() => {
                                            this.setState({ activeColor: 'color9g' })
                                            this.setState({ activeColor2: '#00534f' })
                                        }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9g' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00534f]`}></div>
                                </div>
                               </div>
                           </div>
                           <div className='w-max pl-1 pr-2 flex flex-col justify-between items-end pb-[11.5px]'>
                                <div className='relative top-[55px] w-[max] h-max'>
                                    {
                                        status !== 'settlement' && this.state.statusNew !== 'settlement' && (
                                            <div className='w-full h-full bg-[#ffffffe1] z-[4444] cursor-not-allowed absolute flex items-center justify-center'>
                                                <div className="w-[40px] h-[39px] border-[1px] bg-white z-[333] border-slate-400 absolute mr-[35%] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px]">
                                                    <img src={Crown} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                </div>
                                                <div className="w-[40px] h-[39px] border-[1px] bg-white z-[333] border-slate-400 absolute ml-[35%] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px]">
                                                    <img src={Padlock} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                </div>
                                            </div>
                                        )
                                    }
                                        <ChromePicker color={this.state.activeColor2} onChange={this.handleChangeColorPicker} />
                                </div>
                                {
                                    this.props.mode === 'automaticaly' ? (
                                        <div className='w-max h-[40px] px-3 items-center justify-center flex rounded-lg bg-slate-300 text-slate-400 text-center cursor-not-allowed'>Change</div>
                                    ):
                                        <div onClick={
                                            this.state.activeColorComponent !== '' && this.state.activeColor2 !== '' ? (
                                                (e) => this.handleChange(e)
                                            ):
                                            null
                                        } className={`w-max h-[40px] px-3 items-center justify-center flex rounded-lg ${this.state.activeColorComponent !== '' && this.state.activeColor2 !== '' ? 'bg-bgMongo cursor-pointer hover:brightness-[90%] active:scale-[0.97]' : 'bg-slate-300 text-slate-400 cursor-not-allowed'} text-white text-center`}>Change</div>
                                }
                           </div>
                        </div>
                    </div>  
            {/* {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[190px] items-center' id='frame'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
            } */}
                    <div className='flex top-[13px] absolute left-[190px] items-center' id='frame'>
                        {
                            this.state.screen ? (
                                <>
                                    <div onClick={() => this.handleScreen()} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faCompress} /> 
                                    </div>
                                </>
                            ):
                            <>
                                    <div onClick={() => this.handleScreen()} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faExpand} /> 
                                    </div>
                                </>
                        }
                    </div>
            {/* {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[470px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
            } */}
                    <a href="/pricing" className='absolute no-underline text-white left-[470px] top-[13px]'>
                        {
                            status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                                <div className='active:scale-[0.96] w-[40.6px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                                    <img src={Crown} style={{width: '18px', height: '18px'}} alt="icon add" />
                                </div>
                            ):
                                <></>
                        }
                    </a>

            <div className='flex items-center absolute top-3 right-7'>
                {/* {
                this.props.isLoading ? (
                    <>  
                        <div className='flex items-center relative ml-1 mr-5 hovetext-[14px]r:text-black' id='language'>
                            <div className='rounded-full w-[100px] h-[41px] flex items-center justify-center cursor-default active:scale-[0.97] duration-100 bg-gray-300 animate-pulse'></div>
                        </div>
                        <div className='flex items-center relative ml-1 mr-5 hovetext-[14px]r:text-black'>
                            <div className='rounded-full w-[100px] h-[41px] flex items-center justify-center cursor-default active:scale-[0.97] duration-100 bg-gray-300 animate-pulse'></div>
                        </div>
                        <div className='flex items-center relative ml-1 mr-2 hovetext-[14px]r:text-black'>
                            <div className='rounded-full w-[100px] h-[41px] flex items-center justify-center cursor-default active:scale-[0.97] duration-100 bg-gray-300 animate-pulse'></div>
                        </div>
                    </>
                ):
            } */}
                   <>
                    {
                        status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                            limitReact === 2 || this.state.limitReact === 2 ? (
                                <div className='flex w-max h-max items-center justify-center'>
                                    Trials react : {this.state.limitReact}/2
                                    <div className={`d-flex items-center bg-slate-300 text-slate-400 justify-center rounded-full border-[1px] border-slate-300 ml-4 mr-2 w-max h-[41px] px-4 py-1 text-center cursor-not-allowed`}>
                                        <p className='text-[14px] mt-0'>React</p>
                                    </div>
                                </div>
                            ):
                                <div className='flex w-max h-max items-center justify-center'>
                                    Trials react : {this.state.limitReact}/2
                                    <div onClick={() => this.handleChangeActive('React')} className={`d-flex items-center bg-[${this.state.bgColor3}] text-${this.state.textColor3} justify-center rounded-full border-[1px] border-slate-300 ml-4 mr-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
                                        <p className='text-[14px] mt-0'>React</p>
                                    </div>
                                </div>
                        ):
                            <div id='language' onClick={() => this.handleChangeActive('React')} className={`d-flex items-center justify-center rounded-full border-[1px] bg-[${this.state.bgColor3}] text-${this.state.textColor3} border-slate-300 ml-4 mr-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
                                <p className='text-[14px] mt-0'>React</p>
                            </div>
                    }
                    <div onClick={() => this.handleChangeActive('PHP')} className={`d-flex items-center justify-center rounded-full border-[1px] bg-[${this.state.bgColor1}] text-${this.state.textColor1} border-slate-300 mx-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
                        <p className='text-[14px] mt-0'>PHP</p>
                    </div>
                    <div onClick={() => this.handleChangeActive('HTML')} className={`d-flex items-center justify-center rounded-full border-[1px] bg-[${this.state.bgColor2}] text-${this.state.textColor2} border-slate-300 mx-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
                        <p className='text-[14px] mt-0'>HTML</p>
                    </div>
                   </>
            </div>
            <div className={`w-[600px] ${this.state.activeDownload ? 'left-[10%] opacity-[1] z-[122222] duration-200' : 'opacity-[0.1] duration-[0.2s] left-[10%] z-[-22]'} flex items-center justify-center h-[360px] rounded-[20px] bg-white shadow-lg p-1 fixed duration-100 top-[14%]`}>
                <div onClick={() => this.setState({ activeDownload: false })} className='absolute w-[35px] flex items-center justify-center h-[35px] bg-[red] text-white shadow-lg rounded-full -right-12 top-1 z-[3333] cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className='w-[48%] h-[96%] bg-white flex flex-wrap rounded-lg mx-2 relative overflow-hidden flex'>
                    <div className='ml-auto mr-auto border border-slate-500 relative rounded-lg w-full h-max flex flex-col items-center justify-center px-2 pt-2'>
                       <div className='w-[50%] h-[10px] bg-slate-400 rounded-full mb-2 mt-[20px]'></div>
                       <div className='flex w-[70%] flex-wrap h-max mb-2 items-center justify-center'>
                        <div className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                        <div className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                       </div>
                       <div className='flex w-[70%] items-center justify-center my-1'>
                        <div className='w-[25%] mr-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                        <div className='w-[25%] ml-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                       </div>
                       <div className='flex w-[80%] items-center justify-between my-2'>
                        <div className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                        <div className='w-[50%]'>
                            <div className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                            <div className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                        </div>
                       </div>
                       <div className='flex w-[80%] items-center justify-between my-2'>
                        <div className='w-[50%]'>
                            <div className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                            <div className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                        </div>
                        <div className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                       </div>
                    </div>
                    <div onClick={(e) => {
                        this.download('templateCurrent')
                        this.setState({ activeDownload: false })      
                    }} 
                        className='absolute bottom-0 ml-auto mr-auto py-[10px] cursor-pointer hover:brightness-[84%] active:scale-[0.98] w-full px-[20px] h-max bg-bgMongo text-white flex items-center justify-center'>
                        Without animate
                    </div>
                </div>
                <div className='w-[48%] h-[96%] bg-white flex flex-wrap rounded-lg mx-2 relative overflow-hidden flex'>
                    <div className='ml-auto mr-auto border border-slate-500 relative w-full rounded-lg h-max flex flex-col items-center justify-center px-2 pt-2'>
                       <div id='blck2' className='w-[50%] h-[10px] bg-slate-400 rounded-full mb-2 mt-[20px]'></div>
                       <div className='flex w-[70%] flex-wrap h-max mb-2 items-center justify-center'>
                        <div id='blck2' className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div id='blck2' className='w-[35%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                        <div id='blck2' className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div id='blck2' className='w-[33%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div id='blck2' className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 mr-1'></div>
                        <div id='blck2' className='w-[25%] h-[6px] bg-slate-400 rounded-full mb-1 ml-1'></div>
                       </div>
                       <div className='flex w-[70%] items-center justify-center my-1'>
                        <div id='blck2' className='w-[25%] mr-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                        <div id='blck2' className='w-[25%] ml-1 h-[13px] bg-slate-400 rounded-lg mb-2'></div>
                       </div>
                       <div className='flex w-[80%] items-center justify-between my-2'>
                        <div id='blck2' className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                        <div className='w-[50%]'>
                            <div id='blck2' className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                            <div id='blck2' className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div id='blck2' className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div id='blck2' className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                        </div>
                       </div>
                       <div className='flex w-[80%] items-center justify-between my-2'>
                        <div className='w-[50%]'>
                            <div id='blck2' className='w-[70%] ml-2 h-[10px] bg-slate-400 rounded-full mb-2'></div>
                            <div id='blck2' className='w-[70%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div id='blck2' className='w-[50%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                            <div id='blck2' className='w-[40%] ml-2 h-[6px] bg-slate-400 rounded-full mb-1'></div>
                        </div>
                        <div id='blck2' className='w-[50%] mr-2 h-[60px] bg-slate-400 rounded-[6px] mb-2'></div>
                       </div>
                    </div>
                    <div onClick={
                        status == 'settlement' && this.state.statusNew == 'settlement' ? 
                        (e) => {
                            this.download('templateCurrent')
                            this.setState({ activeDownload: false })      
                        } : null
                        } className={`absolute bottom-0 ml-auto mr-auto py-[10px] ${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-bgMongo text-white cursor-pointer active:scale-[0.98] hover:brightness-[84%]'} w-full px-[20px] h-max flex items-center justify-center`}>
                        {
                            status !== 'settlement' && this.state.statusNew !== 'settlement' && (
                                <div className='w-full h-full z-[4444] absolute flex items-center justify-between'>
                                    <div className="w-[30px] h-[30px] left-0 border-[1px] bg-white z-[333] border-slate-400 absolute left-[10%] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px]">
                                        <img src={Crown} style={{width: '158x', height: '18px'}} alt="icon add" />
                                    </div>
                                    <div className="w-[30px] h-[30px] right-0 border-[1px] bg-white z-[333] border-slate-400 absolute right-[10%] rounded-[99px] flex items-center justify-center cursor-not-allowed p-[4px]">
                                        <img src={Padlock} style={{width:'18px', height:'18px'}} alt="icon add" />
                                    </div>
                                </div>
                            )
                        }
                        With animate
                    </div>
                </div>
            </div>
            <div className={`${!this.state.screen ? 'menuComponents': 'menuComponentsSide'}`}>
                <div className="menuAll">
                    <div className="card-menu menu1">
                        <i className='fas fa-times'></i>
                        <div className='child-card-menu'>
                        {
                            this.state.data.map((data, index) => {
                                if(data.title === "navbar") {
                                    return (
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-navbar-standar' : 'cardImage-navbar'}`} key={index} onClick={() => {
                                            if (status !== 'settlement' || this.state.statusNew !== 'settlement') {
                                                if (this.props.limit !== 6 && data.type !== 'premium') {
                                                    this.props.handleAdd(1);
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }else if(this.props.limit === 6 && data.type !== 'premium') {
                                                    this.props.showModal()
                                                }
                                            }else if (status === 'settlement' || this.state.statusNew === 'settlement') {
                                                this.props.handleAdd(1);
                                                if (this.props.limit !== 100) {
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }
                                            }
                                            }}>
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
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
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
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-standar' : 'cardImage'}`} key={index} onClick={() => {
                                             if (status !== 'settlement' || this.state.statusNew !== 'settlement') {
                                                 if (this.props.limit !== 6 && data.type !== 'premium') {
                                                    this.props.handleAdd(1);
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }else if(this.props.limit === 6 && data.type !== 'premium') {
                                                    this.props.showModal()
                                                }
                                            }else if (status === 'settlement' || this.state.statusNew === 'settlement') {
                                                this.props.handleAdd(1);
                                                if (this.props.limit !== 100) {
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }
                                            }
                                            }}>
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
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
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
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-content-standar' : 'cardImage-content'}`} key={index} onClick={() => {
                                             if (status !== 'settlement' || this.state.statusNew !== 'settlement') {
                                                 if (this.props.limit !== 6 && data.type !== 'premium') {
                                                    this.props.handleAdd(1);
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }else if(this.props.limit === 6 && data.type !== 'premium') {
                                                    this.props.showModal()
                                                }
                                            }else if (status === 'settlement' || this.state.statusNew === 'settlement') {
                                                this.props.handleAdd(1);
                                                if (this.props.limit !== 100) {
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }
                                            }
                                            }}>
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
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
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
                                        <div className={`${status !== 'settlement' && this.state.statusNew !== 'settlement' ? 'cardImage-footer-standar' : 'cardImage-footer'}`} key={index} onClick={() => {
                                             if (status !== 'settlement' || this.state.statusNew !== 'settlement') {
                                                 if (this.props.limit !== 6 && data.type !== 'premium') {
                                                    this.props.handleAdd(1);
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }else if(this.props.limit === 6 && data.type !== 'premium') {
                                                    this.props.showModal()
                                                }
                                            }else if (status === 'settlement' || this.state.statusNew === 'settlement') {
                                                this.props.handleAdd(1);
                                                if (this.props.limit !== 100) {
                                                    this.handleChangeColor(data.colorMain)
                                                    this.props.createComponent(data.title, data.img, data.html, data.style);
                                                }
                                            }
                                            }}>
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
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
                                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                                        </div>

                                                ):
                                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                        >
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
                                        <div style={{width: '40px', position: 'absolute', height: '40px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '4px', backgroundColor: '#00684A'}}
                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'scale(0.96)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                        >
                                            <img src={Add} style={{width: '20px', height: '20px'}} alt="icon add" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                {
                    status !== 'settlement' || this.state.statusNew !== 'settlement' ? (
                        <p className='relative bottom-5 mt-[40px] flex items-center'>{this.props.limit}/6</p>
                    ): 
                    <></>
                }
                 {/* {
                    this.props.isLoading ? (
                        <div className='w-[40px] mb-2 h-max flex flex-col justify-center items-center' id='download'>
                            <div className='w-[45px] h-[45px] rounded-full bg-gray-300 animate-pulse'></div>
                        </div>
                    ):
                } */}
                        <div onClick={(e) => {
                                this.handleDownload(e);
                                if(this.state.active === 'React') {
                                    this.handleAddLimit()   
                                }
                            }
                        } className='btn-downloadsss shadow-lg hover' style={{borderRadius: 90, backgroundColor: '#00684A', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'}} id='download'>
                            <img src={Download} alt="icon-download" style={{width: '47%'}} />
                        </div>
                <div className="squareComponents" id='navbar'>
                    {/* {
                        this.props.isLoading ? (
                                <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                    <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                    <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                </div>
                            ):
                    } */}
                                <>
                                    <box-icon type="icon" name="collection" id='navbar2' />
                                    <p>Navbar</p>
                                </>
                </div>
                <div className="squareComponents" id='heroes'>
                {/* {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                    } */}
                            <>
                                <box-icon name='objects-vertical-bottom'></box-icon>
                                <p>Heroes</p>
                            </>
                </div>
                <div className="squareComponents" id='content'>
                {/* {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                    } */}
                            <>
                                <box-icon name='objects-horizontal-center'></box-icon>
                                <p>Content</p>
                            </>
                </div>
                <div className="squareComponents" id='footer'>
                {/* {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                    } */}
                            <>
                                <box-icon name='objects-vertical-top' ></box-icon>
                                <p>Footer</p>
                            </>
                </div>
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