// var text:any = document.querySelector('h1') as HTMLHeadElement;
var text:any = document.querySelector<HTMLHeadElement>('h1') ;

text.innerHTML = "test";