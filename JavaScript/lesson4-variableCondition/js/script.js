// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var        -> variable (global)
// let        -> let      (local)
// const      -> constant (local)

// global

// if (true) {
//     // local global
//     if (true) {
//         // local global
//         if (true) {
//             let a = 5;
//             // local
//         }
//     }
//     console.log(a);
// }

// var a  =5;
// a  =10;
// console.log(a);

// if  - eger
// else - deyilse
// else if  - deyilse eger

// var info =10;
// if (info == 5) {
//     console.log('this is 5');
// }else if(info == 10){
//         console.log('this is 10');
// }else{
//     console.log('something is wrong');
// }



// const myTime  = 9;
// if (myTime > 5 && myTime<13) {
//     console.log('good morning');
//     if (myTime === 7) {
//         console.log('get up');
//     }else if(myTime === 9){
//         console.log('have brakfast');
//     }
// }else if(myTime >= 13 && myTime<17){
//     console.log('good afternoon');
// }else if(myTime >= 17 && myTime<=21){
//     console.log('good evening');
// }else if(myTime > 21 && myTime<=23){
//     console.log('good night');
// }else{
//     console.log('no time');
// }



// const info = 51;

// switch(info){
//     case 5:
//         console.log('this is 5');
//     break;

//     case 10:
//         console.log('this is 10');
//     break;

//     default :
//     console.log('this is default');
//     break;
// }

// let myTime = 5;

// switch(myTime){
//     case 5:
//        myTime = 6;
//        if (myTime>5) {
//         console.log('clock running...');
//         myTime = 10;
//         switch (myTime) {
//             case 10:
//                 console.log('this is 10');
//                 break;
        
//             default:
//                 break;
//         }
//        }else{
//         console.log('something is wrong...!');
//        }
//     break;
//     case 7:
//         console.log('7am');
//     break;
//     default:
//         console.log('no time');
//     break;
// }

// try{
//     throw 'everything is ok'
//     console.loag('Hello');
// }catch(err){
//     // console.log('something is wrong');
//     console.log(err);
// }finally{
//     console.log('im running everytime');
// }

 const productOne = ['milk','cheese','bread']; 
 const productTwo = ['meal','holland cheese','german bread']; 
 const productThree = ['fanta','cheese','bread']; 

 const myBudget = 10;

 if (myBudget > 5) {
    console.log(product);
 }