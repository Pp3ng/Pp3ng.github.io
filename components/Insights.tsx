import React, { useEffect } from "react";

const Insights: React.FC = () => {
  useEffect(() => {
    // Initialize insights toggle functionality
    const insightItems = document.querySelectorAll("#insights .insight-item");

    // Custom smooth scroll function optimized for insights expansion
    const smoothScrollToElement = (
      element: HTMLElement,
      offset: number = 0
    ): void => {
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;

      // Specific duration for insight content expansion scrolling
      const duration = 600; // Slightly faster than navigation for better UX
      let start: number | null = null;

      // Animation step function
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        // Ease-out-quad easing - smoother for content expansion
        const easeOutQuad = (t: number) => t * (2 - t);

        window.scrollTo({
          top: startPosition + distance * easeOutQuad(percentage),
          behavior: "auto",
        });

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    insightItems.forEach((item) => {
      item.addEventListener("click", (e: Event) => {
        // Prevent toggle when clicking on links
        const target = e.target as HTMLElement;
        if (target.tagName === "A" || target.closest("a")) {
          return;
        }

        // Toggle active class first
        item.classList.toggle("active");

        // Find all content elements in this item
        const contents = item.querySelectorAll(".insight-content");

        // Implement slide toggle behavior similar to jQuery's slideToggle
        contents.forEach((content) => {
          // Cast content to HTMLElement to access style properties
          const contentEl = content as HTMLElement;

          // Check if element is currently visible
          const isVisible =
            window.getComputedStyle(contentEl).display !== "none";

          if (isVisible) {
            // If visible, slide up (hide)
            const height = contentEl.offsetHeight;
            contentEl.style.height = height + "px";
            contentEl.style.overflow = "hidden";
            contentEl.style.transition = "height 300ms ease-out";

            // Force reflow to ensure transition works
            contentEl.offsetHeight;

            contentEl.style.height = "0px";
            contentEl.style.paddingTop = "0px";
            contentEl.style.paddingBottom = "0px";
            contentEl.style.marginTop = "0px";
            contentEl.style.marginBottom = "0px";

            setTimeout(() => {
              contentEl.style.display = "none";
              contentEl.style.height = "";
              contentEl.style.paddingTop = "";
              contentEl.style.paddingBottom = "";
              contentEl.style.marginTop = "";
              contentEl.style.marginBottom = "";
              contentEl.style.overflow = "";
              contentEl.style.transition = "";
            }, 300);
          } else {
            // If hidden, slide down (show)
            contentEl.style.display = "flex"; // Use flex instead of block to match CSS
            contentEl.style.height = "0px";
            contentEl.style.overflow = "hidden";
            contentEl.style.transition = "height 300ms ease-in";
            contentEl.style.paddingTop = "0px";
            contentEl.style.paddingBottom = "0px";
            contentEl.style.marginTop = "0px";
            contentEl.style.marginBottom = "0px";

            // Force reflow
            contentEl.offsetHeight;

            // Get the full height and restore it
            const height = contentEl.scrollHeight;
            contentEl.style.height = height + "px";
            contentEl.style.paddingTop = "";
            contentEl.style.paddingBottom = "";
            contentEl.style.marginTop = "";
            contentEl.style.marginBottom = "";

            setTimeout(() => {
              contentEl.style.height = "";
              contentEl.style.overflow = "";
              contentEl.style.transition = "";

              // Only scroll after animation is complete and content is fully visible
              if (!isVisible) {
                setTimeout(() => {
                  const navbarElement = document.querySelector(
                    ".navbar"
                  ) as HTMLElement;
                  const navHeight = navbarElement?.offsetHeight || 0;

                  // Use the custom smooth scroll function optimized for content expansion
                  smoothScrollToElement(item as HTMLElement, navHeight + 20);
                }, 50);
              }
            }, 300);
          }
        });
      });

      // Hide content initially
      const contents = item.querySelectorAll(".insight-content");
      contents.forEach((content) => {
        (content as HTMLElement).style.display = "none";
      });
    });
  }, []);

  // Custom styling to match the original HTML layout
  const insightStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "18px",
    gap: "24px",
    position: "relative",
    paddingLeft: "18px",
  };

  const paragraphStyle: React.CSSProperties = {
    margin: "4.5px 0 0",
    flex: "1",
  };

  const imageStyle: React.CSSProperties = {
    marginLeft: "27px",
    maxWidth: "270px",
    height: "auto",
    borderRadius: "13.5px",
    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <div className="container" id="insights" data-aos="fade-up">
      <h2>Technical Insights</h2>

      <div className="insight-item">
        <h3>Language Abstraction Levels: Performance vs Productivity</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The distinction between
            <mark>low-level languages</mark>
            like C/C++ and
            <mark>higher-level alternatives</mark>
            presents a fundamental trade-off in software development. Low-level
            languages provide
            <strong>direct hardware access</strong> and
            <strong>memory management capabilities</strong>, enabling
            <strong>precise system control</strong> and
            <strong>optimal performance</strong>.
          </p>
          <img
            src="photos/hardwares.png"
            alt="hardware"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Higher-level languages
            <strong>abstract implementation details</strong> through features
            like
            <mark>automatic memory management</mark>
            and
            <mark>intuitive syntax constructs</mark>. While this abstraction can
            impact performance, it significantly
            <strong>accelerates development cycles</strong> and
            <strong>reduces potential errors</strong>. The choice between
            abstraction levels typically depends on
            <strong>specific project requirements</strong> -
            <mark>system programming</mark>
            and
            <mark>performance-critical applications</mark>
            benefit from low-level control, while
            <strong>rapid development</strong> often favors higher-level
            abstractions.
          </p>
          <img
            src="photos/languages.png"
            alt="Programming Languages"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Understanding both paradigms provides
            <strong>comprehensive insight</strong> into the software development
            spectrum. This knowledge enables
            <strong>informed decisions</strong> about language selection based
            on
            <mark>project requirements</mark>,
            <mark>performance constraints</mark>, and
            <mark>development timelines</mark>. The ability to navigate
            different abstraction levels proves invaluable when{" "}
            <strong>optimizing critical systems</strong> or
            <strong>rapidly prototyping solutions</strong>.
          </p>
          <img
            src="photos/programmer.png"
            alt="Coder"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Mon Mar 20 02:52:22 KST 2023</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>Operating Systems: Linux and FreeBSD Deep Dive</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>Linux system programming</mark>
            reveals the sophisticated interface between
            <mark>hardware</mark>
            and
            <mark>software layers</mark>. The kernel's
            <strong>resource management capabilities</strong> provide a robust
            foundation for system operations, while
            <strong>system calls</strong> enable efficient hardware access. This
            architecture demonstrates the
            <strong>elegant abstraction</strong> of complex hardware
            interactions through a<mark>unified programming interface</mark>.
          </p>
          <img
            src="photos/linux.png"
            alt="linux"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>FreeBSD's architecture</mark>
            emphasizes <strong>stability</strong> and
            <strong>performance optimization</strong>, particularly evident in
            <mark>server</mark>
            and
            <mark>embedded system</mark>
            deployments. Its coherent design philosophy manifests in the
            <strong>ports system</strong> and
            <strong>package management infrastructure</strong>. The
            implementation of
            <mark>ZFS</mark>
            provides <strong>advanced data management capabilities</strong>,
            while the kernel architecture facilitates
            <strong>efficient system resource utilization</strong>.
          </p>
          <img
            src="photos/FreeBSD.png"
            alt="FreeBSD"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>Vim</mark>
            serves as an efficient interface for
            <strong>system-level development</strong>, offering
            <strong>precise text manipulation capabilities</strong> and
            <strong>extensive customization options</strong>. Its
            <mark>modal editing paradigm</mark>
            enables <strong>rapid code navigation</strong> and
            <strong>modification</strong>, particularly valuable in system
            programming contexts where efficiency is paramount.
          </p>
          <img
            src="photos/vim.png"
            alt="Vim Editor"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The
            <mark>Command Line Interface</mark>
            provides <strong>direct system interaction capabilities</strong>,
            enabling <strong>efficient resource management</strong> and
            <strong>process control</strong>. Its
            <mark>scripting capabilities</mark>
            facilitate <strong>task automation</strong> and
            <strong>system administration</strong>. Advanced text processing
            tools enhance <strong>data manipulation capabilities</strong>, while
            the immediate feedback loop accelerates the development cycle.
          </p>
          <img
            src="photos/Terminalicon2.png"
            alt="Terminal"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The
            <mark>open-source nature</mark>
            of these systems enables <strong>comprehensive analysis</strong> and
            <strong>modification</strong> of system components. This
            transparency facilitates <strong>deep understanding</strong> of
            system architecture and enables <strong>customization</strong> for
            specific use cases. The interaction between
            <mark>software abstractions</mark>
            and
            <mark>hardware implementations</mark>
            demonstrates the sophisticated design principles underlying modern
            operating systems.
          </p>
          <img
            src="photos/open-source.png"
            alt="Ubuntu"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Wed Aug 23 23:08:31 KST 2023</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>Network Security: From Infrastructure to Implementation</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>Linux's network infrastructure</mark>
            provides comprehensive control over
            <mark>network interfaces</mark>,<mark>connections</mark>, and
            <mark>security protocols</mark>. The platform's{" "}
            <strong>extensive toolkit</strong> facilitates network management
            through
            <strong>sophisticated utilities</strong> including
            <mark>ifconfig</mark>,<mark>iptables</mark>, and
            <mark>Wireshark</mark>. These tools enable{" "}
            <strong>precise monitoring</strong>,<strong>analysis</strong>, and
            <strong>security implementation</strong> across network layers.
          </p>
          <img
            src="photos/network.png"
            alt="Linux Networking"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>Kali Linux's security framework</mark>
            incorporates <strong>advanced network analysis tools</strong>.
            <mark>Netdiscover</mark>
            facilitates <strong>network topology mapping</strong> and
            <strong>device enumeration</strong>, while
            <mark>nmap</mark>
            enables <strong>comprehensive port scanning</strong> and
            <strong>service detection</strong>. These capabilities form an
            essential foundation for <strong>security assessment</strong> and
            <strong>vulnerability analysis</strong> in network environments.
          </p>
          <img
            src="photos/kali.png"
            alt="Kali Linux Networking Tools"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The
            <mark>iptables framework</mark>
            provides <strong>granular control</strong> over network traffic
            through its <strong>robust packet filtering mechanism</strong>. This
            system enables <strong>precise implementation</strong> of security
            policies through
            <mark>custom rule sets</mark>, facilitating
            <strong>comprehensive network access control</strong> and
            <strong>traffic management</strong> at the kernel level.
          </p>
          <img
            src="photos/iptables.png"
            alt="Iptables Firewall"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Network security auditing tools like
            <mark>Bettercap</mark>
            enable <strong>sophisticated network analysis</strong> and
            <strong>vulnerability assessment</strong>. The platform's
            <strong>packet capture</strong> and
            <strong>analysis capabilities</strong> facilitate thorough security
            evaluations, emphasizing the critical importance of
            <mark>encryption protocols</mark>
            and
            <mark>secure communication channels</mark>
            in modern network architectures.
          </p>
          <img
            src="photos/bettercap.png"
            alt="Bettercap"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>SSH protocol</mark>
            implementation provides
            <strong>secure remote system administration</strong> capabilities.
            The transition to
            <mark>key-based authentication</mark>
            mechanisms enhances security through
            <strong>cryptographic verification</strong>, while maintaining
            <strong>operational efficiency</strong>. This approach exemplifies
            the balance between <strong>security requirements</strong> and
            <strong>administrative functionality</strong> in network operations.
          </p>
          <img
            src="photos/ssh.png"
            alt="SSH Secure Shell"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Fri Sep 15 16:43:00 KST 2023</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>Modern Database Systems: SQL, NoSQL and Beyond</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The architectural distinctions between
            <mark>SQL</mark>
            and
            <mark>NoSQL</mark>
            database systems present fundamental trade-offs in data management
            strategies. SQL databases implement
            <strong>ACID properties</strong>, facilitating
            <strong>complex query operations</strong> and maintaining
            <strong>strict data integrity</strong>. NoSQL systems prioritize
            <mark>scalability</mark>
            and
            <mark>flexibility</mark>, particularly advantageous in
            <strong>distributed computing environments</strong> and
            <strong>unstructured data management</strong>.
          </p>
          <img
            src="photos/sqlVSnosql.png"
            alt="SQL vs NoSQL"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>OLAP</mark>
            and
            <mark>OLTP</mark>
            systems serve distinct operational requirements in database
            architecture. OLTP systems
            <strong>optimize transaction processing</strong> for operational
            databases, emphasizing <strong>rapid query execution</strong> and
            <strong>concurrent access patterns</strong>. OLAP implementations
            focus on <strong>analytical processing</strong>, facilitating
            <strong>complex data analysis</strong> and
            <strong>decision support</strong> through optimized query
            structures.
          </p>
          <img
            src="photos/oltpVSolap.png"
            alt="OLAP vs OLTP"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Modern database architectures often implement
            <mark>hybrid solutions</mark>, leveraging the{" "}
            <strong>respective advantages</strong> of different database
            paradigms. This approach enables
            <strong>optimal performance</strong> across varied use cases,
            combining
            <mark>transactional efficiency</mark>
            with <strong>analytical capabilities</strong> through carefully
            designed <strong>system integration</strong>.
          </p>
          <img
            src="photos/database.png"
            alt="Database Paradigms"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Wed Jan 03 05:39:34 KST 2024</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>High Performance Computing: CPU-GPU Synergy</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>CUDA implementation</mark>
            enables efficient parallel computation through
            <mark>GPU architecture utilization</mark>. The fundamental
            distinction between
            <mark>CPU</mark>
            and
            <mark>GPU</mark>
            architectures manifests in their respective
            <strong>optimization strategies</strong> - GPUs excel in
            <strong>parallel data processing</strong> through multiple
            processing units, while CPUs optimize
            <strong>sequential execution</strong> through sophisticated control
            units.
          </p>
          <img
            src="photos/Cpu_Gpu_arch.png"
            alt="CPU and GPU Architecture Comparison"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            GPU
            <mark>parallel processing capabilities</mark>
            particularly benefit
            <strong>computationally intensive applications</strong> in
            <strong>machine learning</strong>,
            <strong>graphics processing</strong>, and
            <strong>scientific computing</strong>. CUDA framework implementation
            facilitates <strong>efficient workload distribution</strong> across
            GPU threads, while requiring careful optimization of
            <mark>memory access patterns</mark>
            and
            <mark>kernel execution parameters</mark>.
          </p>
          <img
            src="photos/CUDA.png"
            alt="GPU Parallel Computing"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The
            <mark>CPU architecture</mark>
            maintains primary control through its
            <strong>sophisticated instruction pipeline</strong> and
            <strong>branch prediction capabilities</strong>. Its design
            optimizes
            <mark>sequential processing</mark>
            and <strong>complex decision-making tasks</strong>, while providing
            <strong>efficient interrupt handling</strong> and
            <strong>system resource management</strong>.
          </p>
          <img
            src="photos/CGC.png"
            alt="CPU and GPU Collaboration"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Optimal
            <mark>heterogeneous computing</mark>
            requires understanding of both architectures'
            <strong>performance characteristics</strong>. This knowledge enables
            <strong>effective workload distribution</strong> between CPU and
            GPU, maximizing
            <mark>system efficiency</mark>
            through <strong>parallel execution</strong> of suitable tasks while
            maintaining <strong>sequential processing</strong> for
            control-intensive operations.
          </p>
          <img
            src="photos/performance.png"
            alt="Optimizing CPU and GPU Performance"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Wed Oct 16 19:58:26 CST 2024</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>Web Servers: Tomcat and Nginx Ecosystem</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>Tomcat's architecture</mark>
            specializes in
            <strong>Java Servlet container implementation</strong>, providing
            robust support for
            <strong>dynamic content generation</strong> through
            <mark>Java Servlet</mark>
            and
            <mark>JSP processing</mark>. This architecture enables
            <strong>efficient server-side application logic execution</strong>
            within the Java ecosystem.
          </p>
          <img
            src="photos/tomcat.png"
            alt="Overview of Tomcat"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            <mark>Nginx's event-driven architecture</mark>
            optimizes <strong>static content delivery</strong> and
            <strong>connection management</strong>. Its implementation
            efficiently handles
            <strong>high-concurrency scenarios</strong> while minimizing
            resource utilization, particularly effective in
            <mark>reverse proxy configurations</mark>
            and
            <mark>content delivery optimization</mark>.
          </p>
          <img
            src="photos/nginx.png"
            alt="Overview of Nginx"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Integration of both server architectures enables
            <strong>optimal resource utilization</strong> through
            <mark>specialized task distribution</mark>. This approach maximizes{" "}
            <strong>system performance</strong> by leveraging each server's
            <strong>specific optimization characteristics</strong>.
          </p>
          <img
            src="photos/web-server.png"
            alt="Integration of Tomcat and Nginx"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Fri Oct 25 00:26:33 KST 2024</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>Hardware Spotlight: HHKB Professional</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Received the
            <mark>HHKB Professional HYBRID Type-S</mark>
            as a birthday gift, marking a significant upgrade in my typing
            experience. The keyboard's
            <mark>Topre switches</mark>
            provide <strong>exceptional tactile feedback</strong> and
            <strong>reduced actuation force</strong>, offering substantial
            relief from the finger fatigue and hand strain commonly associated
            with traditional mechanical keyboards. This ergonomic improvement is
            particularly valuable for
            <strong>intensive coding sessions</strong> and
            <strong>extended typing periods</strong>.
          </p>
          <img
            src="photos/hhkb_logo.png"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The
            <mark>electrostatic capacitive switches</mark>
            demonstrate their superiority through
            <strong>smoother keystrokes</strong> and
            <strong>reduced typing fatigue</strong>. For
            <mark>professional developers</mark>
            and <strong>content creators</strong> who engage in extensive daily
            typing, the HHKB's thoughtful design and premium switch technology
            represent a significant advancement in both
            <strong>comfort</strong> and <strong>typing efficiency</strong>.
          </p>
          <img
            src="photos/hhkb.png"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-time">
          <span className="timestamp">Wed Nov 6 19:03:21 KST 2024</span>
        </div>
      </div>

      <div className="insight-item">
        <h3>MacOS: The Perfect Blend of GUI and UNIX Power</h3>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            Recently acquired a <mark>MacBook Pro</mark>, marking my transition
            from
            <mark>Windows Subsystem for Linux (WSL)</mark> to a fully integrated
            <mark>macOS environment</mark>. This shift represents a significant
            upgrade in my development workflow. MacOS brilliantly combines an
            <strong>aesthetically pleasing GUI</strong> with a
            <strong>powerful command-line interface</strong>, offering the best
            of both worlds without compromises. The system's{" "}
            <mark>UNIX certification</mark> ensures
            <strong>robust command-line capabilities</strong> while maintaining
            a<strong>polished user experience</strong> at the surface level.
          </p>
          <img
            src="photos/Macos.png"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            The <mark>native UNIX foundation</mark> of macOS eliminates the
            <strong> compatibility layers</strong> and{" "}
            <strong>performance constraints</strong>
            commonly encountered with virtualized Linux environments like WSL.
            This direct implementation provides <strong>
              seamless access
            </strong>{" "}
            to essential development tools and utilities, significantly
            enhancing <strong>system responsiveness</strong> and
            <strong>development efficiency</strong>. The integration with my
            <mark>HHKB keyboard</mark> creates an{" "}
            <strong>optimal coding experience</strong>, with macOS's keyboard
            mapping perfectly complementing the HHKB's unique layout.
          </p>
          <img
            src="photos/mac_with_hhkb.jpg"
            className="insight-image"
            style={imageStyle}
          />
        </div>
        <div className="insight-content" style={insightStyle}>
          <p style={paragraphStyle}>
            This new MacBook Pro will serve as my primary platform for
            <strong>software development</strong> and{" "}
            <strong>creative projects</strong>. The{" "}
            <mark>unified ecosystem</mark> between hardware and software
            provides a<strong>consistent development environment</strong> that
            significantly
            <strong>reduces configuration overhead</strong> and enables me to
            focus on
            <strong>creating innovative solutions</strong>. The combination of
            <mark>powerful hardware</mark>, <mark>Unix underpinnings</mark>, and
            <mark>refined user interface</mark> makes macOS an
            <strong>ideal platform</strong> for professional software
            development.
          </p>
        </div>
        <div className="insight-time">
          <span className="timestamp">Fri Jan 10 20:15:00 CST 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Insights;
