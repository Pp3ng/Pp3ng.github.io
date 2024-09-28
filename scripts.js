const wechatModal = document.getElementById("wechat-modal");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const wechatLink = document.getElementById("wechat-link");
const wechatSpan = wechatModal.getElementsByClassName("close")[0];
const imageSpan = imageModal.getElementsByClassName("close")[0];
const images = document.getElementsByClassName("clickable-image");

// 打开模态窗口的函数
function openModal(modal) {
    modal.style.display = "block";
}

// 关闭模态窗口的函数
function closeModal(modal) {
    modal.style.display = "none";
}

// 图像点击函数
function onImageClick(event) {
    openModal(imageModal);
    modalImage.src = event.target.src;
}

// 为微信链接添加点击事件
wechatLink.addEventListener('click', () => openModal(wechatModal));

// 为关闭按钮添加点击事件
wechatSpan.addEventListener('click', () => closeModal(wechatModal));
imageSpan.addEventListener('click', () => closeModal(imageModal));

// 为所有可点击图片添加点击事件
Array.from(images).forEach(image => {
    image.addEventListener('click', onImageClick);
});

// 在窗口上点击时，关闭模态窗口
window.addEventListener('click', (event) => {
    if (event.target === wechatModal) {
        closeModal(wechatModal);
    }
    if (event.target === imageModal) {
        closeModal(imageModal);
    }
});