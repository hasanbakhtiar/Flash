document.querySelector('.date').innerHTML = new Date().getFullYear();
// footer date

// Selectors Start
const navLink = document.querySelectorAll('.nav-link');
// nav end

const movieName = document.querySelectorAll('.card-title');
const price = document.querySelectorAll('.price');
const cardBtn = document.querySelectorAll('.btn-primary');
// card end

const footerItem = document.querySelectorAll('.text-muted');
// footer end

// lang btn end
const langBtn = document.querySelector('#lang');
// Selectors End

import * as langdata from '../data/appdata.js';
// import end

const changeLang = ()=>{
        if (langBtn.innerHTML === "AZ") {
                for(let x in langdata.headerdata.az){
                        navLink[x].innerHTML =  langdata.headerdata.az[x];
                }   
                 
                for(let x in langdata.filmdata.az){
                        movieName[x].innerHTML =  langdata.filmdata.az[x];
                } 
                
                for(let x in langdata.filmdata.az){
                        price[x].innerHTML =  langdata.staticElement.az[0];
                } 
                for(let x in langdata.filmdata.az){
                        cardBtn[x].innerHTML =  langdata.staticElement.az[1];
                } 

                for(let x in langdata.footerdata.az){
                        footerItem[x].innerHTML =  langdata.footerdata.az[x];
                } 
                document.querySelector('#ml').innerHTML = "Film Siyahisi";
                langBtn.innerHTML = "EN";
        }else{
                for(let x in langdata.headerdata.en){
                        navLink[x].innerHTML =  langdata.headerdata.en[x];
                }   
                 
                for(let x in langdata.filmdata.en){
                        movieName[x].innerHTML =  langdata.filmdata.en[x];
                } 
                
                for(let x in langdata.filmdata.en){
                        price[x].innerHTML =  langdata.staticElement.en[0];
                } 
                for(let x in langdata.filmdata.en){
                        cardBtn[x].innerHTML =  langdata.staticElement.en[1];
                } 

                for(let x in langdata.footerdata.en){
                        footerItem[x].innerHTML =  langdata.footerdata.en[x];
                } 
                document.querySelector('#ml').innerHTML = "Movie List";
                langBtn.innerHTML = "AZ";  
        }
}

langBtn.onclick = changeLang;