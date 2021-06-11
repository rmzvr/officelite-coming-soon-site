const selectMenu = document.querySelector('.select-menu');
const selectMenuHeader = document.querySelector('.select-menu__header-title');
const selectMenuItem = document.querySelectorAll('.select-menu__item');
const timerCounters = document.querySelectorAll('.timer__counter');
const timerTitleDate = document.querySelector('.timer__title-date');
const countDownDate = new Date(2021, 08, 10);

for (let i = 0; i < selectMenuItem.length; i++) {
    const item = selectMenuItem[i];

    item.addEventListener('click', () => {
        removeAllSelects();

        item.classList.add('select-menu__item--active');
        selectMenuHeader.innerHTML = item.innerHTML;
        selectMenu.removeAttribute('open');
    });
}

setCountDownDate(countDownDate);

setInterval(countDown, 500, countDownDate);

function removeAllSelects() {
    for (let i = 0; i < selectMenuItem.length; i++) {
        const item = selectMenuItem[i];
        item.classList.remove('select-menu__item--active');
    }
}

function setCountDownDate(countDownDate) {
    const dd = countDownDate.getDate();
    const MM = countDownDate.toLocaleString('en-us', { month: 'short' });
    const yyyy = countDownDate.getFullYear();
    timerTitleDate.innerText = `${dd} ${MM} ${yyyy}`;
}

function countDown(countDownDate) {
    let eventTime = countDownDate.getTime();
    let nowTime = new Date().getTime();
    let distance = eventTime - nowTime;

    let dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let ss = Math.floor((distance % (1000 * 60)) / 1000);

    dd = dd < 10 ? "0" + dd : dd;
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    timerCounters[0].innerText = dd;
    timerCounters[1].innerText = hh;
    timerCounters[2].innerText = mm;
    timerCounters[3].innerText = ss;
}