let count=0;
count = Number(count);

document.getElementById("decre").onclick = function()
{
    count-=1;
    document.getElementById("countable").innerHTML = count;
}

document.getElementById("reset").onclick = function()
{
    count=0;
    document.getElementById("countable").innerHTML = count;
}

document.getElementById("incre").onclick = function()
{
    count+=1;
    document.getElementById("countable").innerHTML = count;
}