const topstoryElement = document.querySelector('.Topstory');
const creators = document.querySelector('.css-1oy4rvw');
const elements = document.querySelectorAll('.Card.TopstoryItem.TopstoryItem-isRecommend');
const content = document.querySelector('.Topstory-mainColumn')
const questionList = document.querySelector('.QuestionAnswers-answers')
const videoTab = document.querySelectorAll('.TopstoryTabs-link.Topstory-tabsLink')
const searchHot = document.querySelector('.css-1oy4rvw')
const zhiUrl = window.location.href


if (zhiUrl.includes('question')) {
    creators.remove()
    questionList.style.margin = '0 auto'
} else if (zhiUrl.includes('search')) {
    searchHot.remove()
} else {
    content.style.margin = '0 auto'
    content.style.width = '960px'
    videoTab[3].style.display = 'none';
}


content.style.margin = '0 auto'
content.style.width = '960px'

if (topstoryElement) {
    topstoryElement.querySelector('div')?.remove();
}

if (creators) {
    creators.remove();
}

function removeElement() {
    var elements = document.querySelectorAll('.css-i2yo90');
    elements.forEach(function (element) {
        var parentElement = element.closest('.Card.TopstoryItem.TopstoryItem-isRecommend');
        if (parentElement) {
            parentElement.remove();
        }
    });
}

// 每隔1秒执行一次代码
setInterval(removeElement, 1000);




