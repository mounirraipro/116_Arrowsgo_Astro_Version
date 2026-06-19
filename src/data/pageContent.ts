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

export const pageContent = {
  about: {
    title: "About Arrows Go",
    seoTitle: `About ${gameName} - Free Arrow Arcade Game`,
    description: `Learn about ${gameName}, the free browser arrow arcade game built for short timing, focus, and reflex sessions.`,
    keywords: ["about Arrows Go", "arrow game team", "browser arcade game"],
    schemaType: "AboutPage",
    intro: "A fast browser game built around one readable idea: turn at the right moment and keep going.",
    sections: [
      {
        heading: "What Arrows Go Is",
        body: "Arrows Go is a free browser arcade game where the player guides a moving arrow through hazards by changing direction at the right moment. The rules are simple, the restarts are quick, and each attempt teaches the next one.",
      },
      {
        heading: "Why It Works",
        body: "The game focuses on a clean timing loop. Players do not need a long tutorial, account, or download. They can open the play page, read the screen, react, and improve through short runs.",
      },
      {
        heading: "What Makes It Different",
        body: "Many browser games add menus and upgrades before the core action. Arrows Go keeps attention on movement, spacing, and decision timing, so the first seconds already feel like the real game.",
      },
      {
        heading: "Key Features",
        items: [
          "Instant play through a browser iframe at /game/index.html.",
          "Mouse and touch-friendly controls for desktop, tablet, and mobile.",
          "Short retry loop for quick breaks and focused practice.",
          "Direction-change gameplay that rewards timing more than memorization.",
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
    description: `${gameName} is committed to making the website clear, navigable, and practical for as many players as possible.`,
    keywords: ["Arrows Go accessibility", "accessible browser game", "web accessibility statement"],
    updated,
    intro: "This statement explains the accessibility choices and known limits for the Arrows Go website and embedded game.",
    sections: [
      {
        heading: "Our Commitment",
        body: "Arrows Go aims to provide a clean website structure with semantic HTML, readable copy, responsive layouts, and predictable navigation.",
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
          "The embedded game is visual and timing-based, which can be challenging for some players.",
          "The surrounding website provides text guides, FAQ answers, and support information outside the iframe.",
          "Fullscreen and share controls are available on the play page where supported by the browser.",
        ],
      },
      {
        heading: "Known Limitations",
        items: [
          "The gameplay depends on visual hazard reading and fast input.",
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
    seoTitle: `Arrows Go Blog - Tips, Guides, and Timing Strategy`,
    description: `Read ${gameName} guides about timing, direction control, reflex games, mobile browser play, and safe quick-session arcade habits.`,
    keywords: ["Arrows Go blog", "arrow game tips", "browser arcade guides"],
    schemaType: "Blog",
    eyebrow: "Guides",
    intro: "Short articles for players who want cleaner movement, better timing, and useful browser game context.",
    sections: [
      {
        heading: "What We Cover",
        items: [
          "Beginner guides for playing Arrows Go online.",
          "Timing and direction-control strategy.",
          "Related browser games for quick breaks.",
          "Parent and safety notes for family-friendly play.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    seoTitle: `Contact ${gameName} Support`,
    description: `Contact the ${gameName} team for support, feedback, accessibility concerns, privacy questions, or partnership messages.`,
    keywords: ["contact Arrows Go", "Arrows Go support", "browser game contact"],
    schemaType: "ContactPage",
    intro: "Have a question, suggestion, bug report, or policy concern? Send it here.",
    sections: [
      {
        heading: "Send a Message",
        body: "We read player feedback and use it to improve the website, guides, and support content around the embedded game.",
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
    keywords: ["Arrows Go cookies", "cookie policy", "browser game privacy"],
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
    keywords: ["Arrows Go disclaimer", "website disclaimer", "browser game terms"],
    updated,
    intro: `${gameName} is provided for general entertainment and informational purposes.`,
    sections: [
      {
        heading: "Game Availability",
        body: "Arrows Go is offered as a browser entertainment experience. We cannot guarantee uninterrupted availability, compatibility with every device, or error-free embedded content.",
      },
      {
        heading: "No Professional Advice",
        body: "Articles about focus, reflexes, screen time, or gaming habits are informational only and should not be treated as medical, educational, or psychological advice.",
      },
      {
        heading: "External Links",
        body: "The website may link to external sites or load third-party iframe content. We do not control external services and are not responsible for their policies or availability.",
      },
      {
        heading: "Advertising",
        body: "Ads may appear to support free access. Advertisement placement does not represent endorsement by Arrows Go.",
      },
      {
        heading: "Questions",
        body: `Questions about this disclaimer can be sent to ${contact}.`,
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    seoTitle: `${gameName} FAQ - Gameplay, Controls, and Support`,
    description: `Find answers about ${gameName}, including gameplay, controls, mobile support, safety, and browser loading.`,
    keywords: ["Arrows Go FAQ", "Arrows Go questions", "arrow game help"],
    schemaType: "FAQPage",
    intro: "Quick answers before you start a run.",
    sections: [
      {
        heading: "What is Arrows Go?",
        body: "Arrows Go is a free browser arcade game where you guide a moving arrow by changing direction and avoiding hazards.",
      },
      {
        heading: "Is Arrows Go free?",
        body: "Yes. You can play Arrows Go online with no download, no account, and no app install.",
      },
      {
        heading: "How do you play Arrows Go?",
        body: "Open the play page, watch the arrow path, and change direction at the right moment so the arrow avoids hazards and keeps moving.",
      },
      {
        heading: "Does Arrows Go work on mobile?",
        body: "Yes. The game is designed for browser play and supports touch or mouse input where the embedded player allows it.",
      },
      {
        heading: "Why is the game inside an iframe?",
        body: "The playable game is served from an embedded HTML5 game source. The Astro site loads it through /game/index.html so the main site keeps stable routes, SEO, and support pages.",
      },
      {
        heading: "Is Arrows Go safe for children?",
        body: "The game is a simple arcade timing experience without chat or user accounts. Parents should still supervise browsing and review any ads or external iframe content.",
      },
      {
        heading: "What should I do if the game does not load?",
        body: "Refresh the page, check your connection, disable overly strict iframe blockers, or try another modern browser. If the issue continues, contact support with your device and browser.",
      },
    ],
  },
  "how-to-play": {
    title: "How To Play",
    seoTitle: `How to Play ${gameName} - Beginner Guide`,
    description: `Learn how to play ${gameName}, including the goal, controls, timing tips, and simple ways to improve each run.`,
    keywords: ["how to play Arrows Go", "Arrows Go guide", "arrow game tutorial"],
    schemaType: "HowTo",
    intro: "Learn the basic loop: read the path, time the turn, avoid hazards, and restart smarter.",
    sections: [
      {
        heading: "Open the Game",
        body: "Go to the Play page and wait for the iframe to load. Arrows Go runs in the browser, so there is no installer or account setup.",
      },
      {
        heading: "Read the Arrow Path",
        body: "Watch where the arrow is moving and look ahead for hazards, walls, or tight spaces. The best move is usually prepared before the arrow reaches danger.",
      },
      {
        heading: "Change Direction",
        body: "Use the available mouse, keyboard, or touch control in the embedded player to change direction. The exact input can vary by device, but the goal is the same: turn cleanly before impact.",
      },
      {
        heading: "Avoid Hazards",
        body: "Do not chase every open space. Look for the safest lane and avoid sharp last-second corrections unless there is no other option.",
      },
      {
        heading: "Use Restarts",
        body: "Fast restarts are part of the game. After a mistake, remember which turn was late or early, then adjust the next attempt.",
      },
      {
        heading: "Quick Tips",
        items: [
          "Look one move ahead instead of staring at the arrow.",
          "Turn early when a lane is closing.",
          "Avoid panic taps; one clean input is better than several rushed ones.",
          "Use fullscreen on larger screens for better visibility.",
          "Take short breaks if timing starts to feel inconsistent.",
        ],
      },
    ],
  },
  parents: {
    title: "Parents & Safety Guide",
    seoTitle: `Parents Guide to ${gameName}`,
    description: `${gameName} is a simple browser arcade game. Read safety, privacy, and screen-time notes for parents and guardians.`,
    keywords: ["Arrows Go for kids", "safe browser game", "parents guide arcade game"],
    intro: "A practical overview for families using Arrows Go as a quick browser game.",
    sections: [
      {
        heading: "Game Overview",
        body: "Arrows Go is a timing-based arcade game with simple movement and quick restarts. It does not require players to create an account.",
      },
      {
        heading: "Safety Notes",
        items: [
          "No chat or player messaging is part of the website.",
          "No account is required to access the game page.",
          "The game is visual and timing-based, so younger players may need help understanding hazards.",
          "External iframe content and ads may be governed by separate providers.",
        ],
      },
      {
        heading: "Healthy Play Habits",
        items: [
          "Use short sessions and pause if the game becomes frustrating.",
          "Encourage children to describe what they learned from a failed run.",
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
    seoTitle: `Arrows Go Strategy Guide - Timing and Direction Tips`,
    description: "Learn practical Arrows Go strategies for better timing, cleaner turns, hazard reading, and longer browser arcade runs.",
    keywords: ["Arrows Go strategy", "arrow game tips", "timing game strategy"],
    schemaType: "Article",
    intro: "A practical guide for players who want cleaner inputs and longer runs.",
    sections: [
      {
        heading: "Look Ahead",
        body: "Do not focus only on the arrow tip. Scan the next lane, corner, or hazard so the next direction change is already planned.",
      },
      {
        heading: "Turn With Space",
        body: "Late turns create panic. When a safe lane is visible, take it before the path becomes cramped.",
      },
      {
        heading: "Use Failed Runs",
        body: "A failed run is useful if you identify the decision that ended it. Ask whether the input was too early, too late, or pointed toward a bad lane.",
      },
      {
        heading: "Control Rhythm",
        items: [
          "Avoid tapping repeatedly unless the game clearly requires it.",
          "Let the arrow travel enough distance to confirm the next opening.",
          "Use consistent input pressure on touch screens.",
          "Switch to fullscreen if small hazards are hard to read.",
        ],
      },
      {
        heading: "Practice Short Sets",
        body: "Play in short sets of five to ten attempts. That gives you enough repetition to improve without turning timing mistakes into frustration.",
      },
    ],
  },
  "difficulty-guide": {
    title: "Challenge Guide",
    seoTitle: `Arrows Go Challenge Guide - Timing, Speed, and Focus`,
    description: "Understand what makes Arrows Go harder, from faster decisions to tighter spaces and longer focus streaks.",
    keywords: ["Arrows Go difficulty", "arrow game challenge", "reflex game guide"],
    schemaType: "Article",
    intro: "Arrows Go becomes harder when decisions are tighter, hazards are closer, and focus has to last longer.",
    sections: [
      {
        heading: "What Makes a Run Easy",
        items: [
          "Wide spaces with clear exits.",
          "Slow, readable direction changes.",
          "Few hazards competing for attention.",
          "Short sessions where fatigue has not built up.",
        ],
      },
      {
        heading: "What Makes a Run Hard",
        items: [
          "Narrow lanes that punish late input.",
          "Hazards placed near direction changes.",
          "Longer streaks that demand sustained focus.",
          "Small screens where spacing is harder to read.",
        ],
      },
      {
        heading: "How to Improve",
        body: "Start by making one decision earlier than usual. If that helps, build the habit. If it causes mistakes, wait slightly longer and focus on reading the lane before input.",
      },
      {
        heading: "When to Take a Break",
        body: "If every run ends from the same rushed mistake, pause for a minute. Timing games improve faster when you reset attention instead of forcing more attempts.",
      },
    ],
  },
  "game-mechanics": {
    title: "Game Mechanics",
    seoTitle: `Arrows Go Mechanics - Direction, Timing, and Hazards`,
    description: "Learn how Arrows Go works, including movement, direction changes, hazard avoidance, restarts, and browser iframe play.",
    keywords: ["Arrows Go mechanics", "arrow arcade mechanics", "direction game"],
    schemaType: "Article",
    intro: "The mechanics are simple on purpose: a moving arrow, direction decisions, hazards, and fast retry flow.",
    sections: [
      {
        heading: "Moving Arrow",
        body: "The central object is the arrow. Its movement creates the pressure and gives every decision a clear direction.",
      },
      {
        heading: "Direction Changes",
        body: "Players use input to change direction at the right time. Clean direction changes are the main skill expression in Arrows Go.",
      },
      {
        heading: "Hazard Avoidance",
        body: "Hazards and blocked space create the challenge. The player must read the route before the arrow reaches danger.",
      },
      {
        heading: "Fast Restarts",
        body: "Quick restarts keep the game useful for short sessions. A failed attempt should feed the next attempt instead of feeling like a long reset.",
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
    keywords: ["Arrows Go privacy policy", "browser game privacy", "data protection"],
    updated,
    intro: "This Privacy Policy explains how information may be handled when you use the Arrows Go website.",
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
        body: "Arrows Go does not require registration. We do not knowingly collect personal information from children under 13 through the main website.",
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
    keywords: ["Arrows Go terms", "terms of service", "browser game terms"],
    updated,
    intro: `By accessing ${gameName}, you agree to these Terms of Service.`,
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By using the website, you agree to these terms and any linked policies. If you do not agree, do not use the site.",
      },
      {
        heading: "Description of Service",
        body: "Arrows Go provides a free browser game page, supporting guides, related game pages, blog content, and policy information.",
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
        body: "To the fullest extent permitted by law, Arrows Go and its operators are not liable for indirect, incidental, special, consequential, or punitive damages related to site use.",
      },
      {
        heading: "Terms Questions",
        body: `If you have questions about these Terms, contact ${contact}.`,
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
