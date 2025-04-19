import React, { useState, useEffect, useRef } from "react";

interface CommandResponse {
  content: string;
  isHTML: boolean;
}

const Terminal: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>("");
  const [outputContent, setOutputContent] = useState<string>("");
  const terminalWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ASCII_LOGO = `
  ____            _____                 
 |  _ \\   _ __   |___ /   _ __     __ _ 
 | |_) | | '_ \\    |_ \\  | '_ \\   / _\` |
 |  __/  | |_) |  ___) | | | | | | (_| |
 |_|     | .__/  |____/  |_| |_|  \\__, |
         |_|                      |___/ 
`;

  const welcomeMessage = `${ASCII_LOGO}\nWelcome to my Terminal\nType 'help' for available commands.\n\n`;

  // Initialize terminal on component mount
  useEffect(() => {
    setOutputContent(welcomeMessage);

    if (isMobile()) {
      const outputElem = document.getElementById("terminal-output");
      if (outputElem) outputElem.style.fontSize = "8px";
    }
  }, []);

  // Scroll to bottom whenever terminal output changes
  useEffect(() => {
    scrollToBottom();
  }, [outputContent]);

  // Commands available in the terminal
  const commands: Record<
    string,
    (...args: any[]) => string | Promise<string> | null
  > = {
    help: () => `Available commands:
- help: Show this help message
- whoami: Display personal information
- contact: Show contact information
- clear: Clear terminal
- goto [section]: Navigate to a section
- joke: Show a programming joke
- cowsay [message]: Make a cow say something
- weather [city]: Show weather (your location if no city specified)
- crypto: Show current Bitcoin prices
- cat: Get random cat picture
- dog: Get random dog picture
- nasa: Get NASA astronomy picture of the day
- fact: Get random fact
- date: Show current date and time
- history: Show command history
- neofetch: Display system information
- advice: Get a random advice
- word: Get a random word with definition

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
      const element = document.getElementById(section);
      if (element) {
        const navbarElement = document.querySelector(".navbar") as HTMLElement;
        const navHeight = navbarElement?.offsetHeight || 0;
        window.scrollTo({
          top: element.offsetTop - navHeight - 20,
          behavior: "smooth",
        });
        return `Navigating to ${section}...`;
      } else {
        return `Section not found: ${section}. Available sections: about, terminal, journey, passions, gallery, projects, insights, bookshelf`;
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
        return "Failed to fetch weather data. Please try again later or specify a valid city name.";
      }
    },
    crypto: async () => {
      try {
        // fetch bitcoin price
        const btcResponse = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const btcData = await btcResponse.json();
        const usdPrice = btcData.bpi.USD.rate_float;
        const eurPrice = btcData.bpi.EUR.rate_float;
        // fetch cny rate
        const rateResponse = await fetch(
          "https://open.er-api.com/v6/latest/USD"
        );
        const rateData = await rateResponse.json();
        const cnyRate = rateData.rates.CNY;
        const cnyPrice = usdPrice * cnyRate;

        return `Bitcoin Price:
USD: $${usdPrice.toFixed(2)}
CNY: ¥${cnyPrice.toFixed(2)}
EUR: €${eurPrice.toFixed(2)}`;
      } catch (e) {
        return "Failed to fetch cryptocurrency prices";
      }
    },
    cat: async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        const data = await response.json();
        return `<div style="margin: 10px 0;">
                    <img src="${data[0].url}" alt="Random Cat" style="max-width: 100%; max-height: 300px; border-radius: 5px; border: 3px solid rgba(255, 255, 255, 0.4);">
                </div>`;
      } catch (e) {
        return "Failed to fetch cat picture";
      }
    },
    dog: async () => {
      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/search"
        );
        const data = await response.json();
        return `<div style="margin: 10px 0;">
                    <img src="${data[0].url}" alt="Random Dog" style="max-width: 100%; max-height: 300px; border-radius: 5px; border: 3px solid rgba(255, 255, 255, 0.4);">
                </div>`;
      } catch (e) {
        return "Failed to fetch dog picture";
      }
    },
    nasa: async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const data = await response.json();
        return `NASA Astronomy Picture of the Day:
Title: ${data.title}
Date: ${data.date}
<div style="margin: 10px 0;">
    <img src="${data.url}" alt="${
          data.title
        }" style="max-width: 100%; max-height: 300px; border-radius: 5px; border: 3px solid rgba(255, 255, 255, 0.4);">
