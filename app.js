

//ATM əməliyyatı
let yenisətir='\r\n'

let balans= 1000;

let text='1.Balans tesviri' + yenisətir
 +'2.Pul çıxardilmasi' + yenisətir
 +'3.Depozit pulu'     + yenisətir
 +'4.Çıxış' + yenisətir
 +'Zəhmət olmasa əməliyyatı seçin' + yenisətir;

 //alert(text);

 let dəyər=prompt(text);

 switch(dəyər){
    case '1':
    alert('Balansiniz' +balans)
    break;
    

    case '2':
        let goturulecekMebleg= Number (prompt('Cixarmaq istedyiniz meblegi daxil edin:'));
        if(goturulecekMebleg<balans){
            //Ugurlu emeliyyat
            balans=balans-goturulecekMebleg;
            alert('Cixarilasi miqdar' + balans);
        }else {
            alert('Balansinizda kifayet qeder vesait yoxdur' +yenisətir
            + 'balansiziniz' + balans + ' ' + 'Goturulecek mebleg' + goturulecekMebleg );

        
        }
        break;

        case '3':
            let investisiyaMeblegi=Number(prompt('Investisiya meblegini daxil edin:'));
            balans= balans+ investisiyaMeblegi;
            alert('Cari balansiniz' + balans);
            break;
        case '4':
            alert("Sistemden cixildi")
            break;

        default:
            console.log('Zehmet olmasa 1-4 arasi reqemleri daxil edin');
            break;



    }


  /* //Ad və Vesiqe nomresinin daxil edilməsi
    //If Əməliyyati

            let name= prompt('Adinizi daxil edin:');
            let FIN=prompt('FIN kodunuzu daxil edin:');

            //controlNameFin(name,finKod);
            controlNameFin2(name,FIN);


            function controlNameFin(name,finKod){
                if (name!==''){
                    if(finKod.length==7){
                        console.log('Adiniz ve fin kodunuz dogru daxil edilib')
                    }else{
                        console.log('Zehmet olmasa FIN kodunuzu 7 reqemli daxil edin')
                    }

                    }else{
                         console.log('Zehmet olmasa adinizi daxil edin')
                }
   
              }


              function controlNameFin2(name,FIN){
                if(name==''){
                     console.log('Zehmet olmasa adinizi daxil edin')
                     return;
                }
                     if(FIN.length !==7){
                     console.log('Zehmet olmasa FIN kodunuzu 7 reqemli daxil edin')
                     return;
                }
                console.log('Dogru emeliyyat')

              } */


              
//Bədən kütlə indeksinin hesablanması

/* let çəki=Number(prompt('Zəhmət olmasa çəkinizi daxil edin:'));

let boyOlcusu=Number(prompt("Boy olcunuzu daxil edin"));

Nəticə=çəki/(boyOlcusu*2);

if(Nəticə<18.5){
     console.log('Ideal kilonun altinda');
}else if(Nəticə>=18.5 && Nəticə<=24.9){
    console.log('Ideal kilonun altinda');

}else if(Nəticə>=25 && Nəticə<=29.9){
     console.log('Ideal kiloda');

}else if(Nəticə>=30 && Nəticə<=39.9){
     console.log('Ideal kilonun ustunde');

}else if(Nəticə>=40 ){
     console.log('Ideal kilonun cox ustunde');

} */


