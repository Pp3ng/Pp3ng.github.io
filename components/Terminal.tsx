import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";

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
const TEXT_COLORS = {
  GREEN: "color: #42b983;",
  RED: "color: #ff5f56;",
  BLUE: "color: #6a9ec5;",
  YELLOW: "color: #f1c40f;",
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
  const navigate = useNavigate();
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
      `${ASCII_LOGO}\n<span style="${TEXT_COLORS.GREEN}">Welcome to my terminal</span>\nType '<span style="${TEXT_COLORS.BLUE}">help</span>' for available commands\n`,
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
    const [r, g, b] = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 256)
    );
    const hex = `#${[r, g, b]
      .map((c) => c.toString(16).padStart(2, "0"))
      .join("")}`;
    return { r, g, b, hex };
  }, []);

  // Initialize terminal on component mount
  useEffect(() => {
    setOutputContent(welcomeMessage);

    // Apply mobile styling if needed
    if (isMobile) {
      outputRef.current?.style.setProperty("fontSize", CONFIG.MOBILE_FONT_SIZE);
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
          const category = config.category ?? "system";
          const usage = config.usage ? ` ${config.usage}` : "";
          categories[category].push(
            `<span style="${TEXT_COLORS.BLUE}">${name}${usage}</span>: ${config.description}`
          );
        });

        const result = ["Available commands:\n"];

        Object.entries(categories)
          .filter(([, commands]) => commands.length > 0)
          .forEach(([category, commands]) => {
            result.push(
              `<span style="${
                TEXT_COLORS.YELLOW
              }">${category.toUpperCase()}:</span>`
            );
            result.push(...commands, "");
          });

        return result.join("\n").trimEnd();
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
        `Name: Penn.L.Zhou(周罗鹏) a individual passionate about computer science and engineering 👨‍💻

<span style="${TEXT_COLORS.YELLOW}">Philosophy:</span>
<blockquote style="margin: 10px 0; padding-left: 15px; border-left: 3px solid var(--primary-color); font-style: italic;">
  <span style="${TEXT_COLORS.BLUE}">"Stay hungry, stay foolish."</span>
  <br><sub style="opacity: 0.7;">— Steve Jobs, 2005 Stanford Commencement Address</sub>
</blockquote>
<sup style="opacity: 0.8;"><i>A tribute to the geek spirit that changes the world.</i></sup>`,
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
        } as const;

        const targetPath = pages[section as keyof typeof pages];
        if (targetPath) {
          navigate(targetPath);
          return `<span style="${TEXT_COLORS.GREEN}">Navigating to ${section} page...</span>`;
        } else {
          return `<span style="${
            TEXT_COLORS.RED
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
          return `<span style="${TEXT_COLORS.RED}">No command history found</span>`;
        }
        const historyToShow = commandHistory.slice(-20);
        const startIndex = Math.max(
          0,
          commandHistory.length - historyToShow.length
        );

        return historyToShow
          .map(
            (cmd, i) =>
              `<span style="${TEXT_COLORS.BLUE}">${
                startIndex + i + 1
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
        const now = new Date();
        const formatted = now
          .toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short",
          })
          .replace(/,/g, "");

        return `<span style="${TEXT_COLORS.GREEN}">${formatted}</span>`;
      },
      "Show current date and time",
      "",
      "system"
    );

    registerCommand(
      "cowsay",
      (...args: string[]) => {
        const message = args.length > 0 ? args.join(" ") : "Mooooo!";
        const border = "-".repeat(message.length + 2);

        return `
  ${border}
< ${message} >
  ${border}
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
        return `<span style="${TEXT_COLORS.GREEN}">Random Color:</span>
<span style="${TEXT_COLORS.BLUE}">Hex:</span> ${color.hex}
<span style="${TEXT_COLORS.BLUE}">RGB:</span> rgb(${color.r}, ${color.g}, ${color.b})
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
        const url = `https://wttr.in/${
          city ? encodeURIComponent(city) : ""
        }?format=3`;

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

        const formatPrice = (crypto: string, currency: string) =>
          data[crypto]?.[currency]?.toFixed(
            currency === "usd" || currency === "eur" ? 2 : 4
          ) ?? "N/A";

        return `<span style="${TEXT_COLORS.GREEN}">Cryptocurrency Prices:</span>

<span style="${TEXT_COLORS.BLUE}">Bitcoin (BTC):</span>
USD: $${formatPrice("bitcoin", "usd")}
EUR: €${formatPrice("bitcoin", "eur")}
CNY: ¥${formatPrice("bitcoin", "cny")}

<span style="${TEXT_COLORS.BLUE}">Ethereum (ETH):</span>
USD: $${formatPrice("ethereum", "usd")}
EUR: €${formatPrice("ethereum", "eur")}
CNY: ¥${formatPrice("ethereum", "cny")}

<span style="${TEXT_COLORS.BLUE}">Dogecoin (DOGE):</span>
USD: $${formatPrice("dogecoin", "usd")}
EUR: €${formatPrice("dogecoin", "eur")}
CNY: ¥${formatPrice("dogecoin", "cny")}`;
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
          TEXT_COLORS.GREEN
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
        return `<span style="${TEXT_COLORS.BLUE}">Random Fact:</span> ${data.text}`;
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
        return `<span style="${TEXT_COLORS.GREEN}">💡 Advice #${data.slip.id}:</span> ${data.slip.advice}`;
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
        return `<span style="${TEXT_COLORS.BLUE}">Random word:</span> ${randomWord}`;
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
          TEXT_COLORS.GREEN
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
          return `<span style="${TEXT_COLORS.RED}">Please specify a country name. Example: country japan</span>`;
        }

        const response = await fetchWithTimeout(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
        );
        const data = await response.json();

        if (data.message) {
          return `<span style="${TEXT_COLORS.RED}">Country not found: ${name}</span>`;
        }

        const [country] = data;
        const languages = Object.values(country.languages ?? {}).join(", ");
        const currencies = Object.values(country.currencies ?? {})
          .map((c: any) => c.name)
          .join(", ");

        return `<span style="${TEXT_COLORS.GREEN}">Country Information:</span>
<span style="${TEXT_COLORS.YELLOW}">${country.name.common}</span>
<span style="${TEXT_COLORS.BLUE}">Official Name:</span> ${country.name.official}
<span style="${TEXT_COLORS.BLUE}">Capital:</span> ${
          country.capital?.[0] ?? "N/A"
        }
<span style="${
          TEXT_COLORS.BLUE
        }">Population:</span> ${country.population.toLocaleString()}
<span style="${TEXT_COLORS.BLUE}">Region:</span> ${country.region}
<span style="${TEXT_COLORS.BLUE}">Subregion:</span> ${country.subregion}
<span style="${TEXT_COLORS.BLUE}">Languages:</span> ${languages}
<span style="${TEXT_COLORS.BLUE}">Currencies:</span> ${currencies}`;
      },
      "Get information about a country",
      "[name]",
      "api"
    );

    registerCommand(
      "user",
      async () => {
        const response = await fetchWithTimeout("https://randomuser.me/api/");
        const {
          results: [user],
        } = await response.json();

        return `<span style="${TEXT_COLORS.GREEN}">Random User:</span>
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
          return `<span style="${TEXT_COLORS.RED}">Please provide text to hash. Example: sha256 "hello world"</span>`;
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");

        return `<span style="${TEXT_COLORS.GREEN}">SHA-256 Hash:</span>
<span style="${TEXT_COLORS.BLUE}">Input:</span> ${text}
<span style="${TEXT_COLORS.BLUE}">Hash:</span> ${hashHex}`;
      },
      "Generate SHA-256 hash of text",
      "[text]",
      "system"
    );

    registerCommand(
      "password",
      (length?: string) => {
        const len = parseInt(length ?? "12", 10);
        if (isNaN(len) || len < 4 || len > 64) {
          return `<span style="${TEXT_COLORS.RED}">Password length must be between 4 and 64 characters</span>`;
        }

        const charset =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        const password = Array.from({ length: len }, () =>
          charset.charAt(Math.floor(Math.random() * charset.length))
        ).join("");

        return `<span style="${TEXT_COLORS.GREEN}">Generated Password:</span> <span style="${TEXT_COLORS.YELLOW}">${password}</span>\n<span style="${TEXT_COLORS.BLUE}">⚠️  Copy this password immediately - it won't be shown again!</span>`;
      },
      "Generate a secure random password",
      "[length]",
      "system"
    );

    registerCommand(
      "qr",
      (text?: string) => {
        if (!text) {
          return `<span style="${TEXT_COLORS.RED}">Please provide text to encode. Example: qr "Hello World"</span>`;
        }

        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
          text
        )}`;
        return `<span style="${TEXT_COLORS.GREEN}">QR Code Generated:</span>
