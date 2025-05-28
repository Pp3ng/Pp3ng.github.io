import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

// Configuration constants
const CONFIG = {
  TERMINAL_HEIGHT: 600,
  MOBILE_BREAKPOINT: 768,
  MOBILE_FONT_SIZE: "8px",
  API_TIMEOUT: 5000,
  HISTORY_LIMIT: 100,
  UPTIME_START_DATE: "2024-09-28",
} as const;

// Define CSS styles as constants
const TERMINAL_STYLES = {
  SUCCESS_TEXT: "color: #42b983;",
  ERROR_TEXT: "color: #ff5f56;",
  INFO_TEXT: "color: #6a9ec5;",
  WARNING_TEXT: "color: #f1c40f;",
} as const;

// Define command types
type CommandFunction = (...args: string[]) => string | Promise<string> | null;
type CommandConfig = {
  fn: CommandFunction;
  description: string;
  usage?: string;
  category?: "info" | "fun" | "api" | "system" | "navigation";
};

interface Commands {
  [key: string]: CommandConfig;
}

// API utility with timeout and error handling
const fetchWithTimeout = async (
  url: string,
  timeout = CONFIG.API_TIMEOUT
): Promise<Response> => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(id);
  return response;
};

const Terminal: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>("");
  const [outputContent, setOutputContent] = useState<string>("");
  const terminalWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Define consistent prompt style
  const PROMPT = useMemo(
    () =>
      '<span style="color: #60a5fa; text-shadow: 0 0 10px rgba(96, 165, 250, 0.5); font-weight: 600;">pp3ng@portfolio</span><span style="color: #ffffff;">:</span><span style="color: #34d399; text-shadow: 0 0 10px rgba(52, 211, 153, 0.5);">~</span><span style="color: #ffffff;">$</span> ',
    []
  );

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
      `${ASCII_LOGO}\n<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">Welcome to my terminal</span>\nType '<span style="${TERMINAL_STYLES.INFO_TEXT}">help</span>' for available commands\n`,
    [ASCII_LOGO]
  );

  // Check if device is mobile
  const isMobile = useMemo((): boolean => {
    return window.innerWidth <= CONFIG.MOBILE_BREAKPOINT;
  }, []);

  // Scroll terminal to bottom
  const scrollToBottom = useCallback((): void => {
    terminalWindowRef.current?.scrollTo({
      top: terminalWindowRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  // Helper function to generate random colors
  const generateColor = useCallback(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const hex = `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    return { r, g, b, hex };
  }, []);

  // Initialize terminal on component mount
  useEffect(() => {
    setOutputContent(welcomeMessage);

    if (isMobile && outputRef.current) {
      outputRef.current.style.fontSize = CONFIG.MOBILE_FONT_SIZE;
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

  // Command registry with flexible registration mechanism
  const createCommandRegistry = useCallback(() => {
    const registry: Commands = {};

    const registerCommand = (
      name: string,
      fn: CommandFunction,
      description: string,
      usage?: string,
      category: "info" | "fun" | "api" | "system" | "navigation" = "system"
    ) => {
      registry[name] = { fn, description, usage, category };
    };

    // System commands
    registerCommand(
      "help",
      () => {
        const categories = {
          info: [],
          system: [],
          navigation: [],
          fun: [],
          api: [],
        } as Record<string, string[]>;

        Object.entries(registry).forEach(([name, config]) => {
          const category = config.category || "system";
          const usage = config.usage ? ` ${config.usage}` : "";
          categories[category].push(
            `<span style="${TERMINAL_STYLES.INFO_TEXT}">${name}${usage}</span>: ${config.description}`
          );
        });

        let result = "Available commands:\n\n";
        Object.entries(categories).forEach(([category, commands]) => {
          if (commands.length > 0) {
            result += `<span style="${
              TERMINAL_STYLES.WARNING_TEXT
            }">${category.toUpperCase()}:</span>\n`;
            result += commands.join("\n") + "\n";
          }
        });
        return result.trimEnd();
      },
      "Show available commands and their descriptions",
      "",
      "system"
    );

    registerCommand(
      "clear",
      () => {
        setOutputContent(welcomeMessage);
        return null;
      },
      "Clear the terminal screen",
      "",
      "system"
    );

    registerCommand(
      "whoami",
      () =>
        "Name: Penn.L.Zhou(周罗鹏)\nOccupation: Programmer\nPassions:\n- Programming: C/C++ development in Linux environment\n- Photography: Capturing moments and finding beauty in everyday scenes\n- Billiards: Strategic game requiring precision and focus",
      "Display personal information",
      "",
      "info"
    );

    registerCommand(
      "contact",
      () =>
        '<a href="https://www.instagram.com/pp3ng___" target="_blank">Instagram: @pp3ng___</a>\n<a href="https://github.com/Pp3ng" target="_blank">GitHub: github.com/Pp3ng</a>\n<a href="mailto:pp3ng@outlook.com">Email: Pp3ng@outlook.com</a>',
      "Show contact information",
      "",
      "info"
    );

    registerCommand(
      "goto",
      (section: string) => {
        const pages = {
          home: "/",
          works: "/works",
          blog: "/blog",
        };

        if (pages[section as keyof typeof pages]) {
          const targetPath = pages[section as keyof typeof pages];
          window.location.href = targetPath;
          return `<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">Navigating to ${section} page...</span>`;
        } else {
          return `<span style="${
            TERMINAL_STYLES.ERROR_TEXT
          }">Page not found: ${section}.</span>\nAvailable pages: ${Object.keys(
            pages
          ).join(", ")}`;
        }
      },
      "Navigate to a page",
      "[page]",
      "navigation"
    );

    registerCommand(
      "history",
      () => {
        if (commandHistory.length === 0) {
          return `<span style="${TERMINAL_STYLES.ERROR_TEXT}">No command history found</span>`;
        }
        return commandHistory
          .slice(-20) // Only show last 20 commands for better performance
          .map(
            (cmd, i) =>
              `<span style="${TERMINAL_STYLES.INFO_TEXT}"> ${
                commandHistory.length - 20 + i + 1
              }</span>  ${cmd}`
          )
          .join("\n");
      },
      "Show command history (last 20 commands)",
      "",
      "system"
    );

    registerCommand(
      "date",
      () => {
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
        return `<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">${
          days[d.getDay()]
        } ${months[d.getMonth()]} ${d.getDate()} ${d
          .toTimeString()
          .slice(0, 8)} KST ${d.getFullYear()}</span>`;
      },
      "Show current date and time",
      "",
      "system"
    );

    registerCommand(
      "cowsay",
      (...args: string[]) => {
        const message = args.length > 0 ? args.join(" ") : "Mooooo!";
        return `
  ${"-".repeat(message.length + 2)}
< ${message} >
  ${"-".repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
        `;
      },
      "Make a cow say something",
      "[message]",
      "fun"
    );

    registerCommand(
      "color",
      () => {
        const color = generateColor();
        return `<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">Random Color:</span>
<span style="${TERMINAL_STYLES.INFO_TEXT}">Hex:</span> ${color.hex}
<span style="${TERMINAL_STYLES.INFO_TEXT}">RGB:</span> rgb(${color.r}, ${color.g}, ${color.b})
<div style="background-color: ${color.hex}; width: 100px; height: 20px; display: inline-block; border: 1px solid #fff; margin-left: 10px; vertical-align: middle;"></div> ← Color Preview`;
      },
      "Generate a random color",
      "",
      "fun"
    );

    // API-based commands with optimized error handling
    registerCommand(
      "weather",
      async (city?: string) => {
        const url = city
          ? `https://wttr.in/${encodeURIComponent(city)}?format=3`
          : "https://wttr.in/?format=3";

        const response = await fetchWithTimeout(url);
        if (!response.ok) throw new Error("Weather service error");
        return await response.text();
      },
      "Show weather information",
      "[city]",
      "api"
    );

    registerCommand(
      "crypto",
      async () => {
        const response = await fetchWithTimeout(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd,eur,cny"
        );

        if (!response.ok) throw new Error("API request failed");
        const data = await response.json();

        return `<span style="${
          TERMINAL_STYLES.SUCCESS_TEXT
        }">Cryptocurrency Prices:</span>

<span style="${TERMINAL_STYLES.INFO_TEXT}">Bitcoin (BTC):</span>
USD: $${data.bitcoin?.usd?.toFixed(2) || "N/A"}
EUR: €${data.bitcoin?.eur?.toFixed(2) || "N/A"}
CNY: ¥${data.bitcoin?.cny?.toFixed(2) || "N/A"}

<span style="${TERMINAL_STYLES.INFO_TEXT}">Ethereum (ETH):</span>
USD: $${data.ethereum?.usd?.toFixed(2) || "N/A"}
EUR: €${data.ethereum?.eur?.toFixed(2) || "N/A"}
CNY: ¥${data.ethereum?.cny?.toFixed(2) || "N/A"}

<span style="${TERMINAL_STYLES.INFO_TEXT}">Dogecoin (DOGE):</span>
USD: $${data.dogecoin?.usd?.toFixed(4) || "N/A"}
EUR: €${data.dogecoin?.eur?.toFixed(4) || "N/A"}
CNY: ¥${data.dogecoin?.cny?.toFixed(4) || "N/A"}`;
      },
      "Show current cryptocurrency prices",
      "",
      "api"
    );

    registerCommand(
      "cat",
      async () => {
        const response = await fetchWithTimeout(
          "https://api.thecatapi.com/v1/images/search"
        );
        const data = await response.json();
        return `<img src="${data?.[0]?.url}" alt="Random Cat" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">`;
      },
      "Get a random cat picture",
      "",
      "fun"
    );

    registerCommand(
      "dog",
      async () => {
        const response = await fetchWithTimeout(
          "https://api.thedogapi.com/v1/images/search"
        );
        const data = await response.json();
        return `<img src="${data?.[0]?.url}" alt="Random Dog" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">`;
      },
      "Get a random dog picture",
      "",
      "fun"
    );

    registerCommand(
      "nasa",
      async () => {
        const response = await fetchWithTimeout(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const data = await response.json();
        return `<span style="${
          TERMINAL_STYLES.SUCCESS_TEXT
        }">NASA Astronomy Picture of the Day:</span>
Title: ${data?.title}
Date: ${data?.date}
<div class="my-2.5">
    <img src="${data?.url}" alt="${
          data?.title
        }" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
</div>
${data?.explanation?.slice(0, 200)}...`;
      },
      "Get NASA astronomy picture of the day",
      "",
      "api"
    );

    registerCommand(
      "fact",
      async () => {
        const response = await fetchWithTimeout(
          "https://uselessfacts.jsph.pl/random.json?language=en"
        );
        const data = await response.json();
        return `<span style="${TERMINAL_STYLES.INFO_TEXT}">Random Fact:</span> ${data.text}`;
      },
      "Get a random fact",
      "",
      "fun"
    );

    registerCommand(
      "advice",
      async () => {
        const response = await fetchWithTimeout(
          "https://api.adviceslip.com/advice"
        );
        const data = await response.json();
        return `<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">💡 Advice #${data.slip.id}:</span> ${data.slip.advice}`;
      },
      "Get random advice",
      "",
      "fun"
    );

    registerCommand(
      "word",
      async () => {
        const response = await fetchWithTimeout(
          "https://random-word-api.herokuapp.com/word"
        );
        const [randomWord] = await response.json();
        return `<span style="${TERMINAL_STYLES.INFO_TEXT}">Random word:</span> ${randomWord}`;
      },
      "Get a random word",
      "",
      "fun"
    );

    registerCommand(
      "commit",
      async () => {
        const response = await fetchWithTimeout(
          "https://whatthecommit.com/index.txt"
        );
        const message = await response.text();
        return `<span style="${
          TERMINAL_STYLES.SUCCESS_TEXT
        }">Random Commit Message:</span> ${message.trim()}`;
      },
      "Get a random commit message",
      "",
      "fun"
    );

    registerCommand(
      "country",
      async (name?: string) => {
        if (!name) {
          return `<span style="${TERMINAL_STYLES.ERROR_TEXT}">Please specify a country name. Example: country japan</span>`;
        }

        const response = await fetchWithTimeout(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
        );
        const data = await response.json();

        if (data.message) {
          return `<span style="${TERMINAL_STYLES.ERROR_TEXT}">Country not found: ${name}</span>`;
        }

        const country = data[0];
        return `<span style="${
          TERMINAL_STYLES.SUCCESS_TEXT
        }">Country Information:</span>
<span style="${TERMINAL_STYLES.WARNING_TEXT}">${country.name.common}</span>
<span style="${TERMINAL_STYLES.INFO_TEXT}">Official Name:</span> ${
          country.name.official
        }
<span style="${TERMINAL_STYLES.INFO_TEXT}">Capital:</span> ${
          country.capital?.[0] || "N/A"
        }
<span style="${
          TERMINAL_STYLES.INFO_TEXT
        }">Population:</span> ${country.population.toLocaleString()}
<span style="${TERMINAL_STYLES.INFO_TEXT}">Region:</span> ${country.region}
<span style="${TERMINAL_STYLES.INFO_TEXT}">Subregion:</span> ${
          country.subregion
        }
<span style="${TERMINAL_STYLES.INFO_TEXT}">Languages:</span> ${Object.values(
          country.languages || {}
        ).join(", ")}
<span style="${TERMINAL_STYLES.INFO_TEXT}">Currencies:</span> ${Object.values(
          country.currencies || {}
        )
          .map((c: any) => c.name)
          .join(", ")}`;
      },
      "Get information about a country",
      "[name]",
      "api"
    );

    registerCommand(
      "user",
      async () => {
        const response = await fetchWithTimeout("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
        return `<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">Random User:</span>
Name: ${user.name.first} ${user.name.last}
Email: ${user.email}
Phone: ${user.phone}
Location: ${user.location.city}, ${user.location.country}
Age: ${user.dob.age}
Username: ${user.login.username}`;
      },
      "Generate a random user profile",
      "",
      "fun"
    );

    registerCommand(
      "sha256",
      async (text?: string) => {
        if (!text) {
          return `<span style="${TERMINAL_STYLES.ERROR_TEXT}">Please provide text to hash. Example: sha256 "hello world"</span>`;
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");

        return `<span style="${TERMINAL_STYLES.SUCCESS_TEXT}">SHA-256 Hash:</span>
<span style="${TERMINAL_STYLES.INFO_TEXT}">Input:</span> ${text}
<span style="${TERMINAL_STYLES.INFO_TEXT}">Hash:</span> ${hashHex}`;
      },
      "Generate SHA-256 hash of text",
      "[text]",
      "system"
    );

    // Performance optimized neofetch
    registerCommand(
      "neofetch",
      () => {
        const startDate = new Date(CONFIG.UPTIME_START_DATE);
        const currentDate = new Date();
        const uptimeDays = Math.floor(
          (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        const locale = navigator.language || "en-US";

        // Cached browser detection
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
                          .---.                </span><span style="${
                            TERMINAL_STYLES.SUCCESS_TEXT
                          }">${randomQuote}</span><span style="color: #4a90e2;">
                         /     \\               ------------------------------------
                         \\.@-@./               </span><span style="${
                           TERMINAL_STYLES.INFO_TEXT
                         }">OS:</span> ${getBrowser()} <i class="fas fa-globe"></i><span style="color: #4a90e2;">
                         /\`\\_/\`\\               </span><span style="${
                           TERMINAL_STYLES.INFO_TEXT
                         }">Host:</span> Personal Portfolio v2.0 <i class="fas fa-laptop-code"></i><span style="color: #4a90e2;">
                        //  _  \\\\              </span><span style="${
                          TERMINAL_STYLES.INFO_TEXT
                        }">Kernel:</span> JavaScript ES2024 <i class="fab fa-js"></i><span style="color: #4a90e2;">
                       | \\     )|_             </span><span style="${
                         TERMINAL_STYLES.INFO_TEXT
                       }">Uptime:</span> ${Math.abs(
          uptimeDays
        )} days <i class="fas fa-clock"></i><span style="color: #4a90e2;">
                      /\`\\_\`>  <_/ \\            </span><span style="${
                        TERMINAL_STYLES.INFO_TEXT
                      }">Packages:</span> 42 node_modules installed <i class="fab fa-npm"></i><span style="color: #4a90e2;">
                     (  \\_     _/  )           </span><span style="${
                       TERMINAL_STYLES.INFO_TEXT
                     }">Shell:</span> Terminal.js v3.14 <i class="fas fa-terminal"></i><span style="color: #4a90e2;">
                      \`-\\_____/--'             </span><span style="${
                        TERMINAL_STYLES.INFO_TEXT
                      }">Resolution:</span> ${window.screen.width}x${
          window.screen.height
        } <i class="fas fa-desktop"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">DE:</span> Glass Morphism <i class="fas fa-palette"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">Icons:</span> Font Awesome <i class="fab fa-font-awesome"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">Terminal:</span> Web Console Pro <i class="fas fa-code"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">CPU:</span> Brain 6.0 GHz <i class="fas fa-microchip"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">GPU:</span> Eyes RTX 5090 Ti <i class="fas fa-eye"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">Locale:</span> ${locale} <i class="fas fa-globe-asia"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TERMINAL_STYLES.INFO_TEXT
                                               }">Battery:</span> Coffee 99% <i class="fas fa-coffee"></i></span>`;
      },
      "Display system information",
      "",
      "system"
    );

    return registry;
  }, [commandHistory, welcomeMessage, generateColor]);

  // Memoized commands registry for better performance
  const commands = useMemo(
    () => createCommandRegistry(),
    [createCommandRegistry]
  );

  // Handle command execution
  const handleCommand = useCallback(
    async (cmd: string): Promise<string | null> => {
      if (!cmd.trim()) return "";

      const parts = cmd.split(" ");
      const command = parts[0];
      const args = parts.slice(1);

      const commandConfig = commands[command];
      if (commandConfig) {
        const result = commandConfig.fn(...args);
        if (result instanceof Promise) {
          return await result;
        }
        return result;
      } else if (cmd.trim() !== "") {
        return `<span style="${TERMINAL_STYLES.ERROR_TEXT}">Command not found: ${cmd}.</span> Type '<span style="${TERMINAL_STYLES.INFO_TEXT}">help</span>' for available commands.`;
      }
      return "";
    },
    [commands]
  );

  const updateCommandHistory = useCallback((command: string) => {
    setCommandHistory((prev) => {
      const newHistory = [...prev, command];
      // Limit history to prevent memory issues
      return newHistory.length > CONFIG.HISTORY_LIMIT
        ? newHistory.slice(-CONFIG.HISTORY_LIMIT)
        : newHistory;
    });
  }, []);

  // Handle input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  // Handle key presses with optimized performance
  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
      if (e.key === "Enter") {
        const command = inputValue.trim();
        if (command) {
          // Add command to history
          updateCommandHistory(command);
          setHistoryIndex(commandHistory.length + 1);

          // Special handling for clear command
          if (command === "clear") {
            commands.clear.fn();
            setInputValue("");
            return;
          }

          // Process command and get result
          const result = await handleCommand(command);

          // Display command in terminal with consistent prompt
          setOutputContent((prev) => `${prev}${PROMPT}${command}\n`);

          // Display results immediately
          if (result !== null) {
            setOutputContent((prev) => `${prev}${result || ""}\n`);
          }
        }
        setInputValue("");
        scrollToBottom();
      }
      // history navigation
      else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      } else if (e.key === "ArrowDown") {
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
      // Tab completion
      else if (e.key === "Tab") {
        e.preventDefault();
        const currentInput = inputValue.split(" ")[0];
        const suggestions = Object.keys(commands).filter((cmd) =>
          cmd.startsWith(currentInput)
        );

        if (suggestions.length === 1) {
          const restOfInput = inputValue.substring(inputValue.indexOf(" "));
          setInputValue(
            suggestions[0] + (inputValue.includes(" ") ? restOfInput : "")
          );
        } else if (suggestions.length > 1) {
          setOutputContent(
            (prev) =>
              `${prev}${PROMPT}${inputValue}\n${suggestions.join("  ")}\n\n`
          );
          scrollToBottom();
        }
      }
      // Keyboard shortcuts
      else if (e.key === "c" && e.ctrlKey) {
        e.preventDefault();
        setInputValue("");
        setOutputContent((prev) => `${prev}${PROMPT}^C\n`);
        scrollToBottom();
      } else if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        commands.clear.fn();
      }
      // Ctrl+U to clear current line
      else if (e.key === "u" && e.ctrlKey) {
        e.preventDefault();
        setInputValue("");
      }
    },
    [
      inputValue,
      commandHistory,
      historyIndex,
      handleCommand,
      scrollToBottom,
      commands,
      PROMPT,
      updateCommandHistory,
    ]
  );

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="relative" data-aos="fade-up">
          {/* Terminal Window */}
          <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-black/30 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white/70 text-sm font-medium ml-4">
                  pp3ng@portfolio: ~
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="relative">
              <div
                id="terminal-window"
                ref={terminalWindowRef}
                className="overflow-auto p-6"
                style={{
                  height: `${CONFIG.TERMINAL_HEIGHT}px`,
                  background:
                    "linear-gradient(135deg, rgba(24, 24, 27, 0.75) 0%, rgba(18, 18, 20, 0.85) 100%)",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <div
                  id="terminal-output"
                  ref={outputRef}
                  className="text-white font-mono text-sm leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={createMarkup(outputContent)}
                ></div>
                <div
                  id="terminal-input-line"
                  className="flex items-center mt-2"
                >
                  <span
                    id="terminal-prompt"
                    className="font-mono text-sm mr-1"
                    dangerouslySetInnerHTML={createMarkup(PROMPT)}
                  ></span>
                  <input
                    type="text"
                    id="terminal-input"
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white font-mono text-sm outline-none border-none caret-white"
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
              </div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-b-3xl"></div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