</div>
${data.explanation.slice(0, 200)}...`;
      } catch (e) {
        return "Failed to fetch NASA picture of the day";
      }
    },
    fact: async () => {
      try {
        const response = await fetch(
          "https://uselessfacts.jsph.pl/random.json?language=en"
        );
        const data = await response.json();
        return `Random Fact: ${data.text}`;
      } catch (e) {
        return "Failed to fetch random fact";
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

      return `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d
        .toTimeString()
        .slice(0, 8)} KST ${d.getFullYear()}`;
    },
    history: () => {
      return commandHistory.map((cmd, i) => ` ${i + 1}  ${cmd}`).join("\n");
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

      return `
                            .---.                ${randomQuote}
                           /     \\               ------------------------------------
                           \\.@-@./               OS: ${getBrowser()} <i class="fas fa-globe"></i>
                           /\`\\_/\`\\               Host: Personal Portfolio v2.0 <i class="fas fa-laptop-code"></i>
                          //  _  \\\\              Kernel: JavaScript ES2024 <i class="fab fa-js"></i>
                         | \\     )|_             Uptime: ${Math.abs(
                           uptimeDays
                         )} days <i class="fas fa-clock"></i>
                        /\`\\_\`>  <_/ \\            Packages: 42 node_modules installed <i class="fab fa-npm"></i>
                       (  \\_     _/  )           Shell: Terminal.js v3.14 <i class="fas fa-terminal"></i>
                        \`-\\_____/--'             Resolution: ${
                          window.screen.width
                        }x${window.screen.height} <i class="fas fa-desktop"></i>
                                                 DE: Glass Morphism <i class="fas fa-palette"></i>
                                                 Icons: Font Awesome <i class="fab fa-font-awesome"></i>
                                                 Terminal: Web Console Pro <i class="fas fa-code"></i>
                                                 CPU: Brain 6.0 GHz <i class="fas fa-microchip"></i>
                                                 GPU: Eyes RTX 5090 Ti <i class="fas fa-eye"></i>
                                                 Locale: ${locale} <i class="fas fa-globe-asia"></i>
                                                 Battery: Coffee 99% <i class="fas fa-coffee"></i>`;
    },
    advice: async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        return `💡 Advice #${data.slip.id}: ${data.slip.advice}`;
      } catch (e) {
        return "Failed to fetch advice. Maybe that's the advice: sometimes things fail.";
      }
    },
    word: async () => {
      try {
        // Get a random word
        const wordResponse = await fetch(
          "https://random-word-api.herokuapp.com/word"
        );
        const [randomWord] = await wordResponse.json();

        // Get the definition
        const definitionResponse = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        );

        if (!definitionResponse.ok) {
          return `Random Word: ${randomWord}\nDefinition: No definition found for this random word.`;
        }

        const definitionData = await definitionResponse.json();

        let result = `📚 Random Word: ${randomWord}\n\n`;

        if (definitionData[0]?.meanings?.length > 0) {
          const firstMeaning = definitionData[0].meanings[0];
          const partOfSpeech = firstMeaning.partOfSpeech;
          const definition =
            firstMeaning.definitions[0]?.definition ||
            "No definition available";

          result += `Part of Speech: ${partOfSpeech}\nDefinition: ${definition}`;

          // Add example if available
          if (firstMeaning.definitions[0]?.example) {
            result += `\n\nExample: "${firstMeaning.definitions[0].example}"`;
          }
        } else {
          result += "No definition found for this random word.";
        }

        return result;
      } catch (e) {
        return "Failed to fetch a random word. Please try again later.";
      }
    },
  };

  // Handle command execution
  const handleCommand = async (cmd: string): Promise<string | null> => {
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
      return `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
    return "";
  };

  // Check if device is mobile
  const isMobile = (): boolean => {
    return window.innerWidth <= 600;
  };

  // Scroll terminal to bottom
  const scrollToBottom = (): void => {
    if (terminalWindowRef.current) {
      terminalWindowRef.current.scrollTop =
        terminalWindowRef.current.scrollHeight;
    }
  };

  // Handle key presses
  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.key === "Enter") {
      const command = inputValue.trim();
      if (command) {
        // Add command to history
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(commandHistory.length + 1);

        // Process command and get result
        const result = await handleCommand(command);

        if (result !== null) {
          setOutputContent(
            (prev) => `${prev}>_ ${command}\n${result || ""}\n\n`
          );
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
  };

  // Set the terminal output HTML safely
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="container" id="terminal" data-aos="fade-up">
      <h2>Terminal</h2>
      <div className="terminal-section">
        <div id="terminal-window" ref={terminalWindowRef}>
          <div
            id="terminal-output"
            dangerouslySetInnerHTML={createMarkup(outputContent)}
          ></div>
          <div id="terminal-input-line">
            <span id="terminal-prompt">&gt;_</span>
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
  );
};

export default Terminal;
