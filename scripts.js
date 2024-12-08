$(document).ready(function () {
    // Typewriter Effect
    const text = "Hello,World! I'm ZHOU.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            $('h1').append(text.charAt(index));
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    $('h1').text(''); // clear the text
    typeWriter();

    // Lazy Loading Images
    const lazyLoad = (image) => {
        const src = $(image).data('src');
        if (!src) return;
        $(image).attr('src', src).removeAttr('data-src');
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    $('img').each(function () {
        imageObserver.observe(this);
    });

    // Show on Scroll
    const showOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
                observer.unobserve(entry.target);
            }
        });
    });

    $('.fade-in').each(function () {
        showOnScroll.observe(this);
    });

    // Scroll to Top Button
    $(document).ready(function () {
        const scrollToTopBtn = $('<button id="back-to-top" aria-label="滚动到顶部">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" ' +
            'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<polyline points="18 15 12 9 6 15"></polyline></svg></button>').css({
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#3498db',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
            transition: 'all 0.3s ease',
            zIndex: 9999,
            opacity: 0,
            visibility: 'hidden'
        }).appendTo('body');

        scrollToTopBtn.find('svg').css({
            width: '60%',
            height: '60%'
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                scrollToTopBtn.css({
                    opacity: 1,
                    visibility: 'visible'
                });
            } else {
                scrollToTopBtn.css({
                    opacity: 0,
                    visibility: 'hidden'
                });
            }
        });

        scrollToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, {
                duration: 300,
                easing: 'swing'
            });
        }).on('mouseover', function () {
            $(this).css({
                backgroundColor: '#2980b9',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(31, 38, 135, 0.2)'
            });
        }).on('mouseout', function () {
            $(this).css({
                backgroundColor: '#3498db',
                transform: 'translateY(0)',
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
            });
        });

        console.log("Scroll to top button has been added and initialized.");
    });

    // Smooth Scroll to Anchor Links
    $('.navbar a').click(function (e) {
        e.preventDefault();
        const target = $($.attr(this, 'href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, {
                duration: 300,
            });
        }
    });

    // Menu Toggle
    $('.menu-toggle').click(function () {
        $('.navbar').toggleClass('active');
    });

    // Terminal Input Handling
    const output = $('#terminal-output');
    const input = $('#terminal-input');
    const prompt = $('#terminal-prompt');
    const terminalWindow = $('#terminal-window');

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
        output.css('fontSize', '8px');
    }

    const jokes = [
        "Debugging is like being the detective in a crime movie where you are also the murderer. 🔍",
        "The programmer’s wife tells him, 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He comes home with 12 loaves of bread. 🍞",
        "There are only 10 types of people in the world: those who understand binary and those who don’t. 🔢",
        "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?' 🍻",
        "To understand recursion, you must first understand recursion. 🔄",
        "I would tell you a UDP joke, but you might not get it. 📡",
        "A programmer’s favorite hiking spot? Mount Stack Overflow! 🏔️",
        "'Knock, knock.' 'Who’s there?' 'Java.' 'Java who?' 'Sorry, Object not found.' 🚪",
        "In C, we trust... everyone else needs to pass pointers! 💻",
        "What's a programmer's favorite type of music? Algo-rhythms! 🎵",
        "There’s no place like 127.0.0.1. 🏠",
        "Artificial intelligence is no match for natural stupidity. 🤖",
        "How do you comfort a JavaScript bug? You console it! 🖥️",
        "A computer scientist is someone who fixes a problem you didn’t know you had in a way you don’t understand. 🛠️",
        "Why do programmers prefer using the dark mode? Because the light attracts too many bugs! 🌚",
        "What’s a network administrator’s favorite game? Ping pong! 🏓",
        "Git commit -m 'did something, I guess' 🤷‍♂️",
        "If at first you don’t succeed, call it version 1.0. 📊",
        "The cloud is just someone else's computer. ☁️",
        "Programming is 10% writing code and 90% trying to figure out why it doesn’t work. 🔧",
        "Why don’t robots ever get mad? They have great 'control'. 🎮",
        "How many developers does it take to change a lightbulb? None, they just make the darkness a feature. 🌑",
        "Computers are like air conditioners: they stop working when you open Windows. 🪟",
        "JavaScript: 'I don’t always test my code, but when I do, I do it in production.' 💻",
        "Real programmers count from 0. 👩‍💻",
        "Why was the function sad? Because it didn’t return anything! 😢",
        "A TCP packet walks into a bar and says, 'Hello, I'd like a beer.' Bartender replies, 'You want a beer?' TCP packet replies, 'Yes, a beer.' 📡",
        "In theory, there’s no difference between theory and practice. But in practice, there is. 🧠",
        "Why do backend developers always look so calm? Because they handle all the requests on the server side. 🖥️",
        "A CSS joke: 'I’m floated over here and no one can contain me!' 🤷‍♀️",
        "Why do programmers hate nature? It has too many bugs. 🐛",
        "The best thing about a Boolean is that even if you are wrong, you are only off by a bit. 🧮",
        "Why was the JavaScript developer sad? Because he didn’t know how to null his feelings. 😢",
        "How do you comfort a frustrated Linux user? You tell them to calm down and sudo reboot. 🔄",
        "Why was the developer so good at breakdancing? Because they knew how to handle exceptions! 💥",
        "Why did the C programmer break up with his girlfriend? He couldn’t malloc her heart. 💔",
        "Why was the Python developer feeling down? Because they kept getting 'IndentationError: unexpected indent'. 😓",
        "Why did the software engineer go broke? Because they used up all their cache! 💸",
        "The API walks into a bar and orders a drink. The bartender says, 'Sorry, we don't serve your kind here.'",
        "Why was the sysadmin so relaxed? Because their system had uptime for days! ⏳",
        "Real software engineers don’t document their code. If it was hard to write, it should be hard to understand! 📖",
        "Why did the developer quit their job? They didn't get arrays. 🛑",
        "How do you explain computer science humor? You have to be recursive to get it. 🔄",
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25. 🎃🎄",
        "I told my computer I needed a break, and now it won’t stop sending me coffee emojis! ☕",
        "Why did the database administrator break up with their partner? They found someone with more queries. 💔",
        "Why do network engineers never agree? Because they always clash over their connections. 🌐",
        "What did the router say to the switch? 'Stop forwarding all my personal data!' 📡",
        "A programmer was walking across the street when suddenly a bug appeared... he took a detour to fix it. 🚶‍♂️🐛",
        "The problem with troubleshooting is that trouble often shoots back. 💥",
        "Why don’t programmers like to go outside? There’s too many exceptions. 🏞️",
        "Why was the computer so good at golf? Because it had a hard drive! 🏌️‍♂️",
        "I changed my password to 'incorrect.' So whenever I forget it, the computer tells me, 'Your password is incorrect.' 🔐",
        "Why was the cloud always so full? Because it couldn’t stop uploading photos! ☁️",
        "A byte walks into a bar and says, 'I’ll have a pint, but make it quick, I’m running out of space.' 🍺",
        "A C++ programmer’s greatest fear? De-referencing a null pointer. 😱",
        "Why did the developer keep going back to the bar? To work on their Git 'commit-ment.' 💍",
        "Why do Java programmers need glasses? Because they don't C#! 🤓",
        "How many developers does it take to screw in a lightbulb? None, they just declare it out of scope! 💡",
        "How does a computer tell you it’s thinking? It gives you a 'cursor.' 💭",
        "A kernel panic and a segmentation fault walk into a bar... and crash everything. 🍻💥",
        "Why do machine learning models love coffee? Because they’re always looking for grounds to improve! ☕",
        "A stack overflow error and a recursion error walk into a bar, but never leave. 🌀",
        "What’s the object-oriented way to become wealthy? Inheritance. 💸",
        "Why did the IT guy leave his job? He didn’t get arrays. 📊",
        "Why did the function break up with the variable? It just wasn’t 'binding' anymore. 💔",
        "Why do computers love AC? Because they can’t handle the heat without a fan! 🌀",
        "Why do engineers love puns? Because they find them pun-derful! 😄",
        "How does a software engineer give a party? They make sure to throw exceptions! 🎉",
        "Why was the hardware engineer so good at conversations? Because they always had great 'chips' on their shoulder! 💾",
        "Why did the programmer stay calm during the crisis? They knew they could just 'fork' it. 🍴",
        "Why do backend developers enjoy coding so much? Because they handle the logic, not just the looks. 🤓",
        "Why was the laptop so moody? It needed more RAM to process its feelings. 😩",
        "Why are databases so trustworthy? Because they never lose their records! 🗃️",
        "Why did the startup founder bring two pairs of pants to the meeting? In case they got a 'pitch' in one. 👖",
        "A function walks into a bar, and the bartender says, 'I hope you have arguments!' 🍸",
        "Why did the mobile app developer go broke? Because in-app purchases didn’t save them. 💸",
        "What’s the first thing a database developer says to a new colleague? 'SELECT * FROM friends;' 🤝",
        "Why did the computer need glasses? To improve its 'byte-sight.' 👓",
        "Why don't computers play sports? Because they always get stuck in 'loops.' 🏅",
        "Why did the software developer break up with their laptop? Because it kept crashing on them. 💻💔",
        "A network engineer said, 'It’s not you, it’s DNS.' 🌐",
        "Why was the web server so rude? It kept dropping connections! 🔗",
        "Why do some developers hate CSS? Because it’s always such a style-sheet show! 👚",
        "Why do coders love space? Because they can finally work without constraints. 🚀",
        "Why did the algorithm visit the therapist? To learn how to deal with its complexity. 🧠",
        "What did the firewall say to the hacker? 'You shall not pass!' 🔥",
        "Why did the laptop take a nap? It was running low on 'battery life.' 😴",
        "Why was the programmer so cold? Their code kept freezing. 🥶",
        "Why was the server always tired? Too many 'requests' from clients! 😫",
        "Why do coders love Star Wars? Because they know the 'Force' is strong in loops. 🌌",
        "Why don’t hardware engineers ever get lost? Because they have perfect circuits! ⚡",
        "How do electrical engineers celebrate? They throw a *current* party! 🎉",
        "Why don’t computers ever get hungry? Because they’ve always got plenty of *bytes*! 💻🍽️",
        "What’s a computer scientist’s favorite movie? *The Matrix*, because it’s full of bugs to fix. 🦠",
        "Why do engineers never play hide and seek? Because good luck hiding from the *algorithm*. 🤖",
        "Why did the mechanical engineer bring a screwdriver to the meeting? To turn things around! 🔧",
        "Why do data scientists love skiing? Because they’re always looking for slopes in the data! 🎿",
        "Why was the quantum computer so bad at jokes? It couldn't decide if it was funny or not. ⚛️",
        "Why did the engineer break up with their spreadsheet? It had too many cells. 🧮",
        "What did the compiler say to the programmer? 'You’ve got errors to fix!' 🧑‍💻",
        "Why was the electrical engineer always calm? Because they knew how to stay grounded. 🌍⚡",
        "Why don’t robotics engineers get tired? They have endless power! 🔋🤖",
    ];

    const commands = {
        help: () => `Available commands:
- help: Show this help message
- whoami: Display personal information
- contact: Show contact information
- clear: Clear terminal
- goto [section]: Navigate to a section
- joke: Tell a programming joke
- time: Show current time
- cowsay [message]: Make a cow say something
- weather [city]: Show weather (your location if no city specified)

Type any command to execute.`,
        whoami: () => 'Name: LUOPENG ZHOU(周罗鹏)\nOccupation: Programmer\nPassions:\n- Programming: C/C++ development in Linux environment\n- Photography: Capturing moments and finding beauty in everyday scenes\n- Billiards: Strategic game requiring precision and focus',
        contact: () => '<a href="https://www.instagram.com/pp3ng___" target="_blank">Instagram: @pp3ng___</a>\n<a href="https://github.com/Pp3ng" target="_blank">GitHub: github.com/Pp3ng</a>\n<a href="mailto:pp3ng@outlook.com">Email: Pp3ng@outlook.com</a>',
        clear: () => {
            output.html(welcomeMessage);
            return null;
        },
        goto: (section) => {
            const element = $(`#${section}`);
            if (element.length) {
                $('html, body').animate({scrollTop: element.offset().top}, 'smooth');
                return `Navigating to ${section}...`;
            } else {
                return `Section not found: ${section}.`;
            }
        },
        joke: () => jokes[Math.floor(Math.random() * jokes.length)],
        time: () => `Current time: ${new Date().toLocaleTimeString()}`,
        cowsay: (message = "Mooooo!") => {
            // Join all arguments back together to handle multi-word messages
            const fullMessage = message.toString() + (arguments.length > 1 ? ' ' + Array.from(arguments).slice(1).join(' ') : '');
            return `
  ${"-".repeat(fullMessage.length + 2)}
< ${fullMessage} >
  ${"-".repeat(fullMessage.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
        `;
        },
        weather: async (city) => {
            try {
                if (!city) {
                    try {
                        const ipResponse = await fetch('https://api.ipify.org?format=json');
                        const ipData = await ipResponse.json();
                        const locationResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`);
                        const locationData = await locationResponse.json();
                        if (locationData.status === 'fail' || !locationData.city) {
                            return "Failed to get your location. Please specify a city name.";
                        }
                        city = locationData.city;
                    } catch (e) {
                        return "Failed to get your location. Please specify a city name.";
                    }
                }
                const response = await fetch(`https://wttr.in/${city}?format=3`);
                return await response.text();
            } catch (e) {
                return "Failed to fetch weather data. Please try again later.";
            }
        },
    };

    async function handleCommand(cmd) {
        const [command, ...args] = cmd.split(' ');
        if (commands[command]) {
            if (command === 'cowsay') {
                return commands[command](args.join(' '));
            }
            
            const result = commands[command](...args);
            if (result instanceof Promise) {
                return await result;
            }
            return result;
        } else if (cmd.trim() !== '') {
            return `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
        return '';
    }

    function isMobile() {
        return window.innerWidth <= 600;
    }

    function scrollToBottom() {
        terminalWindow.scrollTop(terminalWindow[0].scrollHeight);
    }

    input.on('keydown', async function (event) {
        if (event.key === 'Enter') {
            const command = $(this).val().trim();
            const result = await handleCommand(command);

            if (result !== null) {
                output.append(`${prompt.text()} ${command}\n${result}\n\n`);
            }

            $(this).val('');
            scrollToBottom();
        }
    });

    input.on('input', scrollToBottom);

    output.html(welcomeMessage);
    scrollToBottom();

    // Thoughts section toggle
    $('#notes .note-content').hide();
    $('#notes .note-item').click(function (e) {
        if ($(e.target).is('a') || $(e.target).parents('a').length) {
            return;
        }
        var $content = $(this).find('.note-content');

        $content.slideToggle(300);

        $(this).toggleClass('active');

        if ($content.is(':visible')) {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 20
            }, 300);
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 500,
        easing: 'ease-in-sine',
        once: true,
    });

    // Scroll progress bar
    const progressBar = $('<div class="scroll-progress"></div>').appendTo('body');

    $(window).scroll(function() {
        const windowHeight = $(document).height() - $(window).height();
        const scrolled = $(window).scrollTop() / windowHeight;
        progressBar.css('transform', `scaleX(${scrolled})`);
    });

    function createParticleBackground() {
        const particlesConfig = {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: "#3498db"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#3498db",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    }
                }
            },
            retina_detect: true
        };

        particlesJS('particles-js', particlesConfig);
    }
});

lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': false,
    'disableScrolling': true,
    'fadeDuration': 300,
    'resizeDuration': 300,
    'imageFadeDuration': 300,
    'closeButtonEnabled': false
});

// Close lightbox on click outside image
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('lb-image')) {
        lightbox.end();
    }
});

function populateBookshelf() {
    const githubUsername = 'Pp3ng';
    const githubRepo = 'My-bookshelf';
    const books = [
        {
            title: "Advanced Programming in UNIX Environment",
            cover: "BookCovers/APUE.jpg",
            pdfFilename: "Advanced Programming in the UNIX Environment 3rd Edition.pdf"
        },
        {
            title: "TCP/IP Illustrated Volume1",
            cover: "BookCovers/TCPV1.jpg",
            pdfFilename: "TCP-IP-Illustrated-Volume-1-The-Protocols.pdf"
        },
        {
            title: "TCP/IP Illustrated Volume2",
            cover: "BookCovers/TCPV2.jpg",
            pdfFilename: "TCP-IP-Illustrated-Volume-2-The-Implementation.pdf"
        },
        {
            title: "UNIX Network Programming Volume1",
            cover: "BookCovers/UNPV1.jpg",
            pdfFilename: "UNIX Network Programming V1.pdf"
        },
        {
            title: "The Art of UNIX Programming",
            cover: "BookCovers/ART.png",
            pdfFilename: "The Art of Unix Programming.pdf"
        },
        {
            title: "The C++ Programming Language",
            cover: "BookCovers/C++.jpg",
            pdfFilename: "The C++ Programming Language-4th.pdf"
        },
        {
            title: "Linux Command Line And Shell Scripting Bible",
            cover: "BookCovers/CLIBIBLE.jpg",
            pdfFilename: "Linux Command Line And Shell Scripting Bible.pdf"
        },
        {
            title: "Learning the vi and vim Editors",
            cover: "BookCovers/LTVAVE.jpg",
            pdfFilename: "Learning the vi and Vim Editors 8th Edition-2021.pdf"
        },
        {
            title: "The Linux Programming Interface",
            cover: "BookCovers/TLPI.png",
            pdfFilename: "The Linux Programming Interface-2010.pdf"
        },
        {
            title: "Computer Systems A Programmer's Perspective",
            cover: "BookCovers/CSAPP.jpg",
            pdfFilename: "Computer Systems A Programmer's Perspective.pdf"
        },
        {
            title: "Introduction To Algorithms",
            cover: "BookCovers/ITA.jpg",
            pdfFilename: "Introduction to Algorithms 4th.pdf"
        },
        {
            title: "Computer Organization and Design",
            cover: "BookCovers/COAD.jpg",
            pdfFilename: "Computer Organization and Design 5E.pdf"
        },
        {
            title: "Operating System Three Easy Pieces",
            cover: "BookCovers/OSTEP.png",
            pdfFilename: "Operating System Three Easy Pieces.pdf"
        },
        {
            title: "Computer Netwoking-A Top Down Approach",
            cover: "BookCovers/NW.jpg",
            pdfFilename: "Computer Networking-A Top Down Approach-7th.pdf"
        },
        {
            title: "System Performance",
            cover: "BookCovers/SP.jpg",
            pdfFilename: "Systems Performance-Enterprise And The Cloud.pdf"
        },
        {
            title: "Database System Concepts",
            cover: "BookCovers/DSC.jpg",
            pdfFilename: "Database System Concepts-7th.pdf"
        },
        {
            title: "Compilers Principles Techniques and Tools",
            cover: "BookCovers/COMPILER.jpg",
            pdfFilename: "Compilers Principles Techniques and Tools.pdf"
        },
        {
            title: "Programming Massively Parallel Processors",
            cover: "BookCovers/CUDA.jpg",
            pdfFilename: "Programming Massively Parallel Processors.pdf"
        },
        {
            title: "How Linux Works",
            cover: "BookCovers/HLW.jpg",
            pdfFilename: "How Linux Works.pdf"
        },
        {
            title: "Absolute FreeBSD",
            cover: "BookCovers/AF.jpg",
            pdfFilename: "Absolute FreeBSD 3rd Edition.pdf"
        },
    ];

    const bookshelfContainer = $('.bookshelf-container');

    books.forEach(book => {
        const bookItem = $('<div>').addClass('book-item');
        const coverImg = $('<img>').addClass('book-cover').attr('src', book.cover).attr('alt', `${book.title} cover`);
        const title = $('<h3>').addClass('book-title').text(book.title);

        // Construct the GitHub raw content URL for the PDF
        const pdfUrl = `https://github.com/${githubUsername}/${githubRepo}/raw/main/${book.pdfFilename}`;

        const link = $('<a>').addClass('book-link').attr('href', pdfUrl).attr('target', '_blank').text('Download');

        bookItem.append(coverImg, title, link);
        bookshelfContainer.append(bookItem);
    });
}

populateBookshelf();
