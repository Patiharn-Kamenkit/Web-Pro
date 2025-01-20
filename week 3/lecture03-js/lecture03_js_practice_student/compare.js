
function comparenum(a,b){
    if(Number(a)<Number(b)){
        document.getElementById('c').value = "A<B"
        document.getElementById('d').value = b-a
    }
    else if(Number(a)>Number(b)){
        document.getElementById('c').value = "A>B"
        document.getElementById('d').value = a-b
    }
    else {
        document.getElementById('c').value = "A=B"
        document.getElementById('d').value = 0
    }
}