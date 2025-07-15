const loader = $("<div>").addClass("ajax-loader");
loader
    .css({
        display: "block",
        width: "24px",
        height: "24px",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        "z-index": 9999999,
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "background-image": "url(helper/loading.gif)",
    })
    .hide();

$("body").prepend(loader);

$.ajaxSetup({
    /** ajax 기본 옵션 */
    cache: false, // 캐쉬 사용 금지 처리
    dataType: "json", // 읽어올 내용 형식 (html,xml,json)
    timeout: 30000, // 타임아웃 (30초)

    // 통신 시작전 실행할 기능 (ex: 로딩바 표시)
    beforeSend: function () {
        // 현재 통신중인 대상 페이지를 로그로 출력함
        console.group(`[${this.type}] ${this.url}`);
        loader.show();
    },
    success: function (response) {
        console.log("success!!!")
        console.dir(response);
    },
    // 통신 실패시 호출될 함수 (파라미터는 에러내용)
    error: function (error) {
        // 404 -> Page Not Found
        // 50x -> Server Error(웹 프로그램 에러)
        // 200, 0 -> 내용의 형식 에러(JSON,XML)

        let error_msg = "[" + error.status + "] " + error.statusText;

        let code = parseInt(error.status / 100);
        if (code == 4) {
            // 400번대의 에러인 경우
            error_msg = "잘못된 요청입니다.\n" + error_msg;
        } else if (code == 5) {
            error_msg = "서버의 응답이 없습니다.\n" + error_msg;
        } else if (code == 2 || code == 0) {
            error_msg = "서버의 응답이 잘못되었습니다.\n" + error_msg;
        }

        console.error(">> 에러!!!! >> " + error_msg);
        alert(error_msg);
    },
    // 성공,실패에 상관 없이 맨 마지막에 무조건 호출됨 ex) 로딩바 닫기
    complete: function () {
        loader.hide();
        console.groupEnd();
    },
});

jQuery.each(["put", "delete"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
        if (jQuery.isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        return jQuery.ajax({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback,
        });
    };
});
