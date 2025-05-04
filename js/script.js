const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function loadCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    calendarBody.innerHTML = '';
    monthYear.innerHTML = `${months[month]} ${year}`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement('td');
                cell.innerHTML = '';
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement('td');
                cell.innerHTML = date;
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add('today');
                }
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

function prevMonth() {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
    loadCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
    loadCalendar(currentMonth, currentYear);
}

loadCalendar(currentMonth, currentYear);
// 페이지가 로드되면 실행되는 함수
window.onload = function () {
    // 비디오 요소를 가져옴
    var video = document.getElementById('myVideo');
    // 비디오 자동 재생
    video.play();
}
document.getElementById('toggleButton').addEventListener('click', function () {
    var content = document.getElementById('toggleContent');
    if (content.classList.contains('content-d')) {
        content.classList.remove('content-d');
    } else {
        content.classList.add('content-d');
    }
});

var index = 0;

function slider() {
    li = document.querySelectorAll('.interview_contents > li');

    if (index == 4) {
        index = 0;
    }
    for (i = 0; i < li.length; i++) {
        var onNum = index + 1;
        if (onNum == 4) {
            onNum = 0;
        }
        console.log(index, onNum);
        if (i == index) {
            console.log(i, '번째 클래스명 out');
            li.item(i).setAttribute('class', 'out');
        }
        else if (i == onNum) {
            console.log(i, '번째 클래스명 on');
            li.item(i).setAttribute('class', 'on');
        }
        else {
            console.log(i, '여긴 클래스를 지워라');
            li.item(i).setAttribute('class', '');
        }

    }
    index++;
}

setInterval(slider, 1000);
function toggleContent() {
    var content = document.getElementById('intro');
    var button = document.querySelector('.toggle-btn');
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Read More';
    } else {
        content.classList.add('expanded');
        button.textContent = 'Read Less';
    }
}
let currentIndex = 0;
const slides = document.querySelectorAll('.slide-d');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // 3초마다 슬라이드 전환

// scripts.js
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide-2');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}


let slideI = 0;
const slidess = document.querySelectorAll(".slide-2");

function showSlides(n) {
    slideI = (n + slidess.length) % slidess.length;
    document.querySelector(".slides-2").style.transform = `translateX(-${slideI * 581}px)`;
}

function plusSlides(n) {
    showSlides(slideI + n);
}

// 자동 슬라이드 (3초마다)
setInterval(() => {
    plusSlides(1);
}, 3000);

// 페이지 로드시 첫 슬라이드 보이기
window.addEventListener('load', () => {
    showSlides(slideI);
});
