function clickHandler() {
    const cont=document.getElementsByClassName('burger-menu').item(0)
    const nav=document.getElementsByTagName('nav').item(0);
    cont.classList.toggle('modify')
    nav.classList.toggle('change');
}