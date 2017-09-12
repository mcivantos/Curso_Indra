var data = [{precio:12},{precio:34},{precio:19}];

data.forEach(elem =>{
    if(true){
        const iva = 1.16;
        let preciofinal = elem.precio*iva;

        console.log(`Oferta: 
        el precio final es ${preciofinal}`);
    }
});