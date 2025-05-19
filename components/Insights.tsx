import React, { useCallback, memo } from "react";
import { motion } from "framer-motion";

// Individual insight content section
const InsightContent = memo(
  ({
    children,
    image,
    isActive,
  }: {
    children: React.ReactNode;
    image?: { src: string | null; alt: string | null };
    isActive: boolean;
  }) => (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden
        ${
          isActive
            ? "max-h-[1000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-1"
        }
      `}
    >
      <div className="flex flex-col md:flex-row items-start gap-1 py-1 pl-2 relative">
        <div className="flex-1 min-w-0">
          <p className="text-sm leading-relaxed text-[var(--text-color)]">
            {children}
          </p>
        </div>
        {image && image.src && (
          <div className="md:ml-1">
            <img
              src={image.src}
              alt={image.alt || ""}
              className="rounded-lg max-w-[220px] max-h-[220px] w-auto h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </div>
    </div>
  )
);

InsightContent.displayName = "InsightContent";

// Timestamp component
const InsightTimestamp = memo(({ date }: { date: string }) => (
  <div className="text-sm text-[var(--text-color)] opacity-70 mt-2">
    <span>{date}</span>
  </div>
));

InsightTimestamp.displayName = "InsightTimestamp";

// Individual insight item component
const InsightItem = memo(
  ({
    title,
    contents,
    timestamp,
    variants,
  }: {
    title: string;
    contents: {
      text: React.ReactNode;
      image?: { src: string | null; alt: string | null };
    }[];
    timestamp: string;
    variants: any;
  }) => {
    const [isActive, setIsActive] = React.useState(false);

    const toggleActive = useCallback(
      (e: React.MouseEvent) => {
        // Prevent toggle when clicking on links
        if (
          (e.target as HTMLElement).tagName === "A" ||
          (e.target as HTMLElement).closest("a")
        ) {
          return;
        }

        setIsActive((prev) => !prev);

        if (!isActive) {
          setTimeout(() => {
            const element = e.currentTarget as HTMLElement;
            const navbarElement = document.querySelector(
              ".navbar"
            ) as HTMLElement;
            const navHeight = navbarElement?.offsetHeight || 0;

            const targetPosition =
              element.getBoundingClientRect().top +
              window.pageYOffset -
              (navHeight + 20);

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      },
      [isActive]
    );

    return (
      <motion.div
        variants={variants}
        className={`card group backdrop-blur-[8px] backdrop-saturate-[180%]
          border border-[var(--glass-border)] border-l-4 
          ${
            isActive
              ? "border-l-[6px] border-[var(--primary-color)]"
              : "border-l-[var(--primary-color)]"
          } 
          shadow-[0_4px_12px_rgba(31,38,135,0.1)] hover:shadow-[0_8px_24px_rgba(31,38,135,0.15)]
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer
          relative overflow-hidden z-10 my-6 rounded-[12px] p-2 ${
            !isActive ? "h-[90px]" : ""
          }`}
        onClick={toggleActive}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 opacity-0 
          transition-opacity duration-300 ease-in-out z-[-1] ${
            !isActive
              ? "group-hover:opacity-100 group-hover:animate-gradient-shift"
              : ""
          }`}
        ></div>

        <div className="card-body p-0 flex flex-col h-full">
          <h3
            className={`card-title text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-all duration-300 text-base mb-2
            ${!isActive && "group-hover:translate-x-1"}`}
          >
            {title}
          </h3>

          <div className={`flex-1 ${!isActive ? "overflow-hidden" : ""}`}>
            {contents.map((content, index) => (
              <InsightContent
                key={`content-${index}`}
                image={content.image}
                isActive={isActive}
              >
                {content.text}
              </InsightContent>
            ))}
          </div>

          <InsightTimestamp date={timestamp} />
        </div>
      </motion.div>
    );
  }
);

InsightItem.displayName = "InsightItem";

