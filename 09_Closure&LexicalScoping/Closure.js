function init(){
    let name = 'Om'

    function init2(){
        console.log(name);     
        
    }

    return init2;
}

const obj = init();
obj();
