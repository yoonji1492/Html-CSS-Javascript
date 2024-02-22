/* member.js */

function getID(){
    // alert();

    // <input type="text" id="uid">

    // 1)<form>의 컨트롤 요소 접근시 id 사용 (추천)
    // alert(document.getElementById('uid')); //[object HTMLInputElement]
    // alert(document.getElementById('uid').value);

ㅇㅇ

    // 2)<form>의 컨트롤 요서 접근시 name 사용
    // alert(document.getElementsByName('uid')); //[object NodeList] 리스트는 배열형태로 접근
    // alert(document.getElementsByName('uid')[0].value);
    // alert(document.memfrm.uid.value);

    // 3)teg name접근
    // 본문에서 <input> 태그를 접근
    // alert(document.getElementsByTagName('input')); //[object HTMLCollection]

    // <input>태그들 중에서 1번째 input 요소
    // alert(document.getElementsByTagName('input')[1]); //[object HTMLInputElement]

    // 실제값
    // alert(document.getElementsByTagName('input')[1].value); 

    // 4) 스타일 접근
    alert(document.getElementsByClassName('line')); //[object HTMLCollection]
}//getID() end


function setID(){
    // alert();
    // <input type="text" id="uid">에 값 대입하기

    let str = '오필승코리아';

    // 1) id접근 (추천)
    // document.getElementById('uid').value = str;

    // 2) name접근
    // document.getElementsByName('uid')[0].value = str;

    // 3) tag name접근
    document.getElementsByTagName('input')[1].value = str;
}//setID() end

function validate(){
    // 회원가입 폼에 대한 유효성 검사

    //1) 이름 글자갯수 2글자 이상인지 확인하시오
    //   위의 조건을 만족하지 않으면
    //   -> 경고창 (alert())
    //   -> 이름을 다시 입력할 수 있도록 id=uname에 커서를 생성해 주고 (focus)
    //   -> 해당 폼이 서버로 전송하는 것을 차단
    let uname = document.getElementById('uname').value;
    // alert(uname);
    // alert('#'+ uname +'#');
    // alert('#'+ uname.trim() +'#'); //문자열 맨앞과 맨뒤 공백 제거
    uname = uname.trim();
    if(uname.length<2){
        alert('이름 2글자이상 입력해 주세요');
        document.getElementById('uname').focus();
        return false;
    }//if end

    //2) 아이디 글자갯수가 8~12사이 인지 확인하시오

    //3) 비밀번호 글자갯수가 5~10사이 인지 확인하시오

    //4) 주민번호 앞칸의 글자갯수가 6인지 확인하시오

    //5) 주민번호 뒷칸의 글자갯수가 7이면서 숫자형인지 확인하시오

    //6) 약관동의에 체크했는지 확인하시오
    if(document.getElementById('agree').checked==false){
        alert('약관에 동의해 주세요');
        return false;
    }//if end

    if(confirm('회원가입 할까요?')){
        alert('회원 가입 폼을 서버로 전송합니다');
        return true; // <form name-memfrm>폼을 서버로 전송
    }else{
        alert('회원 가입이 취소 되었습니다');
        return false;
    }//if end
}//validate() end