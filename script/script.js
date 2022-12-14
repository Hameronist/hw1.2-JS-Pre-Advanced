$(function () {
    let Int
    $('.result').attr('disabled', true)
    $('.start').on('click', function () {
        $('.start').attr('disabled', true)
        $('.result').attr('disabled', false)
        $('.minutes').text('00');
        $('.seconds').text('59');
        function timer() {
            $('.seconds').text($('.seconds').text() - 1);
            if (parseInt($('.seconds').text()) < 10) {
                $('.seconds').text(`0${$('.seconds').text()}`)
            }
            if ($('.seconds').text() == '00') {
                clearInterval(Int);
                $('.black-background').css({
                    display: 'block'
                });
                $('.pity').css({
                    display: 'block'
                });
                $('.minutes').text('01')
            }
        }
        Int = setInterval(timer, 1000);
    })

    $('.close').on('click', function () {
        $('.black-background').css({
            display: 'none'
        });
        $('.pity').css({
            display: 'none'
        });
        $('.celebrating').css({
            display: 'none'
        })
    });

    $('.closest').on('click', function () {
        $('.black-background').css({
            display: 'none'
        });
        $('.are-you-sure').css({
            display: 'none'
        });
    });

    $('.final-box').sortable({
        connectWith: "#start"
    })

    $('.start-box').sortable({
        connectWith: "#end"
    })

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check = true;

    let Init



    $('.result').on('click', function () {
        function timer() {
            $('.second').text($('.second').text() - 1);
            if (parseInt($('.second').text()) < 10) {
                $('.second').text(`0${$('.second').text()}`)
            }
            if ($('.second').text() == '00') {
                clearInterval(Int);
                $('.black-background').css({
                    display: 'block'
                });
                $('.pity').css({
                    display: 'block'
                });
            }
        }
        $('.second').text($('.seconds').text())
        $('.black-background').css({
            display: 'block'
        });
        $('.are-you-sure').css({
            display: 'block'
        });
        Init = setInterval(timer, 1000);
    })

    $('.check').on('click', function () {
        for (let i = 0; i < $('.puzzle').length; i++) {
            if ($('.puzzle').eq(i).text() != numbers[i]) {
                check = false;
                break;
            }
        }
        $('.black-background').css({
            display: 'none'
        });
        $('.are-you-sure').css({
            display: 'none'
        });
        if (check) {

            $('.black-background').css({
                display: 'block'
            });
            $('.celebrating').css({
                display: 'block'
            })

            clearInterval(Int);
        }
        else {
            $('.black-background').css({
                display: 'block'
            });
            $('.pity').css({
                display: 'block'
            });

            clearInterval(Int);
        }
        check = true;
        $('.result').attr('disabled', true);
    })

    $('.new').on('click', function () {
        clearInterval(Int)
        $('.minutes').text('01');
        $('seconds').text('00');
        $('.start-box').html($('.final-box').html())
        $('.final-box').html('')
        $('.start').attr('disabled', false)
        $('.minutes').text('01');
        $('.seconds').text('00');
        clearInterval(Int);
        var parent = $(".start-box");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    })

});