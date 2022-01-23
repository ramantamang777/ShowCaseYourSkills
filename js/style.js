// open-form
function openForm(){
    document.getElementById('form-display').style.display = "block";
   
}
function closeForm(){
    document.getElementById('form-display').style.display = "none";
}


//for card 1
function on(){
        document.querySelector('#card-img').style.height = '190px';
        document.querySelector('#card-img').style.width = '200px';
        document.querySelector('#card-img').style.backgroundColor = 'rgb(139 203 232)';
};
function out(){
    document.querySelector('#card-img').style.height = '140px';
    document.querySelector('#card-img').style.width = '130px';
    document.querySelector('#card-img').style.backgroundColor = 'white';    
}

//for card 2
function on1(){
    document.querySelector('#card-img1').style.height = '190px';
    document.querySelector('#card-img1').style.width = '200px';
    document.querySelector('#card-img1').style.backgroundColor = 'rgb(139 203 232)';
};
function out1(){
document.querySelector('#card-img1').style.height = '140px';
document.querySelector('#card-img1').style.width = '130px';
document.querySelector('#card-img1').style.backgroundColor = 'white';    
}

//for card 3
function on2(){
    document.querySelector('#card-img2').style.height = '190px';
    document.querySelector('#card-img2').style.width = '200px';
    document.querySelector('#card-img2').style.backgroundColor = 'rgb(139 203 232)';
};
function out2(){
document.querySelector('#card-img2').style.height = '140px';
document.querySelector('#card-img2').style.width = '130px';
document.querySelector('#card-img2').style.backgroundColor = 'white';    
}

//for card 4
function on3(){
    document.querySelector('#card-img3').style.height = '190px';
    document.querySelector('#card-img3').style.width = '200px';
    document.querySelector('#card-img3').style.backgroundColor = 'rgb(139 203 232)';
};
function out3(){
document.querySelector('#card-img3').style.height = '140px';
document.querySelector('#card-img3').style.width = '130px';
document.querySelector('#card-img3').style.backgroundColor = 'white';    
}


 

























function change(){
    if(document.querySelector('h6').innerHTML === 'hello')
    {
        document.querySelector('h6').innerHTML = 'goodbye';
    }
    else{
        document.querySelector('h6').innerHTML = 'hello';
    }
}