function btclick(val)
{
    document.getElementById("screen").value+=val;
}
function clearScreen()
{
    document.getElementById("screen").value="";
}
function equalclick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function back()
{
    var value=document.getElementById("screen").value;
    document.getElementById("screen").value=value.substr(0,value.length-1);
}
function convert()
{
    var root=document.getElementById("screen").value;
    var sqRoot=Math.sqrt(root);
    document.getElementById("screen").value=sqRoot;
}
function square()
{
    var value=document.getElementById("screen").value;
    document.getElementById("screen").value=value*value;git
}