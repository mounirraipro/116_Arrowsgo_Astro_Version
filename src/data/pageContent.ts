import { siteConfig } from "@/data/siteConfig";

export type ContentSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ContentPage = {
  title: string;
  description: string;
  seoTitle?: string;
  keywords?: string[];
  schemaType?: "AboutPage" | "Article" | "Blog" | "ContactPage" | "FAQPage" | "HowTo" | "PrivacyPolicy" | "TermsOfService" | "WebPage";
  eyebrow?: string;
  updated?: string;
  intro: string;
  sections: ContentSection[];
};

const gameName = siteConfig.name;
const contact = siteConfig.contactEmail;
const updated = siteConfig.legalLastUpdated;
const playableTitle = "Remove All Arrows";

export const pageContent = {
  about: {
    title: "About Arrows Go",
    seoTitle: `About ${gameName} - Play ${playableTitle} Online`,
    description: `Learn about ${gameName}, the browser puzzle site for playing ${playableTitle}, an arrow logic game about launch order and collision-free clears.`,
    keywords: ["about Arrows Go", "Remove All Arrows online", "arrow puzzle game"],
    schemaType: "AboutPage",
    intro: "A focused browser puzzle site built around one readable idea: launch arrows in the right order and clear the board.",
    sections: [
      {
        heading: "What Arrows Go Is",
        body: `${gameName} is a free browser puzzle site featuring ${playableTitle}. The game asks players to click or tap arrows so each one flies in its pointed direction, exits the board, and avoids every other arrow.`,
      },
      {
        heading: "Why It Works",
        body: "The rules are simple enough to learn quickly, but the board can become tricky when arrows block each other. A strong clear comes from reading the whole grid before choosing the next launch.",
      },
      {
        heading: "What Makes It Different",
        body: `${playableTitle} turns a small directional rule into a sequence puzzle. Instead of reacting to speed, players solve by checking paths, removing blockers, and planning a clean order.`,
      },
      {
        heading: "Key Features",
        items: [
          "Instant play through a browser iframe at /game/index.html.",
          "Mouse and touch-friendly play for desktop, tablet, and mobile browsers.",
          "Short puzzle levels that reward path reading and order planning.",
          "Collision rules that make every launch meaningful.",
          "Free access with no account or app install required.",
        ],
      },
      {
        heading: "Contact the Arrows Go Team",
        body: `Send feedback, bug reports, accessibility notes, or partnership messages to ${contact}.`,
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    seoTitle: `Accessibility Statement | ${gameName}`,
    description: `${gameName} is committed to making the website clear, navigable, and practical for as many puzzle players as possible.`,
    keywords: ["Arrows Go accessibility", "accessible browser puzzle", "web accessibility statement"],
    updated,
    intro: `This statement explains the accessibility choices and known limits for the ${gameName} website and embedded ${playableTitle} game.`,
    sections: [
      {
        heading: "Our Commitment",
        body: `${gameName} aims to provide a clean website structure with semantic HTML, readable copy, responsive layouts, and predictable navigation.`,
      },
      {
        heading: "Website Measures",
        items: [
          "Keyboard-accessible website navigation and links.",
          "Clear headings and landmarks for screen readers.",
          "High-contrast text on the main site interface.",
          "Responsive pages that support mobile screens and browser zoom.",
          "No account wall before playing or reading support content.",
        ],
      },
      {
        heading: "Game Accessibility",
        items: [
          `The embedded ${playableTitle} game is visual and path-based, which can be challenging for some players.`,
          "The surrounding website provides text guides, FAQ answers, and support information outside the iframe.",
          "Fullscreen and share controls are available on the play page where supported by the browser.",
        ],
      },
      {
        heading: "Known Limitations",
        items: [
          "The gameplay depends on visual board reading and pointer or touch input.",
          "The embedded third-party game frame may not expose every internal control to assistive technologies.",
          "Advertisements or external iframe content may follow separate accessibility practices.",
        ],
      },
      {
        heading: "Feedback",
        body: `If you encounter an accessibility barrier, contact us at ${contact}. We review accessibility feedback and use it to improve future updates.`,
      },
    ],
  },
  blog: {
    title: "Blog",
    seoTitle: `Arrows Go Blog - ${playableTitle} Guides and Arrow Puzzle Strategy`,
    description: `Read ${gameName} guides about ${playableTitle}, launch-order strategy, arrow puzzle logic, mobile browser play, and safe quick-session puzzle habits.`,
    keywords: ["Arrows Go blog", "Remove All Arrows guide", "arrow puzzle tips"],
    schemaType: "Blog",
    eyebrow: "Guides",
    intro: "Long-form puzzle guides for players who want cleaner launch order, better board reading, and useful browser game context.",
    sections: [
      {
        heading: "What We Cover",
        items: [
          `Beginner guides for playing ${playableTitle} online.`,
          "Launch order, edge clearing, and collision-avoidance strategy.",
          "Related browser puzzle games for quick breaks.",
          "Parent and safety notes for family-friendly play.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    seoTitle: `Contact ${gameName} Support`,
    description: `Contact the ${gameName} team for support, feedback, accessibility concerns, privacy questions, or partnership messages.`,
    keywords: ["contact Arrows Go", "Arrows Go support", "browser puzzle contact"],
    schemaType: "ContactPage",
    intro: "Have a question, suggestion, bug report, or policy concern? Send it here.",
    sections: [
      {
        heading: "Send a Message",
        body: "We read player feedback and use it to improve the website, guides, and support content around the embedded puzzle game.",
      },
      {
        heading: "Contact Details",
        items: [`Email: ${contact}`, "Response time: usually within 48 hours.", "Availability: players worldwide."],
      },
      {
        heading: "What to Include",
        items: [
          "The page you were using.",
          "Your browser, device, and operating system.",
          "A short description of what happened.",
          "Screenshots or reproduction steps if you are reporting a loading issue.",
        ],
      },
      {
        heading: "Support Scope",
        body: "We can help with website pages, loading problems, policy questions, accessibility feedback, and reports about confusing copy or broken links.",
      },
      {
        heading: "Partnership Messages",
        body: "For advertising, publishing, or partnership questions, include your organization, website, proposal summary, and the page or placement you are asking about.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    seoTitle: `${gameName} Cookie Policy`,
    description: `Learn about cookies and similar technologies that may be used when visiting ${gameName}.`,
    keywords: ["Arrows Go cookies", "cookie policy", "browser puzzle privacy"],
    updated,
    intro: "This Cookie Policy explains what cookies are, how they may be used, and how you can manage them.",
    sections: [
      {
        heading: "What Are Cookies?",
        body: "Cookies are small files stored by your browser. They can help a site work, remember preferences, measure performance, or support advertising.",
      },
      {
        heading: "Essential Cookies",
        items: [
          "Basic session and security functions.",
          "Website navigation and page delivery.",
          "Preferences needed for a stable browsing experience.",
        ],
      },
      {
        heading: "Advertising and Third Parties",
        body: "Advertising partners or embedded game providers may use cookies or similar technologies according to their own policies.",
      },
      {
        heading: "Local Storage",
        body: "The website or embedded game may use browser storage for settings, gameplay state, or technical preferences without requiring an account.",
      },
      {
        heading: "Managing Cookies",
        body: "Most browsers let you block, delete, or manage cookies in browser settings. Blocking some storage may affect game loading or saved preferences.",
      },
      {
        heading: "Cookie Questions",
        body: `If you have questions about cookies on ${gameName}, contact ${contact}.`,
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    seoTitle: `${gameName} Disclaimer`,
    description: `Read the ${gameName} disclaimer about website information, embedded game availability, external links, and entertainment use.`,
    keywords: ["Arrows Go disclaimer", "website disclaimer", "browser puzzle terms"],
    updated,
    intro: `${gameName} is provided for general entertainment and informational purposes.`,
    sections: [
      {
        heading: "Game Availability",
        body: `${playableTitle} is offered as a browser entertainment experience. We cannot guarantee uninterrupted availability, compatibility with every device, or error-free embedded content.`,
      },
      {
        heading: "No Professional Advice",
        body: "Articles about focus, puzzle habits, screen time, or gaming routines are informational only and should not be treated as medical, educational, or psychological advice.",
      },
      {
        heading: "External Links",
        body: "The website may link to external sites or load third-party iframe content. We do not control external services and are not responsible for their policies or availability.",
      },
      {
        heading: "Advertising",
        body: `${gameName} may show ads to support free access. Advertisement placement does not represent endorsement by ${gameName}.`,
      },
      {
        heading: "Questions",
        body: `Questions about this disclaimer can be sent to ${contact}.`,
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    seoTitle: `${gameName} FAQ - ${playableTitle} Gameplay, Controls, and Support`,
    description: `Find answers about ${gameName} and ${playableTitle}, including gameplay, controls, mobile support, safety, and browser loading.`,
    keywords: ["Arrows Go FAQ", "Remove All Arrows questions", "arrow puzzle help"],
    schemaType: "FAQPage",
    intro: "Quick answers before you start clearing arrows.",
    sections: [
      {
        heading: "What is Arrows Go?",
        body: `${gameName} is a free browser puzzle site where you can play ${playableTitle} online.`,
      },
      {
        heading: "What is Remove All Arrows?",
        body: `${playableTitle} is an arrow logic puzzle where each clicked arrow flies in its pointed direction. The goal is to remove every arrow without causing a collision.`,
      },
      {
        heading: "Is Arrows Go free?",
        body: `Yes. You can play ${playableTitle} on ${gameName} with no download, no account, and no app install.`,
      },
      {
        heading: "How do you play Remove All Arrows?",
        body: "Look for an arrow with a clear straight path, launch it, then use the newly opened space to solve the next move. If an arrow hits another arrow, the level resets.",
      },
      {
        heading: "Does Arrows Go work on mobile?",
        body: "Yes. The embedded game supports browser play on desktop and mobile devices where the Playgama iframe is available.",
      },
      {
        heading: "Why is the game inside an iframe?",
        body: "The playable game is served from an embedded HTML5 game source. The Astro site loads it through /game/index.html so the main site keeps stable routes, SEO, and support pages.",
      },
      {
        heading: "What should I do if the game does not load?",
        body: "Refresh the page, check your connection, disable overly strict iframe blockers, or try another modern browser. If the issue continues, contact support with your device and browser.",
      },
    ],
  },
  "how-to-play": {
    title: "How To Play",
    seoTitle: `How to Play ${playableTitle} on ${gameName}`,
    description: `Learn how to play ${playableTitle}, including the goal, controls, launch order, collision rules, and simple ways to clear more boards.`,
    keywords: ["how to play Remove All Arrows", "Arrows Go guide", "arrow puzzle tutorial"],
    schemaType: "HowTo",
    intro: "Learn the basic loop: read the board, find a clear path, launch one arrow, and repeat until the board is empty.",
    sections: [
      {
        heading: "Open the Game",
        body: `Go to the Play page and wait for the iframe to load. ${playableTitle} runs in the browser, so there is no installer or account setup.`,
      },
      {
        heading: "Read the Board",
        body: "Before clicking, trace where each arrow will travel. Every arrow flies straight in the direction it points.",
      },
      {
        heading: "Launch a Clear Arrow",
        body: "Click or tap an arrow that has an open path to leave the board. Avoid launching an arrow if its path crosses another arrow.",
      },
      {
        heading: "Avoid Collisions",
        body: "A collision resets the puzzle. When two arrows block each other, remove a different arrow first or solve from the edge inward.",
      },
      {
        heading: "Use Restarts",
        body: "Fast restarts are part of the learning loop. After a mistake, identify which launch caused the collision and try a different order.",
      },
      {
        heading: "Quick Tips",
        items: [
          "Start with arrows near the border when they have open exits.",
          "Trace the full straight path before every launch.",
          "Do not click several arrows quickly unless you already know the sequence.",
          "Use fullscreen on larger screens for better board visibility.",
          "Pause if you keep repeating the same collision.",
        ],
      },
    ],
  },
  parents: {
    title: "Parents & Safety Guide",
    seoTitle: `Parents Guide to ${gameName}`,
    description: `${gameName} is a simple browser puzzle site. Read safety, privacy, and screen-time notes for parents and guardians.`,
    keywords: ["Arrows Go for kids", "safe browser puzzle", "parents guide puzzle game"],
    intro: `A practical overview for families using ${gameName} and ${playableTitle} as a quick browser puzzle.`,
    sections: [
      {
        heading: "Game Overview",
        body: `${playableTitle} is a visual arrow puzzle with short levels and no account requirement on the main ${gameName} website.`,
      },
      {
        heading: "Safety Notes",
        items: [
          "No chat or player messaging is part of the website.",
          "No account is required to access the game page.",
          "The game is visual and puzzle-based, so younger players may need help understanding collision rules.",
          "External iframe content and ads may be governed by separate providers.",
        ],
      },
      {
        heading: "Healthy Play Habits",
        items: [
          "Use short sessions and pause if the game becomes frustrating.",
          "Encourage children to describe why an arrow collided before trying again.",
          "Use fullscreen only when it helps visibility and does not hide browser controls needed by the parent.",
          "Keep normal device parental controls enabled where appropriate.",
        ],
      },
      {
        heading: "Privacy Awareness",
        body: "The main website does not require registration. Contact forms are voluntary. Embedded game or ad providers may process technical data according to their own policies.",
      },
      {
        heading: "Parent Questions",
        body: `Parents and guardians can contact ${contact} with safety, privacy, or accessibility questions.`,
      },
    ],
  },
  strategy: {
    title: "Strategy Guide",
    seoTitle: `${playableTitle} Strategy Guide - Launch Order and Board Clearing Tips`,
    description: `Learn practical ${playableTitle} strategies for choosing launch order, clearing edge arrows, avoiding collisions, and solving harder boards.`,
    keywords: ["Remove All Arrows strategy", "arrow puzzle tips", "launch order strategy"],
    schemaType: "Article",
    intro: "A practical guide for players who want cleaner sequences and fewer collision resets.",
    sections: [
      {
        heading: "Start With Clear Exits",
        body: "Look for arrows that already have a straight path off the board. Removing those first reduces clutter and can open blocked paths for the next moves.",
      },
      {
        heading: "Work From the Edges",
        body: "Border arrows often need less space to escape. If an edge arrow is safe, launch it before the center becomes crowded with possible paths.",
      },
      {
        heading: "Visualize Before Clicking",
        body: "Do not focus only on the arrow tip. Trace the full straight line from the arrow to the board edge and check whether anything sits in that route.",
      },
      {
        heading: "Control the Sequence",
        items: [
          "Avoid quick clicking unless the order is obvious.",
          "Remove blockers before launching arrows trapped behind them.",
          "When stuck, solve backward by asking which arrow must leave last.",
          "Use fullscreen if small arrows or dense boards are hard to read.",
        ],
      },
      {
        heading: "Practice Short Sets",
        body: "Play in short sets of five to ten puzzles. That gives you enough repetition to improve without turning one repeated collision into frustration.",
      },
    ],
  },
  "difficulty-guide": {
    title: "Challenge Guide",
    seoTitle: `${playableTitle} Challenge Guide - Hard Boards and Puzzle Difficulty`,
    description: `Understand what makes ${playableTitle} harder, from crowded grids to hidden blockers and one-collision resets.`,
    keywords: ["Remove All Arrows difficulty", "arrow puzzle challenge", "brain game guide"],
    schemaType: "Article",
    intro: `${playableTitle} becomes harder when arrows are packed tightly, exits are blocked, and only one launch order keeps the board safe.`,
    sections: [
      {
        heading: "What Makes a Board Easy",
        items: [
          "Several arrows already point toward open exits.",
          "Few arrows block each other's straight paths.",
          "The board has visible edge clears.",
          "Mistakes are easy to diagnose after a restart.",
        ],
      },
      {
        heading: "What Makes a Board Hard",
        items: [
          "Center arrows block multiple paths at once.",
          "Several arrows look safe but collide after moving.",
          "The correct first move is not on the edge.",
          "A dense board requires solving several moves ahead.",
        ],
      },
      {
        heading: "How to Improve",
        body: "Start by finding all arrows with open exits. If none are obvious, look for a blocker that must be removed before the rest of the board can open.",
      },
      {
        heading: "When to Take a Break",
        body: "If every attempt repeats the same collision, pause for a moment. Hard boards often become clearer after you stop clicking and re-read the grid.",
      },
    ],
  },
  "game-mechanics": {
    title: "Game Mechanics",
    seoTitle: `${playableTitle} Mechanics - Arrows, Launch Paths, and Collisions`,
    description: `Learn how ${playableTitle} works, including directional arrows, straight launch paths, collision resets, and browser iframe play.`,
    keywords: ["Remove All Arrows mechanics", "arrow puzzle mechanics", "directional puzzle game"],
    schemaType: "Article",
    intro: "The mechanics are simple on purpose: each arrow points one way, each launch follows a straight line, and every collision matters.",
    sections: [
      {
        heading: "Directional Arrows",
        body: "Every arrow shows its launch direction before you click. That visible direction is the main clue for solving the board.",
      },
      {
        heading: "Straight Launch Paths",
        body: "When launched, an arrow travels straight in the direction it points. The player must trace that route before committing.",
      },
      {
        heading: "Collision Resets",
        body: "If a launched arrow hits another arrow, the puzzle resets. This rule makes order planning the core skill.",
      },
      {
        heading: "Board Clearing",
        body: "The goal is to remove every arrow from the board. Each successful launch changes the available paths for the arrows that remain.",
      },
      {
        heading: "Embedded Browser Play",
        body: "The Astro site loads the playable HTML5 game through /game/index.html. That keeps the public route stable while the game itself is embedded from its hosted source.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    seoTitle: `${gameName} Privacy Policy`,
    description: `Read the ${gameName} Privacy Policy to understand contact data, technical information, cookies, and third-party iframe content.`,
    keywords: ["Arrows Go privacy policy", "browser puzzle privacy", "data protection"],
    updated,
    intro: `This Privacy Policy explains how information may be handled when you use the ${gameName} website.`,
    sections: [
      {
        heading: "Information You Provide",
        body: "If you contact us, you may provide an email address, name, and message content. We use that information to respond to your request.",
      },
      {
        heading: "Automatically Collected Information",
        items: [
          "Browser and device information.",
          "Pages visited and approximate usage data.",
          "Referring pages or search terms when available.",
          "Technical logs used to diagnose loading or security issues.",
        ],
      },
      {
        heading: "Cookies and Storage",
        body: "Cookies or browser storage may support site functionality, advertising, preferences, or embedded game behavior. See the Cookie Policy for more detail.",
      },
      {
        heading: "Third-Party Services",
        body: "The playable game loads through an iframe and may rely on external providers. Those providers may process technical data according to their own terms and policies.",
      },
      {
        heading: "Children's Privacy",
        body: `${gameName} does not require registration. We do not knowingly collect personal information from children under 13 through the main website.`,
      },
      {
        heading: "Your Choices",
        items: [
          "Use browser settings to manage cookies and storage.",
          "Contact us to request deletion of contact-form messages you sent.",
          "Avoid submitting personal information in support messages unless it is needed.",
        ],
      },
      {
        heading: "Privacy Questions",
        body: `For privacy questions, contact ${contact}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    seoTitle: `Terms of Service | ${gameName}`,
    description: `Read the ${gameName} Terms of Service for website use, embedded game access, acceptable use, and limitations.`,
    keywords: ["Arrows Go terms", "terms of service", "browser puzzle terms"],
    updated,
    intro: `By accessing ${gameName}, you agree to these Terms of Service.`,
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By using the website, you agree to these terms and any linked policies. If you do not agree, do not use the site.",
      },
      {
        heading: "Description of Service",
        body: `${gameName} provides a free browser game page, supporting guides, related game pages, blog content, and policy information.`,
      },
      {
        heading: "Acceptable Use",
        items: [
          "Do not disrupt or attack the website or embedded player.",
          "Do not attempt unauthorized access to systems or services.",
          "Do not scrape, copy, or redistribute content in ways that violate law or rights.",
          "Do not use the site for unlawful activity.",
        ],
      },
      {
        heading: "Embedded Content",
        body: "The playable game may be provided through a third-party iframe. Availability, performance, and internal game behavior may depend on that provider.",
      },
      {
        heading: "Intellectual Property",
        body: "Website text, layout, branding, and supporting content are protected by applicable intellectual property laws. Game content may belong to its respective provider or licensors.",
      },
      {
        heading: "Disclaimer of Warranties",
        body: "The website is provided as is and as available. We do not guarantee uninterrupted, error-free, or universally compatible operation.",
      },
      {
        heading: "Limitation of Liability",
        body: `To the fullest extent permitted by law, ${gameName} and its operators are not liable for indirect, incidental, special, consequential, or punitive damages related to site use.`,
      },
      {
        heading: "Terms Questions",
        body: `If you have questions about these Terms, contact ${contact}.`,
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