// Main component
const Insights: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  // Insights data (organized to improve maintainability)
  const insightsData = [
    {
      title: "Language Abstraction Levels: Performance vs Productivity",
      contents: [
        {
          text: (
            <>
              The distinction between low-level languages like C/C++ and
              higher-level alternatives presents a fundamental trade-off in
              software development. Low-level languages provide direct hardware
              access and memory management capabilities , enabling precise
              system control and optimal performance .
            </>
          ),
          image: { src: "photos/hardwares.png", alt: "hardware" },
        },
        {
          text: (
            <>
              Higher-level languages abstract implementation details through
              features like automatic memory management and intuitive syntax
              constructs . While this abstraction can impact performance, it
              significantly accelerates development cycles and reduces potential
              errors . The choice between abstraction levels typically depends
              on specific project requirements - system programming and
              performance-critical applications benefit from low-level control,
              while rapid development often favors higher-level abstractions.
            </>
          ),
          image: { src: "photos/languages.png", alt: "Programming Languages" },
        },
        {
          text: (
            <>
              Understanding both paradigms provides comprehensive insight into
              the software development spectrum. This knowledge enables informed
              decisions about language selection based on project requirements ,
              performance constraints , and development timelines . The ability
              to navigate different abstraction levels proves invaluable when
              optimizing critical systems or rapidly prototyping solutions .
            </>
          ),
          image: { src: "photos/programmer.png", alt: "Coder" },
        },
      ],
      timestamp: "Mon Mar 20 02:52:22 KST 2023",
    },
    {
      title: "Operating Systems: Linux and FreeBSD Deep Dive",
      contents: [
        {
          text: (
            <>
              Linux system programming reveals the sophisticated interface
              between hardware and software layers . The kernel's resource
              management capabilities provide a robust foundation for system
              operations, while system calls enable efficient hardware access.
              This architecture demonstrates the elegant abstraction of complex
              hardware interactions through a unified programming interface .
            </>
          ),
          image: { src: "photos/linux.png", alt: "linux" },
        },
        {
          text: (
            <>
              FreeBSD's architecture emphasizes stability and performance
              optimization , particularly evident in server and embedded system
              deployments. Its coherent design philosophy manifests in the ports
              system and package management infrastructure . The implementation
              of ZFS provides advanced data management capabilities , while the
              kernel architecture facilitates efficient system resource
              utilization .
            </>
          ),
          image: { src: "photos/FreeBSD.png", alt: "FreeBSD" },
        },
        {
          text: (
            <>
              Vim serves as an efficient interface for system-level development
              , offering precise text manipulation capabilities and extensive
              customization options . Its modal editing paradigm enables rapid
              code navigation and modification , particularly valuable in system
              programming contexts where efficiency is paramount.
            </>
          ),
          image: { src: "photos/vim.png", alt: "Vim Editor" },
        },
        {
          text: (
            <>
              The Command Line Interface provides direct system interaction
              capabilities , enabling efficient resource management and process
              control . Its scripting capabilities facilitate task automation
              and system administration . Advanced text processing tools enhance
              data manipulation capabilities , while the immediate feedback loop
              accelerates the development cycle.
            </>
          ),
          image: { src: "photos/Terminalicon2.png", alt: "Terminal" },
        },
        {
          text: (
            <>
              The open-source nature of these systems enables comprehensive
              analysis and modification of system components. This transparency
              facilitates deep understanding of system architecture and enables
              customization for specific use cases. The interaction between
              software abstractions and hardware implementations demonstrates
              the sophisticated design principles underlying modern operating
              systems.
            </>
          ),
          image: { src: "photos/open-source.png", alt: "Ubuntu" },
        },
      ],
      timestamp: "Wed Aug 23 23:08:31 KST 2023",
    },
    {
      title: "Network Security: From Infrastructure to Implementation",
      contents: [
        {
          text: (
            <>
              Linux's network infrastructure provides comprehensive control over
              network interfaces , connections , and security protocols . The
              platform's extensive toolkit facilitates network management
              through sophisticated utilities including ifconfig , iptables ,
              and Wireshark . These tools enable precise monitoring , analysis ,
              and security implementation across network layers.
            </>
          ),
          image: { src: "photos/network.png", alt: "Linux Networking" },
        },
        {
          text: (
            <>
              Kali Linux's security framework incorporates advanced network
              analysis tools . Netdiscover facilitates network topology mapping
              and device enumeration , while nmap enables comprehensive port
              scanning and service detection . These capabilities form an
              essential foundation for security assessment and vulnerability
              analysis in network environments.
            </>
          ),
          image: { src: "photos/kali.png", alt: "Kali Linux Networking Tools" },
        },
        {
          text: (
            <>
              The iptables framework provides granular control over network
              traffic through its robust packet filtering mechanism . This
              system enables precise implementation of security policies through
              custom rule sets , facilitating comprehensive network access
              control and traffic management at the kernel level.
            </>
          ),
          image: { src: "photos/iptables.png", alt: "Iptables Firewall" },
        },
        {
          text: (
            <>
              Network security auditing tools like Bettercap enable
              sophisticated network analysis and vulnerability assessment . The
              platform's packet capture and analysis capabilities facilitate
              thorough security evaluations, emphasizing the critical importance
              of encryption protocols and secure communication channels in
              modern network architectures.
            </>
          ),
          image: { src: "photos/bettercap.png", alt: "Bettercap" },
        },
        {
          text: (
            <>
              SSH protocol implementation provides secure remote system
              administration capabilities. The transition to key-based
              authentication mechanisms enhances security through cryptographic
              verification , while maintaining operational efficiency . This
              approach exemplifies the balance between security requirements and
              administrative accessibility in network operations.
            </>
          ),
          image: { src: "photos/ssh.png", alt: "SSH Secure Shell" },
        },
      ],
      timestamp: "Fri Sep 15 16:43:00 KST 2023",
    },
    {
      title: "Modern Database Systems: SQL, NoSQL and Beyond",
      contents: [
        {
          text: (
            <>
              The architectural distinctions between SQL and NoSQL database
              systems present fundamental trade-offs in data management
              strategies. SQL databases implement rigid schemas , facilitating
              data integrity and maintaining transactional consistency . NoSQL
              systems prioritize horizontal scalability and schema flexibility ,
              particularly advantageous in high-volume environments and dynamic
              data structures .
            </>
          ),
          image: { src: "photos/sqlVSnosql.png", alt: "SQL vs NoSQL" },
        },
        {
          text: (
            <>
              OLTP systems emphasize transaction processing efficiency ,
              optimizing for high concurrency and minimal latency in operational
              contexts. Conversely, OLAP architectures prioritize analytical
              capabilities through columnar storage formats and complex query
              optimization . This fundamental distinction shapes both system
              design and implementation strategies across database ecosystems.
            </>
          ),
          image: { src: "photos/oltpVSolap.png", alt: "OLAP vs OLTP" },
        },
        {
          text: (
            <>
              Modern database paradigms increasingly embrace hybrid
              architectures that combine relational integrity with NoSQL
              flexibility . These systems leverage sophisticated indexing
              mechanisms and query optimization strategies to facilitate both
              transactional reliability and analytical performance within
              unified data platforms.
            </>
          ),
          image: { src: "photos/database.png", alt: "Database Paradigms" },
        },
      ],
      timestamp: "Wed Jan 03 05:39:34 KST 2024",
    },
    {
      title: "High Performance Computing: CPU-GPU Synergy",
      contents: [
        {
          text: (
            <>
              CPU architecture focuses on low-latency sequential processing with
              sophisticated branch prediction and out-of-order execution
              capabilities. In contrast, GPU design emphasizes high-throughput
              parallel computation through thousands of simpler cores and
              specialized memory hierarchies , enabling massive data processing.
            </>
          ),
          image: {
            src: "photos/Cpu_Gpu_arch.png",
            alt: "CPU and GPU Architecture Comparison",
          },
        },
        {
          text: (
            <>
              CUDA framework provides a sophisticated parallel programming model
              that exposes GPU capabilities through abstract compute kernels .
              This architecture facilitates efficient data-parallel operations
              across domains like scientific computing , machine learning , and
              high-performance simulation through its optimized memory
              management.
            </>
          ),
          image: { src: "photos/CUDA.png", alt: "GPU Parallel Computing" },
        },
        {
          text: (
            <>
              The CPU architecture maintains primary control through its
              sophisticated instruction pipeline and branch prediction
              capabilities . Its design optimizes sequential processing and
              complex decision-making tasks , while providing efficient
              interrupt handling and system resource management .
            </>
          ),
          image: { src: "photos/CGC.png", alt: "CPU and GPU Collaboration" },
        },
        {
          text: (
            <>
              Optimal heterogeneous computing requires understanding of both
              architectures' performance characteristics . This knowledge
              enables effective workload distribution between CPU and GPU,
              maximizing system efficiency through parallel execution of
              suitable tasks while maintaining sequential processing for
              control-intensive operations.
            </>
          ),
          image: {
            src: "photos/performance.png",
            alt: "Optimizing CPU and GPU Performance",
          },
        },
      ],
      timestamp: "Wed Oct 16 19:58:26 CST 2024",
    },
    {
      title: "Web Servers: Tomcat and Nginx Ecosystem",
      contents: [
        {
          text: (
            <>
              Tomcat's architecture specializes in Java Servlet container
              implementation , providing robust support for dynamic content
              generation through Java Servlet and JSP processing . This
              architecture enables efficient server-side application logic
              execution within the Java ecosystem.
            </>
          ),
          image: { src: "photos/tomcat.png", alt: "Overview of Tomcat" },
        },
        {
          text: (
            <>
              Nginx's event-driven architecture delivers exceptional static
              content serving capability and reverse proxy functionality . Its
              asynchronous processing model enables high concurrency handling
              with minimal resource requirements , making it ideal for
              high-traffic environments and microservice architectures.
            </>
          ),
          image: { src: "photos/nginx.png", alt: "Overview of Nginx" },
        },
        {
          text: (
            <>
              The Tomcat-Nginx integration represents an optimal architecture
              for enterprise applications . Nginx provides efficient request
              routing , SSL termination , and static content caching , while
              Tomcat manages dynamic content generation and application logic
              execution . This separation of concerns enhances both performance
              and maintainability .
            </>
          ),
          image: {
            src: "photos/web-server.png",
            alt: "Integration of Tomcat and Nginx",
          },
        },
      ],
      timestamp: "Fri Oct 25 00:26:33 KST 2024",
    },
    {
      title: "Hardware Spotlight: HHKB Professional",
      contents: [
        {
          text: (
            <>
              Received the HHKB Professional HYBRID Type-S as a birthday gift,
              marking a significant upgrade in my typing experience. The
              keyboard's Topre switches provide exceptional tactile feedback and
              reduced actuation force , offering substantial relief from the
              finger fatigue and hand strain commonly associated with
              traditional mechanical keyboards. This ergonomic improvement is
              particularly valuable for intensive coding sessions and extended
              typing periods .
            </>
          ),
          image: { src: "photos/hhkb_logo.png", alt: "HHKB Logo" },
        },
        {
          text: (
            <>
              The electrostatic capacitive switches demonstrate their
              superiority through smoother keystrokes and consistent actuation
              across the entire keyboard. The minimalist 60% layout emphasizes
              efficiency by reducing hand movement through thoughtful key
              placement and function layer design . This compact form factor
              also improves desk ergonomics by allowing for more natural mouse
              positioning.
            </>
          ),
          image: { src: "photos/hhkb.png", alt: "HHKB Keyboard" },
        },
      ],
      timestamp: "Wed Nov 6 19:03:21 KST 2024",
    },
    {
      title: "MacOS: The Perfect Blend of GUI and UNIX Power",
      contents: [
        {
          text: (
            <>
              macOS's architecture represents a sophisticated blend of
              user-friendly interface design and robust UNIX underpinnings .
              This combination provides an ideal development environment with
              access to both powerful command-line tools and polished
              productivity applications . The system's Darwin foundation ensures
              compatibility with UNIX utilities while maintaining a distinctive
              visual identity .
            </>
          ),
          image: { src: "photos/Macos.png", alt: "macOS" },
        },
        {
          text: (
            <>
              The hardware integration in Apple's ecosystem provides exceptional
              stability and performance optimization . When paired with quality
              peripherals like the HHKB keyboard, the system delivers a superior
              development experience through reliable hardware interaction and
              predictable performance characteristics . This consistency is
              particularly valuable for professional software development and
              system administration tasks .
            </>
          ),
          image: { src: "photos/mac_with_hhkb.jpg", alt: "MacBook with HHKB" },
        },
        {
          text: (
            <>
              macOS's development tools provide a comprehensive ecosystem for
              software engineering . The native terminal application offers
              seamless integration with development workflows, while scripting
              capabilities enhance automation options . Combined with its
              intuitive interface and robust security model , macOS represents
              an ideal platform for professional software development.
            </>
          ),
          image: { src: null, alt: null },
        },
      ],
      timestamp: "Fri Jan 10 20:15:00 CST 2025",
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-6 mt-[30px]"
      id="insights"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left text-[var(--heading-color)]"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Technical Insights
      </motion.h2>

      {insightsData.map((insight, index) => (
        <InsightItem
          key={`insight-${index}`}
          title={insight.title}
          contents={insight.contents.map((content) => ({
            text: content.text,
            image: content.image || { src: null, alt: null },
          }))}
          timestamp={insight.timestamp}
          variants={itemVariants}
        />
      ))}
    </motion.div>
  );
};

// Add custom keyframe animation for gradient shift
const style = document.createElement("style");
style.textContent = `
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient-shift {
    animation: gradient-shift 3s ease-in-out infinite;
    background-size: 200% 200%;
  }
`;
document.head.appendChild(style);

export default Insights;
