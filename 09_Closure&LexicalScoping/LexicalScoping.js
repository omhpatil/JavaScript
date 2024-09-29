function init(){
    let name = 'Om'

    function init2(){
        console.log(name);      // Can access name due to lexical scoping
        
    }

    init2();
}

init();