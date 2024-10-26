
export function Button() {
    const test = "test"

    return <button onClick={()=>{
        click(test);
    }}>Castom button</button>
}

function click(test){
    console.log("click")
}


function hello(){
    console.log("hello")
}
