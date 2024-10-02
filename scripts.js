const text = "Hello, I'm LUOPENG ZHOU(周罗鹏)😀";
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


// 平滑滚动到页面顶部的按钮
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆️ Top';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.fontSize = '18px';
scrollToTopBtn.style.backgroundColor = '#2a3c02';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.borderRadius = '5px';
document.body.appendChild(scrollToTopBtn);

// 显示或隐藏按钮
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// 滚动到页面顶部
scrollToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// 导航栏链接平滑滚动
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});