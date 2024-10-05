document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const prompt = document.getElementById('terminal-prompt');

    const ASCII_LOGO = `
  ____            _____                 
 |  _ \\   _ __   |___ /   _ __     __ _ 
 | |_) | | '_ \\    |_ \\  | '_ \\   / _\` |
 |  __/  | |_) |  ___) | | | | | | (_| |
 |_|     | .__/  |____/  |_| |_|  \\__, |
         |_|                      |___/ 
`;

    const welcomeMessage = `${ASCII_LOGO}\nWelcome to LUOPENG ZHOU's Terminal\nType 'help' for available commands.\n\n`;

    // 调整字体大小
    if (isMobile()) {
        output.style.fontSize = '8px'; // 根据需要调整字体大小
    }

    const commands = {
        help: () => 'Available commands: help, about, skills, interests, projects, contact, clear, goto [section]',
        about: () => 'Name: LUOPENG ZHOU(周罗鹏)\nOccupation: Unix Programmer\nPassion: Crafting elegant code and mastering the command line.',
        skills: () => 'Languages: C, C++, Python, Bash\nTools: Vim, Git, Make, GDB\nSystems: Linux, BSD, macOS\nOther: WebDev, Raspberry-PI, Database, Network, Cybersecurity',
        interests: () => 'Programming: C and C++ in Linux environment\nPhotography: Capturing moments and finding beauty in everyday scenes\nBilliards: Strategic and relaxing game, enjoying the mental challenge',
        projects: () => '1. HuffmanTree_encrypt: File encryption using Huffman coding\n2. Mandelbrot-Set: Fractal visualization with C, C++, and CUDA\n3. Design-Pattern: Showcasing common design patterns in C++\n4. Network-chat: Simple chat server and client in C\n5. Bookkeeper_mysql: Financial management system with MySQL',
        contact: () => 'Instagram: @pp3ng___\nGitHub: github.com/Pp3ng',
        clear: () => {
            output.innerHTML = welcomeMessage;
            return null;
        },
        goto: (section) => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
                return `Navigating to ${section}...`;
            } else {
                return `Section not found: ${section}.`;
            }
        }
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

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = this.value.trim();
            const result = handleCommand(command);

            if (result !== null) {
                output.innerHTML += `${prompt.textContent} ${command}\n${result}\n\n`;
            }

            this.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });

    output.innerHTML = welcomeMessage;
});