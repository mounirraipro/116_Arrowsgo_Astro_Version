export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoOverview: string;
  howToPlay: string;
  strategyGuide: string;
  playerTips: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
  accentClass: string;
};

const playgamaCatalogId = "p_eb5ee739-3023-44bb-875d-81fe60b91666";
const playgamaIframeUrl = (slug: string) => `https://playgama.com/export/game/${slug}?clid=${playgamaCatalogId}`;
const playgamaThumbnail = (slug: string, extension = "webp") => `/game-thumbs/playgama/${slug}.${extension}`;

export const externalGames = [
  {
    slug: "brain-line-connect",
    title: "Brain Line Connect",
    shortTitle: "Line Connect",
    description: "Draw a clean route through every point in a focused one-line browser puzzle.",
    seoOverview:
      "Brain Line Connect is a useful companion for Arrows Go players because both games reward planning before movement. Instead of reacting to a moving arrow, you map a continuous line through each required point while avoiding blocked paths. It is slower, but it trains the same habit of reading the board before committing.",
    howToPlay:
      "Start on a dot, drag one continuous line through every required point, and avoid blocked areas. If the route misses a point or crosses a forbidden path, restart the line and try a cleaner sequence.",
    strategyGuide:
      "Look for tight corridors first because those areas have fewer exits. Work backward from awkward endpoints, then connect the open spaces after the hard decisions are solved.",
    playerTips: [
      "Plan the route before drawing.",
      "Solve tight corridors before open areas.",
      "Use obstacles as boundaries for possible paths.",
      "Reverse the starting point when a route keeps failing.",
    ],
    category: "Pathing",
    thumbnail: playgamaThumbnail("brain-line-connect"),
    iframeUrl: playgamaIframeUrl("brain-line-connect"),
    accent: "#12b886",
    accentClass: "accent-green",
  },
  {
    slug: "bubble-shooter",
    title: "Bubble Shooter",
    shortTitle: "Bubbles",
    description: "Aim, bank shots, and clear color clusters in a quick browser arcade puzzle.",
    seoOverview:
      "Bubble Shooter fits beside Arrows Go because it adds aiming and angle control to the same quick-session rhythm. Every shot asks players to read space, predict a path, and avoid filling the board with bad decisions.",
    howToPlay:
      "Aim the launcher at bubbles of the same color and shoot to create matching groups. Use wall bounces when direct lines are blocked, and clear hanging clusters to open the board.",
    strategyGuide:
      "Do not only pop the first match available. Strong shots remove high clusters, create space, and prepare the next color. Bank shots are often safer than crowded straight shots.",
    playerTips: [
      "Target hanging groups that can drop several bubbles.",
      "Use bank shots to reach blocked pockets.",
      "Avoid scattering single bubbles.",
      "Plan around the next bubble color when it is visible.",
    ],
    category: "Aim",
    thumbnail: playgamaThumbnail("bubble-shooter"),
    iframeUrl: playgamaIframeUrl("bubble-shooter-island-quest"),
    accent: "#339af0",
    accentClass: "accent-sky",
  },
  {
    slug: "block-puzzle",
    title: "Block Puzzle",
    shortTitle: "Blocks",
    description: "Place shapes, clear lines, and keep the board open in a calm spatial puzzle.",
    seoOverview:
      "Block Puzzle is a good option when Arrows Go players want a slower challenge. The pressure comes from space management rather than speed, but the core idea is familiar: one careless move can close a useful path.",
    howToPlay:
      "Drag each available block onto the grid. Complete full rows or columns to clear space. The run ends when none of the current shapes can fit.",
    strategyGuide:
      "Preserve one large open area instead of creating small gaps. Place awkward shapes early and choose clears that improve the shape of the remaining board.",
    playerTips: [
      "Keep the center flexible.",
      "Avoid one-cell holes unless they are about to clear.",
      "Place large pieces before the board gets crowded.",
      "Clear lines in ways that improve the next move.",
    ],
    category: "Spatial",
    thumbnail: playgamaThumbnail("block-puzzle"),
    iframeUrl: playgamaIframeUrl("block-blast-master"),
    accent: "#f59f00",
    accentClass: "accent-gold",
  },
  {
    slug: "2048-merge-blocks",
    title: "2048 Merge Blocks",
    shortTitle: "2048",
    description: "Merge matching numbers and organize the board before it fills up.",
    seoOverview:
      "2048 Merge Blocks is a number game with a strong planning loop. It complements Arrows Go by trading reflex timing for board discipline: matching values need to stay close enough to combine before the space disappears.",
    howToPlay:
      "Merge matching number tiles into higher values. Keep combining tiles while preserving enough open space for future moves and larger chains.",
    strategyGuide:
      "Build around one area so high-value tiles do not scatter. Choose merges that leave a cleaner next board, not only the biggest immediate score.",
    playerTips: [
      "Keep high-value tiles near each other.",
      "Look for the largest connected group before merging.",
      "Preserve open space around important numbers.",
      "Use power moves only when they prevent a blocked board.",
    ],
    category: "Numbers",
    thumbnail: playgamaThumbnail("2048-merge-blocks"),
    iframeUrl: playgamaIframeUrl("2048-merge-blocks"),
    accent: "#ff6b6b",
    accentClass: "accent-coral",
  },
  {
    slug: "sudoku-block-puzzle",
    title: "Sudoku Block Puzzle",
    shortTitle: "Sudoku Blocks",
    description: "Fit blocks into a 9 by 9 board and clear rows, columns, or boxes.",
    seoOverview:
      "Sudoku Block Puzzle gives Arrows Go visitors a more deliberate grid challenge. The game rewards clean placement, space control, and decisions that set up future clears instead of quick reactions.",
    howToPlay:
      "Drag block shapes onto the board. Complete a row, column, or 3 by 3 box to clear it. Keep enough room for the next pieces.",
    strategyGuide:
      "Think of the grid as nine smaller zones. Clears that open both a box and a line are especially valuable because they restore flexibility.",
    playerTips: [
      "Keep at least one 3 by 3 box close to clearing.",
      "Avoid splitting the board into tiny pockets.",
      "Place large pieces while space is available.",
      "Look for moves that clear multiple areas.",
    ],
    category: "Grid",
    thumbnail: playgamaThumbnail("sudoku-block-puzzle"),
    iframeUrl: playgamaIframeUrl("sudoku-block-puzzle"),
    accent: "#845ef7",
    accentClass: "accent-violet",
  },
  {
    slug: "word-search",
    title: "Word Search",
    shortTitle: "Word Search",
    description: "Scan the grid and find hidden words in a relaxed browser puzzle.",
    seoOverview:
      "Word Search is a quieter related game for players who use Arrows Go as a short focus break. It keeps the instant browser format while changing the challenge from movement timing to visual scanning.",
    howToPlay:
      "Read the word list, then find words horizontally, vertically, diagonally, forward, or backward. Drag across each full word to mark it.",
    strategyGuide:
      "Start with long words and rare letters. Search in one direction at a time so the grid stays organized in your mind.",
    playerTips: [
      "Use rare letters as anchors.",
      "Search rows, then columns, then diagonals.",
      "Start with longer words.",
      "Look for endings when first letters appear often.",
    ],
    category: "Focus",
    thumbnail: playgamaThumbnail("word-search"),
    iframeUrl: playgamaIframeUrl("word-search-hidden-words"),
    accent: "#20c997",
    accentClass: "accent-green",
  },
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
