import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const primary = searchParams.get('primary') || '#e5b3ff';
  const background = searchParams.get('background') || '#1a1a1a';
  const primarySoft = searchParams.get('primarySoft') || '#c89ef0';

  const css = `
/* Giscus Custom Theme */
:root {
  color-scheme: dark;
  
  /* Background Colors */
  --color-canvas-default: ${background};
  --color-canvas-subtle: ${background};
  --color-canvas-inset: ${background};
  
  /* Border Colors */
  --color-border-default: ${primary}40;
  --color-border-muted: ${primary}20;
  
  /* Text Colors */
  --color-fg-default: #e5e5e5;
  --color-fg-muted: #a3a3a3;
  --color-fg-subtle: #737373;
  
  /* Accent Colors (Primary Theme) */
  --color-accent-fg: ${primary};
  --color-accent-emphasis: ${primary};
  --color-accent-muted: ${primarySoft}40;
  --color-accent-subtle: ${primarySoft}20;
  
  /* Button Colors */
  --color-btn-primary-bg: ${primary};
  --color-btn-primary-hover-bg: ${primarySoft};
  --color-btn-primary-text: #000000;
  
  /* Link Colors */
  --color-prettylights-syntax-entity: ${primary};
  --color-prettylights-syntax-markup-heading: ${primary};
  
  /* Input/Textarea */
  --color-input-bg: ${background}cc;
  --color-input-border: ${primary}30;
  
  /* Reactions */
  --color-social-reaction-bg-hover: ${primarySoft}20;
  --color-social-reaction-bg-reacted-hover: ${primarySoft}30;
}

/* Additional styling for better integration */
.gsc-comment-box-tabs {
  border-color: ${primary}40;
}

.gsc-comment-box-main {
  border-color: ${primary}30;
  background: ${background}80;
}

.gsc-comment-box-write-toolbar button:hover {
  background: ${primarySoft}20;
}

/* Reactions alignment - aggressive left alignment */
.gsc-reactions,
.gsc-reactions > div,
.gsc-reactions > div > div {
  display: flex !important;
  justify-content: flex-start !important;
  align-items: center !important;
  text-align: left !important;
  margin-left: 0 !important;
  padding-left: 0 !important;
}

.gsc-reactions-count {
  display: flex !important;
  justify-content: flex-start !important;
  align-items: center !important;
  text-align: left !important;
  margin-left: 0 !important;
}

.gsc-social-reaction-summary-item {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}

div[class*="BtnGroup"] {
  justify-content: flex-start !important;
  margin-left: 0 !important;
}

.gsc-reactions button:hover {
  background: ${primarySoft}20 !important;
}

.gsc-reactions button.has-reacted {
  border-color: ${primary} !important;
}

.gsc-comment-author-link {
  color: ${primary} !important;
}

.gsc-comment-header .color-text-secondary {
  color: ${primarySoft} !important;
}

/* Timeline connector */
.gsc-timeline-item::before {
  background-color: ${primary}40;
}

/* Sign in button */
.gsc-comment-box-main-btns button {
  background: ${primary} !important;
  color: #000000 !important;
}

.gsc-comment-box-main-btns button:hover {
  background: ${primarySoft} !important;
}
`;

  return new NextResponse(css, {
    headers: {
      'Content-Type': 'text/css',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
