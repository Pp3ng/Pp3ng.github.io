import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

// Define command types
type CommandFunction = (...args: any[]) => string | Promise<string> | null;

interface Commands {
  [key: string]: CommandFunction;
}

const Terminal: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>("");
  const [outputContent, setOutputContent] = useState<string>("");
  const terminalWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ASCII_LOGO = useMemo(
    () => `
  ____            _____                 
 |  _ \\   _ __   |___ /   _ __     __ _ 
 | |_) | | '_ \\    |_ \\  | '_ \\   / _\` |
 |  __/  | |_) |  ___) | | | | | | (_| |
 |_|     | .__/  |____/  |_| |_|  \\__, |
         |_|                      |___/ 
`,
    []
  );

  const welcomeMessage = useMemo(
    () =>
      `${ASCII_LOGO}\n<span class="success-text">Welcome to my terminal</span>\nType '<span class="info-text">help</span>' for available commands\n`,
    [ASCII_LOGO]
  );

  // Check if device is mobile
  const isMobile = useCallback((): boolean => {
    return window.innerWidth <= 768;
  }, []);

  // Scroll terminal to bottom
  const scrollToBottom = useCallback((): void => {
    if (terminalWindowRef.current) {
      terminalWindowRef.current.scrollTop =
        terminalWindowRef.current.scrollHeight;
    }
  }, []);

  // Initialize terminal on component mount
  useEffect(() => {
    setOutputContent(welcomeMessage);

    if (isMobile()) {
      const outputElem = document.getElementById("terminal-output");
      if (outputElem) outputElem.style.fontSize = "8px";
    }
  }, [welcomeMessage, isMobile]);

  // Scroll to bottom whenever terminal output changes
  useEffect(() => {
    scrollToBottom();
  }, [outputContent, scrollToBottom]);

  // Set the terminal output HTML safely
  const createMarkup = useCallback((html: string) => {
    return { __html: html };
  }, []);

  // Commands available in the terminal
  const commands = useMemo<Commands>(
    () => ({
      help: () => `Available commands:
<span class="info-text">help</span>: Show this help message
<span class="info-text">whoami</span>: Display personal information
<span class="info-text">contact</span>: Show contact information
<span class="info-text">clear</span>: Clear terminal
<span class="info-text">goto</span> [page/section]: Navigate to a page or section
<span class="info-text">joke</span>: Show a programming joke
<span class="info-text">cowsay</span> [message]: Make a cow say something
<span class="info-text">weather</span> [city]: Show weather (your location if no city specified)
<span class="info-text">crypto</span>: Show current Bitcoin prices
<span class="info-text">cat</span>: Get random cat picture
<span class="info-text">dog</span>: Get random dog picture
<span class="info-text">nasa</span>: Get NASA astronomy picture of the day
<span class="info-text">fact</span>: Get random fact
<span class="info-text">date</span>: Show current date and time
<span class="info-text">history</span>: Show command history
<span class="info-text">neofetch</span>: Display system information
<span class="info-text">advice</span>: Get a random advice
<span class="info-text">word</span>: Get a random word

Type any command to execute.`,
      whoami: () =>
        "Name: Penn.L.Zhou(周罗鹏)\nOccupation: Programmer\nPassions:\n- Programming: C/C++ development in Linux environment\n- Photography: Capturing moments and finding beauty in everyday scenes\n- Billiards: Strategic game requiring precision and focus",
      contact: () =>
        '<a href="https://www.instagram.com/pp3ng___" target="_blank">Instagram: @pp3ng___</a>\n<a href="https://github.com/Pp3ng" target="_blank">GitHub: github.com/Pp3ng</a>\n<a href="mailto:pp3ng@outlook.com">Email: Pp3ng@outlook.com</a>',
      clear: () => {
        setOutputContent(welcomeMessage);
        return null;
      },
      goto: (section: string) => {
        // Handle page navigation
        const pages = {
          home: "/",
          playground: "/playground",
          terminal: "/playground",
          passions: "/",
          works: "/works",
          projects: "/works",
          gallery: "/works",
          blog: "/blog",
          insights: "/blog",
          bookshelf: "/blog",
          about: "/",
        };

        if (pages[section as keyof typeof pages]) {
          window.location.hash = pages[section as keyof typeof pages];
          return `<span class="success-text">Navigating to ${section} page...</span>`;
        }

        // Try to scroll to element on current page
        const element = document.getElementById(section);
        if (element) {
          const navbarElement = document.querySelector(
            ".navbar"
          ) as HTMLElement;
          const navHeight = navbarElement?.offsetHeight || 0;
          window.scrollTo({
            top: element.offsetTop - navHeight - 20,
            behavior: "smooth",
          });
          return `<span class="success-text">Navigating to ${section} section...</span>`;
        } else {
          return `<span class="error-text">Section not found: ${section}.</span>\nAvailable pages: home, playground, terminal, passions, works, projects, gallery, blog, insights, bookshelf, about`;
        }
      },
      joke: () => {
        return `<img src="https://readme-jokes.vercel.app/api?theme=vue" alt="Programming Joke" style="max-width: 100%; border-radius: 8px;">`;
      },
      cowsay: (message: string | string[] = "Mooooo!") => {
        const fullMessage = Array.isArray(message)
          ? message.join(" ")
          : message.toString();

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
      weather: async (city?: string) => {
        try {
          if (!city) {
            const response = await fetch("https://wttr.in/?format=3");
            return await response.text();
          }

          const response = await fetch(
            `https://wttr.in/${encodeURIComponent(city)}?format=3`
          );
          if (!response.ok) {
            throw new Error("Weather service error");
          }
          return await response.text();
        } catch (e) {
          return '<span class="error-text">Failed to fetch weather data. Please try again later or specify a valid city name.</span>';
        }
      },
      crypto: async () => {
        try {
          // Using CoinGecko API which is more reliable and doesn't require API key
          const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,eur,cny"
          );

          if (!response.ok) {
            throw new Error("API request failed");
          }

          const data = await response.json();

          // Format the output with the prices
          return `<span class="success-text">Cryptocurrency Prices:</span>

<span class="info-text">Bitcoin (BTC):</span>
USD: $${data.bitcoin.usd.toFixed(2)}
EUR: €${data.bitcoin.eur.toFixed(2)}
CNY: ¥${data.bitcoin.cny.toFixed(2)}

<span class="info-text">Ethereum (ETH):</span>
USD: $${data.ethereum.usd.toFixed(2)}
EUR: €${data.ethereum.eur.toFixed(2)}
CNY: ¥${data.ethereum.cny.toFixed(2)}`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch cryptocurrency prices. The API might be rate limited or temporarily unavailable.</span>';
        }
      },
      cat: async () => {
        try {
          const response = await fetch(
            "https://api.thecatapi.com/v1/images/search"
          );
          const data = await response.json();
          return `<div class="my-2.5">
                    <img src="${data[0].url}" alt="Random Cat" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
                </div>`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch cat picture</span>';
        }
      },
      dog: async () => {
        try {
          const response = await fetch(
            "https://api.thedogapi.com/v1/images/search"
          );
          const data = await response.json();
          return `<div class="my-2.5">
                    <img src="${data[0].url}" alt="Random Dog" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
                </div>`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch dog picture</span>';
        }
      },
      nasa: async () => {
        try {
          const response = await fetch(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
          );
          const data = await response.json();
          return `<span class="success-text">NASA Astronomy Picture of the Day:</span>
Title: ${data.title}
Date: ${data.date}
<div class="my-2.5">
    <img src="${data.url}" alt="${
            data.title
          }" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
</div>
${data.explanation.slice(0, 200)}...`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch NASA picture of the day</span>';
        }
      },
      fact: async () => {
        try {
          const response = await fetch(
            "https://uselessfacts.jsph.pl/random.json?language=en"
          );
          const data = await response.json();
          return `<span class="info-text">Random Fact:</span> ${data.text}`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch random fact</span>';
        }
      },
      date: () => {
        const d = new Date();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        return `<span class="success-text">${days[d.getDay()]} ${
          months[d.getMonth()]
        } ${d.getDate()} ${d
          .toTimeString()
          .slice(0, 8)} KST ${d.getFullYear()}</span>`;
      },
      history: () => {
        if (commandHistory.length === 0) {
          return '<span class="error-text">No command history found</span>';
        }
        return commandHistory
          .map((cmd, i) => `<span class="info-text"> ${i + 1}</span>  ${cmd}`)
          .join("\n");
      },
      neofetch: () => {
        const startDate = new Date("2024-09-28");
        const currentDate = new Date();
        const uptimeDays = Math.floor(
          (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        const locale = navigator.language || "en-US";

        // Browser detection
        const getBrowser = (): string => {
          const userAgent = navigator.userAgent;
          if (userAgent.includes("Firefox")) return "Browser (Firefox)";
          if (userAgent.includes("Chrome") && !userAgent.includes("Edg"))
            return "Browser (Chrome)";
          if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
            return "Browser (Safari)";
          if (userAgent.includes("Edg")) return "Browser (Edge)";
          if (userAgent.includes("OPR")) return "Browser (Opera)";
          return "Browser (Other)";
        };

        const randomQuotes = [
          "Time to code and conquer!",
          "Coffee level: Critical",
          "Bug hunting in progress...",
          "System status: Awesome",
          "Ready to debug!",
        ];

        const randomQuote =
          randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

        return `<span style="color: #4a90e2;">
                            .---.                </span><span class="success-text">${randomQuote}</span><span style="color: #4a90e2;">
                           /     \\               ------------------------------------
                           \\.@-@./               </span><span class="info-text">OS:</span> ${getBrowser()} <i class="fas fa-globe"></i><span style="color: #4a90e2;">
                           /\`\\_/\`\\               </span><span class="info-text">Host:</span> Personal Portfolio v2.0 <i class="fas fa-laptop-code"></i><span style="color: #4a90e2;">
                          //  _  \\\\              </span><span class="info-text">Kernel:</span> JavaScript ES2024 <i class="fab fa-js"></i><span style="color: #4a90e2;">
                         | \\     )|_             </span><span class="info-text">Uptime:</span> ${Math.abs(
                           uptimeDays
                         )} days <i class="fas fa-clock"></i><span style="color: #4a90e2;">
                        /\`\\_\`>  <_/ \\            </span><span class="info-text">Packages:</span> 42 node_modules installed <i class="fab fa-npm"></i><span style="color: #4a90e2;">
                       (  \\_     _/  )           </span><span class="info-text">Shell:</span> Terminal.js v3.14 <i class="fas fa-terminal"></i><span style="color: #4a90e2;">
                        \`-\\_____/--'             </span><span class="info-text">Resolution:</span> ${
                          window.screen.width
                        }x${
          window.screen.height
        } <i class="fas fa-desktop"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">DE:</span> Glass Morphism <i class="fas fa-palette"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Icons:</span> Font Awesome <i class="fab fa-font-awesome"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Terminal:</span> Web Console Pro <i class="fas fa-code"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">CPU:</span> Brain 6.0 GHz <i class="fas fa-microchip"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">GPU:</span> Eyes RTX 5090 Ti <i class="fas fa-eye"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Locale:</span> ${locale} <i class="fas fa-globe-asia"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Battery:</span> Coffee 99% <i class="fas fa-coffee"></i></span>`;
      },
      advice: async () => {
        try {
          const response = await fetch("https://api.adviceslip.com/advice");
          const data = await response.json();
          return `<span class="success-text">💡 Advice #${data.slip.id}:</span> ${data.slip.advice}`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch advice. Maybe that\'s the advice: sometimes things fail.</span>';
        }
      },
      word: async () => {
        try {
          // Get a random word
          const wordResponse = await fetch(
            "https://random-word-api.herokuapp.com/word"
          );
          const [randomWord] = await wordResponse.json();
          return `<span class="info-text">Random word:</span> ${randomWord}`;
        } catch (e) {
          return '<span class="error-text">Failed to fetch a random word. Please try again later.</span>';
        }
      },
    }),
    [commandHistory, welcomeMessage]
  );

  // Handle command execution
  const handleCommand = useCallback(
    async (cmd: string): Promise<string | null> => {
      if (!cmd.trim()) return "";

      const parts = cmd.split(" ");
      const command = parts[0];
      const args = parts.slice(1);

      if (commands[command]) {
        if (command === "cowsay") {
          return commands[command](args.join(" "));
        }

        const result = commands[command](...args);
        if (result instanceof Promise) {
          return await result;
        }
        return result;
      } else if (cmd.trim() !== "") {
        return `<span class="error-text">Command not found: ${cmd}.</span> Type '<span class="info-text">help</span>' for available commands.`;
      }
      return "";
    },
    [commands]
  );

  // Handle key presses
  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
      if (e.key === "Enter") {
        const command = inputValue.trim();
        if (command) {
          // Add command to history
          setCommandHistory((prev) => [...prev, command]);
          setHistoryIndex(commandHistory.length + 1);

          // Special handling for clear command
          if (command === "clear") {
            commands.clear();
            setInputValue("");
            return;
          }

          // Process command and get result
          const result = await handleCommand(command);

          // Display command in terminal
          setOutputContent((prev) => `${prev}>_ ${command}\n`);

          // Display results immediately
          if (result !== null) {
            setOutputContent((prev) => `${prev}${result || ""}\n\n`);
          }
        }
        setInputValue("");
        scrollToBottom();
      }
      // Up arrow to navigate command history
      else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      }
      // Down arrow to navigate command history
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        } else {
          setHistoryIndex(commandHistory.length);
          setInputValue("");
        }
      }
      // Tab for command completion
      else if (e.key === "Tab") {
        e.preventDefault();
        const currentInput = inputValue;
        const suggestions = Object.keys(commands).filter((cmd) =>
          cmd.startsWith(currentInput.split(" ")[0])
        );

        if (suggestions.length === 1) {
          setInputValue(
            suggestions[0] +
              (currentInput.includes(" ")
                ? currentInput.substring(currentInput.indexOf(" "))
                : "")
          );
        } else if (suggestions.length > 1) {
          setOutputContent(
            (prev) => `${prev}>_ ${currentInput}\n${suggestions.join("  ")}\n\n`
          );
          scrollToBottom();
        }
      }
      // Ctrl+C to cancel
      else if (e.key === "c" && e.ctrlKey) {
        e.preventDefault();
        setInputValue("");
        setOutputContent((prev) => `${prev}>_ ^C\n`);
        scrollToBottom();
      }
      // Ctrl+L to clear
      else if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        commands.clear();
      }
    },
    [
      inputValue,
      commandHistory,
      historyIndex,
      handleCommand,
      scrollToBottom,
      commands,
    ]
  );

  return (
    <div className="flex justify-center items-center py-2">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div id="terminal" data-aos="fade-up">
          <div className="terminal-section">
            <div id="terminal-window" ref={terminalWindowRef}>
              <div
                id="terminal-output"
                dangerouslySetInnerHTML={createMarkup(outputContent)}
              ></div>
              <div id="terminal-input-line">
                <span id="terminal-prompt">pp3ng@portfolio:~$</span>
                <input
                  type="text"
                  id="terminal-input"
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