<span style="${TEXT_COLORS.BLUE}">Text:</span> ${text}
<div class="my-2.5">
    <img src="${qrApiUrl}" alt="QR Code" class="w-48 h-48 object-cover rounded-[15px] border-3 border-white/40">
</div>`;
      },
      "Generate QR code for text",
      "[text]",
      "fun"
    );

    registerCommand(
      "whereami",
      async () => {
        try {
          const response = await fetchWithTimeout("https://ipapi.co/json/");
          const data = await response.json();

          const locationInfo = [
            { label: "IP", value: data.ip },
            { label: "City", value: `${data.city}, ${data.region}` },
            {
              label: "Country",
              value: `${data.country_name} (${data.country})`,
            },
            { label: "Timezone", value: data.timezone },
            { label: "ISP", value: data.org },
            {
              label: "Coordinates",
              value: `${data.latitude}, ${data.longitude}`,
            },
          ];

          const infoLines = locationInfo
            .map(
              ({ label, value }) =>
                `<span style="${TEXT_COLORS.BLUE}">${label}:</span> ${value}`
            )
            .join("\n");

          return `<span style="${TEXT_COLORS.GREEN}">Your Location:</span>\n${infoLines}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Unable to determine location. Service might be unavailable.</span>`;
        }
      },
      "Get your current location and IP info",
      "",
      "api"
    );

    registerCommand(
      "joke",
      async () => {
        const response = await fetchWithTimeout(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();

        return `<span style="${TEXT_COLORS.GREEN}">😄 Random Joke:</span>
