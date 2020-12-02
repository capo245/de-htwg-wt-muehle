let csrf = $('input[name="csrfToken"]').attr("name");

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': csrf,
        'Content-Type': 'application/json',
        //'Accept': 'application/json'
    }
});

function place(i) {
    const field = $(`#field${i + 1}`);
    if (field !== undefined) {
        field.click(function () {
            $.ajax({
                method: "GET",
                url: '/game/' + i,
                dataType: "json",
            });
            window.location.href = '/game';
        })
    } else {
        throw Error('Selected Field is unavailable');
    }
}

function move(i,j) {
    const start = $(`#field${i + 1}`);
    const destination = $(`#field${j + 1}`);
    if ((start && destination) !== undefined && (start && destination) === true ) {
        $(start).click(function () {
            $(destination).click(function () {
                $.ajax({
                    method: "GET",
                    url: '/move/' + i + '/' + j,
                    dataType: "json",
                });
            });
            window.location.href = '/game';
        })
    }
}

function remove(i) {
    const field = $(`#field${i + 1}`);
    if (field.value !== '0') {
        field.click(function () {
            $.ajax({
                method: "GET",
                url: '/remove/' + i,
                dataType: "json",
            });
            window.location.href = '/game';
        })
    } else {
        throw Error('Field does not contain removable stone');
    }
}

function init_Buttons() {
    $(`#start_game`).click(function () {
        $.ajax({
            method: "GET",
            url: '/new',
            dataType: "json",
        });
        window.location.href = '/game';
    });

    $(`#undo`).click(function () {
        $.ajax({
            method: "GET",
            url: '/undo',
            dataType: "json",
        });
        window.location.href = '/game';
    });

    $(`#redo`).click(function () {
        $.ajax({
            method: "GET",
            url: '/redo',
            dataType: "json",
        });
        window.location.href = '/game';
    });

    $(`#save`).click(function () {
        $.ajax({
            method: "POST",
            url: '/save',
            dataType: "json",
        });
        window.location.href = '/game';
    });

    $(`#load`).click(function () {
        $.ajax({
            method: "GET",
            url: '/load',
            dataType: "json",
        });
        window.location.href = '/game';
    })
}

//TODO: check JSON structure
function loadJson() {
    $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        success: function () {
            for (let i = 1; i <= 24; i++) {
                $(`field${i}`).clickEvent = place(i-1);
            }
            init_Buttons()
        }
    })
}

//example without using Ajax
function init_Game() {
    $('#start_game').click(function () {
        const Http = new XMLHttpRequest();
        const url = '/new';
        Http.open("GET", url);
        Http.send();
        window.location.href = '/game';
    })
}

$(document).ready(function () {
    loadJson();
})  ;

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});