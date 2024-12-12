for(let f=0; f<10; f++){
    document.write(f);
    document.write('<br>');
    if(f == 3){
        document.write('Aquí es la vuelta: ',f);
        break;
    }
}

document.write('<br>');
document.write('<br>');


let palabra = 'javascript';
let resultado ='';

for(let f in palabra){
    if(palabra[f]=='a'){
        continue; //salta el valor
    }else{
        resultado += palabra[f];
    }
}
document.write(resultado); //trae la palabra 'javascript' sin las vocales 'a'