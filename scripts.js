const text = "Hello, I'm LUOPENG ZHOU(周罗鹏)😊";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('h1').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // 控制打字速度
    }
}

// 等页面加载完毕后开始打字
window.onload = function () {
    document.querySelector('h1').textContent = ''; // 清除初始内容
    typeWriter();
};

const images = document.querySelectorAll('img');

const lazyLoad = (image) => {
    const src = image.getAttribute('data-src');
    if (!src) return;
    image.src = src;
    image.removeAttribute('data-src');
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoad(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

images.forEach(image => {
    imageObserver.observe(image);
});

const fadeElements = document.querySelectorAll('.fade-in');

const showOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

fadeElements.forEach(element => {
    showOnScroll.observe(element);
});
