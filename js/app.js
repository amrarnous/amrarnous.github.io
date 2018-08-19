var app = new Vue({
    el: '#app',
    data: {
        myName: 'Amr Arnous',
        HelloThereTitle: 'Scroll Down To Know More About Me 😋',
        navbarList: [
            {nav: 'Home', imgSrc: 'imgs/house-outline.svg', link: '#home'},
            {nav: 'About Me', imgSrc: 'imgs/lnr-mustache.svg', link: '#about'},
            {nav: 'My Skills', imgSrc: 'imgs/lnr-diamond.svg', link: '#skills'},
            {nav: 'My projects', imgSrc: 'imgs/lnr-code.svg', link: '#projects'},
            {nav: 'request a quote', imgSrc: 'imgs/lnr-phone-handset.svg', link: '#requestQuote'},
        ],
        show: false,
        socialMediaLinks: [
            {name: 'Facebook', imgSrc: 'imgs/facebook-logo.svg', link: 'https://fb.com/amrhka'},
            {name: 'twitter', imgSrc: 'imgs/twitter.svg', link: 'https://fb.com/amrhka'},
            {name: 'Behance', imgSrc: 'imgs/behance-network-logo.svg', link: 'https://www.behance.net/amrarnous'}
        ],
        menuIconSrc: 'imgs/menu.svg',
        skillsList: [
            {skillName: 'Wireframing', percent: '80%'},
            {skillName: 'Figma', percent: '80%'},
            {skillName: 'Photoshop', percent: '80%'},
            {skillName: 'HTML', percent: '80%'},
            {skillName: 'CSS', percent: '75%'},
            {skillName: 'Javascript', percent: '70%'},
            {skillName: 'JQuery', percent: '75%'},
            {skillName: 'Python', percent: '50%'},
            {skillName: 'VueJS', percent: '30%'}
        ],
        projectInfo: {
            name: 'ESMOD',
            PhotoURL: 'imgs/project.jpeg',
            info: `ESMOD is a private university with degree programs that prepare students for careers in the fashion and luxury sector with three year undergraduate programs in fashion design or fashion marketing and communications, registered as a level II at the RNCP. As of today ESMOD International has 23 schools in 15 countries with 5 in France: Paris, Bordeaux, Lyon, Rennes and Roubaix`,
            projectURL: 'https://www.behance.net/gallery/66188465/ESMOD'
        }
    }
});
VueScrollTo.setDefaults({
    container: "body",
    duration: 500,
    easing: "ease-in",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})