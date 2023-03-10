// const info = document.querySelector('.info');


// info.innerHTML = window.innerWidth;
// console.log(window);

// const url = document.querySelector('a');
// if (window.innerWidth > 400) {
//     url.attributes[0].value = 'https://google.com';

//     url.setAttribute('target','_blank') 
// }else{
//     url.attributes[0].value = 'https://github.com';

// url.setAttribute('target','_blank')
// }
// const btn = document.querySelectorAll('button')[0];
// const bt1 = document.querySelectorAll('button')[1];

// let a ;


// btn.onclick=()=>{
//    a = window.open("","_blank","width=500, height=500")
// }
// bt1.onclick =()=>{
//     a.close();
// }
// console.log(location.port);
// history.back()
// history.forward()

// console.log(screen.width+"X"+screen.height);

// console.log(navigator.language);
// console.log(navigator.platform);


// if (navigator.language === "en-US" || "en-UK") {
//     document.body.innerHTML = "English"
// }else{
//     document.body.innerHTML = "Azerbaijan"

// }
// document.querySelector('input').onclick=()=>{
//     if (!document.querySelector('input').checked) {
//         document.querySelector('input').setAttribute('checked',"");
//     }else{
       

//     }
// }

// if (document.querySelector('input').checked) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
//  "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
//  "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
//  "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
//  "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
//  "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu", 
//  "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
//  "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
//  "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
//  "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
//  "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
//  "ji", "zu"];


const input = document.querySelector('input');
const span  = document.querySelector('span');
const test = document.querySelector('button');
test.onclick = ()=>{
    input.checked = true
}
const e = input.checked;
console.log(e);
if (e) {
    span.style.textDecoration = 'line-through';
    
}else{
    span.style.textDecoration = 'none';

}