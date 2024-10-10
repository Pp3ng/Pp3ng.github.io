const text = "Hello, I'm LUOPENG ZHOU(周罗鹏)😀";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('h1').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // control the speed of typing
    }
}

window.onload = function () {
    document.querySelector('h1').textContent = ''; // clear the text
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


// button to scroll to top
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆️Top';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.fontSize = '18px';
scrollToTopBtn.style.backgroundColor = 'rgba(42, 60, 2, 0.7)'; // set background color with alpha
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.fontFamily = 'Fira Code, monospace';
document.body.appendChild(scrollToTopBtn);


// show or hide the button based on scroll position
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// scroll to top when the button is clicked
scrollToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// smooth scroll to anchor links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const prompt = document.getElementById('terminal-prompt');
    const terminalWindow = document.getElementById('terminal-window');

    const ASCII_LOGO = `
  ____            _____                 
 |  _ \\   _ __   |___ /   _ __     __ _ 
 | |_) | | '_ \\    |_ \\  | '_ \\   / _\` |
 |  __/  | |_) |  ___) | | | | | | (_| |
 |_|     | .__/  |____/  |_| |_|  \\__, |
         |_|                      |___/ 
`;

    const welcomeMessage = `${ASCII_LOGO}\nWelcome to LUOPENG ZHOU's Terminal\nType 'help' for available commands.\n\n`;

    if (isMobile()) {
        output.style.fontSize = '8px';
    }

    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "Why do Java developers wear glasses? Because they don't see sharp! 🤓",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings! 😢",
        "Why do Python programmers prefer snakes? Because they love to 'import' them! 🐍",
        "Why do Linux users never get lost? Because they always know where their 'root' is! 🌳",
        "Why did the Linux admin bring a ladder to the bar? Because he heard the drinks were on the house! 🍻",
        "Why don't Linux users get viruses? Because people write viruses for popular operating systems! 🦠",
        "Why was the Linux file system so calm? Because it had great 'partition' control! 🧘‍♂️",
        "Why did the Linux user get promoted? Because he had great 'sudo' skills! 🏆",
        "Why did the sysadmin cross the road? To patch the other side! 🛠️",
        "Why do Linux users love nature? Because they love to 'grep' the great outdoors! 🌲",
        "Why was the Linux server always calm? Because it had a great 'uptime'! ⏳",
        "Why did the Linux user go broke? Because he couldn't find his 'cache'! 💸",
        "Why do Linux users make great musicians? Because they know how to handle 'strings'! 🎸",
        "Why was the Linux user always calm? Because he had a great 'shell'! 🐚",
        "Why did the Linux user get a promotion? Because he was 'rooted' in his work! 🌱",
        "Why do Linux users never panic? Because they always have a 'backup' plan! 💾",
        "Why was the Linux user so good at sports? Because he always knew how to 'ping' the ball! 🏓",
        "Why did the Linux user never get lost? Because he always knew his 'path'! 🗺️",
        "You want my joke about TCP? You need to acknowledge it first! 📡",
        "Why do programmers hate nature? It has too many bugs! 🐞",
        "Why do computers get cold? Because they left their Windows open! 🪟",
        "Why was the computer tired when it got home? Because it had a hard drive! 💾",
        "Why did the computer go to therapy? It had too many bytes! 🍪",
        "Why was the computer cold? It left its Windows open! 🪟",
        "Why was the computer late to work? It had a hard drive! 🚗",
        "Why did the computer go to the doctor? It had a virus! 🦠",
        "Why was the computer so smart? It had a lot of cache! 💰"
    ];

    const commands = {
        help: () => 'Available commands: help, about, skills, interests, projects, contact, clear, goto [section], joke',
        about: () => 'Name: LUOPENG ZHOU(周罗鹏)\nOccupation: Programmer\nPassion: Crafting elegant code and mastering the command line.',
        skills: () => 'Languages: C, C++, Python, Bash\nTools: Vim, Git, Make, GDB\nSystems: Linux, BSD, macOS\nOther: WebDev, Raspberry-PI, Database, Network, Cybersecurity',
        interests: () => 'Programming: C and C++ in Linux environment\nPhotography: Capturing moments and finding beauty in everyday scenes\nBilliards: Strategic and relaxing game, enjoying the mental challenge',
        projects: () => '1. HuffmanTree_encrypt: File encryption using Huffman coding\n2. Mandelbrot-Set: Fractal visualization with C, C++, and CUDA\n3. Design-Pattern: Showcasing common design patterns in C++\n4. Network-chat: Simple chat server and client in C\n5. Bookkeeper_mysql: Financial management system with MySQL\n6. PShell: A simple shell(command interpreter) written in C',
        contact: () => 'Instagram: @pp3ng___\nGitHub: github.com/Pp3ng\nEmail: Pp3ng@outlook.com',
        clear: () => {
            output.innerHTML = welcomeMessage;
            return null;
        },
        goto: (section) => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return `Navigating to ${section}...`;
            } else {
                return `Section not found: ${section}.`;
            }
        },
        joke: () => jokes[Math.floor(Math.random() * jokes.length)]
    };

    function handleCommand(cmd) {
        const [command, ...args] = cmd.split(' ');
        if (commands[command]) {
            return commands[command](...args);
        } else if (cmd.trim() !== '') {
            return `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
        return '';
    }

    function isMobile() {
        return window.innerWidth <= 600;
    }

    function scrollToBottom() {
        terminalWindow.scrollTop = terminalWindow.scrollHeight;
    }

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = this.value.trim();
            const result = handleCommand(command);

            if (result !== null) {
                output.innerHTML += `${prompt.textContent} ${command}\n${result}\n\n`;
            }

            this.value = '';
            scrollToBottom();
        }
    });

    input.addEventListener('input', scrollToBottom);

    output.innerHTML = welcomeMessage;
    scrollToBottom();
});
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 500,
        easing: 'ease-in-sine',
        once: true,
    });
});


$(document).ready(function () {
    $('#thoughts .thought-content').hide();
    $('#thoughts .thought-item').click(function (e) {
        if ($(e.target).is('a') || $(e.target).parents('a').length) {
            return;
        }
        var $content = $(this).find('.thought-content');

        $content.slideToggle(300);

        $(this).toggleClass('active');

        if ($content.is(':visible')) {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 20
            }, 300);
        }
    });
});