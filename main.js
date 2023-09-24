

// display btn content in calculator
function display(content){
    result.value += content

}

// ALL CLEAR
function allclear(){
    result.value=""

}

function expeval(){
    try{
        result.value=eval(result.value)
    }catch{
        result.value="Invalid Expression!"
    }
}

function removelast(){
    result.value=result.value.slice(0,-1)
}