<span style="${TEXT_COLORS.YELLOW}">Q:</span> ${data.setup}
<span style="${TEXT_COLORS.BLUE}">A:</span> ${data.punchline}`;
      },
      "Get a random programming joke",
      "",
      "fun"
    );

    // Performance optimized neofetch
    registerCommand(
      "neofetch",
      () => {
        const startDate = new Date(CONFIG.UPTIME_START_DATE);
        const currentDate = new Date();

        // Elegant uptime calculation using modern JavaScript
        const getUptimeString = (start: Date, now: Date): string => {
          const totalSeconds = Math.floor(
            (now.getTime() - start.getTime()) / 1000
          );
          const timeUnits = [
            { unit: "d", value: Math.floor(totalSeconds / 86400) },
            { unit: "h", value: Math.floor((totalSeconds % 86400) / 3600) },
            { unit: "m", value: Math.floor((totalSeconds % 3600) / 60) },
            { unit: "s", value: totalSeconds % 60 },
          ];

          return timeUnits
            .filter(({ value, unit }) => value > 0 || unit === "s")
            .map(({ value, unit }) => `${value}${unit}`)
            .join(" ");
        };

        const uptimeString = getUptimeString(startDate, currentDate);

        const locale = navigator.language ?? "en-US";

        // Cached browser detection using a more elegant approach
        const getBrowser = (): string => {
          const browsers = [
            { name: "Firefox", check: "Firefox" },
            { name: "Chrome", check: "Chrome", exclude: "Edg" },
            { name: "Safari", check: "Safari", exclude: "Chrome" },
            { name: "Edge", check: "Edg" },
            { name: "Opera", check: "OPR" },
          ];

          const userAgent = navigator.userAgent;
          const browser = browsers.find(
            (b) =>
              userAgent.includes(b.check) &&
              (!b.exclude || !userAgent.includes(b.exclude))
          );

          return `Browser (${browser?.name ?? "Other"})`;
        };

        // Use hostname style without command
        const promptHeader =
          '<span style="color: #60a5fa; text-shadow: 0 0 10px rgba(96, 165, 250, 0.5); font-weight: 600;">pp3ng@portfolio</span>';
        const { width, height } = window.screen;

        return `<span style="color: #4a90e2;">
                          .---.                </span>${promptHeader}<span style="color: #4a90e2;">
                         /     \\               ------------------------------------
                         \\.@-@./               </span><span style="${
                           TEXT_COLORS.BLUE
                         }">OS:</span> ${getBrowser()} <i class="fas fa-globe"></i><span style="color: #4a90e2;">
                         /\`\\_/\`\\               </span><span style="${
                           TEXT_COLORS.BLUE
                         }">Host:</span> Personal Portfolio v2.0 <i class="fas fa-laptop-code"></i><span style="color: #4a90e2;">
                        //  _  \\\\              </span><span style="${
                          TEXT_COLORS.BLUE
                        }">Kernel:</span> JavaScript ES2024 <i class="fab fa-js"></i><span style="color: #4a90e2;">
                       | \\     )|_             </span><span style="${
                         TEXT_COLORS.BLUE
                       }">Uptime:</span> ${uptimeString} <i class="fas fa-clock"></i><span style="color: #4a90e2;">
                      /\`\\_\`>  <_/ \\            </span><span style="${
                        TEXT_COLORS.BLUE
                      }">Packages:</span> 42 node_modules installed <i class="fab fa-npm"></i><span style="color: #4a90e2;">
                     (  \\_     _/  )           </span><span style="${
                       TEXT_COLORS.BLUE
                     }">Shell:</span> Terminal.js v3.14 <i class="fas fa-terminal"></i><span style="color: #4a90e2;">
                      \`-\\_____/--'             </span><span style="${
                        TEXT_COLORS.BLUE
                      }">Resolution:</span> ${width}x${height} <i class="fas fa-desktop"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TEXT_COLORS.BLUE
                                               }">Icons:</span> Font Awesome <i class="fab fa-font-awesome"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TEXT_COLORS.BLUE
                                               }">CPU:</span> Brain 6.0 GHz <i class="fas fa-microchip"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TEXT_COLORS.BLUE
                                               }">GPU:</span> Eyes RTX 5090 Ti <i class="fas fa-eye"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TEXT_COLORS.BLUE
                                               }">Locale:</span> ${locale} <i class="fas fa-globe-asia"></i><span style="color: #4a90e2;">
                                               </span><span style="${
                                                 TEXT_COLORS.BLUE
                                               }">Battery:</span> Coffee 99% <i class="fas fa-coffee"></i></span>`;
      },
      "Display system information",
      "",
      "system"
    );

    registerCommand(
      "movie",
      async (title?: string) => {
        if (!title) {
          return `<span style="${TEXT_COLORS.RED}">Please specify a movie title. Example: movie "Interstellar"</span>`;
        }

        try {
          const response = await fetchWithTimeout(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              title
            )}&apikey=trilogy`
          );
          const data = await response.json();

          if (data.Response === "False") {
            return `<span style="${TEXT_COLORS.RED}">Movie not found: ${title}</span>`;
          }

          return `<span style="${TEXT_COLORS.GREEN}">🎬 Movie Info:</span>
<span style="${TEXT_COLORS.YELLOW}">${data.Title}</span> (${data.Year})
<span style="${TEXT_COLORS.BLUE}">Director:</span> ${data.Director}
<span style="${TEXT_COLORS.BLUE}">Genre:</span> ${data.Genre}
<span style="${TEXT_COLORS.BLUE}">IMDB Rating:</span> ${data.imdbRating}/10
<span style="${TEXT_COLORS.BLUE}">Runtime:</span> ${data.Runtime}
<span style="${TEXT_COLORS.BLUE}">Plot:</span> ${data.Plot.slice(0, 200)}...`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Movie service unavailable</span>`;
        }
      },
      "Get movie information",
      "[title]",
      "api"
    );

    registerCommand(
      "github",
      async (username?: string) => {
        if (!username) {
          return `<span style="${TEXT_COLORS.RED}">Please specify a GitHub username. Example: github torvalds</span>`;
        }

        try {
          const userResponse = await fetchWithTimeout(
            `https://api.github.com/users/${encodeURIComponent(username)}`
          );
          const userData = await userResponse.json();

          if (userData.message === "Not Found") {
            return `<span style="${TEXT_COLORS.RED}">GitHub user not found: ${username}</span>`;
          }

          const reposResponse = await fetchWithTimeout(
            `https://api.github.com/users/${encodeURIComponent(
              username
            )}/repos?sort=updated&per_page=5`
          );
          const reposData = await reposResponse.json();

          const topRepos = reposData
            .slice(0, 3)
            .map((repo: any) => `• ${repo.name} (⭐ ${repo.stargazers_count})`)
            .join("\n");

          return `<span style="${TEXT_COLORS.GREEN}">👨‍💻 GitHub Profile:</span>
<span style="${TEXT_COLORS.YELLOW}">${
            userData.name || userData.login
          }</span> (@${userData.login})
<span style="${TEXT_COLORS.BLUE}">Bio:</span> ${
            userData.bio || "No bio available"
          }
<span style="${TEXT_COLORS.BLUE}">Followers:</span> ${
            userData.followers
          } | Following: ${userData.following}
<span style="${TEXT_COLORS.BLUE}">Public Repos:</span> ${userData.public_repos}
<span style="${TEXT_COLORS.BLUE}">Location:</span> ${
            userData.location || "Unknown"
          }
<span style="${TEXT_COLORS.BLUE}">Top Repos:</span>
${topRepos}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">GitHub service unavailable</span>`;
        }
      },
      "Get GitHub user profile info",
      "[username]",
      "api"
    );

    registerCommand(
      "news",
      async () => {
        try {
          const response = await fetchWithTimeout(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
          );
          const storyIds = await response.json();

          const stories = await Promise.all(
            storyIds.slice(0, 3).map(async (id: number) => {
              const storyResponse = await fetchWithTimeout(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
              );
              return storyResponse.json();
            })
          );

          const newsItems = stories
            .map(
              (story, index) =>
                `${index + 1}. <span style="${TEXT_COLORS.YELLOW}">${
                  story.title
                }</span>
   Score: ${story.score} | Comments: ${story.descendants || 0}
   <a href="${story.url}" target="_blank">${story.url?.slice(0, 50)}...</a>`
            )
            .join("\n\n");

          return `<span style="${TEXT_COLORS.GREEN}">📰 Top Hacker News:</span>

${newsItems}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">News service unavailable</span>`;
        }
      },
      "Get top tech news from Hacker News",
      "",
      "api"
    );

    registerCommand(
      "urban",
      async (term?: string) => {
        if (!term) {
          return `<span style="${TEXT_COLORS.RED}">Please specify a term. Example: urban "algorithm"</span>`;
        }

        try {
          const response = await fetchWithTimeout(
            `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(
              term
            )}`
          );
          const data = await response.json();

          if (!data.list || data.list.length === 0) {
            return `<span style="${TEXT_COLORS.RED}">No definition found for: ${term}</span>`;
          }

          const def = data.list[0];
          return `<span style="${TEXT_COLORS.GREEN}">📖 Urban Dictionary:</span>
<span style="${TEXT_COLORS.YELLOW}">${def.word}</span>
<span style="${TEXT_COLORS.BLUE}">Definition:</span> ${def.definition.slice(
            0,
            200
          )}...
<span style="${TEXT_COLORS.BLUE}">Example:</span> ${def.example?.slice(
            0,
            150
          )}...
👍 ${def.thumbs_up} | 👎 ${def.thumbs_down}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Urban Dictionary service unavailable</span>`;
        }
      },
      "Get Urban Dictionary definition",
      "[term]",
      "api"
    );

    registerCommand(
      "lyrics",
      async (...args: string[]) => {
        if (args.length < 2) {
          return `<span style="${TEXT_COLORS.RED}">Please specify artist and song. Example: lyrics "The Beatles" "Hey Jude"</span>`;
        }

        const artist = args[0];
        const song = args[1];

        try {
          const response = await fetchWithTimeout(
            `https://api.lyrics.ovh/v1/${encodeURIComponent(
              artist
            )}/${encodeURIComponent(song)}`
          );
          const data = await response.json();

          if (data.error) {
            return `<span style="${TEXT_COLORS.RED}">Lyrics not found for: ${artist} - ${song}</span>`;
          }

          return `<span style="${TEXT_COLORS.GREEN}">🎵 Lyrics:</span>
<span style="${TEXT_COLORS.YELLOW}">${artist} - ${song}</span>

${data.lyrics}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Lyrics service unavailable</span>`;
        }
      },
      "Get song lyrics",
      "[artist] [song]",
      "api"
    );

    registerCommand(
      "reddit",
      async (subreddit?: string) => {
        const sub = subreddit || "programming";
        try {
          const response = await fetchWithTimeout(
            `https://www.reddit.com/r/${sub}/hot.json?limit=5`
          );
          const data = await response.json();

          if (!data.data || !data.data.children.length) {
            return `<span style="${TEXT_COLORS.RED}">Subreddit not found or empty: r/${sub}</span>`;
          }

          const posts = data.data.children
            .slice(0, 3)
            .map(
              (post: any, index: number) =>
                `${index + 1}. <span style="${TEXT_COLORS.YELLOW}">${
                  post.data.title
                }</span>
   👍 ${post.data.ups} | 💬 ${post.data.num_comments} | r/${post.data.subreddit}
   <a href="https://www.reddit.com${
     post.data.permalink
   }" target="_blank">https://www.reddit.com${post.data.permalink.slice(
                  0,
                  40
                )}...</a>`
            )
            .join("\n\n");

          return `<span style="${TEXT_COLORS.GREEN}">🔥 Hot posts from r/${sub}:</span>

${posts}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Reddit service unavailable</span>`;
        }
      },
      "Get hot posts from Reddit",
      "[subreddit]",
      "api"
    );

    registerCommand(
      "recipe",
      async (query?: string) => {
        if (!query) {
          return `<span style="${TEXT_COLORS.RED}">Please specify a dish. Example: recipe "pasta"</span>`;
        }

        try {
          const response = await fetchWithTimeout(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
              query
            )}`
          );
          const data = await response.json();

          if (!data.meals || data.meals.length === 0) {
            return `<span style="${TEXT_COLORS.RED}">No recipes found for: ${query}</span>`;
          }

          const meal = data.meals[0];
          const ingredients: string[] = [];
          for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
              ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
              );
            }
          }

          return `<span style="${TEXT_COLORS.GREEN}">👨‍🍳 Recipe:</span>
<span style="${TEXT_COLORS.YELLOW}">${meal.strMeal}</span>
<span style="${TEXT_COLORS.BLUE}">Category:</span> ${meal.strCategory}
<span style="${TEXT_COLORS.BLUE}">Cuisine:</span> ${meal.strArea}

<span style="${TEXT_COLORS.BLUE}">Ingredients:</span>
${ingredients.join("\n")}

<span style="${TEXT_COLORS.BLUE}">Instructions:</span>
${meal.strInstructions}

<div class="my-2.5">
    <img src="${meal.strMealThumb}" alt="${
            meal.strMeal
          }" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
</div>`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Recipe service unavailable</span>`;
        }
      },
      "Find a recipe",
      "[dish name]",
      "api"
    );

    registerCommand(
      "pokemon",
      async (name?: string) => {
        const pokemonName =
          name || Math.floor(Math.random() * 1010 + 1).toString();

        try {
          const response = await fetchWithTimeout(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
          );
          const data = await response.json();

          const types = data.types
            .map((type: any) => type.type.name)
            .join(", ");
          const abilities = data.abilities
            .map((ability: any) => ability.ability.name)
            .join(", ");

          return `<span style="${TEXT_COLORS.GREEN}">⚡ Pokémon Info:</span>
<span style="${TEXT_COLORS.YELLOW}">${
            data.name.charAt(0).toUpperCase() + data.name.slice(1)
          }</span> (#${data.id})
<span style="${TEXT_COLORS.BLUE}">Type:</span> ${types}
<span style="${TEXT_COLORS.BLUE}">Height:</span> ${data.height / 10}m
<span style="${TEXT_COLORS.BLUE}">Weight:</span> ${data.weight / 10}kg
<span style="${TEXT_COLORS.BLUE}">Abilities:</span> ${abilities}
<span style="${TEXT_COLORS.BLUE}">Base Experience:</span> ${
            data.base_experience
          }

<div class="my-2.5">
    <img src="${data.sprites.front_default}" alt="${
            data.name
          }" class="w-32 h-32 object-contain rounded-[15px] border-3 border-white/40">
</div>`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">Pokémon not found or service unavailable</span>`;
        }
      },
      "Get Pokémon information",
      "[name or number]",
      "fun"
    );

    registerCommand(
      "ip",
      async (address?: string) => {
        if (!address) {
          return `<span style="${TEXT_COLORS.RED}">Please specify an IP address. Example: ip "8.8.8.8"</span>`;
        }

        try {
          const response = await fetchWithTimeout(
            `https://ipapi.co/${address}/json/`
          );
          const data = await response.json();

          if (data.error) {
            return `<span style="${TEXT_COLORS.RED}">Invalid IP address: ${address}</span>`;
          }

          return `<span style="${TEXT_COLORS.GREEN}">🌐 IP Information:</span>
<span style="${TEXT_COLORS.BLUE}">IP:</span> ${data.ip}
<span style="${TEXT_COLORS.BLUE}">Location:</span> ${data.city}, ${data.region}, ${data.country_name}
<span style="${TEXT_COLORS.BLUE}">ISP:</span> ${data.org}
<span style="${TEXT_COLORS.BLUE}">Timezone:</span> ${data.timezone}
<span style="${TEXT_COLORS.BLUE}">Coordinates:</span> ${data.latitude}, ${data.longitude}`;
        } catch {
          return `<span style="${TEXT_COLORS.RED}">IP lookup service unavailable</span>`;
        }
      },
      "Get IP address information",
      "[ip_address]",
      "api"
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

      // Parse command with proper quote handling
      const parseCommand = (
        cmd: string
      ): { command: string; args: string[] } => {
        const result: string[] = [];
        let current = "";
        let inQuotes = false;
        let quoteChar = "";

        for (let i = 0; i < cmd.length; i++) {
          const char = cmd[i];

          if ((char === '"' || char === "'") && !inQuotes) {
            inQuotes = true;
            quoteChar = char;
          } else if (char === quoteChar && inQuotes) {
            inQuotes = false;
            quoteChar = "";
          } else if (char === " " && !inQuotes) {
            if (current.length > 0) {
              result.push(current);
              current = "";
            }
          } else {
            current += char;
          }
        }

        if (current.length > 0) {
          result.push(current);
        }

        return {
          command: result[0] || "",
          args: result.slice(1),
        };
      };

      const { command, args } = parseCommand(cmd);

      const commandConfig = commands[command];
      if (commandConfig) {
        const result = commandConfig.fn(...args);
        if (result instanceof Promise) {
          return await result;
        }
        return result;
      } else if (cmd.trim() !== "") {
        return `<span style="${TEXT_COLORS.RED}">Command not found: ${cmd}.</span> Type '<span style="${TEXT_COLORS.BLUE}">help</span>' for available commands.`;
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
            setOutputContent((prev) => `${prev}${result ?? ""}\n`);
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
        const [currentInput] = inputValue.split(" ");
        const suggestions = Object.keys(commands).filter((cmd) =>
          cmd.startsWith(currentInput)
        );

        if (suggestions.length === 1) {
          const restOfInput = inputValue.includes(" ")
            ? inputValue.substring(inputValue.indexOf(" "))
            : "";
          setInputValue(suggestions[0] + restOfInput);
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
    <div className="flex justify-center items-center mt-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative" data-aos="fade-up">
          {/* Terminal Window */}
          <div
            className="relative overflow-hidden "
            style={{
              background: "var(--glass-background)",
              backdropFilter: "blur(6px) saturate(160%)",
              border: "var(--glass-border)",
              borderRadius: "20px",
            }}
          >
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
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
