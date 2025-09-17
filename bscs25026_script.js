
window.onload=function greet() {
alert("Welcome");
};


document.getElementById("demo").textContent = "Kumo" + new Date().getFullYear(); 

function stock(id){
alert("stock||outstock");
}
function stock(id)
{
    let check = document.getElementById(id).textContent;
    if(check.includes('In Stock'))
     {

        alert("In Stock");
    }
        else
        {
            alert("Out Of Stock");
        }
    

}
function validateForm(){
    let Cell=document.forms["aboutus.html"]["Cell"].value;
    let Email=document.forms["aboutus.html"]["Email"].value;
    let Cell=document.forms["aboutus.html"]["Location"].value;
};
if(Cell==""||Email==""||Location=="")
{
    alert("All Fields Must BE Filled");
    return false;
};
}




