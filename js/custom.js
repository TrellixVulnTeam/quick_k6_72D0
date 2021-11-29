window.onload = function(){

    new WOW().init(); //kích hoạt wow js

    if (window.innerWidth>=768){
        //Lấy chiều cao topbar
        let topBarHeight = document.querySelector('.header__top-bar').clientHeight;

        //Lấy chiều cao header inner
        let headerInnerHeight = document.querySelector('.header__inner').clientHeight;

        let headerInner = document.querySelector('.header__inner');

        window.addEventListener('scroll', function(e){
            let position = window.scrollY;
            
            if (position>topBarHeight){
                headerInner.classList.add('header--fixed');
                document.querySelector('body').style.paddingTop = headerInnerHeight+'px';
            }else{
                headerInner.classList.remove('header--fixed');
                document.querySelector('body').style.paddingTop = '0px';
            }
        });
    }
    
}