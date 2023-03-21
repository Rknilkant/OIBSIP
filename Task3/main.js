function Result(){
    let text=document.getElementById('text').value;
    let Celsius=document.getElementById('Celsius');
    let Fahrenheit=document.getElementById('Fahrenheit');
    
    console.log(text);

    if(Celsius.checked==true)
    {
        
        let c=(text-32)*5/9; 
        if(!Number.isInteger(c))
        {
            c=c.toFixed(2);
        }

        console.log(c);
        document.getElementById('Result').textContent="Temperature: "+c+" Celsius";    

        
    }
    else if(Fahrenheit.checked==true)
    {
        
        let f=(text*9/5)+32; 
        if(!Number.isInteger(f))
        {
            f=f.toFixed(2);
        }

        console.log(f);
        document.getElementById('Result').textContent="Temperature: "+f+" Fahrenheit";
    }
    else
    {
        document.getElementById('Result').textContent="Enter Temperature/ Select Conversion mode";
    }
}