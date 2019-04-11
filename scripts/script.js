function hide(elem1, elem2, elem3, elem4, elem5, desc1) {
    elem1.style.display = 'none';
    elem2.style.display = 'none';
    elem3.style.display = 'none';
    elem4.style.display = 'none';
    elem5.style.display = 'none';
    
    desc1.style.display = 'block';
}

function show(desc1, elem1, elem2, elem3, elem4, elem5) {
    desc1.style.display = 'none';
    
    elem1.style.display = 'inline-block';
    elem2.style.display = 'inline-block';
    elem3.style.display = 'inline-block';
    elem4.style.display = 'inline-block';
    elem5.style.display = 'inline-block';
}