function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display != "none")
    {
        document.getElementById('caixa').style.display = 'none';
        document.getElementById(el).style.display = 'block';
        document.getElementById('video').style.display = 'block';
    }
    else
    {
        document.getElementById(el).style.display = 'none';
    }
}