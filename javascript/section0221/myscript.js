/* myscript.js */

 // 두수 사이의 합을 반환하시오
function hap(a,b){
    if(a>b){
        let tmp =a ; a=b; b=tmp;
    }//if end

    let sum = 0;
    for(let n=a; n<=b; n++){
        sum += n;
    }//for end

    return sum;
}//hap()end

// 두수 사이의 차이를 반환하시오 (무조건 양수, 절대값)
function diff(a,b){
    return Math.abs(a-b);
}//diff() end

 // 윤년, 평년을 반환하시오
function leap(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }//if end
}//leap() end

/////////////////////////////////////
function loadMusic(jpg, mp3){
    // alert('#' + jpg + '#');
    // alert('#' + mp3 + '#');

    let poster = document.getElementById('poster');
    let audio1 = document.getElementById('audio1');

    // alert(poster); //[object HTMLImageElement]
    // alert(audio1); //[object HTMLAudioElement]

    poster.src = jpg;
    audio1.src = mp3;

    audio1.onplay();
    
}//loadMusic() end


