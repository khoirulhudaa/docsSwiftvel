import { faAdd, faArrowsRotate, faCompress, faExpand, faFont, faPaintBrush, faPlus, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'boxicons';
import beautify from 'js-beautify';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import Crown from '../../assets/images/png/crown.png';
import Padlock from '../../assets/images/png/padlock.png';
import Saweria from '../../assets/images/png/saweria.png';
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
  };
};

componentDidUpdate = () => {
    fetch(`https://api-dragme.vercel.app/api/users/${this.props.data.email}`)
        .then(response => response.json())
        .then(data => {
            // Perbarui state limitReact dengan data terbaru
            this.setState({ limitReact: data.message.limitReact });
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
import { useEffect } from "react";
    
const Swiftvel = () => {

    useEffect(() => {
        ${codeJS}
    })
    
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
    const sourceHTML = header + document.querySelector(`.${name}`).innerHTML;
    
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
        typeColor: false
    })
}

handleColor = (e) => {
    e.preventDefault()
    this.setState({
        typeColor: !this.state.typeColor,
        typeFonts: false
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
            {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[120px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <div className='flex top-[13px] absolute left-[120px] items-center'>
                        <div onClick={() => this.props.handleAutomaticBuild()} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faWandMagicSparkles} /> 
                        </div>
                    </div>
            }
            {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[260px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <div className='flex top-[13px] absolute left-[260px] items-center'>
                        <div onClick={() => window.location.reload()} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faArrowsRotate} /> 
                        </div>
                    </div>
            }
            {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[330px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <div className='flex top-[13px] absolute left-[330px] items-center'>
                        <div onClick={(e) => this.handleFonts(e)} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faFont} /> 
                        </div>
                        <div className={`fixed font-mono ${this.state.typeFonts ? 'top-[13%] z-[9999999] left-[0%] opacity-[1] duration-100' : 'top-[50px] left-[-100%] opacity-[0] duration-300'} w-[50vw] h-[84vh] shadow-lg overflow-hidden rounded-br-[60px] rounded-tr-[60px] p-4 bg-white flex flex-col text-justify`}>
                            <div className='flex font-mono w-full h-max justify-center items-center'>
                                <div className='h-ful font-monol pt-2 w-[33%] flex flex-col items-center justify-between'>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Poppins')}><p>Poppins</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Roboto')}><p>Roboto</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Montserrat')}><p>Montserrat</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Inter')}><p>Inter</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Bebas Neue')}><p>Bebas Neue</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Oxygen')}><p>Oxygen</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Fasthand')}><p>Fasthand</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Righteous')}><p>Righteous</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Anton')}><p>Anton</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Geologica')}><p>Geologica</p></div>
                                </div>
                                <div className='h-full pt-2 w-[33%] flex flex-col items-center justify-between'>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Merriweather')}><p>Merriweather</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Oswald')}><p>Oswald</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Kanit')}><p>Kanit</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Inconsolata')}><p>Inconsolata</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Raleway')}><p>Raleway</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Mukta')}><p>Mukta</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Pacifico')}><p>Pacifico</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Rajdhani')}><p>Rajdhani</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Kablammo')}><p>Kablammo</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Orbit')}><p>Orbit</p></div>
                                </div>
                                <div className='h-full pt-2 w-[33%] flex flex-col items-center justify-between'>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Arvo')}><p>Arvo</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Caveat')}><p>Caveat</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Freehand')}><p>Freehand</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Kalam')}><p>Kalam</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Vollkorn')}><p>Vollkorn</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Rowdies')}><p>Rowdies</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Acme')}><p>Acme</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Alegreya')}><p>Alegreya</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Orbitron')}><p>Orbitron</p></div>
                                    <div className='w-[100%] py-2 px-1 mb-2 z-[2] h-[42.5px] rounded-lg bg-[white] hover:bg-slate-100 px-3 cursor-pointer active:scale-[0.98] duration-100 text-justify' onClick={() => this.handleSelectTypeFace('Cinzel')}><p>Cinzel</p></div>
                                </div>
                            </div>
                        </div>
                    </div>  
            }
            {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[400px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <div className='flex top-[13px] absolute left-[400px] items-center'>
                        <div onClick={(e) => this.handleColor(e)} className='active:scale-[0.96] w-[40px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faPaintBrush} /> 
                        </div>
                        <div className={`fixed font-mono ${this.state.typeColor ? 'top-[13%] z-[9999999] opacity-[1] duration-100' : 'top-[50px] opacity-[0] duration-100'} w-[400px] p-2 flex justify-between h-max shadow-lg overflow-hidden rounded-[20px] bg-white text-justify`}>
                           <div className='w-[35%] h-full p-2 flex flex-wrap items-center'>
                            <p className='font-bold mb-4'>Components</p>
                            {
                                this.state.dataColors.length > 0 ? (
                                    this.state.dataColors.map((e, i) => (
                                        <div key={i} onClick={() => this.setState({ activeColorComponent: e })} style={{ backgroundColor: e }} className={`${this.state.activeColorComponent === e ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} w-[40px] m-[4px] h-[40px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] border border-[1px] border-slate-500`}></div>
                                    ))
                                ):
                                    <div onClick={(e) => this.handleNavbar(e)} className='w-[40px] flex items-center justify-center m-[4px] h-[40px] cursor-pointer hover:scale-[0.98] active:scale-[0.97] text-[24px] border-dashed border-[1px] border-slate-500 rounded-lg'>
                                        <p className='relative bottom-[-1.8px]'>
                                            +
                                        </p>
                                    </div>
                            }
                           </div>
                           <div className='w-[35%] h-full p-2 flex flex-wrap items-center'>
                               <p className='font-bold mb-4'>Pallete colors</p>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color1' })
                                    this.setState({ activeColor2: '#3B82F6' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color1' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-blue-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color2' })
                                    this.setState({ activeColor2: '#EF4444' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color2' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-red-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color3' })
                                    this.setState({ activeColor2: '#F97316' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color3' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-orange-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color4' })
                                    this.setState({ activeColor2: '#22C55E' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color4' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-green-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color5' })
                                    this.setState({ activeColor2: '#10B981' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color5' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-emerald-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color6' })
                                    this.setState({ activeColor2: '#A855F7' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color6' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-purple-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color7' })
                                    this.setState({ activeColor2: '#EC4899' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color7' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-pink-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color8' })
                                    this.setState({ activeColor2: '#EAB308' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color8' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-yellow-500`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color9' })
                                    this.setState({ activeColor2: '#000000' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color9' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-black`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color10' })
                                    this.setState({ activeColor2: '#00FFDD' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color10' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#00ffdd]`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color11' })
                                    this.setState({ activeColor2: '#003380' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color11' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#003380]`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color12' })
                                    this.setState({ activeColor2: '#4B1D1D' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color12' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#4b1d1d]`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color13' })
                                    this.setState({ activeColor2: '#BBFF00' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color13' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#bbff00]`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color14' })
                                    this.setState({ activeColor2: '#F700FF' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color14' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#f700ff]`}></div>
                                <div onClick={() => {
                                    this.setState({ activeColor: 'color15' })
                                    this.setState({ activeColor2: '#5A5A5A' })
                                }} className={`w-[40px] h-[40px] m-[4px] cursor-pointer hover:brightness-[90%] active:scale-[0.96] ${this.state.activeColor === 'color15' ? 'rounded-full scale-[0.8]' : 'rounded-lg scale-[1]'} bg-[#5a5a5a]`}></div>
                           </div>
                           <div onClick={(e) => this.handleChange(e)} className='w-[30%] flex flex-col justify-end items-center pb-[11.5px]'>
                                <div className='w-[90%] h-[40px] items-center justify-center flex rounded-lg bg-blue-500 text-white text-center cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>Change</div>
                           </div>
                        </div>
                    </div>  
            }
            {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[190px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <div className='flex top-[13px] absolute left-[190px] items-center'>
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
            }
            {
                this.props.isLoading ? (
                    <div className='flex top-[13px] absolute left-[330px] items-center'>
                        <div className='w-[40px] h-[40px] cursor-default rounded-full bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <a href="/pricing" className='absolute no-underline text-white left-[330px] top-[13px]'>
                        {
                            status !== 'settlement' && this.state.statusNew !== 'settlement' ? (
                                <div className='active:scale-[0.96] w-[40.6px] p-[10px] border border-[2px] border-black cursor-pointer hover:brightness-[95%] duration-100 h-[40px] rounded-full flex items-center justify-center'>
                                    <img src={Crown} style={{width: '18px', height: '18px'}} alt="icon add" />
                                </div>
                            ):
                                <></>
                        }
                    </a>
            }

            <div className='flex items-center absolute top-3 right-7'>
            {
                this.props.isLoading ? (
                    <div className='fflex items-center relative ml-1 mr-2 hovetext-[14px]r:text-black'>
                        <div className='rounded-full w-[120px] h-[41px] flex items-center justify-center cursor-default active:scale-[0.97] duration-100 bg-gray-300 animate-pulse'></div>
                    </div>
                ):
                    <div className='flex items-center relative ml-1 mr-2 hovetext-[14px]r:text-black'>
                        <a href="https://saweria.co/dragmeTEam" target='__blank' className='no-underline hover:text-black text-black'>
                            <div className='rounded-full px-3 flex items-center justify-center py-[6.5px] border border-[1] hover:text-black border-black cursor-pointer active:scale-[0.97] duration-100'>
                                <img src={Saweria} className='w-[26px] relative top-[-1px]' alt="icon" />
                                <span className='text-[15px] sawer hover:text-black relative top-[1px] ml-1'>
                                    Saweria
                                </span>
                            </div>
                        </a>
                    </div>
            }
                <div className='h-[20px] w-[1px] bg-slate-400 ml-2'></div>
                <div className='h-[30px] w-[1px] bg-slate-400 mx-2'></div>
                <div className='h-[20px] w-[1px] bg-slate-400 mr-3'></div>
                {
                this.props.isLoading ? (
                    <>
                        <div className='flex items-center relative ml-1 mr-5 hovetext-[14px]r:text-black'>
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
                            <div onClick={() => this.handleChangeActive('React')} className={`d-flex items-center justify-center rounded-full border-[1px] bg-[${this.state.bgColor3}] text-${this.state.textColor3} border-slate-300 ml-4 mr-2 w-max h-[41px] px-4 py-1 text-center cursor-pointer`}>
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
            }
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
                 {
                    this.props.isLoading ? (
                        <div className='w-[40px] mb-2 h-max flex flex-col justify-center items-center'>
                            <div className='w-[45px] h-[45px] rounded-full bg-gray-300 animate-pulse'></div>
                        </div>
                    ):
                        <div onClick={() => {
                                this.download("templateCurrent");
                                if(this.state.active === 'React') {
                                    this.handleAddLimit()   
                                }
                            }
                        } className='btn-downloadsss shadow-lg hover' style={{borderRadius: 90, backgroundColor: '#00684A', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'}}>
                            {/* <box-icon type="icon" style={{color: 'white'}} name="download" onClick={() => this.download("templateCurrent")} /> */}
                            <img src={Download} alt="icon-download" style={{width: '47%'}} />
                        </div>
                }
                <div className="squareComponents" id='navbar'>
                    {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                            <>
                                <box-icon type="icon" name="collection" />
                                <p>Navbar</p>
                            </>
                    }
                </div>
                <div className="squareComponents" id='heroes'>
                {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                            <>
                                <box-icon name='objects-vertical-bottom'></box-icon>
                                <p>Heroes</p>
                            </>
                    }
                </div>
                <div className="squareComponents" id='content'>
                {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                            <>
                                <box-icon name='objects-horizontal-center'></box-icon>
                                <p>Content</p>
                            </>
                    }
                </div>
                <div className="squareComponents" id='footer'>
                {
                        this.props.isLoading ? (
                            <div className='w-[40px] h-max flex flex-col justify-center items-center cursor-default'>
                                <div className='w-[35px] h-[35px] rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                                <div className='w-[60px] h-[10px] mt-2 rounded-lg bg-gray-300 animate-pulse cursor-default'></div>
                            </div>
                        ):
                            <>
                                <box-icon name='objects-vertical-top' ></box-icon>
                                <p>Footer</p>
                            </>
                    }
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