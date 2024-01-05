(function() {
  "use strict";
  (function() {
    try {
      if (typeof document != "undefined") {
        var o = document.createElement("style");
        o.appendChild(document.createTextNode(".code-diff-view[theme=light]{color:var(--fgColor-default, var(--color-fg-default));background-color:var(--bgColor-default, var(--color-canvas-default));--color-canvas-default-transparent: rgba(255,255,255,0);--color-page-header-bg: #f6f8fa;--color-marketing-icon-primary: #218bff;--color-marketing-icon-secondary: #54aeff;--color-diff-blob-addition-num-text: #1F2328;--color-diff-blob-addition-fg: #1F2328;--color-diff-blob-addition-num-bg: #ccffd8;--color-diff-blob-addition-line-bg: #e6ffec;--color-diff-blob-addition-word-bg: #abf2bc;--color-diff-blob-deletion-num-text: #1F2328;--color-diff-blob-deletion-fg: #1F2328;--color-diff-blob-deletion-num-bg: #ffd7d5;--color-diff-blob-deletion-line-bg: #ffebe9;--color-diff-blob-deletion-word-bg: rgba(255,129,130,.4);--color-diff-blob-hunk-num-bg: rgba(84,174,255,.4);--color-diff-blob-expander-icon: #656d76;--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;--color-diffstat-deletion-border: rgba(31,35,40,.15);--color-diffstat-addition-border: rgba(31,35,40,.15);--color-diffstat-addition-bg: #1f883d;--color-search-keyword-hl: #fff8c5;--color-prettylights-syntax-comment: #6e7781;--color-prettylights-syntax-constant: #0550ae;--color-prettylights-syntax-entity: #6639ba;--color-prettylights-syntax-storage-modifier-import: #24292f;--color-prettylights-syntax-entity-tag: #116329;--color-prettylights-syntax-keyword: #cf222e;--color-prettylights-syntax-string: #0a3069;--color-prettylights-syntax-variable: #953800;--color-prettylights-syntax-brackethighlighter-unmatched: #82071e;--color-prettylights-syntax-invalid-illegal-text: #f6f8fa;--color-prettylights-syntax-invalid-illegal-bg: #82071e;--color-prettylights-syntax-carriage-return-text: #f6f8fa;--color-prettylights-syntax-carriage-return-bg: #cf222e;--color-prettylights-syntax-string-regexp: #116329;--color-prettylights-syntax-markup-list: #3b2300;--color-prettylights-syntax-markup-heading: #0550ae;--color-prettylights-syntax-markup-italic: #24292f;--color-prettylights-syntax-markup-bold: #24292f;--color-prettylights-syntax-markup-deleted-text: #82071e;--color-prettylights-syntax-markup-deleted-bg: #ffebe9;--color-prettylights-syntax-markup-inserted-text: #116329;--color-prettylights-syntax-markup-inserted-bg: #dafbe1;--color-prettylights-syntax-markup-changed-text: #953800;--color-prettylights-syntax-markup-changed-bg: #ffd8b5;--color-prettylights-syntax-markup-ignored-text: #eaeef2;--color-prettylights-syntax-markup-ignored-bg: #0550ae;--color-prettylights-syntax-meta-diff-range: #8250df;--color-prettylights-syntax-brackethighlighter-angle: #57606a;--color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;--color-prettylights-syntax-constant-other-reference-link: #0a3069;--color-codemirror-text: #1F2328;--color-codemirror-bg: #ffffff;--color-codemirror-gutters-bg: #ffffff;--color-codemirror-guttermarker-text: #ffffff;--color-codemirror-guttermarker-subtle-text: #6e7781;--color-codemirror-linenumber-text: #656d76;--color-codemirror-cursor: #1F2328;--color-codemirror-selection-bg: rgba(84,174,255,.4);--color-codemirror-activeline-bg: rgba(234,238,242,.5);--color-codemirror-matchingbracket-text: #1F2328;--color-codemirror-lines-bg: #ffffff;--color-codemirror-syntax-comment: #24292f;--color-codemirror-syntax-constant: #0550ae;--color-codemirror-syntax-entity: #8250df;--color-codemirror-syntax-keyword: #cf222e;--color-codemirror-syntax-storage: #cf222e;--color-codemirror-syntax-string: #0a3069;--color-codemirror-syntax-support: #0550ae;--color-codemirror-syntax-variable: #953800;--color-checks-bg: #24292f;--color-checks-run-border-width: 0px;--color-checks-container-border-width: 0px;--color-checks-text-primary: #f6f8fa;--color-checks-text-secondary: #8c959f;--color-checks-text-link: #54aeff;--color-checks-btn-icon: #afb8c1;--color-checks-btn-hover-icon: #f6f8fa;--color-checks-btn-hover-bg: rgba(255,255,255,.125);--color-checks-input-text: #eaeef2;--color-checks-input-placeholder-text: #8c959f;--color-checks-input-focus-text: #8c959f;--color-checks-input-bg: #32383f;--color-checks-input-shadow: none;--color-checks-donut-error: #fa4549;--color-checks-donut-pending: #bf8700;--color-checks-donut-success: #1f883d;--color-checks-donut-neutral: #afb8c1;--color-checks-dropdown-text: #afb8c1;--color-checks-dropdown-bg: #32383f;--color-checks-dropdown-border: #424a53;--color-checks-dropdown-shadow: rgba(31,35,40,.3);--color-checks-dropdown-hover-text: #f6f8fa;--color-checks-dropdown-hover-bg: #424a53;--color-checks-dropdown-btn-hover-text: #f6f8fa;--color-checks-dropdown-btn-hover-bg: #32383f;--color-checks-scrollbar-thumb-bg: #57606a;--color-checks-header-label-text: #d0d7de;--color-checks-header-label-open-text: #f6f8fa;--color-checks-header-border: #32383f;--color-checks-header-icon: #8c959f;--color-checks-line-text: #d0d7de;--color-checks-line-num-text: rgba(140,149,159,.75);--color-checks-line-timestamp-text: #8c959f;--color-checks-line-hover-bg: #32383f;--color-checks-line-selected-bg: rgba(33,139,255,.15);--color-checks-line-selected-num-text: #54aeff;--color-checks-line-dt-fm-text: #24292f;--color-checks-line-dt-fm-bg: #9a6700;--color-checks-gate-bg: rgba(125,78,0,.15);--color-checks-gate-text: #d0d7de;--color-checks-gate-waiting-text: #d4a72c;--color-checks-step-header-open-bg: #32383f;--color-checks-step-error-text: #ff8182;--color-checks-step-warning-text: #d4a72c;--color-checks-logline-text: #8c959f;--color-checks-logline-num-text: rgba(140,149,159,.75);--color-checks-logline-debug-text: #c297ff;--color-checks-logline-error-text: #d0d7de;--color-checks-logline-error-num-text: #ff8182;--color-checks-logline-error-bg: rgba(164,14,38,.15);--color-checks-logline-warning-text: #d0d7de;--color-checks-logline-warning-num-text: #d4a72c;--color-checks-logline-warning-bg: rgba(125,78,0,.15);--color-checks-logline-command-text: #54aeff;--color-checks-logline-section-text: #4ac26b;--color-checks-ansi-black: #24292f;--color-checks-ansi-black-bright: #32383f;--color-checks-ansi-white: #d0d7de;--color-checks-ansi-white-bright: #d0d7de;--color-checks-ansi-gray: #8c959f;--color-checks-ansi-red: #ff8182;--color-checks-ansi-red-bright: #ffaba8;--color-checks-ansi-green: #4ac26b;--color-checks-ansi-green-bright: #6fdd8b;--color-checks-ansi-yellow: #d4a72c;--color-checks-ansi-yellow-bright: #eac54f;--color-checks-ansi-blue: #54aeff;--color-checks-ansi-blue-bright: #80ccff;--color-checks-ansi-magenta: #c297ff;--color-checks-ansi-magenta-bright: #d8b9ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #24292f;--color-project-sidebar-bg: #ffffff;--color-project-gradient-in: #ffffff;--color-project-gradient-out: rgba(255,255,255,0);--color-mktg-btn-bg: #1b1f23;--color-mktg-btn-shadow-outline: rgb(0 0 0 / 15%) 0 0 0 1px inset;--color-mktg-btn-shadow-focus: rgb(0 0 0 / 15%) 0 0 0 4px;--color-mktg-btn-shadow-hover: 0 3px 2px rgba(0, 0, 0, .07), 0 7px 5px rgba(0, 0, 0, .04), 0 12px 10px rgba(0, 0, 0, .03), 0 22px 18px rgba(0, 0, 0, .03), 0 42px 33px rgba(0, 0, 0, .02), 0 100px 80px rgba(0, 0, 0, .02);--color-mktg-btn-shadow-hover-muted: rgb(0 0 0 / 70%) 0 0 0 2px inset;--color-control-border-color-emphasis: #858F99;--color-avatar-bg: #ffffff;--color-avatar-border: rgba(31,35,40,.15);--color-avatar-stack-fade: #afb8c1;--color-avatar-stack-fade-more: #d0d7de;--color-avatar-child-shadow: 0 0 0 2px rgba(255,255,255,.8);--color-topic-tag-border: rgba(0,0,0,0);--color-counter-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: rgba(0,0,0,0);--color-select-menu-tap-highlight: rgba(175,184,193,.5);--color-select-menu-tap-focus-bg: #b6e3ff;--color-overlay-shadow: 0 1px 3px rgba(31,35,40,.12), 0 8px 24px rgba(66,74,83,.12);--color-overlay-backdrop: rgba(140,149,159,.2);--color-header-text: rgba(255,255,255,.7);--color-header-bg: #24292f;--color-header-divider: #57606a;--color-header-logo: #ffffff;--color-header-search-bg: #24292f;--color-header-search-border: #57606a;--color-sidenav-selected-bg: #ffffff;--color-menu-bg-active: rgba(0,0,0,0);--color-input-disabled-bg: rgba(175,184,193,.2);--color-timeline-badge-bg: #eaeef2;--color-ansi-black: #24292f;--color-ansi-black-bright: #57606a;--color-ansi-white: #6e7781;--color-ansi-white-bright: #8c959f;--color-ansi-gray: #6e7781;--color-ansi-red: #cf222e;--color-ansi-red-bright: #a40e26;--color-ansi-green: #116329;--color-ansi-green-bright: #1a7f37;--color-ansi-yellow: #4d2d00;--color-ansi-yellow-bright: #633c01;--color-ansi-blue: #0969da;--color-ansi-blue-bright: #218bff;--color-ansi-magenta: #8250df;--color-ansi-magenta-bright: #a475f9;--color-ansi-cyan: #1b7c83;--color-ansi-cyan-bright: #3192aa;--color-btn-text: #24292f;--color-btn-bg: #f6f8fa;--color-btn-border: rgba(31,35,40,.15);--color-btn-shadow: 0 1px 0 rgba(31,35,40,.04);--color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,.25);--color-btn-hover-bg: #f3f4f6;--color-btn-hover-border: rgba(31,35,40,.15);--color-btn-active-bg: hsla(220,14%,93%,1);--color-btn-active-border: rgba(31,35,40,.15);--color-btn-selected-bg: hsla(220,14%,94%,1);--color-btn-counter-bg: rgba(31,35,40,.08);--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #1f883d;--color-btn-primary-border: rgba(31,35,40,.15);--color-btn-primary-shadow: 0 1px 0 rgba(31,35,40,.1);--color-btn-primary-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-primary-hover-bg: #1a7f37;--color-btn-primary-hover-border: rgba(31,35,40,.15);--color-btn-primary-selected-bg: hsla(137,66%,28%,1);--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(0,45,17,.2);--color-btn-primary-disabled-text: rgba(255,255,255,.8);--color-btn-primary-disabled-bg: #94d3a2;--color-btn-primary-disabled-border: rgba(31,35,40,.15);--color-btn-primary-icon: rgba(255,255,255,.8);--color-btn-primary-counter-bg: rgba(0,45,17,.2);--color-btn-outline-text: #0969da;--color-btn-outline-hover-text: #ffffff;--color-btn-outline-hover-bg: #0969da;--color-btn-outline-hover-border: rgba(31,35,40,.15);--color-btn-outline-hover-shadow: 0 1px 0 rgba(31,35,40,.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-outline-hover-counter-bg: rgba(255,255,255,.2);--color-btn-outline-selected-text: #ffffff;--color-btn-outline-selected-bg: hsla(212,92%,42%,1);--color-btn-outline-selected-border: rgba(31,35,40,.15);--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(0,33,85,.2);--color-btn-outline-disabled-text: rgba(9,105,218,.5);--color-btn-outline-disabled-bg: #f6f8fa;--color-btn-outline-disabled-counter-bg: rgba(9,105,218,.05);--color-btn-outline-counter-bg: #0969da1a;--color-btn-outline-counter-fg: #0550ae;--color-btn-outline-hover-counter-fg: #ffffff;--color-btn-outline-disabled-counter-fg: rgba(9,105,218,.5);--color-btn-danger-text: #cf222e;--color-btn-danger-hover-text: #ffffff;--color-btn-danger-hover-bg: #a40e26;--color-btn-danger-hover-border: rgba(31,35,40,.15);--color-btn-danger-hover-shadow: 0 1px 0 rgba(31,35,40,.1);--color-btn-danger-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-danger-hover-counter-bg: rgba(255,255,255,.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: hsla(356,72%,44%,1);--color-btn-danger-selected-border: rgba(31,35,40,.15);--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(76,0,20,.2);--color-btn-danger-disabled-text: rgba(207,34,46,.5);--color-btn-danger-disabled-bg: #f6f8fa;--color-btn-danger-disabled-counter-bg: rgba(207,34,46,.05);--color-btn-danger-counter-bg: rgba(207,34,46,.1);--color-btn-danger-icon: #cf222e;--color-btn-danger-hover-icon: #ffffff;--color-btn-danger-counter-fg: #a40e26;--color-btn-danger-hover-counter-fg: #ffffff;--color-btn-danger-disabled-counter-fg: rgba(207,34,46,.5);--color-underlinenav-icon: #6e7781;--color-underlinenav-border-hover: rgba(175,184,193,.2);--color-action-list-item-inline-divider: rgba(208,215,222,.48);--color-action-list-item-default-hover-bg: rgba(208,215,222,.32);--color-action-list-item-default-hover-border: rgba(0,0,0,0);--color-action-list-item-default-active-bg: rgba(208,215,222,.48);--color-action-list-item-default-active-border: rgba(0,0,0,0);--color-action-list-item-default-selected-bg: rgba(208,215,222,.24);--color-action-list-item-danger-hover-bg: rgba(255,235,233,.64);--color-action-list-item-danger-active-bg: #ffebe9;--color-action-list-item-danger-hover-text: #d1242f;--color-switch-track-bg: #eaeef2;--color-switch-track-hover-bg: hsla(210,24%,90%,1);--color-switch-track-active-bg: hsla(210,24%,88%,1);--color-switch-track-disabled-bg: #8c959f;--color-switch-track-fg: #656d76;--color-switch-track-disabled-fg: #ffffff;--color-switch-track-border: rgba(0,0,0,0);--color-switch-track-checked-bg: #0969da;--color-switch-track-checked-hover-bg: #0860CA;--color-switch-track-checked-active-bg: #0757BA;--color-switch-track-checked-fg: #ffffff;--color-switch-track-checked-disabled-fg: #ffffff;--color-switch-track-checked-border: rgba(0,0,0,0);--color-switch-knob-bg: #ffffff;--color-switch-knob-disabled-bg: #f6f8fa;--color-switch-knob-border: #858F99;--color-switch-knob-checked-bg: #ffffff;--color-switch-knob-checked-disabled-bg: #f6f8fa;--color-switch-knob-checked-border: #0969da;--color-segmented-control-bg: #eaeef2;--color-segmented-control-button-bg: #ffffff;--color-segmented-control-button-hover-bg: rgba(175,184,193,.2);--color-segmented-control-button-active-bg: rgba(175,184,193,.4);--color-segmented-control-button-selected-border: #8c959f;--color-tree-view-item-chevron-hover-bg: rgba(208,215,222,.32);--color-tree-view-item-directory-fill: #54aeff;--color-fg-default: #1F2328;--color-fg-muted: #656d76;--color-fg-subtle: #6e7781;--color-fg-on-emphasis: #ffffff;--color-canvas-default: #ffffff;--color-canvas-overlay: #ffffff;--color-canvas-inset: #f6f8fa;--color-canvas-subtle: #f6f8fa;--color-border-default: #d0d7de;--color-border-muted: hsla(210,18%,87%,1);--color-border-subtle: rgba(31,35,40,.15);--color-shadow-small: 0 1px 0 rgba(31,35,40,.04);--color-shadow-medium: 0 3px 6px rgba(140,149,159,.15);--color-shadow-large: 0 8px 24px rgba(140,149,159,.2);--color-shadow-extra-large: 0 12px 28px rgba(140,149,159,.3);--color-neutral-emphasis-plus: #24292f;--color-neutral-emphasis: #6e7781;--color-neutral-muted: rgba(175,184,193,.2);--color-neutral-subtle: rgba(234,238,242,.5);--color-accent-fg: #0969da;--color-accent-emphasis: #0969da;--color-accent-muted: rgba(84,174,255,.4);--color-accent-subtle: #ddf4ff;--color-success-fg: #1a7f37;--color-success-emphasis: #1f883d;--color-success-muted: rgba(74,194,107,.4);--color-success-subtle: #dafbe1;--color-attention-fg: #9a6700;--color-attention-emphasis: #9a6700;--color-attention-muted: rgba(212,167,44,.4);--color-attention-subtle: #fff8c5;--color-severe-fg: #bc4c00;--color-severe-emphasis: #bc4c00;--color-severe-muted: rgba(251,143,68,.4);--color-severe-subtle: #fff1e5;--color-danger-fg: #d1242f;--color-danger-emphasis: #cf222e;--color-danger-muted: rgba(255,129,130,.4);--color-danger-subtle: #ffebe9;--color-open-fg: #1a7f37;--color-open-emphasis: #1f883d;--color-open-muted: rgba(74,194,107,.4);--color-open-subtle: #dafbe1;--color-closed-fg: #d1242f;--color-closed-emphasis: #cf222e;--color-closed-muted: rgba(255,129,130,.4);--color-closed-subtle: #ffebe9;--color-done-fg: #8250df;--color-done-emphasis: #8250df;--color-done-muted: rgba(194,151,255,.4);--color-done-subtle: #fbefff;--color-sponsors-fg: #bf3989;--color-sponsors-emphasis: #bf3989;--color-sponsors-muted: rgba(255,128,200,.4);--color-sponsors-subtle: #ffeff7;--color-primer-fg-disabled: #8c959f;--color-primer-canvas-backdrop: rgba(31,35,40,.5);--color-primer-canvas-sticky: rgba(255,255,255,.95);--color-primer-border-active: #fd8c73;--color-primer-border-contrast: rgba(31,35,40,.1);--color-primer-shadow-highlight: inset 0 1px 0 rgba(255,255,255,.25);--color-primer-shadow-inset: inset 0 1px 0 rgba(208,215,222,.2);--color-scale-black: #1F2328;--color-scale-white: #ffffff;--color-scale-gray-0: #f6f8fa;--color-scale-gray-1: #eaeef2;--color-scale-gray-2: #d0d7de;--color-scale-gray-3: #afb8c1;--color-scale-gray-4: #8c959f;--color-scale-gray-5: #6e7781;--color-scale-gray-6: #57606a;--color-scale-gray-7: #424a53;--color-scale-gray-8: #32383f;--color-scale-gray-9: #24292f;--color-scale-blue-0: #ddf4ff;--color-scale-blue-1: #b6e3ff;--color-scale-blue-2: #80ccff;--color-scale-blue-3: #54aeff;--color-scale-blue-4: #218bff;--color-scale-blue-5: #0969da;--color-scale-blue-6: #0550ae;--color-scale-blue-7: #033d8b;--color-scale-blue-8: #0a3069;--color-scale-blue-9: #002155;--color-scale-green-0: #dafbe1;--color-scale-green-1: #aceebb;--color-scale-green-2: #6fdd8b;--color-scale-green-3: #4ac26b;--color-scale-green-4: #2da44e;--color-scale-green-5: #1a7f37;--color-scale-green-6: #116329;--color-scale-green-7: #044f1e;--color-scale-green-8: #003d16;--color-scale-green-9: #002d11;--color-scale-yellow-0: #fff8c5;--color-scale-yellow-1: #fae17d;--color-scale-yellow-2: #eac54f;--color-scale-yellow-3: #d4a72c;--color-scale-yellow-4: #bf8700;--color-scale-yellow-5: #9a6700;--color-scale-yellow-6: #7d4e00;--color-scale-yellow-7: #633c01;--color-scale-yellow-8: #4d2d00;--color-scale-yellow-9: #3b2300;--color-scale-orange-0: #fff1e5;--color-scale-orange-1: #ffd8b5;--color-scale-orange-2: #ffb77c;--color-scale-orange-3: #fb8f44;--color-scale-orange-4: #e16f24;--color-scale-orange-5: #bc4c00;--color-scale-orange-6: #953800;--color-scale-orange-7: #762c00;--color-scale-orange-8: #5c2200;--color-scale-orange-9: #471700;--color-scale-red-0: #ffebe9;--color-scale-red-1: #ffcecb;--color-scale-red-2: #ffaba8;--color-scale-red-3: #ff8182;--color-scale-red-4: #fa4549;--color-scale-red-5: #cf222e;--color-scale-red-6: #a40e26;--color-scale-red-7: #82071e;--color-scale-red-8: #660018;--color-scale-red-9: #4c0014;--color-scale-purple-0: #fbefff;--color-scale-purple-1: #ecd8ff;--color-scale-purple-2: #d8b9ff;--color-scale-purple-3: #c297ff;--color-scale-purple-4: #a475f9;--color-scale-purple-5: #8250df;--color-scale-purple-6: #6639ba;--color-scale-purple-7: #512a97;--color-scale-purple-8: #3e1f79;--color-scale-purple-9: #2e1461;--color-scale-pink-0: #ffeff7;--color-scale-pink-1: #ffd3eb;--color-scale-pink-2: #ffadda;--color-scale-pink-3: #ff80c8;--color-scale-pink-4: #e85aad;--color-scale-pink-5: #bf3989;--color-scale-pink-6: #99286e;--color-scale-pink-7: #772057;--color-scale-pink-8: #611347;--color-scale-pink-9: #4d0336;--color-scale-coral-0: #fff0eb;--color-scale-coral-1: #ffd6cc;--color-scale-coral-2: #ffb4a1;--color-scale-coral-3: #fd8c73;--color-scale-coral-4: #ec6547;--color-scale-coral-5: #c4432b;--color-scale-coral-6: #9e2f1c;--color-scale-coral-7: #801f0f;--color-scale-coral-8: #691105;--color-scale-coral-9: #510901}.code-diff-view[theme=light] pre code.hljs{display:block;overflow-x:auto;padding:1em}.code-diff-view[theme=light] code.hljs{padding:3px 5px}.code-diff-view[theme=light] .hljs{color:#24292e;background:#ffffff}.code-diff-view[theme=light] .hljs-doctag,.code-diff-view[theme=light] .hljs-keyword,.code-diff-view[theme=light] .hljs-meta .hljs-keyword,.code-diff-view[theme=light] .hljs-template-tag,.code-diff-view[theme=light] .hljs-template-variable,.code-diff-view[theme=light] .hljs-type,.code-diff-view[theme=light] .hljs-variable.language_{color:#d73a49}.code-diff-view[theme=light] .hljs-title,.code-diff-view[theme=light] .hljs-title.class_,.code-diff-view[theme=light] .hljs-title.class_.inherited__,.code-diff-view[theme=light] .hljs-title.function_{color:#6f42c1}.code-diff-view[theme=light] .hljs-attr,.code-diff-view[theme=light] .hljs-attribute,.code-diff-view[theme=light] .hljs-literal,.code-diff-view[theme=light] .hljs-meta,.code-diff-view[theme=light] .hljs-number,.code-diff-view[theme=light] .hljs-operator,.code-diff-view[theme=light] .hljs-variable,.code-diff-view[theme=light] .hljs-selector-attr,.code-diff-view[theme=light] .hljs-selector-class,.code-diff-view[theme=light] .hljs-selector-id{color:#005cc5}.code-diff-view[theme=light] .hljs-regexp,.code-diff-view[theme=light] .hljs-string,.code-diff-view[theme=light] .hljs-meta .hljs-string{color:#032f62}.code-diff-view[theme=light] .hljs-built_in,.code-diff-view[theme=light] .hljs-symbol{color:#e36209}.code-diff-view[theme=light] .hljs-comment,.code-diff-view[theme=light] .hljs-code,.code-diff-view[theme=light] .hljs-formula{color:#6a737d}.code-diff-view[theme=light] .hljs-name,.code-diff-view[theme=light] .hljs-quote,.code-diff-view[theme=light] .hljs-selector-tag,.code-diff-view[theme=light] .hljs-selector-pseudo{color:#22863a}.code-diff-view[theme=light] .hljs-subst{color:#24292e}.code-diff-view[theme=light] .hljs-section{color:#005cc5;font-weight:700}.code-diff-view[theme=light] .hljs-bullet{color:#735c0f}.code-diff-view[theme=light] .hljs-emphasis{color:#24292e;font-style:italic}.code-diff-view[theme=light] .hljs-strong{color:#24292e;font-weight:700}.code-diff-view[theme=light] .hljs-addition{color:#22863a;background-color:#f0fff4}.code-diff-view[theme=light] .hljs-deletion{color:#b31d28;background-color:#ffeef0}.code-diff-view[theme=dark]{color:var(--fgColor-default, var(--color-fg-default));background-color:var(--bgColor-default, var(--color-canvas-default));--color-canvas-default-transparent: rgba(13,17,23,0);--color-page-header-bg: #0d1117;--color-marketing-icon-primary: #79c0ff;--color-marketing-icon-secondary: #1f6feb;--color-diff-blob-addition-num-text: #e6edf3;--color-diff-blob-addition-fg: #e6edf3;--color-diff-blob-addition-num-bg: rgba(63,185,80,.3);--color-diff-blob-addition-line-bg: rgba(46,160,67,.15);--color-diff-blob-addition-word-bg: rgba(46,160,67,.4);--color-diff-blob-deletion-num-text: #e6edf3;--color-diff-blob-deletion-fg: #e6edf3;--color-diff-blob-deletion-num-bg: rgba(248,81,73,.3);--color-diff-blob-deletion-line-bg: rgba(248,81,73,.1);--color-diff-blob-deletion-word-bg: rgba(248,81,73,.4);--color-diff-blob-hunk-num-bg: rgba(56,139,253,.4);--color-diff-blob-expander-icon: #7d8590;--color-diff-blob-selected-line-highlight-mix-blend-mode: screen;--color-diffstat-deletion-border: rgba(240,246,252,.1);--color-diffstat-addition-border: rgba(240,246,252,.1);--color-diffstat-addition-bg: #3fb950;--color-search-keyword-hl: rgba(210,153,34,.4);--color-prettylights-syntax-comment: #8b949e;--color-prettylights-syntax-constant: #79c0ff;--color-prettylights-syntax-entity: #d2a8ff;--color-prettylights-syntax-storage-modifier-import: #c9d1d9;--color-prettylights-syntax-entity-tag: #7ee787;--color-prettylights-syntax-keyword: #ff7b72;--color-prettylights-syntax-string: #a5d6ff;--color-prettylights-syntax-variable: #ffa657;--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;--color-prettylights-syntax-invalid-illegal-bg: #8e1519;--color-prettylights-syntax-carriage-return-text: #f0f6fc;--color-prettylights-syntax-carriage-return-bg: #b62324;--color-prettylights-syntax-string-regexp: #7ee787;--color-prettylights-syntax-markup-list: #f2cc60;--color-prettylights-syntax-markup-heading: #1f6feb;--color-prettylights-syntax-markup-italic: #c9d1d9;--color-prettylights-syntax-markup-bold: #c9d1d9;--color-prettylights-syntax-markup-deleted-text: #ffdcd7;--color-prettylights-syntax-markup-deleted-bg: #67060c;--color-prettylights-syntax-markup-inserted-text: #aff5b4;--color-prettylights-syntax-markup-inserted-bg: #033a16;--color-prettylights-syntax-markup-changed-text: #ffdfb6;--color-prettylights-syntax-markup-changed-bg: #5a1e02;--color-prettylights-syntax-markup-ignored-text: #c9d1d9;--color-prettylights-syntax-markup-ignored-bg: #1158c7;--color-prettylights-syntax-meta-diff-range: #d2a8ff;--color-prettylights-syntax-brackethighlighter-angle: #8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;--color-codemirror-text: #e6edf3;--color-codemirror-bg: #0d1117;--color-codemirror-gutters-bg: #0d1117;--color-codemirror-guttermarker-text: #0d1117;--color-codemirror-guttermarker-subtle-text: #6e7681;--color-codemirror-linenumber-text: #7d8590;--color-codemirror-cursor: #e6edf3;--color-codemirror-selection-bg: rgba(56,139,253,.4);--color-codemirror-activeline-bg: rgba(110,118,129,.1);--color-codemirror-matchingbracket-text: #e6edf3;--color-codemirror-lines-bg: #0d1117;--color-codemirror-syntax-comment: #8b949e;--color-codemirror-syntax-constant: #79c0ff;--color-codemirror-syntax-entity: #d2a8ff;--color-codemirror-syntax-keyword: #ff7b72;--color-codemirror-syntax-storage: #ff7b72;--color-codemirror-syntax-string: #a5d6ff;--color-codemirror-syntax-support: #79c0ff;--color-codemirror-syntax-variable: #ffa657;--color-checks-bg: #010409;--color-checks-run-border-width: 1px;--color-checks-container-border-width: 1px;--color-checks-text-primary: #e6edf3;--color-checks-text-secondary: #7d8590;--color-checks-text-link: #2f81f7;--color-checks-btn-icon: #7d8590;--color-checks-btn-hover-icon: #e6edf3;--color-checks-btn-hover-bg: rgba(110,118,129,.1);--color-checks-input-text: #7d8590;--color-checks-input-placeholder-text: #6e7681;--color-checks-input-focus-text: #e6edf3;--color-checks-input-bg: #161b22;--color-checks-donut-error: #f85149;--color-checks-donut-pending: #d29922;--color-checks-donut-success: #2ea043;--color-checks-donut-neutral: #8b949e;--color-checks-dropdown-text: #e6edf3;--color-checks-dropdown-bg: #161b22;--color-checks-dropdown-border: #30363d;--color-checks-dropdown-shadow: rgba(1,4,9,.3);--color-checks-dropdown-hover-text: #e6edf3;--color-checks-dropdown-hover-bg: rgba(110,118,129,.1);--color-checks-dropdown-btn-hover-text: #e6edf3;--color-checks-dropdown-btn-hover-bg: rgba(110,118,129,.1);--color-checks-scrollbar-thumb-bg: rgba(110,118,129,.4);--color-checks-header-label-text: #7d8590;--color-checks-header-label-open-text: #e6edf3;--color-checks-header-border: #21262d;--color-checks-header-icon: #7d8590;--color-checks-line-text: #7d8590;--color-checks-line-num-text: #6e7681;--color-checks-line-timestamp-text: #6e7681;--color-checks-line-hover-bg: rgba(110,118,129,.1);--color-checks-line-selected-bg: rgba(56,139,253,.1);--color-checks-line-selected-num-text: #2f81f7;--color-checks-line-dt-fm-text: #ffffff;--color-checks-line-dt-fm-bg: #9e6a03;--color-checks-gate-bg: rgba(187,128,9,.15);--color-checks-gate-text: #7d8590;--color-checks-gate-waiting-text: #d29922;--color-checks-step-header-open-bg: #161b22;--color-checks-step-error-text: #f85149;--color-checks-step-warning-text: #d29922;--color-checks-logline-text: #7d8590;--color-checks-logline-num-text: #6e7681;--color-checks-logline-debug-text: #a371f7;--color-checks-logline-error-text: #7d8590;--color-checks-logline-error-num-text: #6e7681;--color-checks-logline-error-bg: rgba(248,81,73,.1);--color-checks-logline-warning-text: #7d8590;--color-checks-logline-warning-num-text: #d29922;--color-checks-logline-warning-bg: rgba(187,128,9,.15);--color-checks-logline-command-text: #2f81f7;--color-checks-logline-section-text: #3fb950;--color-checks-ansi-black: #0d1117;--color-checks-ansi-black-bright: #161b22;--color-checks-ansi-white: #b1bac4;--color-checks-ansi-white-bright: #b1bac4;--color-checks-ansi-gray: #6e7681;--color-checks-ansi-red: #ff7b72;--color-checks-ansi-red-bright: #ffa198;--color-checks-ansi-green: #3fb950;--color-checks-ansi-green-bright: #56d364;--color-checks-ansi-yellow: #d29922;--color-checks-ansi-yellow-bright: #e3b341;--color-checks-ansi-blue: #58a6ff;--color-checks-ansi-blue-bright: #79c0ff;--color-checks-ansi-magenta: #bc8cff;--color-checks-ansi-magenta-bright: #d2a8ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #0d1117;--color-project-sidebar-bg: #161b22;--color-project-gradient-in: #161b22;--color-project-gradient-out: rgba(22,27,34,0);--color-mktg-btn-bg: #f6f8fa;--color-mktg-btn-shadow-outline: rgb(255 255 255 / 25%) 0 0 0 1px inset;--color-mktg-btn-shadow-focus: rgb(255 255 255 / 25%) 0 0 0 4px;--color-mktg-btn-shadow-hover: 0 4px 7px rgba(0, 0, 0, .15), 0 100px 80px rgba(255, 255, 255, .02), 0 42px 33px rgba(255, 255, 255, .024), 0 22px 18px rgba(255, 255, 255, .028), 0 12px 10px rgba(255, 255, 255, .034), 0 7px 5px rgba(255, 255, 255, .04), 0 3px 2px rgba(255, 255, 255, .07);--color-mktg-btn-shadow-hover-muted: rgb(255 255 255) 0 0 0 2px inset;--color-control-border-color-emphasis: #606771;--color-avatar-bg: rgba(255,255,255,.1);--color-avatar-border: rgba(240,246,252,.1);--color-avatar-stack-fade: #30363d;--color-avatar-stack-fade-more: #21262d;--color-avatar-child-shadow: 0 0 0 2px #0d1117;--color-topic-tag-border: rgba(0,0,0,0);--color-counter-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: #484f58;--color-select-menu-tap-highlight: rgba(48,54,61,.5);--color-select-menu-tap-focus-bg: #0c2d6b;--color-overlay-shadow: 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,.85);--color-overlay-backdrop: rgba(22,27,34,.4);--color-header-text: rgba(255,255,255,.7);--color-header-bg: #161b22;--color-header-divider: #8b949e;--color-header-logo: #f0f6fc;--color-header-search-bg: #0d1117;--color-header-search-border: #30363d;--color-sidenav-selected-bg: #21262d;--color-menu-bg-active: #161b22;--color-input-disabled-bg: rgba(110,118,129,0);--color-timeline-badge-bg: #21262d;--color-ansi-black: #484f58;--color-ansi-black-bright: #6e7681;--color-ansi-white: #b1bac4;--color-ansi-white-bright: #ffffff;--color-ansi-gray: #6e7681;--color-ansi-red: #ff7b72;--color-ansi-red-bright: #ffa198;--color-ansi-green: #3fb950;--color-ansi-green-bright: #56d364;--color-ansi-yellow: #d29922;--color-ansi-yellow-bright: #e3b341;--color-ansi-blue: #58a6ff;--color-ansi-blue-bright: #79c0ff;--color-ansi-magenta: #bc8cff;--color-ansi-magenta-bright: #d2a8ff;--color-ansi-cyan: #39c5cf;--color-ansi-cyan-bright: #56d4dd;--color-btn-text: #c9d1d9;--color-btn-bg: #21262d;--color-btn-border: rgba(240,246,252,.1);--color-btn-shadow: 0 0 transparent;--color-btn-inset-shadow: 0 0 transparent;--color-btn-hover-bg: #30363d;--color-btn-hover-border: #8b949e;--color-btn-active-bg: hsla(212,12%,18%,1);--color-btn-active-border: #6e7681;--color-btn-selected-bg: #161b22;--color-btn-counter-bg: #30363d;--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #238636;--color-btn-primary-border: rgba(240,246,252,.1);--color-btn-primary-shadow: 0 0 transparent;--color-btn-primary-inset-shadow: 0 0 transparent;--color-btn-primary-hover-bg: #2ea043;--color-btn-primary-hover-border: rgba(240,246,252,.1);--color-btn-primary-selected-bg: #238636;--color-btn-primary-selected-shadow: 0 0 transparent;--color-btn-primary-disabled-text: rgba(255,255,255,.5);--color-btn-primary-disabled-bg: rgba(35,134,54,.6);--color-btn-primary-disabled-border: rgba(240,246,252,.1);--color-btn-primary-icon: #ffffff;--color-btn-primary-counter-bg: rgba(4,38,15,.2);--color-btn-outline-text: #388bfd;--color-btn-outline-hover-text: #58a6ff;--color-btn-outline-hover-bg: #30363d;--color-btn-outline-hover-border: rgba(240,246,252,.1);--color-btn-outline-hover-shadow: 0 1px 0 rgba(1,4,9,.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-outline-hover-counter-bg: rgba(5,29,77,.2);--color-btn-outline-selected-text: #ffffff;--color-btn-outline-selected-bg: #0d419d;--color-btn-outline-selected-border: rgba(240,246,252,.1);--color-btn-outline-selected-shadow: 0 0 transparent;--color-btn-outline-disabled-text: rgba(88,166,255,.5);--color-btn-outline-disabled-bg: #0d1117;--color-btn-outline-disabled-counter-bg: rgba(31,111,235,.05);--color-btn-outline-counter-bg: rgba(5,29,77,.2);--color-btn-outline-hover-counter-fg: #58a6ff;--color-btn-outline-disabled-counter-fg: rgba(47,129,247,.5);--color-btn-outline-counter-fg: #388bfd;--color-btn-danger-text: #f85149;--color-btn-danger-hover-text: #ffffff;--color-btn-danger-hover-bg: #da3633;--color-btn-danger-hover-border: #f85149;--color-btn-danger-hover-shadow: 0 0 transparent;--color-btn-danger-hover-inset-shadow: 0 0 transparent;--color-btn-danger-hover-icon: #ffffff;--color-btn-danger-hover-counter-bg: rgba(255,255,255,.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: #b62324;--color-btn-danger-selected-border: #ff7b72;--color-btn-danger-selected-shadow: 0 0 transparent;--color-btn-danger-disabled-text: rgba(248,81,73,.5);--color-btn-danger-disabled-bg: #0d1117;--color-btn-danger-disabled-counter-bg: rgba(218,54,51,.05);--color-btn-danger-counter-bg: rgba(73,2,2,.2);--color-btn-danger-icon: #f85149;--color-btn-danger-counter-fg: #f85149;--color-btn-danger-disabled-counter-fg: rgba(248,81,73,.5);--color-btn-danger-hover-counter-fg: #ffffff;--color-underlinenav-icon: #6e7681;--color-underlinenav-border-hover: rgba(110,118,129,.4);--color-action-list-item-inline-divider: rgba(48,54,61,.48);--color-action-list-item-default-hover-bg: rgba(177,186,196,.12);--color-action-list-item-default-hover-border: rgba(0,0,0,0);--color-action-list-item-default-active-bg: rgba(177,186,196,.2);--color-action-list-item-default-active-border: rgba(0,0,0,0);--color-action-list-item-default-selected-bg: rgba(177,186,196,.08);--color-action-list-item-danger-hover-bg: rgba(248,81,73,.16);--color-action-list-item-danger-active-bg: rgba(248,81,73,.24);--color-action-list-item-danger-hover-text: #ff7b72;--color-switch-track-bg: rgba(110,118,129,.1);--color-switch-track-hover-bg: hsla(215,8%,72%,.1);--color-switch-track-active-bg: rgba(110,118,129,.4);--color-switch-track-disabled-bg: #21262d;--color-switch-track-fg: #7d8590;--color-switch-track-disabled-fg: #010409;--color-switch-track-border: rgba(0,0,0,0);--color-switch-track-checked-bg: rgba(31,111,235,.35);--color-switch-track-checked-hover-bg: rgba(31,111,235,.5);--color-switch-track-checked-active-bg: rgba(31,111,235,.65);--color-switch-track-checked-fg: #ffffff;--color-switch-track-checked-disabled-fg: #010409;--color-switch-track-checked-border: rgba(0,0,0,0);--color-switch-knob-bg: #0d1117;--color-switch-knob-border: #606771;--color-switch-knob-disabled-bg: #161b22;--color-switch-knob-checked-bg: #0d1117;--color-switch-knob-checked-disabled-bg: #161b22;--color-switch-knob-checked-border: rgba(31,111,235,.35);--color-segmented-control-bg: rgba(110,118,129,.1);--color-segmented-control-button-bg: #0d1117;--color-segmented-control-button-hover-bg: #30363d;--color-segmented-control-button-active-bg: #21262d;--color-segmented-control-button-selected-border: #6e7681;--color-tree-view-item-chevron-hover-bg: rgba(177,186,196,.12);--color-tree-view-item-directory-fill: #7d8590;--color-fg-default: #e6edf3;--color-fg-muted: #7d8590;--color-fg-subtle: #6e7681;--color-fg-on-emphasis: #ffffff;--color-canvas-default: #0d1117;--color-canvas-overlay: #161b22;--color-canvas-inset: #010409;--color-canvas-subtle: #161b22;--color-border-default: #30363d;--color-border-muted: #21262d;--color-border-subtle: rgba(240,246,252,.1);--color-shadow-small: 0 0 transparent;--color-shadow-medium: 0 3px 6px #010409;--color-shadow-large: 0 8px 24px #010409;--color-shadow-extra-large: 0 12px 48px #010409;--color-neutral-emphasis-plus: #6e7681;--color-neutral-emphasis: #6e7681;--color-neutral-muted: rgba(110,118,129,.4);--color-neutral-subtle: rgba(110,118,129,.1);--color-accent-fg: #2f81f7;--color-accent-emphasis: #1f6feb;--color-accent-muted: rgba(56,139,253,.4);--color-accent-subtle: rgba(56,139,253,.1);--color-success-fg: #3fb950;--color-success-emphasis: #238636;--color-success-muted: rgba(46,160,67,.4);--color-success-subtle: rgba(46,160,67,.15);--color-attention-fg: #d29922;--color-attention-emphasis: #9e6a03;--color-attention-muted: rgba(187,128,9,.4);--color-attention-subtle: rgba(187,128,9,.15);--color-severe-fg: #db6d28;--color-severe-emphasis: #bd561d;--color-severe-muted: rgba(219,109,40,.4);--color-severe-subtle: rgba(219,109,40,.1);--color-danger-fg: #f85149;--color-danger-emphasis: #da3633;--color-danger-muted: rgba(248,81,73,.4);--color-danger-subtle: rgba(248,81,73,.1);--color-open-fg: #3fb950;--color-open-emphasis: #238636;--color-open-muted: rgba(46,160,67,.4);--color-open-subtle: rgba(46,160,67,.15);--color-closed-fg: #f85149;--color-closed-emphasis: #da3633;--color-closed-muted: rgba(248,81,73,.4);--color-closed-subtle: rgba(248,81,73,.15);--color-done-fg: #a371f7;--color-done-emphasis: #8957e5;--color-done-muted: rgba(163,113,247,.4);--color-done-subtle: rgba(163,113,247,.1);--color-sponsors-fg: #db61a2;--color-sponsors-emphasis: #bf4b8a;--color-sponsors-muted: rgba(219,97,162,.4);--color-sponsors-subtle: rgba(219,97,162,.1);--color-primer-fg-disabled: #484f58;--color-primer-canvas-backdrop: rgba(1,4,9,.8);--color-primer-canvas-sticky: rgba(13,17,23,.95);--color-primer-border-active: #f78166;--color-primer-border-contrast: rgba(255,255,255,.2);--color-primer-shadow-highlight: 0 0 transparent;--color-primer-shadow-inset: 0 0 transparent;--color-scale-black: #010409;--color-scale-white: #ffffff;--color-scale-gray-0: #f0f6fc;--color-scale-gray-1: #c9d1d9;--color-scale-gray-2: #b1bac4;--color-scale-gray-3: #8b949e;--color-scale-gray-4: #6e7681;--color-scale-gray-5: #484f58;--color-scale-gray-6: #30363d;--color-scale-gray-7: #21262d;--color-scale-gray-8: #161b22;--color-scale-gray-9: #0d1117;--color-scale-blue-0: #cae8ff;--color-scale-blue-1: #a5d6ff;--color-scale-blue-2: #79c0ff;--color-scale-blue-3: #58a6ff;--color-scale-blue-4: #388bfd;--color-scale-blue-5: #1f6feb;--color-scale-blue-6: #1158c7;--color-scale-blue-7: #0d419d;--color-scale-blue-8: #0c2d6b;--color-scale-blue-9: #051d4d;--color-scale-green-0: #aff5b4;--color-scale-green-1: #7ee787;--color-scale-green-2: #56d364;--color-scale-green-3: #3fb950;--color-scale-green-4: #2ea043;--color-scale-green-5: #238636;--color-scale-green-6: #196c2e;--color-scale-green-7: #0f5323;--color-scale-green-8: #033a16;--color-scale-green-9: #04260f;--color-scale-yellow-0: #f8e3a1;--color-scale-yellow-1: #f2cc60;--color-scale-yellow-2: #e3b341;--color-scale-yellow-3: #d29922;--color-scale-yellow-4: #bb8009;--color-scale-yellow-5: #9e6a03;--color-scale-yellow-6: #845306;--color-scale-yellow-7: #693e00;--color-scale-yellow-8: #4b2900;--color-scale-yellow-9: #341a00;--color-scale-orange-0: #ffdfb6;--color-scale-orange-1: #ffc680;--color-scale-orange-2: #ffa657;--color-scale-orange-3: #f0883e;--color-scale-orange-4: #db6d28;--color-scale-orange-5: #bd561d;--color-scale-orange-6: #9b4215;--color-scale-orange-7: #762d0a;--color-scale-orange-8: #5a1e02;--color-scale-orange-9: #3d1300;--color-scale-red-0: #ffdcd7;--color-scale-red-1: #ffc1ba;--color-scale-red-2: #ffa198;--color-scale-red-3: #ff7b72;--color-scale-red-4: #f85149;--color-scale-red-5: #da3633;--color-scale-red-6: #b62324;--color-scale-red-7: #8e1519;--color-scale-red-8: #67060c;--color-scale-red-9: #490202;--color-scale-purple-0: #eddeff;--color-scale-purple-1: #e2c5ff;--color-scale-purple-2: #d2a8ff;--color-scale-purple-3: #bc8cff;--color-scale-purple-4: #a371f7;--color-scale-purple-5: #8957e5;--color-scale-purple-6: #6e40c9;--color-scale-purple-7: #553098;--color-scale-purple-8: #3c1e70;--color-scale-purple-9: #271052;--color-scale-pink-0: #ffdaec;--color-scale-pink-1: #ffbedd;--color-scale-pink-2: #ff9bce;--color-scale-pink-3: #f778ba;--color-scale-pink-4: #db61a2;--color-scale-pink-5: #bf4b8a;--color-scale-pink-6: #9e3670;--color-scale-pink-7: #7d2457;--color-scale-pink-8: #5e103e;--color-scale-pink-9: #42062a;--color-scale-coral-0: #ffddd2;--color-scale-coral-1: #ffc2b2;--color-scale-coral-2: #ffa28b;--color-scale-coral-3: #f78166;--color-scale-coral-4: #ea6045;--color-scale-coral-5: #cf462d;--color-scale-coral-6: #ac3220;--color-scale-coral-7: #872012;--color-scale-coral-8: #640d04;--color-scale-coral-9: #460701}.code-diff-view[theme=dark] pre code.hljs{display:block;overflow-x:auto;padding:1em}.code-diff-view[theme=dark] code.hljs{padding:3px 5px}.code-diff-view[theme=dark] .hljs{color:#c9d1d9;background:#0d1117}.code-diff-view[theme=dark] .hljs-doctag,.code-diff-view[theme=dark] .hljs-keyword,.code-diff-view[theme=dark] .hljs-meta .hljs-keyword,.code-diff-view[theme=dark] .hljs-template-tag,.code-diff-view[theme=dark] .hljs-template-variable,.code-diff-view[theme=dark] .hljs-type,.code-diff-view[theme=dark] .hljs-variable.language_{color:#ff7b72}.code-diff-view[theme=dark] .hljs-title,.code-diff-view[theme=dark] .hljs-title.class_,.code-diff-view[theme=dark] .hljs-title.class_.inherited__,.code-diff-view[theme=dark] .hljs-title.function_{color:#d2a8ff}.code-diff-view[theme=dark] .hljs-attr,.code-diff-view[theme=dark] .hljs-attribute,.code-diff-view[theme=dark] .hljs-literal,.code-diff-view[theme=dark] .hljs-meta,.code-diff-view[theme=dark] .hljs-number,.code-diff-view[theme=dark] .hljs-operator,.code-diff-view[theme=dark] .hljs-variable,.code-diff-view[theme=dark] .hljs-selector-attr,.code-diff-view[theme=dark] .hljs-selector-class,.code-diff-view[theme=dark] .hljs-selector-id{color:#79c0ff}.code-diff-view[theme=dark] .hljs-regexp,.code-diff-view[theme=dark] .hljs-string,.code-diff-view[theme=dark] .hljs-meta .hljs-string{color:#a5d6ff}.code-diff-view[theme=dark] .hljs-built_in,.code-diff-view[theme=dark] .hljs-symbol{color:#ffa657}.code-diff-view[theme=dark] .hljs-comment,.code-diff-view[theme=dark] .hljs-code,.code-diff-view[theme=dark] .hljs-formula{color:#8b949e}.code-diff-view[theme=dark] .hljs-name,.code-diff-view[theme=dark] .hljs-quote,.code-diff-view[theme=dark] .hljs-selector-tag,.code-diff-view[theme=dark] .hljs-selector-pseudo{color:#7ee787}.code-diff-view[theme=dark] .hljs-subst{color:#c9d1d9}.code-diff-view[theme=dark] .hljs-section{color:#1f6feb;font-weight:700}.code-diff-view[theme=dark] .hljs-bullet{color:#f2cc60}.code-diff-view[theme=dark] .hljs-emphasis{color:#c9d1d9;font-style:italic}.code-diff-view[theme=dark] .hljs-strong{color:#c9d1d9;font-weight:700}.code-diff-view[theme=dark] .hljs-addition{color:#aff5b4;background-color:#033a16}.code-diff-view[theme=dark] .hljs-deletion{color:#ffdcd7;background-color:#67060c}.code-diff-view{position:relative;margin-top:16px;margin-bottom:16px;border:1px solid var(--color-border-default, #ddd);border-radius:6px;overflow-y:auto}.code-diff-view *{position:static;box-sizing:border-box}.code-diff-view .file-header{background-color:var(--color-canvas-subtle);border-bottom:1px solid var(--color-border-default);padding:8px 16px;font-size:12px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace}.code-diff-view .file-header .file-info{display:flex;justify-content:space-between;align-items:center;margin-left:8px;height:24px}.code-diff-view .file-header .file-info .info-left{font-size:13px;color:var(--color-fg-default)}.code-diff-view .file-header .file-info .info-right{display:flex;justify-content:space-between;width:50%}.code-diff-view .file-header .file-info .diff-stat .diff-stat-added{color:var(--color-diffstat-addition-bg)}.code-diff-view .file-header .file-info .diff-stat .diff-stat-deleted{color:var(--color-danger-emphasis)}.code-diff-view table{border-spacing:0}.code-diff-view .diff-table{width:100%}.code-diff-view .diff-table .blob-num{position:relative;width:1%;min-width:50px;padding-right:10px;padding-left:10px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;line-height:20px;color:var(--color-fg-subtle);text-align:right;white-space:nowrap;vertical-align:top;cursor:pointer;-webkit-user-select:none;user-select:none}.code-diff-view .diff-table .blob-num-deletion{color:var(--color-diff-blob-deletion-num-text);background-color:var(--color-diff-blob-deletion-num-bg);border-color:var(--color-danger-emphasis)}.code-diff-view .diff-table .blob-num-addition{color:var(--color-diff-blob-addition-num-text);background-color:var(--color-diff-blob-addition-num-bg);border-color:var(--color-success-emphasis)}.code-diff-view .diff-table .blob-code{position:relative;padding-right:10px;padding-left:10px;line-height:20px;vertical-align:top}.code-diff-view .diff-table .blob-code .blob-code-inner{display:table-cell;overflow:visible;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;color:var(--color-fg-default);word-wrap:anywhere;white-space:pre-wrap}.code-diff-view .diff-table .blob-code-deletion{background-color:var(--color-diff-blob-deletion-line-bg);outline:1px dashed transparent}.code-diff-view .diff-table .blob-code-deletion .x{color:var(--color-diff-blob-deletion-fg);background-color:var(--color-diff-blob-deletion-word-bg)}.code-diff-view .diff-table .blob-code-addition{background-color:var(--color-diff-blob-addition-line-bg);outline:1px dotted transparent}.code-diff-view .diff-table .blob-code-addition .x{color:var(--color-diff-blob-addition-fg);background-color:var(--color-diff-blob-addition-word-bg)}.code-diff-view .diff-table .blob-code-context,.code-diff-view .diff-table .blob-code-addition,.code-diff-view .diff-table .blob-code-deletion{padding-left:22px!important}.code-diff-view .diff-table .blob-code-marker:before{position:absolute;top:1px;left:8px;padding-right:8px;content:attr(data-code-marker)}.code-diff-view .diff-table .blob-num-hunk{background-color:var(--color-diff-blob-hunk-num-bg)}.code-diff-view .diff-table .blob-code-hunk{background-color:var(--color-accent-subtle)}.code-diff-view .file-diff-split{table-layout:fixed}.code-diff-view .file-diff-split .blob-code+.blob-num{border-left:1px solid var(--color-border-muted)}.code-diff-view .file-diff-split .no-select{user-select:none}.code-diff-view .empty-cell{cursor:default;background-color:var(--color-neutral-subtle);border-right-color:var(--color-border-muted)}")), document.head.appendChild(o);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  Vue.util.warn;
  function ne() {
  }
  ne.prototype = {
    diff: function(e, s) {
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, g = u.callback;
      typeof u == "function" && (g = u, u = {}), this.options = u;
      var t = this;
      function r(_) {
        return g ? (setTimeout(function() {
          g(void 0, _);
        }, 0), true) : _;
      }
      e = this.castInput(e), s = this.castInput(s), e = this.removeEmpty(this.tokenize(e)), s = this.removeEmpty(this.tokenize(s));
      var i = s.length, a = e.length, o = 1, l = i + a;
      u.maxEditLength && (l = Math.min(l, u.maxEditLength));
      var c = [{
        newPos: -1,
        components: []
      }], f = this.extractCommon(c[0], s, e, 0);
      if (c[0].newPos + 1 >= i && f + 1 >= a)
        return r([{
          value: this.join(s),
          count: s.length
        }]);
      function h() {
        for (var _ = -1 * o; _ <= o; _ += 2) {
          var p = void 0, v = c[_ - 1], E = c[_ + 1], w = (E ? E.newPos : 0) - _;
          v && (c[_ - 1] = void 0);
          var y = v && v.newPos + 1 < i, D = E && 0 <= w && w < a;
          if (!y && !D) {
            c[_] = void 0;
            continue;
          }
          if (!y || D && v.newPos < E.newPos ? (p = kn(E), t.pushComponent(p.components, void 0, true)) : (p = v, p.newPos++, t.pushComponent(p.components, true, void 0)), w = t.extractCommon(p, s, e, _), p.newPos + 1 >= i && w + 1 >= a)
            return r(In(t, p.components, s, e, t.useLongestToken));
          c[_] = p;
        }
        o++;
      }
      if (g)
        (function _() {
          setTimeout(function() {
            if (o > l)
              return g();
            h() || _();
          }, 0);
        })();
      else
        for (; o <= l; ) {
          var d = h();
          if (d)
            return d;
        }
    },
    pushComponent: function(e, s, u) {
      var g = e[e.length - 1];
      g && g.added === s && g.removed === u ? e[e.length - 1] = {
        count: g.count + 1,
        added: s,
        removed: u
      } : e.push({
        count: 1,
        added: s,
        removed: u
      });
    },
    extractCommon: function(e, s, u, g) {
      for (var t = s.length, r = u.length, i = e.newPos, a = i - g, o = 0; i + 1 < t && a + 1 < r && this.equals(s[i + 1], u[a + 1]); )
        i++, a++, o++;
      return o && e.components.push({
        count: o
      }), e.newPos = i, a;
    },
    equals: function(e, s) {
      return this.options.comparator ? this.options.comparator(e, s) : e === s || this.options.ignoreCase && e.toLowerCase() === s.toLowerCase();
    },
    removeEmpty: function(e) {
      for (var s = [], u = 0; u < e.length; u++)
        e[u] && s.push(e[u]);
      return s;
    },
    castInput: function(e) {
      return e;
    },
    tokenize: function(e) {
      return e.split("");
    },
    join: function(e) {
      return e.join("");
    }
  };
  function In(n, e, s, u, g) {
    for (var t = 0, r = e.length, i = 0, a = 0; t < r; t++) {
      var o = e[t];
      if (o.removed) {
        if (o.value = n.join(u.slice(a, a + o.count)), a += o.count, t && e[t - 1].added) {
          var c = e[t - 1];
          e[t - 1] = e[t], e[t] = c;
        }
      } else {
        if (!o.added && g) {
          var l = s.slice(i, i + o.count);
          l = l.map(function(h, d) {
            var _ = u[a + d];
            return _.length > h.length ? _ : h;
          }), o.value = n.join(l);
        } else
          o.value = n.join(s.slice(i, i + o.count));
        i += o.count, o.added || (a += o.count);
      }
    }
    var f = e[r - 1];
    return r > 1 && typeof f.value == "string" && (f.added || f.removed) && n.equals("", f.value) && (e[r - 2].value += f.value, e.pop()), e;
  }
  function kn(n) {
    return {
      newPos: n.newPos,
      components: n.components.slice(0)
    };
  }
  var Bn = new ne();
  function $n(n, e, s) {
    return Bn.diff(n, e, s);
  }
  function Pn(n, e) {
    if (typeof n == "function")
      e.callback = n;
    else if (n)
      for (var s in n)
        n.hasOwnProperty(s) && (e[s] = n[s]);
    return e;
  }
  var We = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, Qe = /\S/, Be = new ne();
  Be.equals = function(n, e) {
    return this.options.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()), n === e || this.options.ignoreWhitespace && !Qe.test(n) && !Qe.test(e);
  };
  Be.tokenize = function(n) {
    for (var e = n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), s = 0; s < e.length - 1; s++)
      !e[s + 1] && e[s + 2] && We.test(e[s]) && We.test(e[s + 2]) && (e[s] += e[s + 2], e.splice(s + 1, 2), s--);
    return e;
  };
  function Un(n, e, s) {
    return s = Pn(s, {
      ignoreWhitespace: true
    }), Be.diff(n, e, s);
  }
  var tn = new ne();
  tn.tokenize = function(n) {
    var e = [], s = n.split(/(\n|\r\n)/);
    s[s.length - 1] || s.pop();
    for (var u = 0; u < s.length; u++) {
      var g = s[u];
      u % 2 && !this.options.newlineIsToken ? e[e.length - 1] += g : (this.options.ignoreWhitespace && (g = g.trim()), e.push(g));
    }
    return e;
  };
  var xn = new ne();
  xn.tokenize = function(n) {
    return n.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var Hn = new ne();
  Hn.tokenize = function(n) {
    return n.split(/([{}:;,]|\s+)/);
  };
  function Ae(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ae = function(e) {
      return typeof e;
    } : Ae = function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Ae(n);
  }
  var Fn = Object.prototype.toString, ge = new ne();
  ge.useLongestToken = true;
  ge.tokenize = tn.tokenize;
  ge.castInput = function(n) {
    var e = this.options, s = e.undefinedReplacement, u = e.stringifyReplacer, g = u === void 0 ? function(t, r) {
      return typeof r == "undefined" ? s : r;
    } : u;
    return typeof n == "string" ? n : JSON.stringify(Ie(n, null, null, g), g, "  ");
  };
  ge.equals = function(n, e) {
    return ne.prototype.equals.call(ge, n.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"));
  };
  function Ie(n, e, s, u, g) {
    e = e || [], s = s || [], u && (n = u(g, n));
    var t;
    for (t = 0; t < e.length; t += 1)
      if (e[t] === n)
        return s[t];
    var r;
    if (Fn.call(n) === "[object Array]") {
      for (e.push(n), r = new Array(n.length), s.push(r), t = 0; t < n.length; t += 1)
        r[t] = Ie(n[t], e, s, u, g);
      return e.pop(), s.pop(), r;
    }
    if (n && n.toJSON && (n = n.toJSON()), Ae(n) === "object" && n !== null) {
      e.push(n), r = {}, s.push(r);
      var i = [], a;
      for (a in n)
        n.hasOwnProperty(a) && i.push(a);
      for (i.sort(), t = 0; t < i.length; t += 1)
        a = i[t], r[a] = Ie(n[a], e, s, u, a);
      e.pop(), s.pop();
    } else
      r = n;
    return r;
  }
  var ke = new ne();
  ke.tokenize = function(n) {
    return n.slice();
  };
  ke.join = ke.removeEmpty = function(n) {
    return n;
  };
  function zn(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  var rn = { exports: {} };
  (function(n) {
    var e = function() {
      this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
    }, s = -1, u = 1, g = 0;
    e.Diff = function(t, r) {
      return [t, r];
    }, e.prototype.diff_main = function(t, r, i, a) {
      typeof a == "undefined" && (this.Diff_Timeout <= 0 ? a = Number.MAX_VALUE : a = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
      var o = a;
      if (t == null || r == null)
        throw new Error("Null input. (diff_main)");
      if (t == r)
        return t ? [new e.Diff(g, t)] : [];
      typeof i == "undefined" && (i = true);
      var l = i, c = this.diff_commonPrefix(t, r), f = t.substring(0, c);
      t = t.substring(c), r = r.substring(c), c = this.diff_commonSuffix(t, r);
      var h = t.substring(t.length - c);
      t = t.substring(0, t.length - c), r = r.substring(0, r.length - c);
      var d = this.diff_compute_(t, r, l, o);
      return f && d.unshift(new e.Diff(g, f)), h && d.push(new e.Diff(g, h)), this.diff_cleanupMerge(d), d;
    }, e.prototype.diff_compute_ = function(t, r, i, a) {
      var o;
      if (!t)
        return [new e.Diff(u, r)];
      if (!r)
        return [new e.Diff(s, t)];
      var l = t.length > r.length ? t : r, c = t.length > r.length ? r : t, f = l.indexOf(c);
      if (f != -1)
        return o = [
          new e.Diff(u, l.substring(0, f)),
          new e.Diff(g, c),
          new e.Diff(
            u,
            l.substring(f + c.length)
          )
        ], t.length > r.length && (o[0][0] = o[2][0] = s), o;
      if (c.length == 1)
        return [
          new e.Diff(s, t),
          new e.Diff(u, r)
        ];
      var h = this.diff_halfMatch_(t, r);
      if (h) {
        var d = h[0], _ = h[1], p = h[2], v = h[3], E = h[4], w = this.diff_main(d, p, i, a), y = this.diff_main(_, v, i, a);
        return w.concat(
          [new e.Diff(g, E)],
          y
        );
      }
      return i && t.length > 100 && r.length > 100 ? this.diff_lineMode_(t, r, a) : this.diff_bisect_(t, r, a);
    }, e.prototype.diff_lineMode_ = function(t, r, i) {
      var a = this.diff_linesToChars_(t, r);
      t = a.chars1, r = a.chars2;
      var o = a.lineArray, l = this.diff_main(t, r, false, i);
      this.diff_charsToLines_(l, o), this.diff_cleanupSemantic(l), l.push(new e.Diff(g, ""));
      for (var c = 0, f = 0, h = 0, d = "", _ = ""; c < l.length; ) {
        switch (l[c][0]) {
          case u:
            h++, _ += l[c][1];
            break;
          case s:
            f++, d += l[c][1];
            break;
          case g:
            if (f >= 1 && h >= 1) {
              l.splice(
                c - f - h,
                f + h
              ), c = c - f - h;
              for (var p = this.diff_main(d, _, false, i), v = p.length - 1; v >= 0; v--)
                l.splice(c, 0, p[v]);
              c = c + p.length;
            }
            h = 0, f = 0, d = "", _ = "";
            break;
        }
        c++;
      }
      return l.pop(), l;
    }, e.prototype.diff_bisect_ = function(t, r, i) {
      for (var a = t.length, o = r.length, l = Math.ceil((a + o) / 2), c = l, f = 2 * l, h = new Array(f), d = new Array(f), _ = 0; _ < f; _++)
        h[_] = -1, d[_] = -1;
      h[c + 1] = 0, d[c + 1] = 0;
      for (var p = a - o, v = p % 2 != 0, E = 0, w = 0, y = 0, D = 0, T = 0; T < l && !((/* @__PURE__ */ new Date()).getTime() > i); T++) {
        for (var M = -T + E; M <= T - w; M += 2) {
          var I = c + M, R;
          M == -T || M != T && h[I - 1] < h[I + 1] ? R = h[I + 1] : R = h[I - 1] + 1;
          for (var H = R - M; R < a && H < o && t.charAt(R) == r.charAt(H); )
            R++, H++;
          if (h[I] = R, R > a)
            w += 2;
          else if (H > o)
            E += 2;
          else if (v) {
            var P = c + p - M;
            if (P >= 0 && P < f && d[P] != -1) {
              var $ = a - d[P];
              if (R >= $)
                return this.diff_bisectSplit_(t, r, R, H, i);
            }
          }
        }
        for (var F = -T + y; F <= T - D; F += 2) {
          var P = c + F, $;
          F == -T || F != T && d[P - 1] < d[P + 1] ? $ = d[P + 1] : $ = d[P - 1] + 1;
          for (var W = $ - F; $ < a && W < o && t.charAt(a - $ - 1) == r.charAt(o - W - 1); )
            $++, W++;
          if (d[P] = $, $ > a)
            D += 2;
          else if (W > o)
            y += 2;
          else if (!v) {
            var I = c + p - F;
            if (I >= 0 && I < f && h[I] != -1) {
              var R = h[I], H = c + R - I;
              if ($ = a - $, R >= $)
                return this.diff_bisectSplit_(t, r, R, H, i);
            }
          }
        }
      }
      return [
        new e.Diff(s, t),
        new e.Diff(u, r)
      ];
    }, e.prototype.diff_bisectSplit_ = function(t, r, i, a, o) {
      var l = t.substring(0, i), c = r.substring(0, a), f = t.substring(i), h = r.substring(a), d = this.diff_main(l, c, false, o), _ = this.diff_main(f, h, false, o);
      return d.concat(_);
    }, e.prototype.diff_linesToChars_ = function(t, r) {
      var i = [], a = {};
      i[0] = "";
      function o(h) {
        for (var d = "", _ = 0, p = -1, v = i.length; p < h.length - 1; ) {
          p = h.indexOf(`
`, _), p == -1 && (p = h.length - 1);
          var E = h.substring(_, p + 1);
          (a.hasOwnProperty ? a.hasOwnProperty(E) : a[E] !== void 0) ? d += String.fromCharCode(a[E]) : (v == l && (E = h.substring(_), p = h.length), d += String.fromCharCode(v), a[E] = v, i[v++] = E), _ = p + 1;
        }
        return d;
      }
      var l = 4e4, c = o(t);
      l = 65535;
      var f = o(r);
      return { chars1: c, chars2: f, lineArray: i };
    }, e.prototype.diff_charsToLines_ = function(t, r) {
      for (var i = 0; i < t.length; i++) {
        for (var a = t[i][1], o = [], l = 0; l < a.length; l++)
          o[l] = r[a.charCodeAt(l)];
        t[i][1] = o.join("");
      }
    }, e.prototype.diff_commonPrefix = function(t, r) {
      if (!t || !r || t.charAt(0) != r.charAt(0))
        return 0;
      for (var i = 0, a = Math.min(t.length, r.length), o = a, l = 0; i < o; )
        t.substring(l, o) == r.substring(l, o) ? (i = o, l = i) : a = o, o = Math.floor((a - i) / 2 + i);
      return o;
    }, e.prototype.diff_commonSuffix = function(t, r) {
      if (!t || !r || t.charAt(t.length - 1) != r.charAt(r.length - 1))
        return 0;
      for (var i = 0, a = Math.min(t.length, r.length), o = a, l = 0; i < o; )
        t.substring(t.length - o, t.length - l) == r.substring(r.length - o, r.length - l) ? (i = o, l = i) : a = o, o = Math.floor((a - i) / 2 + i);
      return o;
    }, e.prototype.diff_commonOverlap_ = function(t, r) {
      var i = t.length, a = r.length;
      if (i == 0 || a == 0)
        return 0;
      i > a ? t = t.substring(i - a) : i < a && (r = r.substring(0, i));
      var o = Math.min(i, a);
      if (t == r)
        return o;
      for (var l = 0, c = 1; ; ) {
        var f = t.substring(o - c), h = r.indexOf(f);
        if (h == -1)
          return l;
        c += h, (h == 0 || t.substring(o - c) == r.substring(0, c)) && (l = c, c++);
      }
    }, e.prototype.diff_halfMatch_ = function(t, r) {
      if (this.Diff_Timeout <= 0)
        return null;
      var i = t.length > r.length ? t : r, a = t.length > r.length ? r : t;
      if (i.length < 4 || a.length * 2 < i.length)
        return null;
      var o = this;
      function l(w, y, D) {
        for (var T = w.substring(D, D + Math.floor(w.length / 4)), M = -1, I = "", R, H, P, $; (M = y.indexOf(T, M + 1)) != -1; ) {
          var F = o.diff_commonPrefix(
            w.substring(D),
            y.substring(M)
          ), W = o.diff_commonSuffix(
            w.substring(0, D),
            y.substring(0, M)
          );
          I.length < W + F && (I = y.substring(M - W, M) + y.substring(M, M + F), R = w.substring(0, D - W), H = w.substring(D + F), P = y.substring(0, M - W), $ = y.substring(M + F));
        }
        return I.length * 2 >= w.length ? [
          R,
          H,
          P,
          $,
          I
        ] : null;
      }
      var c = l(
        i,
        a,
        Math.ceil(i.length / 4)
      ), f = l(
        i,
        a,
        Math.ceil(i.length / 2)
      ), h;
      if (!c && !f)
        return null;
      f ? c ? h = c[4].length > f[4].length ? c : f : h = f : h = c;
      var d, _, p, v;
      t.length > r.length ? (d = h[0], _ = h[1], p = h[2], v = h[3]) : (p = h[0], v = h[1], d = h[2], _ = h[3]);
      var E = h[4];
      return [d, _, p, v, E];
    }, e.prototype.diff_cleanupSemantic = function(t) {
      for (var r = false, i = [], a = 0, o = null, l = 0, c = 0, f = 0, h = 0, d = 0; l < t.length; )
        t[l][0] == g ? (i[a++] = l, c = h, f = d, h = 0, d = 0, o = t[l][1]) : (t[l][0] == u ? h += t[l][1].length : d += t[l][1].length, o && o.length <= Math.max(c, f) && o.length <= Math.max(
          h,
          d
        ) && (t.splice(
          i[a - 1],
          0,
          new e.Diff(s, o)
        ), t[i[a - 1] + 1][0] = u, a--, a--, l = a > 0 ? i[a - 1] : -1, c = 0, f = 0, h = 0, d = 0, o = null, r = true)), l++;
      for (r && this.diff_cleanupMerge(t), this.diff_cleanupSemanticLossless(t), l = 1; l < t.length; ) {
        if (t[l - 1][0] == s && t[l][0] == u) {
          var _ = t[l - 1][1], p = t[l][1], v = this.diff_commonOverlap_(_, p), E = this.diff_commonOverlap_(p, _);
          v >= E ? (v >= _.length / 2 || v >= p.length / 2) && (t.splice(l, 0, new e.Diff(
            g,
            p.substring(0, v)
          )), t[l - 1][1] = _.substring(0, _.length - v), t[l + 1][1] = p.substring(v), l++) : (E >= _.length / 2 || E >= p.length / 2) && (t.splice(l, 0, new e.Diff(
            g,
            _.substring(0, E)
          )), t[l - 1][0] = u, t[l - 1][1] = p.substring(0, p.length - E), t[l + 1][0] = s, t[l + 1][1] = _.substring(E), l++), l++;
        }
        l++;
      }
    }, e.prototype.diff_cleanupSemanticLossless = function(t) {
      function r(E, w) {
        if (!E || !w)
          return 6;
        var y = E.charAt(E.length - 1), D = w.charAt(0), T = y.match(e.nonAlphaNumericRegex_), M = D.match(e.nonAlphaNumericRegex_), I = T && y.match(e.whitespaceRegex_), R = M && D.match(e.whitespaceRegex_), H = I && y.match(e.linebreakRegex_), P = R && D.match(e.linebreakRegex_), $ = H && E.match(e.blanklineEndRegex_), F = P && w.match(e.blanklineStartRegex_);
        return $ || F ? 5 : H || P ? 4 : T && !I && R ? 3 : I || R ? 2 : T || M ? 1 : 0;
      }
      for (var i = 1; i < t.length - 1; ) {
        if (t[i - 1][0] == g && t[i + 1][0] == g) {
          var a = t[i - 1][1], o = t[i][1], l = t[i + 1][1], c = this.diff_commonSuffix(a, o);
          if (c) {
            var f = o.substring(o.length - c);
            a = a.substring(0, a.length - c), o = f + o.substring(0, o.length - c), l = f + l;
          }
          for (var h = a, d = o, _ = l, p = r(a, o) + r(o, l); o.charAt(0) === l.charAt(0); ) {
            a += o.charAt(0), o = o.substring(1) + l.charAt(0), l = l.substring(1);
            var v = r(a, o) + r(o, l);
            v >= p && (p = v, h = a, d = o, _ = l);
          }
          t[i - 1][1] != h && (h ? t[i - 1][1] = h : (t.splice(i - 1, 1), i--), t[i][1] = d, _ ? t[i + 1][1] = _ : (t.splice(i + 1, 1), i--));
        }
        i++;
      }
    }, e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e.whitespaceRegex_ = /\s/, e.linebreakRegex_ = /[\r\n]/, e.blanklineEndRegex_ = /\n\r?\n$/, e.blanklineStartRegex_ = /^\r?\n\r?\n/, e.prototype.diff_cleanupEfficiency = function(t) {
      for (var r = false, i = [], a = 0, o = null, l = 0, c = false, f = false, h = false, d = false; l < t.length; )
        t[l][0] == g ? (t[l][1].length < this.Diff_EditCost && (h || d) ? (i[a++] = l, c = h, f = d, o = t[l][1]) : (a = 0, o = null), h = d = false) : (t[l][0] == s ? d = true : h = true, o && (c && f && h && d || o.length < this.Diff_EditCost / 2 && c + f + h + d == 3) && (t.splice(
          i[a - 1],
          0,
          new e.Diff(s, o)
        ), t[i[a - 1] + 1][0] = u, a--, o = null, c && f ? (h = d = true, a = 0) : (a--, l = a > 0 ? i[a - 1] : -1, h = d = false), r = true)), l++;
      r && this.diff_cleanupMerge(t);
    }, e.prototype.diff_cleanupMerge = function(t) {
      t.push(new e.Diff(g, ""));
      for (var r = 0, i = 0, a = 0, o = "", l = "", c; r < t.length; )
        switch (t[r][0]) {
          case u:
            a++, l += t[r][1], r++;
            break;
          case s:
            i++, o += t[r][1], r++;
            break;
          case g:
            i + a > 1 ? (i !== 0 && a !== 0 && (c = this.diff_commonPrefix(l, o), c !== 0 && (r - i - a > 0 && t[r - i - a - 1][0] == g ? t[r - i - a - 1][1] += l.substring(0, c) : (t.splice(0, 0, new e.Diff(
              g,
              l.substring(0, c)
            )), r++), l = l.substring(c), o = o.substring(c)), c = this.diff_commonSuffix(l, o), c !== 0 && (t[r][1] = l.substring(l.length - c) + t[r][1], l = l.substring(0, l.length - c), o = o.substring(0, o.length - c))), r -= i + a, t.splice(r, i + a), o.length && (t.splice(
              r,
              0,
              new e.Diff(s, o)
            ), r++), l.length && (t.splice(
              r,
              0,
              new e.Diff(u, l)
            ), r++), r++) : r !== 0 && t[r - 1][0] == g ? (t[r - 1][1] += t[r][1], t.splice(r, 1)) : r++, a = 0, i = 0, o = "", l = "";
            break;
        }
      t[t.length - 1][1] === "" && t.pop();
      var f = false;
      for (r = 1; r < t.length - 1; )
        t[r - 1][0] == g && t[r + 1][0] == g && (t[r][1].substring(t[r][1].length - t[r - 1][1].length) == t[r - 1][1] ? (t[r][1] = t[r - 1][1] + t[r][1].substring(0, t[r][1].length - t[r - 1][1].length), t[r + 1][1] = t[r - 1][1] + t[r + 1][1], t.splice(r - 1, 1), f = true) : t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1] && (t[r - 1][1] += t[r + 1][1], t[r][1] = t[r][1].substring(t[r + 1][1].length) + t[r + 1][1], t.splice(r + 1, 1), f = true)), r++;
      f && this.diff_cleanupMerge(t);
    }, e.prototype.diff_xIndex = function(t, r) {
      var i = 0, a = 0, o = 0, l = 0, c;
      for (c = 0; c < t.length && (t[c][0] !== u && (i += t[c][1].length), t[c][0] !== s && (a += t[c][1].length), !(i > r)); c++)
        o = i, l = a;
      return t.length != c && t[c][0] === s ? l : l + (r - o);
    }, e.prototype.diff_prettyHtml = function(t) {
      for (var r = [], i = /&/g, a = /</g, o = />/g, l = /\n/g, c = 0; c < t.length; c++) {
        var f = t[c][0], h = t[c][1], d = h.replace(i, "&amp;").replace(a, "&lt;").replace(o, "&gt;").replace(l, "&para;<br>");
        switch (f) {
          case u:
            r[c] = '<ins style="background:#e6ffe6;">' + d + "</ins>";
            break;
          case s:
            r[c] = '<del style="background:#ffe6e6;">' + d + "</del>";
            break;
          case g:
            r[c] = "<span>" + d + "</span>";
            break;
        }
      }
      return r.join("");
    }, e.prototype.diff_text1 = function(t) {
      for (var r = [], i = 0; i < t.length; i++)
        t[i][0] !== u && (r[i] = t[i][1]);
      return r.join("");
    }, e.prototype.diff_text2 = function(t) {
      for (var r = [], i = 0; i < t.length; i++)
        t[i][0] !== s && (r[i] = t[i][1]);
      return r.join("");
    }, e.prototype.diff_levenshtein = function(t) {
      for (var r = 0, i = 0, a = 0, o = 0; o < t.length; o++) {
        var l = t[o][0], c = t[o][1];
        switch (l) {
          case u:
            i += c.length;
            break;
          case s:
            a += c.length;
            break;
          case g:
            r += Math.max(i, a), i = 0, a = 0;
            break;
        }
      }
      return r += Math.max(i, a), r;
    }, e.prototype.diff_toDelta = function(t) {
      for (var r = [], i = 0; i < t.length; i++)
        switch (t[i][0]) {
          case u:
            r[i] = "+" + encodeURI(t[i][1]);
            break;
          case s:
            r[i] = "-" + t[i][1].length;
            break;
          case g:
            r[i] = "=" + t[i][1].length;
            break;
        }
      return r.join("	").replace(/%20/g, " ");
    }, e.prototype.diff_fromDelta = function(t, r) {
      for (var i = [], a = 0, o = 0, l = r.split(/\t/g), c = 0; c < l.length; c++) {
        var f = l[c].substring(1);
        switch (l[c].charAt(0)) {
          case "+":
            try {
              i[a++] = new e.Diff(u, decodeURI(f));
            } catch (_) {
              throw new Error("Illegal escape in diff_fromDelta: " + f);
            }
            break;
          case "-":
          case "=":
            var h = parseInt(f, 10);
            if (isNaN(h) || h < 0)
              throw new Error("Invalid number in diff_fromDelta: " + f);
            var d = t.substring(o, o += h);
            l[c].charAt(0) == "=" ? i[a++] = new e.Diff(g, d) : i[a++] = new e.Diff(s, d);
            break;
          default:
            if (l[c])
              throw new Error("Invalid diff operation in diff_fromDelta: " + l[c]);
        }
      }
      if (o != t.length)
        throw new Error("Delta length (" + o + ") does not equal source text length (" + t.length + ").");
      return i;
    }, e.prototype.match_main = function(t, r, i) {
      if (t == null || r == null || i == null)
        throw new Error("Null input. (match_main)");
      return i = Math.max(0, Math.min(i, t.length)), t == r ? 0 : t.length ? t.substring(i, i + r.length) == r ? i : this.match_bitap_(t, r, i) : -1;
    }, e.prototype.match_bitap_ = function(t, r, i) {
      if (r.length > this.Match_MaxBits)
        throw new Error("Pattern too long for this browser.");
      var a = this.match_alphabet_(r), o = this;
      function l(R, H) {
        var P = R / r.length, $ = Math.abs(i - H);
        return o.Match_Distance ? P + $ / o.Match_Distance : $ ? 1 : P;
      }
      var c = this.Match_Threshold, f = t.indexOf(r, i);
      f != -1 && (c = Math.min(l(0, f), c), f = t.lastIndexOf(r, i + r.length), f != -1 && (c = Math.min(l(0, f), c)));
      var h = 1 << r.length - 1;
      f = -1;
      for (var d, _, p = r.length + t.length, v, E = 0; E < r.length; E++) {
        for (d = 0, _ = p; d < _; )
          l(E, i + _) <= c ? d = _ : p = _, _ = Math.floor((p - d) / 2 + d);
        p = _;
        var w = Math.max(1, i - _ + 1), y = Math.min(i + _, t.length) + r.length, D = Array(y + 2);
        D[y + 1] = (1 << E) - 1;
        for (var T = y; T >= w; T--) {
          var M = a[t.charAt(T - 1)];
          if (E === 0 ? D[T] = (D[T + 1] << 1 | 1) & M : D[T] = (D[T + 1] << 1 | 1) & M | ((v[T + 1] | v[T]) << 1 | 1) | v[T + 1], D[T] & h) {
            var I = l(E, T - 1);
            if (I <= c)
              if (c = I, f = T - 1, f > i)
                w = Math.max(1, 2 * i - f);
              else
                break;
          }
        }
        if (l(E + 1, i) > c)
          break;
        v = D;
      }
      return f;
    }, e.prototype.match_alphabet_ = function(t) {
      for (var r = {}, i = 0; i < t.length; i++)
        r[t.charAt(i)] = 0;
      for (var i = 0; i < t.length; i++)
        r[t.charAt(i)] |= 1 << t.length - i - 1;
      return r;
    }, e.prototype.patch_addContext_ = function(t, r) {
      if (r.length != 0) {
        if (t.start2 === null)
          throw Error("patch not initialized");
        for (var i = r.substring(t.start2, t.start2 + t.length1), a = 0; r.indexOf(i) != r.lastIndexOf(i) && i.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
          a += this.Patch_Margin, i = r.substring(
            t.start2 - a,
            t.start2 + t.length1 + a
          );
        a += this.Patch_Margin;
        var o = r.substring(t.start2 - a, t.start2);
        o && t.diffs.unshift(new e.Diff(g, o));
        var l = r.substring(
          t.start2 + t.length1,
          t.start2 + t.length1 + a
        );
        l && t.diffs.push(new e.Diff(g, l)), t.start1 -= o.length, t.start2 -= o.length, t.length1 += o.length + l.length, t.length2 += o.length + l.length;
      }
    }, e.prototype.patch_make = function(t, r, i) {
      var a, o;
      if (typeof t == "string" && typeof r == "string" && typeof i == "undefined")
        a = /** @type {string} */
        t, o = this.diff_main(
          a,
          /** @type {string} */
          r,
          true
        ), o.length > 2 && (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o));
      else if (t && typeof t == "object" && typeof r == "undefined" && typeof i == "undefined")
        o = /** @type {!Array.<!diff_match_patch.Diff>} */
        t, a = this.diff_text1(o);
      else if (typeof t == "string" && r && typeof r == "object" && typeof i == "undefined")
        a = /** @type {string} */
        t, o = /** @type {!Array.<!diff_match_patch.Diff>} */
        r;
      else if (typeof t == "string" && typeof r == "string" && i && typeof i == "object")
        a = /** @type {string} */
        t, o = /** @type {!Array.<!diff_match_patch.Diff>} */
        i;
      else
        throw new Error("Unknown call format to patch_make.");
      if (o.length === 0)
        return [];
      for (var l = [], c = new e.patch_obj(), f = 0, h = 0, d = 0, _ = a, p = a, v = 0; v < o.length; v++) {
        var E = o[v][0], w = o[v][1];
        switch (!f && E !== g && (c.start1 = h, c.start2 = d), E) {
          case u:
            c.diffs[f++] = o[v], c.length2 += w.length, p = p.substring(0, d) + w + p.substring(d);
            break;
          case s:
            c.length1 += w.length, c.diffs[f++] = o[v], p = p.substring(0, d) + p.substring(d + w.length);
            break;
          case g:
            w.length <= 2 * this.Patch_Margin && f && o.length != v + 1 ? (c.diffs[f++] = o[v], c.length1 += w.length, c.length2 += w.length) : w.length >= 2 * this.Patch_Margin && f && (this.patch_addContext_(c, _), l.push(c), c = new e.patch_obj(), f = 0, _ = p, h = d);
            break;
        }
        E !== u && (h += w.length), E !== s && (d += w.length);
      }
      return f && (this.patch_addContext_(c, _), l.push(c)), l;
    }, e.prototype.patch_deepCopy = function(t) {
      for (var r = [], i = 0; i < t.length; i++) {
        var a = t[i], o = new e.patch_obj();
        o.diffs = [];
        for (var l = 0; l < a.diffs.length; l++)
          o.diffs[l] = new e.Diff(a.diffs[l][0], a.diffs[l][1]);
        o.start1 = a.start1, o.start2 = a.start2, o.length1 = a.length1, o.length2 = a.length2, r[i] = o;
      }
      return r;
    }, e.prototype.patch_apply = function(t, r) {
      if (t.length == 0)
        return [r, []];
      t = this.patch_deepCopy(t);
      var i = this.patch_addPadding(t);
      r = i + r + i, this.patch_splitMax(t);
      for (var a = 0, o = [], l = 0; l < t.length; l++) {
        var c = t[l].start2 + a, f = this.diff_text1(t[l].diffs), h, d = -1;
        if (f.length > this.Match_MaxBits ? (h = this.match_main(
          r,
          f.substring(0, this.Match_MaxBits),
          c
        ), h != -1 && (d = this.match_main(
          r,
          f.substring(f.length - this.Match_MaxBits),
          c + f.length - this.Match_MaxBits
        ), (d == -1 || h >= d) && (h = -1))) : h = this.match_main(r, f, c), h == -1)
          o[l] = false, a -= t[l].length2 - t[l].length1;
        else {
          o[l] = true, a = h - c;
          var _;
          if (d == -1 ? _ = r.substring(h, h + f.length) : _ = r.substring(h, d + this.Match_MaxBits), f == _)
            r = r.substring(0, h) + this.diff_text2(t[l].diffs) + r.substring(h + f.length);
          else {
            var p = this.diff_main(f, _, false);
            if (f.length > this.Match_MaxBits && this.diff_levenshtein(p) / f.length > this.Patch_DeleteThreshold)
              o[l] = false;
            else {
              this.diff_cleanupSemanticLossless(p);
              for (var v = 0, E, w = 0; w < t[l].diffs.length; w++) {
                var y = t[l].diffs[w];
                y[0] !== g && (E = this.diff_xIndex(p, v)), y[0] === u ? r = r.substring(0, h + E) + y[1] + r.substring(h + E) : y[0] === s && (r = r.substring(0, h + E) + r.substring(h + this.diff_xIndex(
                  p,
                  v + y[1].length
                ))), y[0] !== s && (v += y[1].length);
              }
            }
          }
        }
      }
      return r = r.substring(i.length, r.length - i.length), [r, o];
    }, e.prototype.patch_addPadding = function(t) {
      for (var r = this.Patch_Margin, i = "", a = 1; a <= r; a++)
        i += String.fromCharCode(a);
      for (var a = 0; a < t.length; a++)
        t[a].start1 += r, t[a].start2 += r;
      var o = t[0], l = o.diffs;
      if (l.length == 0 || l[0][0] != g)
        l.unshift(new e.Diff(g, i)), o.start1 -= r, o.start2 -= r, o.length1 += r, o.length2 += r;
      else if (r > l[0][1].length) {
        var c = r - l[0][1].length;
        l[0][1] = i.substring(l[0][1].length) + l[0][1], o.start1 -= c, o.start2 -= c, o.length1 += c, o.length2 += c;
      }
      if (o = t[t.length - 1], l = o.diffs, l.length == 0 || l[l.length - 1][0] != g)
        l.push(new e.Diff(g, i)), o.length1 += r, o.length2 += r;
      else if (r > l[l.length - 1][1].length) {
        var c = r - l[l.length - 1][1].length;
        l[l.length - 1][1] += i.substring(0, c), o.length1 += c, o.length2 += c;
      }
      return i;
    }, e.prototype.patch_splitMax = function(t) {
      for (var r = this.Match_MaxBits, i = 0; i < t.length; i++)
        if (!(t[i].length1 <= r)) {
          var a = t[i];
          t.splice(i--, 1);
          for (var o = a.start1, l = a.start2, c = ""; a.diffs.length !== 0; ) {
            var f = new e.patch_obj(), h = true;
            for (f.start1 = o - c.length, f.start2 = l - c.length, c !== "" && (f.length1 = f.length2 = c.length, f.diffs.push(new e.Diff(g, c))); a.diffs.length !== 0 && f.length1 < r - this.Patch_Margin; ) {
              var d = a.diffs[0][0], _ = a.diffs[0][1];
              d === u ? (f.length2 += _.length, l += _.length, f.diffs.push(a.diffs.shift()), h = false) : d === s && f.diffs.length == 1 && f.diffs[0][0] == g && _.length > 2 * r ? (f.length1 += _.length, o += _.length, h = false, f.diffs.push(new e.Diff(d, _)), a.diffs.shift()) : (_ = _.substring(
                0,
                r - f.length1 - this.Patch_Margin
              ), f.length1 += _.length, o += _.length, d === g ? (f.length2 += _.length, l += _.length) : h = false, f.diffs.push(new e.Diff(d, _)), _ == a.diffs[0][1] ? a.diffs.shift() : a.diffs[0][1] = a.diffs[0][1].substring(_.length));
            }
            c = this.diff_text2(f.diffs), c = c.substring(c.length - this.Patch_Margin);
            var p = this.diff_text1(a.diffs).substring(0, this.Patch_Margin);
            p !== "" && (f.length1 += p.length, f.length2 += p.length, f.diffs.length !== 0 && f.diffs[f.diffs.length - 1][0] === g ? f.diffs[f.diffs.length - 1][1] += p : f.diffs.push(new e.Diff(g, p))), h || t.splice(++i, 0, f);
          }
        }
    }, e.prototype.patch_toText = function(t) {
      for (var r = [], i = 0; i < t.length; i++)
        r[i] = t[i];
      return r.join("");
    }, e.prototype.patch_fromText = function(t) {
      var r = [];
      if (!t)
        return r;
      for (var i = t.split(`
`), a = 0, o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; a < i.length; ) {
        var l = i[a].match(o);
        if (!l)
          throw new Error("Invalid patch string: " + i[a]);
        var c = new e.patch_obj();
        for (r.push(c), c.start1 = parseInt(l[1], 10), l[2] === "" ? (c.start1--, c.length1 = 1) : l[2] == "0" ? c.length1 = 0 : (c.start1--, c.length1 = parseInt(l[2], 10)), c.start2 = parseInt(l[3], 10), l[4] === "" ? (c.start2--, c.length2 = 1) : l[4] == "0" ? c.length2 = 0 : (c.start2--, c.length2 = parseInt(l[4], 10)), a++; a < i.length; ) {
          var f = i[a].charAt(0);
          try {
            var h = decodeURI(i[a].substring(1));
          } catch (d) {
            throw new Error("Illegal escape in patch_fromText: " + h);
          }
          if (f == "-")
            c.diffs.push(new e.Diff(s, h));
          else if (f == "+")
            c.diffs.push(new e.Diff(u, h));
          else if (f == " ")
            c.diffs.push(new e.Diff(g, h));
          else {
            if (f == "@")
              break;
            if (f !== "")
              throw new Error('Invalid patch mode "' + f + '" in: ' + h);
          }
          a++;
        }
      }
      return r;
    }, e.patch_obj = function() {
      this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
    }, e.patch_obj.prototype.toString = function() {
      var t, r;
      this.length1 === 0 ? t = this.start1 + ",0" : this.length1 == 1 ? t = this.start1 + 1 : t = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? r = this.start2 + ",0" : this.length2 == 1 ? r = this.start2 + 1 : r = this.start2 + 1 + "," + this.length2;
      for (var i = ["@@ -" + t + " +" + r + ` @@
`], a, o = 0; o < this.diffs.length; o++) {
        switch (this.diffs[o][0]) {
          case u:
            a = "+";
            break;
          case s:
            a = "-";
            break;
          case g:
            a = " ";
            break;
        }
        i[o + 1] = a + encodeURI(this.diffs[o][1]) + `
`;
      }
      return i.join("").replace(/%20/g, " ");
    }, n.exports = e, n.exports.diff_match_patch = e, n.exports.DIFF_DELETE = s, n.exports.DIFF_INSERT = u, n.exports.DIFF_EQUAL = g;
  })(rn);
  var Le = rn.exports;
  function sn(n) {
    return n instanceof Map ? n.clear = n.delete = n.set = function() {
      throw new Error("map is read-only");
    } : n instanceof Set && (n.add = n.clear = n.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(n), Object.getOwnPropertyNames(n).forEach((e) => {
      const s = n[e], u = typeof s;
      (u === "object" || u === "function") && !Object.isFrozen(s) && sn(s);
    }), n;
  }
  class Ve {
    /**
     * @param {CompiledMode} mode
     */
    constructor(e) {
      e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function an(n) {
    return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function te(n, ...e) {
    const s = /* @__PURE__ */ Object.create(null);
    for (const u in n)
      s[u] = n[u];
    return e.forEach(function(u) {
      for (const g in u)
        s[g] = u[g];
    }), /** @type {T} */
    s;
  }
  const Gn = "</span>", Ze = (n) => !!n.scope, Kn = (n, { prefix: e }) => {
    if (n.startsWith("language:"))
      return n.replace("language:", "language-");
    if (n.includes(".")) {
      const s = n.split(".");
      return [
        `${e}${s.shift()}`,
        ...s.map((u, g) => `${u}${"_".repeat(g + 1)}`)
      ].join(" ");
    }
    return `${e}${n}`;
  };
  class Wn {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(e, s) {
      this.buffer = "", this.classPrefix = s.classPrefix, e.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(e) {
      this.buffer += an(e);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(e) {
      if (!Ze(e))
        return;
      const s = Kn(
        e.scope,
        { prefix: this.classPrefix }
      );
      this.span(s);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(e) {
      Ze(e) && (this.buffer += Gn);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  const Ye = (n = {}) => {
    const e = { children: [] };
    return Object.assign(e, n), e;
  };
  class $e {
    constructor() {
      this.rootNode = Ye(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(e) {
      this.top.children.push(e);
    }
    /** @param {string} scope */
    openNode(e) {
      const s = Ye({ scope: e });
      this.add(s), this.stack.push(s);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); )
        ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(e, s) {
      return typeof s == "string" ? e.addText(s) : s.children && (e.openNode(s), s.children.forEach((u) => this._walk(e, u)), e.closeNode(s)), e;
    }
    /**
     * @param {Node} node
     */
    static _collapse(e) {
      typeof e != "string" && e.children && (e.children.every((s) => typeof s == "string") ? e.children = [e.children.join("")] : e.children.forEach((s) => {
        $e._collapse(s);
      }));
    }
  }
  class Qn extends $e {
    /**
     * @param {*} options
     */
    constructor(e) {
      super(), this.options = e;
    }
    /**
     * @param {string} text
     */
    addText(e) {
      e !== "" && this.add(e);
    }
    /** @param {string} scope */
    startScope(e) {
      this.openNode(e);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(e, s) {
      const u = e.root;
      s && (u.scope = `language:${s}`), this.add(u);
    }
    toHTML() {
      return new Wn(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), true;
    }
  }
  function he(n) {
    return n ? typeof n == "string" ? n : n.source : null;
  }
  function on(n) {
    return se("(?=", n, ")");
  }
  function Vn(n) {
    return se("(?:", n, ")*");
  }
  function Zn(n) {
    return se("(?:", n, ")?");
  }
  function se(...n) {
    return n.map((s) => he(s)).join("");
  }
  function Yn(n) {
    const e = n[n.length - 1];
    return typeof e == "object" && e.constructor === Object ? (n.splice(n.length - 1, 1), e) : {};
  }
  function Pe(...n) {
    return "(" + (Yn(n).capture ? "" : "?:") + n.map((u) => he(u)).join("|") + ")";
  }
  function ln(n) {
    return new RegExp(n.toString() + "|").exec("").length - 1;
  }
  function Xn(n, e) {
    const s = n && n.exec(e);
    return s && s.index === 0;
  }
  const jn = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function Ue(n, { joinWith: e }) {
    let s = 0;
    return n.map((u) => {
      s += 1;
      const g = s;
      let t = he(u), r = "";
      for (; t.length > 0; ) {
        const i = jn.exec(t);
        if (!i) {
          r += t;
          break;
        }
        r += t.substring(0, i.index), t = t.substring(i.index + i[0].length), i[0][0] === "\\" && i[1] ? r += "\\" + String(Number(i[1]) + g) : (r += i[0], i[0] === "(" && s++);
      }
      return r;
    }).map((u) => `(${u})`).join(e);
  }
  const Jn = /\b\B/, cn = "[a-zA-Z]\\w*", xe = "[a-zA-Z_]\\w*", un = "\\b\\d+(\\.\\d+)?", fn = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", gn = "\\b(0b[01]+)", qn = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", et = (n = {}) => {
    const e = /^#![ ]*\//;
    return n.binary && (n.begin = se(
      e,
      /.*\b/,
      n.binary,
      /\b.*/
    )), te({
      scope: "meta",
      begin: e,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (s, u) => {
        s.index !== 0 && u.ignoreMatch();
      }
    }, n);
  }, de = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, nt = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [de]
  }, tt = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [de]
  }, rt = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, Se = function(n, e, s = {}) {
    const u = te(
      {
        scope: "comment",
        begin: n,
        end: e,
        contains: []
      },
      s
    );
    u.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const g = Pe(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return u.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: se(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          g,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), u;
  }, it = Se("//", "$"), st = Se("/\\*", "\\*/"), at = Se("#", "$"), ot = {
    scope: "number",
    begin: un,
    relevance: 0
  }, lt = {
    scope: "number",
    begin: fn,
    relevance: 0
  }, ct = {
    scope: "number",
    begin: gn,
    relevance: 0
  }, ut = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      de,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [de]
      }
    ]
  }, ft = {
    scope: "title",
    begin: cn,
    relevance: 0
  }, gt = {
    scope: "title",
    begin: xe,
    relevance: 0
  }, ht = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + xe,
    relevance: 0
  }, dt = function(n) {
    return Object.assign(
      n,
      {
        /** @type {ModeCallback} */
        "on:begin": (e, s) => {
          s.data._beginMatch = e[1];
        },
        /** @type {ModeCallback} */
        "on:end": (e, s) => {
          s.data._beginMatch !== e[1] && s.ignoreMatch();
        }
      }
    );
  };
  var ye = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: nt,
    BACKSLASH_ESCAPE: de,
    BINARY_NUMBER_MODE: ct,
    BINARY_NUMBER_RE: gn,
    COMMENT: Se,
    C_BLOCK_COMMENT_MODE: st,
    C_LINE_COMMENT_MODE: it,
    C_NUMBER_MODE: lt,
    C_NUMBER_RE: fn,
    END_SAME_AS_BEGIN: dt,
    HASH_COMMENT_MODE: at,
    IDENT_RE: cn,
    MATCH_NOTHING_RE: Jn,
    METHOD_GUARD: ht,
    NUMBER_MODE: ot,
    NUMBER_RE: un,
    PHRASAL_WORDS_MODE: rt,
    QUOTE_STRING_MODE: tt,
    REGEXP_MODE: ut,
    RE_STARTERS_RE: qn,
    SHEBANG: et,
    TITLE_MODE: ft,
    UNDERSCORE_IDENT_RE: xe,
    UNDERSCORE_TITLE_MODE: gt
  });
  function _t(n, e) {
    n.input[n.index - 1] === "." && e.ignoreMatch();
  }
  function pt(n, e) {
    n.className !== void 0 && (n.scope = n.className, delete n.className);
  }
  function bt(n, e) {
    e && n.beginKeywords && (n.begin = "\\b(" + n.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", n.__beforeBegin = _t, n.keywords = n.keywords || n.beginKeywords, delete n.beginKeywords, n.relevance === void 0 && (n.relevance = 0));
  }
  function vt(n, e) {
    Array.isArray(n.illegal) && (n.illegal = Pe(...n.illegal));
  }
  function Et(n, e) {
    if (n.match) {
      if (n.begin || n.end)
        throw new Error("begin & end are not supported with match");
      n.begin = n.match, delete n.match;
    }
  }
  function mt(n, e) {
    n.relevance === void 0 && (n.relevance = 1);
  }
  const yt = (n, e) => {
    if (!n.beforeMatch)
      return;
    if (n.starts)
      throw new Error("beforeMatch cannot be used with starts");
    const s = Object.assign({}, n);
    Object.keys(n).forEach((u) => {
      delete n[u];
    }), n.keywords = s.keywords, n.begin = se(s.beforeMatch, on(s.begin)), n.starts = {
      relevance: 0,
      contains: [
        Object.assign(s, { endsParent: true })
      ]
    }, n.relevance = 0, delete s.beforeMatch;
  }, wt = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Nt = "keyword";
  function hn(n, e, s = Nt) {
    const u = /* @__PURE__ */ Object.create(null);
    return typeof n == "string" ? g(s, n.split(" ")) : Array.isArray(n) ? g(s, n) : Object.keys(n).forEach(function(t) {
      Object.assign(
        u,
        hn(n[t], e, t)
      );
    }), u;
    function g(t, r) {
      e && (r = r.map((i) => i.toLowerCase())), r.forEach(function(i) {
        const a = i.split("|");
        u[a[0]] = [t, At(a[0], a[1])];
      });
    }
  }
  function At(n, e) {
    return e ? Number(e) : Mt(n) ? 0 : 1;
  }
  function Mt(n) {
    return wt.includes(n.toLowerCase());
  }
  const Xe = {}, ie = (n) => {
    console.error(n);
  }, je = (n, ...e) => {
    console.log(`WARN: ${n}`, ...e);
  }, oe = (n, e) => {
    Xe[`${n}/${e}`] || (console.log(`Deprecated as of ${n}. ${e}`), Xe[`${n}/${e}`] = true);
  }, Me = new Error();
  function dn(n, e, { key: s }) {
    let u = 0;
    const g = n[s], t = {}, r = {};
    for (let i = 1; i <= e.length; i++)
      r[i + u] = g[i], t[i + u] = true, u += ln(e[i - 1]);
    n[s] = r, n[s]._emit = t, n[s]._multi = true;
  }
  function Tt(n) {
    if (Array.isArray(n.begin)) {
      if (n.skip || n.excludeBegin || n.returnBegin)
        throw ie("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Me;
      if (typeof n.beginScope != "object" || n.beginScope === null)
        throw ie("beginScope must be object"), Me;
      dn(n, n.begin, { key: "beginScope" }), n.begin = Ue(n.begin, { joinWith: "" });
    }
  }
  function St(n) {
    if (Array.isArray(n.end)) {
      if (n.skip || n.excludeEnd || n.returnEnd)
        throw ie("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Me;
      if (typeof n.endScope != "object" || n.endScope === null)
        throw ie("endScope must be object"), Me;
      dn(n, n.end, { key: "endScope" }), n.end = Ue(n.end, { joinWith: "" });
    }
  }
  function Dt(n) {
    n.scope && typeof n.scope == "object" && n.scope !== null && (n.beginScope = n.scope, delete n.scope);
  }
  function Rt(n) {
    Dt(n), typeof n.beginScope == "string" && (n.beginScope = { _wrap: n.beginScope }), typeof n.endScope == "string" && (n.endScope = { _wrap: n.endScope }), Tt(n), St(n);
  }
  function Ct(n) {
    function e(r, i) {
      return new RegExp(
        he(r),
        "m" + (n.case_insensitive ? "i" : "") + (n.unicodeRegex ? "u" : "") + (i ? "g" : "")
      );
    }
    class s {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(i, a) {
        a.position = this.position++, this.matchIndexes[this.matchAt] = a, this.regexes.push([a, i]), this.matchAt += ln(i) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const i = this.regexes.map((a) => a[1]);
        this.matcherRe = e(Ue(i, { joinWith: "|" }), true), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(i) {
        this.matcherRe.lastIndex = this.lastIndex;
        const a = this.matcherRe.exec(i);
        if (!a)
          return null;
        const o = a.findIndex((c, f) => f > 0 && c !== void 0), l = this.matchIndexes[o];
        return a.splice(0, o), Object.assign(a, l);
      }
    }
    class u {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(i) {
        if (this.multiRegexes[i])
          return this.multiRegexes[i];
        const a = new s();
        return this.rules.slice(i).forEach(([o, l]) => a.addRule(o, l)), a.compile(), this.multiRegexes[i] = a, a;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(i, a) {
        this.rules.push([i, a]), a.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(i) {
        const a = this.getMatcher(this.regexIndex);
        a.lastIndex = this.lastIndex;
        let o = a.exec(i);
        if (this.resumingScanAtSamePosition() && !(o && o.index === this.lastIndex)) {
          const l = this.getMatcher(0);
          l.lastIndex = this.lastIndex + 1, o = l.exec(i);
        }
        return o && (this.regexIndex += o.position + 1, this.regexIndex === this.count && this.considerAll()), o;
      }
    }
    function g(r) {
      const i = new u();
      return r.contains.forEach((a) => i.addRule(a.begin, { rule: a, type: "begin" })), r.terminatorEnd && i.addRule(r.terminatorEnd, { type: "end" }), r.illegal && i.addRule(r.illegal, { type: "illegal" }), i;
    }
    function t(r, i) {
      const a = (
        /** @type CompiledMode */
        r
      );
      if (r.isCompiled)
        return a;
      [
        pt,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Et,
        Rt,
        yt
      ].forEach((l) => l(r, i)), n.compilerExtensions.forEach((l) => l(r, i)), r.__beforeBegin = null, [
        bt,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        vt,
        // default to 1 relevance if not specified
        mt
      ].forEach((l) => l(r, i)), r.isCompiled = true;
      let o = null;
      return typeof r.keywords == "object" && r.keywords.$pattern && (r.keywords = Object.assign({}, r.keywords), o = r.keywords.$pattern, delete r.keywords.$pattern), o = o || /\w+/, r.keywords && (r.keywords = hn(r.keywords, n.case_insensitive)), a.keywordPatternRe = e(o, true), i && (r.begin || (r.begin = /\B|\b/), a.beginRe = e(a.begin), !r.end && !r.endsWithParent && (r.end = /\B|\b/), r.end && (a.endRe = e(a.end)), a.terminatorEnd = he(a.end) || "", r.endsWithParent && i.terminatorEnd && (a.terminatorEnd += (r.end ? "|" : "") + i.terminatorEnd)), r.illegal && (a.illegalRe = e(
        /** @type {RegExp | string} */
        r.illegal
      )), r.contains || (r.contains = []), r.contains = [].concat(...r.contains.map(function(l) {
        return Lt(l === "self" ? r : l);
      })), r.contains.forEach(function(l) {
        t(
          /** @type Mode */
          l,
          a
        );
      }), r.starts && t(r.starts, i), a.matcher = g(a), a;
    }
    if (n.compilerExtensions || (n.compilerExtensions = []), n.contains && n.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return n.classNameAliases = te(n.classNameAliases || {}), t(
      /** @type Mode */
      n
    );
  }
  function _n(n) {
    return n ? n.endsWithParent || _n(n.starts) : false;
  }
  function Lt(n) {
    return n.variants && !n.cachedVariants && (n.cachedVariants = n.variants.map(function(e) {
      return te(n, { variants: null }, e);
    })), n.cachedVariants ? n.cachedVariants : _n(n) ? te(n, { starts: n.starts ? te(n.starts) : null }) : Object.isFrozen(n) ? te(n) : n;
  }
  var Ot = "11.9.0";
  class It extends Error {
    constructor(e, s) {
      super(e), this.name = "HTMLInjectionError", this.html = s;
    }
  }
  const Oe = an, Je = te, qe = Symbol("nomatch"), kt = 7, pn = function(n) {
    const e = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), u = [];
    let g = true;
    const t = "Could not find the language '{}', did you forget to load/include a language module?", r = { disableAutodetect: true, name: "Plain text", contains: [] };
    let i = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: Qn
    };
    function a(b) {
      return i.noHighlightRe.test(b);
    }
    function o(b) {
      let N = b.className + " ";
      N += b.parentNode ? b.parentNode.className : "";
      const L = i.languageDetectRe.exec(N);
      if (L) {
        const k = R(L[1]);
        return k || (je(t.replace("{}", L[1])), je("Falling back to no-highlight mode for this block.", b)), k ? L[1] : "no-highlight";
      }
      return N.split(/\s+/).find((k) => a(k) || R(k));
    }
    function l(b, N, L) {
      let k = "", x = "";
      typeof N == "object" ? (k = b, L = N.ignoreIllegals, x = N.language) : (oe("10.7.0", "highlight(lang, code, ...args) has been deprecated."), oe("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), x = b, k = N), L === void 0 && (L = true);
      const K = {
        code: k,
        language: x
      };
      ae("before:highlight", K);
      const Y = K.result ? K.result : c(K.language, K.code, L);
      return Y.code = K.code, ae("after:highlight", Y), Y;
    }
    function c(b, N, L, k) {
      const x = /* @__PURE__ */ Object.create(null);
      function K(m, A) {
        return m.keywords[A];
      }
      function Y() {
        if (!C.keywords) {
          z.addText(U);
          return;
        }
        let m = 0;
        C.keywordPatternRe.lastIndex = 0;
        let A = C.keywordPatternRe.exec(U), O = "";
        for (; A; ) {
          O += U.substring(m, A.index);
          const B = j.case_insensitive ? A[0].toLowerCase() : A[0], G = K(C, B);
          if (G) {
            const [J, Dn] = G;
            if (z.addText(O), O = "", x[B] = (x[B] || 0) + 1, x[B] <= kt && (me += Dn), J.startsWith("_"))
              O += A[0];
            else {
              const Rn = j.classNameAliases[J] || J;
              X(A[0], Rn);
            }
          } else
            O += A[0];
          m = C.keywordPatternRe.lastIndex, A = C.keywordPatternRe.exec(U);
        }
        O += U.substring(m), z.addText(O);
      }
      function ve() {
        if (U === "")
          return;
        let m = null;
        if (typeof C.subLanguage == "string") {
          if (!e[C.subLanguage]) {
            z.addText(U);
            return;
          }
          m = c(C.subLanguage, U, true, Ke[C.subLanguage]), Ke[C.subLanguage] = /** @type {CompiledMode} */
          m._top;
        } else
          m = h(U, C.subLanguage.length ? C.subLanguage : null);
        C.relevance > 0 && (me += m.relevance), z.__addSublanguage(m._emitter, m.language);
      }
      function Q() {
        C.subLanguage != null ? ve() : Y(), U = "";
      }
      function X(m, A) {
        m !== "" && (z.startScope(A), z.addText(m), z.endScope());
      }
      function He(m, A) {
        let O = 1;
        const B = A.length - 1;
        for (; O <= B; ) {
          if (!m._emit[O]) {
            O++;
            continue;
          }
          const G = j.classNameAliases[m[O]] || m[O], J = A[O];
          G ? X(J, G) : (U = J, Y(), U = ""), O++;
        }
      }
      function Fe(m, A) {
        return m.scope && typeof m.scope == "string" && z.openNode(j.classNameAliases[m.scope] || m.scope), m.beginScope && (m.beginScope._wrap ? (X(U, j.classNameAliases[m.beginScope._wrap] || m.beginScope._wrap), U = "") : m.beginScope._multi && (He(m.beginScope, A), U = "")), C = Object.create(m, { parent: { value: C } }), C;
      }
      function ze(m, A, O) {
        let B = Xn(m.endRe, O);
        if (B) {
          if (m["on:end"]) {
            const G = new Ve(m);
            m["on:end"](A, G), G.isMatchIgnored && (B = false);
          }
          if (B) {
            for (; m.endsParent && m.parent; )
              m = m.parent;
            return m;
          }
        }
        if (m.endsWithParent)
          return ze(m.parent, A, O);
      }
      function Nn(m) {
        return C.matcher.regexIndex === 0 ? (U += m[0], 1) : (Ce = true, 0);
      }
      function An(m) {
        const A = m[0], O = m.rule, B = new Ve(O), G = [O.__beforeBegin, O["on:begin"]];
        for (const J of G)
          if (J && (J(m, B), B.isMatchIgnored))
            return Nn(A);
        return O.skip ? U += A : (O.excludeBegin && (U += A), Q(), !O.returnBegin && !O.excludeBegin && (U = A)), Fe(O, m), O.returnBegin ? 0 : A.length;
      }
      function Mn(m) {
        const A = m[0], O = N.substring(m.index), B = ze(C, m, O);
        if (!B)
          return qe;
        const G = C;
        C.endScope && C.endScope._wrap ? (Q(), X(A, C.endScope._wrap)) : C.endScope && C.endScope._multi ? (Q(), He(C.endScope, m)) : G.skip ? U += A : (G.returnEnd || G.excludeEnd || (U += A), Q(), G.excludeEnd && (U = A));
        do
          C.scope && z.closeNode(), !C.skip && !C.subLanguage && (me += C.relevance), C = C.parent;
        while (C !== B.parent);
        return B.starts && Fe(B.starts, m), G.returnEnd ? 0 : A.length;
      }
      function Tn() {
        const m = [];
        for (let A = C; A !== j; A = A.parent)
          A.scope && m.unshift(A.scope);
        m.forEach((A) => z.openNode(A));
      }
      let Ee = {};
      function Ge(m, A) {
        const O = A && A[0];
        if (U += m, O == null)
          return Q(), 0;
        if (Ee.type === "begin" && A.type === "end" && Ee.index === A.index && O === "") {
          if (U += N.slice(A.index, A.index + 1), !g) {
            const B = new Error(`0 width match regex (${b})`);
            throw B.languageName = b, B.badRule = Ee.rule, B;
          }
          return 1;
        }
        if (Ee = A, A.type === "begin")
          return An(A);
        if (A.type === "illegal" && !L) {
          const B = new Error('Illegal lexeme "' + O + '" for mode "' + (C.scope || "<unnamed>") + '"');
          throw B.mode = C, B;
        } else if (A.type === "end") {
          const B = Mn(A);
          if (B !== qe)
            return B;
        }
        if (A.type === "illegal" && O === "")
          return 1;
        if (Re > 1e5 && Re > A.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return U += O, O.length;
      }
      const j = R(b);
      if (!j)
        throw ie(t.replace("{}", b)), new Error('Unknown language: "' + b + '"');
      const Sn = Ct(j);
      let De = "", C = k || Sn;
      const Ke = {}, z = new i.__emitter(i);
      Tn();
      let U = "", me = 0, re = 0, Re = 0, Ce = false;
      try {
        if (j.__emitTokens)
          j.__emitTokens(N, z);
        else {
          for (C.matcher.considerAll(); ; ) {
            Re++, Ce ? Ce = false : C.matcher.considerAll(), C.matcher.lastIndex = re;
            const m = C.matcher.exec(N);
            if (!m)
              break;
            const A = N.substring(re, m.index), O = Ge(A, m);
            re = m.index + O;
          }
          Ge(N.substring(re));
        }
        return z.finalize(), De = z.toHTML(), {
          language: b,
          value: De,
          relevance: me,
          illegal: false,
          _emitter: z,
          _top: C
        };
      } catch (m) {
        if (m.message && m.message.includes("Illegal"))
          return {
            language: b,
            value: Oe(N),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: m.message,
              index: re,
              context: N.slice(re - 100, re + 100),
              mode: m.mode,
              resultSoFar: De
            },
            _emitter: z
          };
        if (g)
          return {
            language: b,
            value: Oe(N),
            illegal: false,
            relevance: 0,
            errorRaised: m,
            _emitter: z,
            _top: C
          };
        throw m;
      }
    }
    function f(b) {
      const N = {
        value: Oe(b),
        illegal: false,
        relevance: 0,
        _top: r,
        _emitter: new i.__emitter(i)
      };
      return N._emitter.addText(b), N;
    }
    function h(b, N) {
      N = N || i.languages || Object.keys(e);
      const L = f(b), k = N.filter(R).filter(P).map(
        (Q) => c(Q, b, false)
      );
      k.unshift(L);
      const x = k.sort((Q, X) => {
        if (Q.relevance !== X.relevance)
          return X.relevance - Q.relevance;
        if (Q.language && X.language) {
          if (R(Q.language).supersetOf === X.language)
            return 1;
          if (R(X.language).supersetOf === Q.language)
            return -1;
        }
        return 0;
      }), [K, Y] = x, ve = K;
      return ve.secondBest = Y, ve;
    }
    function d(b, N, L) {
      const k = N && s[N] || L;
      b.classList.add("hljs"), b.classList.add(`language-${k}`);
    }
    function _(b) {
      let N = null;
      const L = o(b);
      if (a(L))
        return;
      if (ae(
        "before:highlightElement",
        { el: b, language: L }
      ), b.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", b);
        return;
      }
      if (b.children.length > 0 && (i.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(b)), i.throwUnescapedHTML))
        throw new It(
          "One of your code blocks includes unescaped HTML.",
          b.innerHTML
        );
      N = b;
      const k = N.textContent, x = L ? l(k, { language: L, ignoreIllegals: true }) : h(k);
      b.innerHTML = x.value, b.dataset.highlighted = "yes", d(b, L, x.language), b.result = {
        language: x.language,
        // TODO: remove with version 11.0
        re: x.relevance,
        relevance: x.relevance
      }, x.secondBest && (b.secondBest = {
        language: x.secondBest.language,
        relevance: x.secondBest.relevance
      }), ae("after:highlightElement", { el: b, result: x, text: k });
    }
    function p(b) {
      i = Je(i, b);
    }
    const v = () => {
      y(), oe("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function E() {
      y(), oe("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let w = false;
    function y() {
      if (document.readyState === "loading") {
        w = true;
        return;
      }
      document.querySelectorAll(i.cssSelector).forEach(_);
    }
    function D() {
      w && y();
    }
    typeof window != "undefined" && window.addEventListener && window.addEventListener("DOMContentLoaded", D, false);
    function T(b, N) {
      let L = null;
      try {
        L = N(n);
      } catch (k) {
        if (ie("Language definition for '{}' could not be registered.".replace("{}", b)), g)
          ie(k);
        else
          throw k;
        L = r;
      }
      L.name || (L.name = b), e[b] = L, L.rawDefinition = N.bind(null, n), L.aliases && H(L.aliases, { languageName: b });
    }
    function M(b) {
      delete e[b];
      for (const N of Object.keys(s))
        s[N] === b && delete s[N];
    }
    function I() {
      return Object.keys(e);
    }
    function R(b) {
      return b = (b || "").toLowerCase(), e[b] || e[s[b]];
    }
    function H(b, { languageName: N }) {
      typeof b == "string" && (b = [b]), b.forEach((L) => {
        s[L.toLowerCase()] = N;
      });
    }
    function P(b) {
      const N = R(b);
      return N && !N.disableAutodetect;
    }
    function $(b) {
      b["before:highlightBlock"] && !b["before:highlightElement"] && (b["before:highlightElement"] = (N) => {
        b["before:highlightBlock"](
          Object.assign({ block: N.el }, N)
        );
      }), b["after:highlightBlock"] && !b["after:highlightElement"] && (b["after:highlightElement"] = (N) => {
        b["after:highlightBlock"](
          Object.assign({ block: N.el }, N)
        );
      });
    }
    function F(b) {
      $(b), u.push(b);
    }
    function W(b) {
      const N = u.indexOf(b);
      N !== -1 && u.splice(N, 1);
    }
    function ae(b, N) {
      const L = b;
      u.forEach(function(k) {
        k[L] && k[L](N);
      });
    }
    function be(b) {
      return oe("10.7.0", "highlightBlock will be removed entirely in v12.0"), oe("10.7.0", "Please use highlightElement now."), _(b);
    }
    Object.assign(n, {
      highlight: l,
      highlightAuto: h,
      highlightAll: y,
      highlightElement: _,
      // TODO: Remove with v12 API
      highlightBlock: be,
      configure: p,
      initHighlighting: v,
      initHighlightingOnLoad: E,
      registerLanguage: T,
      unregisterLanguage: M,
      listLanguages: I,
      getLanguage: R,
      registerAliases: H,
      autoDetection: P,
      inherit: Je,
      addPlugin: F,
      removePlugin: W
    }), n.debugMode = function() {
      g = false;
    }, n.safeMode = function() {
      g = true;
    }, n.versionString = Ot, n.regex = {
      concat: se,
      lookahead: on,
      either: Pe,
      optional: Zn,
      anyNumberOfTimes: Vn
    };
    for (const b in ye)
      typeof ye[b] == "object" && sn(ye[b]);
    return Object.assign(n, ye), n;
  }, ce = pn({});
  ce.newInstance = () => pn({});
  var Bt = ce;
  ce.HighlightJS = ce;
  ce.default = ce;
  const Z = /* @__PURE__ */ zn(Bt);
  function $t(n) {
    const e = n.regex, s = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), u = /[\p{L}0-9._:-]+/u, g = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, t = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, r = n.inherit(t, {
      begin: /\(/,
      end: /\)/
    }), i = n.inherit(n.APOS_STRING_MODE, { className: "string" }), a = n.inherit(n.QUOTE_STRING_MODE, { className: "string" }), o = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: u,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: true,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [g]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [g]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: true,
      unicodeRegex: true,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            t,
            a,
            i,
            r,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    t,
                    r,
                    a,
                    i
                  ]
                }
              ]
            }
          ]
        },
        n.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        g,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                a
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [o],
          starts: {
            end: /<\/style>/,
            returnEnd: true,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [o],
          starts: {
            end: /<\/script>/,
            returnEnd: true,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: e.concat(
            /</,
            e.lookahead(e.concat(
              s,
              // <tag/>
              // <tag>
              // <tag ...
              e.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: s,
              relevance: 0,
              starts: o
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: e.concat(
            /<\//,
            e.lookahead(e.concat(
              s,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: s,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: true
            }
          ]
        }
      ]
    };
  }
  const en = "[A-Za-z$_][0-9A-Za-z$_]*", Pt = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], Ut = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], bn = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], vn = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], En = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], xt = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], Ht = [].concat(
    En,
    bn,
    vn
  );
  function Ft(n) {
    const e = n.regex, s = (N, { after: L }) => {
      const k = "</" + N[0].slice(1);
      return N.input.indexOf(k, L) !== -1;
    }, u = en, g = {
      begin: "<>",
      end: "</>"
    }, t = /<[A-Za-z0-9\\._:-]+\s*\/>/, r = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (N, L) => {
        const k = N[0].length + N.index, x = N.input[k];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          x === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          x === ","
        ) {
          L.ignoreMatch();
          return;
        }
        x === ">" && (s(N, { after: k }) || L.ignoreMatch());
        let K;
        const Y = N.input.substring(k);
        if (K = Y.match(/^\s*=/)) {
          L.ignoreMatch();
          return;
        }
        if ((K = Y.match(/^\s+extends\s+/)) && K.index === 0) {
          L.ignoreMatch();
          return;
        }
      }
    }, i = {
      $pattern: en,
      keyword: Pt,
      literal: Ut,
      built_in: Ht,
      "variable.language": xt
    }, a = "[0-9](_?[0-9])*", o = `\\.(${a})`, l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${l})((${o})|\\.)?|(${o}))[eE][+-]?(${a})\\b` },
        { begin: `\\b(${l})\\b((${o})\\b|\\.)?|(${o})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, f = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: i,
      contains: []
      // defined later
    }, h = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          n.BACKSLASH_ESCAPE,
          f
        ],
        subLanguage: "xml"
      }
    }, d = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          n.BACKSLASH_ESCAPE,
          f
        ],
        subLanguage: "css"
      }
    }, _ = {
      begin: "gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          n.BACKSLASH_ESCAPE,
          f
        ],
        subLanguage: "graphql"
      }
    }, p = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        n.BACKSLASH_ESCAPE,
        f
      ]
    }, E = {
      className: "comment",
      variants: [
        n.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: true,
                    excludeBegin: true,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: u + "(?=\\s*(-)|$)",
                    endsParent: true,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        n.C_BLOCK_COMMENT_MODE,
        n.C_LINE_COMMENT_MODE
      ]
    }, w = [
      n.APOS_STRING_MODE,
      n.QUOTE_STRING_MODE,
      h,
      d,
      _,
      p,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    f.contains = w.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: i,
      contains: [
        "self"
      ].concat(w)
    });
    const y = [].concat(E, f.contains), D = y.concat([
      // eat recursive parens in sub expressions
      {
        begin: /\(/,
        end: /\)/,
        keywords: i,
        contains: ["self"].concat(y)
      }
    ]), T = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: i,
      contains: D
    }, M = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            u,
            /\s+/,
            /extends/,
            /\s+/,
            e.concat(u, "(", e.concat(/\./, u), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            u
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, I = {
      relevance: 0,
      match: e.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...bn,
          ...vn
        ]
      }
    }, R = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, H = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            u,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [T],
      illegal: /%/
    }, P = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function $(N) {
      return e.concat("(?!", N.join("|"), ")");
    }
    const F = {
      match: e.concat(
        /\b/,
        $([
          ...En,
          "super",
          "import"
        ]),
        u,
        e.lookahead(/\(/)
      ),
      className: "title.function",
      relevance: 0
    }, W = {
      begin: e.concat(/\./, e.lookahead(
        e.concat(u, /(?![0-9A-Za-z$_(])/)
      )),
      end: u,
      excludeBegin: true,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, ae = {
      match: [
        /get|set/,
        /\s+/,
        u,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        T
      ]
    }, be = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + n.UNDERSCORE_IDENT_RE + ")\\s*=>", b = {
      match: [
        /const|var|let/,
        /\s+/,
        u,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        e.lookahead(be)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        T
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: i,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: D, CLASS_REFERENCE: I },
      illegal: /#(?![$_A-z])/,
      contains: [
        n.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        R,
        n.APOS_STRING_MODE,
        n.QUOTE_STRING_MODE,
        h,
        d,
        _,
        p,
        E,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        c,
        I,
        {
          className: "attr",
          begin: u + e.lookahead(":"),
          relevance: 0
        },
        b,
        {
          // "value" container
          begin: "(" + n.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            E,
            n.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: be,
              returnBegin: true,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: n.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: true
                    },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: true,
                      excludeEnd: true,
                      keywords: i,
                      contains: D
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: g.begin, end: g.end },
                { match: t },
                {
                  begin: r.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": r.isTrulyOpeningTag,
                  end: r.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: r.begin,
                  end: r.end,
                  skip: true,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        H,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + n.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: true,
          label: "func.def",
          contains: [
            T,
            n.inherit(n.TITLE_MODE, { begin: u, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        W,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + u,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [T]
        },
        F,
        P,
        M,
        ae,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function zt(n) {
    const e = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    }, s = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    }, u = [
      "true",
      "false",
      "null"
    ], g = {
      scope: "literal",
      beginKeywords: u.join(" ")
    };
    return {
      name: "JSON",
      keywords: {
        literal: u
      },
      contains: [
        e,
        s,
        n.QUOTE_STRING_MODE,
        g,
        n.C_NUMBER_MODE,
        n.C_LINE_COMMENT_MODE,
        n.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  function Gt(n) {
    const e = "true false yes no null", s = "[\\w#;/?:@&=+$,.~*'()[\\]]+", u = {
      className: "attr",
      variants: [
        { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
        {
          // double quoted keys
          begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
        },
        {
          // single quoted keys
          begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
        }
      ]
    }, g = {
      className: "template-variable",
      variants: [
        {
          // jinja templates Ansible
          begin: /\{\{/,
          end: /\}\}/
        },
        {
          // Ruby i18n
          begin: /%\{/,
          end: /\}/
        }
      ]
    }, t = {
      className: "string",
      relevance: 0,
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        { begin: /\S+/ }
      ],
      contains: [
        n.BACKSLASH_ESCAPE,
        g
      ]
    }, r = n.inherit(t, { variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /[^\s,{}[\]]+/ }
    ] }), i = "[0-9]{4}(-[0-9][0-9]){0,2}", a = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?", o = "(\\.[0-9]*)?", l = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?", c = {
      className: "number",
      begin: "\\b" + i + a + o + l + "\\b"
    }, f = {
      end: ",",
      endsWithParent: true,
      excludeEnd: true,
      keywords: e,
      relevance: 0
    }, h = {
      begin: /\{/,
      end: /\}/,
      contains: [f],
      illegal: "\\n",
      relevance: 0
    }, d = {
      begin: "\\[",
      end: "\\]",
      contains: [f],
      illegal: "\\n",
      relevance: 0
    }, _ = [
      u,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + s
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + s + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + s
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + s
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + n.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + n.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      n.HASH_COMMENT_MODE,
      {
        beginKeywords: e,
        keywords: { literal: e }
      },
      c,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: n.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      h,
      d,
      t
    ], p = [..._];
    return p.pop(), p.push(r), f.contains = p, {
      name: "YAML",
      case_insensitive: true,
      aliases: ["yml"],
      contains: _
    };
  }
  function Kt(n) {
    return {
      name: "Plain text",
      aliases: [
        "text",
        "txt"
      ],
      disableAutodetect: true
    };
  }
  function Wt(n) {
    const e = n.regex, s = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), u = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield"
    ], i = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: u,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, a = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, o = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: i,
      illegal: /#/
    }, l = {
      begin: /\{\{/,
      relevance: 0
    }, c = {
      className: "string",
      contains: [n.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            n.BACKSLASH_ESCAPE,
            a
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            n.BACKSLASH_ESCAPE,
            a
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            n.BACKSLASH_ESCAPE,
            a,
            l,
            o
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            n.BACKSLASH_ESCAPE,
            a,
            l,
            o
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            n.BACKSLASH_ESCAPE,
            l,
            o
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            n.BACKSLASH_ESCAPE,
            l,
            o
          ]
        },
        n.APOS_STRING_MODE,
        n.QUOTE_STRING_MODE
      ]
    }, f = "[0-9](_?[0-9])*", h = `(\\b(${f}))?\\.(${f})|\\b(${f})\\.`, d = `\\b|${u.join("|")}`, _ = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${f})|(${h}))[eE][+-]?(${f})[jJ]?(?=${d})`
        },
        {
          begin: `(${h})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`
        },
        {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${d})`
        },
        {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})`
        },
        {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${f})[jJ](?=${d})`
        }
      ]
    }, p = {
      className: "comment",
      begin: e.lookahead(/# type:/),
      end: /$/,
      keywords: i,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: true
        }
      ]
    }, v = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: true
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: true,
          excludeEnd: true,
          keywords: i,
          contains: [
            "self",
            a,
            _,
            c,
            n.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return o.contains = [
      c,
      _,
      a
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      unicodeRegex: true,
      keywords: i,
      illegal: /(<\/|\?)|=>/,
      contains: [
        a,
        _,
        {
          // very common convention
          begin: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        c,
        p,
        n.HASH_COMMENT_MODE,
        {
          match: [
            /\bdef/,
            /\s+/,
            s
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [v]
        },
        {
          variants: [
            {
              match: [
                /\bclass/,
                /\s+/,
                s,
                /\s*/,
                /\(\s*/,
                s,
                /\s*\)/
              ]
            },
            {
              match: [
                /\bclass/,
                /\s+/,
                s
              ]
            }
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            _,
            v,
            c
          ]
        }
      ]
    };
  }
  var le = "[0-9](_*[0-9])*", we = `\\.(${le})`, Ne = "[0-9a-fA-F](_*[0-9a-fA-F])*", nn = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${le})((${we})|\\.)?|(${we}))[eE][+-]?(${le})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${le})((${we})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${we})[fFdD]?\\b` },
      { begin: `\\b(${le})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${Ne})\\.?|(${Ne})?\\.(${Ne}))[pP][+-]?(${le})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${Ne})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function mn(n, e, s) {
    return s === -1 ? "" : n.replace(e, (u) => mn(n, e, s - 1));
  }
  function Qt(n) {
    const e = n.regex, s = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", u = s + mn("(?:<" + s + "~~~(?:\\s*,\\s*" + s + "~~~)*>)?", /~~~/g, 2), a = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits"
      ],
      literal: [
        "false",
        "true",
        "null"
      ],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ],
      built_in: [
        "super",
        "this"
      ]
    }, o = {
      className: "meta",
      begin: "@" + s,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    }, l = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: a,
      relevance: 0,
      contains: [n.C_BLOCK_COMMENT_MODE],
      endsParent: true
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: a,
      illegal: /<\/|#/,
      contains: [
        n.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        n.C_LINE_COMMENT_MODE,
        n.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [n.BACKSLASH_ESCAPE]
        },
        n.APOS_STRING_MODE,
        n.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            s
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            e.concat(/(?!else)/, s),
            /\s+/,
            s,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            s
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            l,
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + u + "\\s+)",
            n.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: a,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: a,
              relevance: 0,
              contains: [
                o,
                n.APOS_STRING_MODE,
                n.QUOTE_STRING_MODE,
                nn,
                n.C_BLOCK_COMMENT_MODE
              ]
            },
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        nn,
        o
      ]
    };
  }
  function Vt(n) {
    const e = n.regex, s = {}, u = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [s]
        }
        // default values
      ]
    };
    Object.assign(s, {
      className: "variable",
      variants: [
        { begin: e.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![\\w\\d])(?![$])"
        ) },
        u
      ]
    });
    const g = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [n.BACKSLASH_ESCAPE]
    }, t = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        n.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    }, r = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        n.BACKSLASH_ESCAPE,
        s,
        g
      ]
    };
    g.contains.push(r);
    const i = {
      match: /\\"/
    }, a = {
      className: "string",
      begin: /'/,
      end: /'/
    }, o = {
      match: /\\'/
    }, l = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        n.NUMBER_MODE,
        s
      ]
    }, c = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ], f = n.SHEBANG({
      binary: `(${c.join("|")})`,
      relevance: 10
    }), h = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: true,
      contains: [n.inherit(n.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, d = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "function",
      "select"
    ], _ = [
      "true",
      "false"
    ], p = { match: /(\/[a-z._-]+)+/ }, v = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ], E = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ], w = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ], y = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: ["sh"],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: d,
        literal: _,
        built_in: [
          ...v,
          ...E,
          // Shell modifiers
          "set",
          "shopt",
          ...w,
          ...y
        ]
      },
      contains: [
        f,
        // to catch known shells and boost relevancy
        n.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        h,
        l,
        n.HASH_COMMENT_MODE,
        t,
        p,
        r,
        i,
        a,
        o,
        s
      ]
    };
  }
  function Zt(n) {
    const e = n.regex, s = n.COMMENT("--", "$"), u = {
      className: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ begin: /''/ }]
        }
      ]
    }, g = {
      begin: /"/,
      end: /"/,
      contains: [{ begin: /""/ }]
    }, t = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ], r = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ], i = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ], a = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ], o = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ], l = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ], c = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ], f = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ], h = l, d = [
      ...o,
      ...a
    ].filter((w) => !l.includes(w)), _ = {
      className: "variable",
      begin: /@[a-z0-9][a-z0-9_]*/
    }, p = {
      className: "operator",
      begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    }, v = {
      begin: e.concat(/\b/, e.either(...h), /\s*\(/),
      relevance: 0,
      keywords: { built_in: h }
    };
    function E(w, {
      exceptions: y,
      when: D
    } = {}) {
      const T = D;
      return y = y || [], w.map((M) => M.match(/\|\d+$/) || y.includes(M) ? M : T(M) ? `${M}|0` : M);
    }
    return {
      name: "SQL",
      case_insensitive: true,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: E(d, { when: (w) => w.length < 3 }),
        literal: t,
        type: i,
        built_in: c
      },
      contains: [
        {
          begin: e.either(...f),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: d.concat(f),
            literal: t,
            type: i
          }
        },
        {
          className: "type",
          begin: e.either(...r)
        },
        v,
        _,
        u,
        g,
        n.C_NUMBER_MODE,
        n.C_BLOCK_COMMENT_MODE,
        s,
        p
      ]
    };
  }
  Z.registerLanguage("xml", $t);
  Z.registerLanguage("javascript", Ft);
  Z.registerLanguage("json", zt);
  Z.registerLanguage("yaml", Gt);
  Z.registerLanguage("plaintext", Kt);
  Z.registerLanguage("python", Wt);
  Z.registerLanguage("java", Qt);
  Z.registerLanguage("bash", Vt);
  Z.registerLanguage("sql", Zt);
  var S = /* @__PURE__ */ ((n) => (n.EQUAL = "equal", n.DELETE = "removed", n.ADD = "added", n.EMPTY = "empty", n))(S || {});
  const q = "<code-diff-modified>", ee = "</code-diff-modified>", Yt = q.replace("<", "&lt;").replace(">", "&gt;"), Xt = ee.replace("<", "&lt;").replace(">", "&gt;");
  function ue(n) {
    return n === void 0 ? S.EQUAL : n.added ? S.ADD : n.removed ? S.DELETE : S.EQUAL;
  }
  function Te(n, e, s = "word") {
    return typeof n == "undefined" ? e : typeof e == "undefined" ? n : (s === "char" ? $n : Un)(n, e).filter((g) => ue(g) !== S.DELETE).map(
      (g) => ue(g) === S.ADD ? `${q}${g.value}${ee}` : g.value
    ).join("");
  }
  function yn(n, e) {
    const s = new Le.diff_match_patch(), u = s.diff_linesToChars_(n, e), g = u.chars1, t = u.chars2, r = u.lineArray, i = s.diff_main(g, t, false);
    return s.diff_charsToLines_(i, r), i.map((a) => {
      const [o, l] = a;
      return {
        count: l.replace(/\n$/, "").split(`
`).length,
        value: l,
        removed: o === Le.DIFF_DELETE,
        added: o === Le.DIFF_INSERT
      };
    });
  }
  function V(n, e) {
    if (!e.match(new RegExp(`(${q}|${ee})`, "g")))
      return Z.highlight(e, { language: n }).value;
    let u = e;
    const g = e.replace(new RegExp(`(${q}|${ee})`, "g"), ""), t = document.createElement("div");
    t.innerHTML = Z.highlight(g, { language: n }).value;
    let r = false;
    const i = (a) => {
      a.childNodes.forEach((o) => {
        if (o.nodeType === Node.ELEMENT_NODE && i(o), o.nodeType === Node.TEXT_NODE) {
          if (!o.textContent)
            return;
          let l = o.textContent, c = "";
          for (r && (c = c + q); l.length; ) {
            if (u.startsWith(q)) {
              u = u.slice(q.length), c = c + q, r = true;
              continue;
            }
            if (u.startsWith(ee)) {
              u = u.slice(ee.length), c = c + ee, r = false;
              continue;
            }
            const f = u.match(new RegExp(`(${q}|${ee})`)), h = f && f.index ? f.index : u.length, d = Math.min(h, l.length);
            c = c + u.substring(0, d), u = u.slice(d), l = l.slice(d);
          }
          r && (c = c + ee), o.textContent = c;
        }
      });
    };
    return i(t), t.innerHTML.replace(new RegExp(Yt, "g"), '<span class="x">').replace(new RegExp(Xt, "g"), "</span>");
  }
  function wn(n) {
    const e = (g, t) => (g.match(new RegExp(t, "g")) || []).length;
    let s = 0, u = 0;
    for (const g of n)
      g.added && (s += e(g.value.trim(), `
`) + 1), g.removed && (u += e(g.value.trim(), `
`) + 1);
    return { additionsNum: s, deletionsNum: u };
  }
  function jt(n, e, s = "plaintext", u = "word", g = 10) {
    const t = () => ({ type: S.EMPTY }), r = (_, p, v) => ({ type: _, num: p, code: v }), i = yn(n, e);
    let a = 0, o = 0, l = false;
    const c = [], f = {
      changes: c,
      collector: [],
      stat: wn(i)
    };
    for (let _ = 0; _ < i.length; _++) {
      if (l) {
        l = false;
        continue;
      }
      const [p, v] = [i[_], i[_ + 1]], [E, w] = [ue(p), ue(v)], y = p.value.replace(/\n$/, "").split(`
`);
      if (v === void 0) {
        for (const T of y) {
          let M = t(), I = t();
          const R = V(s, T);
          E === S.EQUAL && (a++, o++, M = r(S.EQUAL, a, R), I = r(S.EQUAL, o, R)), E === S.DELETE && (a++, M = r(S.DELETE, a, R), I = t()), E === S.ADD && (o++, M = t(), I = r(S.ADD, o, R)), c.push({ left: M, right: I });
        }
        break;
      }
      if (E === S.EQUAL)
        for (const T of y) {
          a++, o++;
          const M = V(s, T);
          c.push({
            left: r(S.EQUAL, a, M),
            right: r(S.EQUAL, o, M)
          });
        }
      const D = v.value.replace(/\n$/, "").split(`
`);
      if (E === S.DELETE) {
        if (w === S.EQUAL)
          for (const T of y)
            a++, c.push({
              left: r(S.DELETE, a, V(s, T)),
              right: t()
            });
        if (w === S.ADD) {
          l = true;
          const T = Math.max(p.count, v.count);
          for (let M = 0; M < T; M++) {
            M < p.count && a++, M < v.count && o++;
            const [I, R] = [y[M], D[M]], H = y.length === D.length ? Te(R, I, u) : I, P = y.length === D.length ? Te(I, R, u) : R, $ = M < p.count ? r(S.DELETE, a, V(s, H)) : t(), F = M < v.count ? r(S.ADD, o, V(s, P)) : t();
            c.push({ left: $, right: F });
          }
        }
      }
      if (E === S.ADD)
        for (const T of y)
          o++, c.push({
            left: t(),
            right: r(S.ADD, o, V(s, T))
          });
    }
    if (n === e) {
      for (let _ = 0; _ < c.length; _++)
        c[_].fold = false;
      return f;
    }
    for (let _ = 0; _ < c.length; _++) {
      const p = c[_];
      if (p.left.type === S.DELETE || p.right.type === S.ADD) {
        const [v, E] = [Math.max(_ - g, 0), Math.min(_ + g + 1, c.length)];
        for (let w = v; w < E; w++)
          c[w].fold = false;
      }
      p.fold === void 0 && (p.fold = true);
    }
    const h = [];
    let d = [];
    for (let _ = 0; _ < c.length; _++) {
      const p = c[_];
      if (p.fold === false) {
        d.length && (d[0].hideIndex = f.collector.length, f.collector.push({
          lines: d,
          fold: true
        }), d = []), h.push(p);
        continue;
      }
      p.hide = true, d.push(p), h.push(p);
    }
    return d.length && (d[0].hideIndex = f.collector.length, f.collector.push({
      lines: d,
      fold: true
    }), d = []), f.changes = h, f;
  }
  function Jt(n, e, s = "plaintext", u = "word", g = 10) {
    const t = yn(n, e);
    let r = 0, i = 0, a = false;
    const o = [], l = {
      changes: o,
      collector: [],
      stat: wn(t)
    };
    for (let h = 0; h < t.length; h++) {
      if (a) {
        a = false;
        continue;
      }
      const [d, _] = [t[h], t[h + 1]], [p, v] = [ue(d), ue(_)], E = d.value.replace(/\n$/, "").split(`
`);
      if (_ === void 0) {
        for (const y of E) {
          p === S.EQUAL && (r++, i++), p === S.DELETE && r++, p === S.ADD && i++;
          const D = V(s, y);
          o.push({
            type: p,
            code: D,
            addNum: p === S.DELETE ? void 0 : i,
            delNum: p === S.ADD ? void 0 : r
          });
        }
        break;
      }
      if (p === S.EQUAL)
        for (const y of E) {
          r++, i++;
          const D = V(s, y);
          o.push({ type: S.EQUAL, code: D, delNum: r, addNum: i });
        }
      const w = _.value.replace(/\n$/, "").split(`
`);
      if (p === S.DELETE)
        if (v === S.ADD && E.length === w.length) {
          for (let y = 0; y < E.length; y++) {
            const D = E[y], T = w[y];
            r++;
            const M = V(s, Te(T, D, u));
            o.push({ type: S.DELETE, code: M, delNum: r });
          }
          for (let y = 0; y < w.length; y++) {
            const D = E[y], T = w[y];
            i++;
            const M = V(s, Te(D, T, u));
            o.push({ type: S.ADD, code: M, addNum: i });
          }
          a = true;
        } else
          for (const y of E) {
            r++;
            const D = V(s, y);
            o.push({ type: S.DELETE, code: D, delNum: r });
          }
      if (p === S.ADD)
        for (const y of E) {
          i++;
          const D = V(s, y);
          o.push({ type: S.ADD, code: D, addNum: i });
        }
    }
    for (let h = 0; h < o.length; h++) {
      const d = o[h];
      if (d.type === S.DELETE || d.type === S.ADD) {
        const [_, p] = [Math.max(h - g, 0), Math.min(h + g + 1, o.length)];
        for (let v = _; v < p; v++)
          o[v].fold = false;
      }
      d.fold === void 0 && (d.fold = true);
    }
    if (n === e) {
      for (let h = 0; h < o.length; h++)
        o[h].fold = false;
      return l;
    }
    const c = [];
    let f = [];
    for (let h = 0; h < o.length; h++) {
      const d = o[h];
      if (d.fold === false) {
        f.length && (f[0].hideIndex = l.collector.length, l.collector.push({
          lines: f,
          fold: true
        }), f = []), c.push(d);
        continue;
      }
      d.type === "equal" && (d.hide = true, f.push(d)), c.push(d);
    }
    return f.length && (f[0].hideIndex = l.collector.length, l.collector.push({
      lines: f,
      fold: true
    }), f = []), l.changes = c, l;
  }
  const qt = /* @__PURE__ */ Vue.defineComponent({
    __name: "UnifiedLine",
    props: {
      line: null
    },
    emits: ["expand"],
    setup(n, { emit: e }) {
      function s(u) {
        return u === S.DELETE ? "-" : u === S.ADD ? "+" : "";
      }
      return { __sfc: true, emit: e, getCodeMarker: s, DiffType: S };
    }
  });
  function pe(n, e, s, u, g, t, r, i) {
    var a = typeof n == "function" ? n.options : n;
    e && (a.render = e, a.staticRenderFns = s, a._compiled = true), u && (a.functional = true), t && (a._scopeId = "data-v-" + t);
    var o;
    if (r ? (o = function(f) {
      f = f || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ != "undefined" && (f = __VUE_SSR_CONTEXT__), g && g.call(this, f), f && f._registeredComponents && f._registeredComponents.add(r);
    }, a._ssrRegister = o) : g && (o = i ? function() {
      g.call(
        this,
        (a.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : g), o)
      if (a.functional) {
        a._injectStyles = o;
        var l = a.render;
        a.render = function(h, d) {
          return o.call(d), l(h, d);
        };
      } else {
        var c = a.beforeCreate;
        a.beforeCreate = c ? [].concat(c, o) : [o];
      }
    return {
      exports: n,
      options: a
    };
  }
  var er = function() {
    var e = this, s = e._self._c, u = e._self._setupProxy;
    return e.line.hideIndex !== void 0 && e.line.hide ? s("tr", [s("td", { staticClass: "blob-num blob-num-hunk text-center", attrs: { colspan: "2" }, on: { click: function(g) {
      return u.emit("expand", e.line);
    } } }, [e._v(" > ")]), s("td", { staticClass: "blob-code blob-code-hunk", attrs: { align: "left" } }, [e._v(" ⋯ ")])]) : e.line.hide ? e._e() : s("tr", [s("td", { staticClass: "blob-num", class: {
      "blob-num-deletion": e.line.type === u.DiffType.DELETE,
      "blob-num-addition": e.line.type === u.DiffType.ADD,
      "blob-num-context": e.line.type === u.DiffType.EQUAL,
      "blob-num-hunk": e.line.hide !== void 0
    } }, [e._v(" " + e._s(e.line.delNum) + " ")]), s("td", { staticClass: "blob-num", class: {
      "blob-num-deletion": e.line.type === u.DiffType.DELETE,
      "blob-num-addition": e.line.type === u.DiffType.ADD,
      "blob-num-context": e.line.type === u.DiffType.EQUAL,
      "blob-num-hunk": e.line.hide !== void 0
    } }, [e._v(" " + e._s(e.line.addNum) + " ")]), s("td", { staticClass: "blob-code", class: {
      "blob-code-deletion": e.line.type === u.DiffType.DELETE,
      "blob-code-addition": e.line.type === u.DiffType.ADD,
      "blob-code-context": e.line.type === u.DiffType.EQUAL,
      "blob-code-hunk": e.line.hide !== void 0
    } }, [s("span", { staticClass: "blob-code-inner blob-code-marker", attrs: { "data-code-marker": u.getCodeMarker(e.line.type) }, domProps: { innerHTML: e._s(e.line.code) } })])]);
  }, nr = [], tr = /* @__PURE__ */ pe(
    qt,
    er,
    nr,
    false,
    null,
    null,
    null,
    null
  );
  const rr = tr.exports, ir = /* @__PURE__ */ Vue.defineComponent({
    __name: "UnifiedViewer",
    props: {
      diffChange: null
    },
    setup(n) {
      const e = n;
      function s({ hideIndex: u }) {
        u !== void 0 && e.diffChange.collector[u].lines.forEach((g) => {
          g.hide = false, g.fold = false;
        });
      }
      return { __sfc: true, props: e, expandHandler: s, UnifiedLine: rr };
    }
  });
  var sr = function() {
    var g;
    var e = this, s = e._self._c, u = e._self._setupProxy;
    return s("table", { staticClass: "diff-table" }, [s("tbody", e._l((g = e.diffChange) == null ? void 0 : g.changes, function(t, r) {
      return s(u.UnifiedLine, { key: r, attrs: { line: t }, on: { expand: u.expandHandler } });
    }), 1)]);
  }, ar = [], or = /* @__PURE__ */ pe(
    ir,
    sr,
    ar,
    false,
    null,
    "238e1326",
    null,
    null
  );
  const lr = or.exports, cr = /* @__PURE__ */ Vue.defineComponent({
    __name: "SplitLine",
    props: {
      splitLine: null
    },
    emits: ["expand"],
    setup(n, { emit: e }) {
      function s(g) {
        return g === S.DELETE ? "-" : g === S.ADD ? "+" : "";
      }
      function u(g) {
        window.getSelection().removeAllRanges();
        const t = document.querySelectorAll(".file-diff-split .split-side-left"), r = document.querySelectorAll(".file-diff-split .split-side-right");
        for (const i of r)
          i.classList.toggle("no-select", g === "left");
        for (const i of t)
          i.classList.toggle("no-select", g === "right");
      }
      return { __sfc: true, emit: e, getCodeMarker: s, onSplitLineMousedown: u, DiffType: S };
    }
  });
  var ur = function() {
    var e = this, s = e._self._c, u = e._self._setupProxy;
    return e.splitLine.hideIndex !== void 0 && e.splitLine.hide ? s("tr", [s("td", { staticClass: "blob-num blob-num-hunk", attrs: { colspan: "1" }, on: { click: function(g) {
      return u.emit("expand", e.splitLine);
    } } }, [e._v(" > ")]), s("td", { staticClass: "blob-code blob-code-inner blob-code-hunk", attrs: { colspan: "3", align: "left" } }, [e._v(" ⋯ ")])]) : e.splitLine.hide ? e._e() : s("tr", [e._l([e.splitLine.left, e.splitLine.right], function(g, t) {
      return [g.type === u.DiffType.EMPTY ? [s("td", { staticClass: "blob-num blob-num-empty empty-cell" }), s("td", { staticClass: "blob-code blob-code-empty empty-cell" })] : [s("td", { staticClass: "blob-num", class: {
        "blob-num-deletion": g.type === u.DiffType.DELETE,
        "blob-num-addition": g.type === u.DiffType.ADD,
        "blob-num-context": g.type === u.DiffType.EQUAL,
        "blob-num-hunk": e.splitLine.hide !== void 0
      } }, [e._v(" " + e._s(g.num) + " ")]), s("td", { staticClass: "blob-code", class: {
        "blob-code-deletion": g.type === u.DiffType.DELETE,
        "blob-code-addition": g.type === u.DiffType.ADD,
        "blob-code-context": g.type === u.DiffType.EQUAL,
        "blob-code-hunk": e.splitLine.hide !== void 0,
        "split-side-left": t === 0,
        "split-side-right": t === 1
      }, on: { mousedown: function(r) {
        return u.onSplitLineMousedown(t === 0 ? "left" : "right");
      } } }, [s("span", { staticClass: "blob-code-inner blob-code-marker", attrs: { "data-code-marker": u.getCodeMarker(g.type) }, domProps: { innerHTML: e._s(g.code) } })])]];
    })], 2);
  }, fr = [], gr = /* @__PURE__ */ pe(
    cr,
    ur,
    fr,
    false,
    null,
    null,
    null,
    null
  );
  const hr = gr.exports, dr = /* @__PURE__ */ Vue.defineComponent({
    __name: "SplitViewer",
    props: {
      diffChange: null
    },
    setup(n) {
      const e = n;
      function s({ hideIndex: u }) {
        u !== void 0 && e.diffChange.collector[u].lines.forEach((g) => {
          g.hide = false, g.fold = false;
        });
      }
      return { __sfc: true, props: e, expandHandler: s, SplitLine: hr };
    }
  });
  var _r = function() {
    var g;
    var e = this, s = e._self._c, u = e._self._setupProxy;
    return s("table", { staticClass: "file-diff-split diff-table" }, [e._m(0), s("tbody", e._l((g = e.diffChange) == null ? void 0 : g.changes, function(t, r) {
      return s(u.SplitLine, { key: r, attrs: { "split-line": t }, on: { expand: u.expandHandler } });
    }), 1)]);
  }, pr = [function() {
    var n = this, e = n._self._c;
    return n._self._setupProxy, e("colgroup", [e("col", { attrs: { width: "44" } }), e("col"), e("col", { attrs: { width: "44" } }), e("col")]);
  }], br = /* @__PURE__ */ pe(
    dr,
    _r,
    pr,
    false,
    null,
    "829edc33",
    null,
    null
  );
  const vr = br.exports;
  const Er = /* @__PURE__ */ Vue.defineComponent({
    __name: "CodeDiff",
    props: {
      newString: null,
      oldString: null,
      language: { default: "plaintext" },
      context: { default: 10 },
      diffStyle: { default: "word" },
      outputFormat: { default: "line-by-line" },
      trim: { type: Boolean, default: false },
      noDiffLineFeed: { type: Boolean, default: false },
      maxHeight: { default: void 0 },
      filename: { default: void 0 },
      newFilename: { default: void 0 },
      hideHeader: { type: Boolean, default: false },
      hideStat: { type: Boolean, default: false },
      theme: { default: "light" }
    },
    emits: ["diff"],
    setup(n, { emit: e }) {
      const s = n, u = Vue.computed(() => s.outputFormat === "line-by-line"), g = Vue.computed(() => {
        let o = s.oldString || "";
        return o = s.trim ? o.trim() : o, o = s.noDiffLineFeed ? o.replace(/(\r\n)/g, `
`) : o, o;
      }), t = Vue.computed(() => {
        let o = s.newString || "";
        return o = s.trim ? o.trim() : o, o = s.noDiffLineFeed ? o.replace(/(\r\n)/g, `
`) : o, o;
      }), r = Vue.computed(
        () => u.value ? Jt(g.value, t.value, s.language, s.diffStyle, s.context) : jt(g.value, t.value, s.language, s.diffStyle, s.context)
      ), i = Vue.ref(r.value), a = Vue.computed(() => i.value.stat.additionsNum === 0 && i.value.stat.deletionsNum === 0);
      return Vue.watch(() => s, () => {
        i.value = r.value, e("diff", {
          stat: {
            isChanged: !a.value,
            addNum: i.value.stat.additionsNum,
            delNum: i.value.stat.deletionsNum
          }
        });
      }, { deep: true, immediate: true }), { __sfc: true, props: s, emits: e, isUnifiedViewer: u, oldString: g, newString: t, raw: r, diffChange: i, isNotChanged: a, UnifiedViewer: lr, SplitViewer: vr };
    }
  });
  var mr = function() {
    var e = this, s = e._self._c, u = e._self._setupProxy;
    return s("div", { staticClass: "code-diff-view", style: { maxHeight: e.maxHeight }, attrs: { theme: e.theme } }, [e.hideHeader ? e._e() : s("div", { staticClass: "file-header" }, [u.isUnifiedViewer ? s("div", { staticClass: "file-info" }, [s("span", [s("div", { staticClass: "info-left" }, [e._v(e._s(e.filename))]), s("div", { staticClass: "info-left" }, [e._v(e._s(e.newFilename))])]), e.hideStat ? e._e() : s("span", { staticClass: "diff-stat" }, [e._t("stat", function() {
      return [s("span", { staticClass: "diff-stat-added" }, [e._v("+" + e._s(u.diffChange.stat.additionsNum) + " additions")]), s("span", { staticClass: "diff-stat-deleted", staticStyle: { "margin-left": "8px" } }, [e._v("-" + e._s(u.diffChange.stat.deletionsNum) + " deletions")])];
    })], 2)]) : s("div", { staticClass: "file-info" }, [s("span", { staticClass: "info-left" }, [e._v(e._s(e.filename))]), s("span", { staticClass: "info-right" }, [s("span", { staticStyle: { "margin-left": "20px" } }, [e._v(e._s(e.newFilename))]), e.hideStat ? e._e() : s("span", { staticClass: "diff-stat" }, [e._t("stat", function() {
      return [s("span", { staticClass: "diff-stat-added" }, [e._v("+" + e._s(u.diffChange.stat.additionsNum) + " additions")]), s("span", { staticClass: "diff-stat-deleted", staticStyle: { "margin-left": "8px" } }, [e._v("-" + e._s(u.diffChange.stat.deletionsNum) + " deletions")])];
    })], 2)])])]), u.isUnifiedViewer ? s(u.UnifiedViewer, { attrs: { "diff-change": u.diffChange } }) : s(u.SplitViewer, { attrs: { "diff-change": u.diffChange } })], 1);
  }, yr = [], wr = /* @__PURE__ */ pe(
    Er,
    mr,
    yr,
    false,
    null,
    null,
    null,
    null
  );
  const Nr = wr.exports;
  function Ar(n) {
    n.component("CodeDiff", Nr);
  }
  const Tr = {
    install: Ar,
    hljs: Z
  };
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$1 = {
    name: "LoggerAreaRow",
    props: ["log"],
    data() {
      return {
        isActive: false,
        toggleLabel: "Show diff",
        toggleIcon: "add"
      };
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive;
        if (this.isActive) {
          this.toggleLabel = "Hide diff";
          this.toggleIcon = "remove";
        } else {
          this.toggleLabel = "Show diff";
          this.toggleIcon = "add";
        }
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.log.timestamp))]), _c("td", [_vm._v(_vm._s(_vm.log.user))]), _c("td", [_vm._v(_vm._s(_vm.log.type))]), _c("td", [_vm._v(_vm._s(_vm.log.action))]), _c("td", [_vm._v(_vm._s(_vm.log.slug))]), _c("td", [_vm._v(_vm._s(_vm.log.language))]), _c("td", [_c("k-button-group", { attrs: { "layout": "collapsed" } }, [_c("k-button", { attrs: { "variant": "filled", "icon": _vm.toggleIcon }, on: { "click": function($event) {
      return _vm.toggleActive();
    } } }, [_vm._v(" " + _vm._s(_vm.toggleLabel) + " ")]), _c("k-button", { attrs: { "variant": "filled", "icon": "undo", "disabled": "", "title": "Disabled at the moment" } }, [_vm._v(" Rollback ")])], 1)], 1)]), _vm.isActive ? _c("tr", [_c("td", { attrs: { "colspan": "7" } }, [_c("code-diff", { attrs: { "old-string": _vm.log.oldData, "new-string": _vm.log.newData, "output-format": "side-by-side", "language": "json", "context": "3", "trim": "true" } })], 1)]) : _vm._e()]);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null,
    null,
    null
  );
  __component__$1.options.__file = "/home/stephan/Source/foerdeliebe/kirby/demokit/site/plugins/logger/src/components/LoggerAreaRow.vue";
  const LoggerAreaRow = __component__$1.exports;
  const _sfc_main = {
    name: "LoggerArea",
    props: ["userOptions", "typeOptions", "actionOptions", "languageOptions"],
    data() {
      return {
        logs: [],
        total: 0,
        page: 1,
        limit: 10,
        filter: {
          timestamp: "",
          oldSearch: "",
          newSearch: "",
          action: "",
          type: "",
          user: "",
          slug: "",
          language: ""
        }
      };
    },
    components: {
      LoggerAreaRow
    },
    beforeCreate() {
      window.panel.app.$root.constructor.use(Tr, {});
    },
    mounted() {
      this.fetch(this.page, this.limit);
    },
    watch: {
      filter: {
        handler(filter) {
          this.fetch(this.page, this.limit, filter);
        },
        deep: true
      }
    },
    methods: {
      fetch(page = 1, limit = 10, filter = null) {
        return this.$api.post("logs.json", { page, limit, filter }).then((data) => {
          this.logs = data.logs;
          this.total = data.total;
        });
      },
      paginate({ page, limit }) {
        this.page = page;
        this.limit = limit;
        this.fetch(page, limit);
      },
      reset() {
        this.filter = {
          timestamp: "",
          oldSearch: "",
          newSearch: "",
          action: "",
          type: "",
          user: "",
          slug: "",
          language: ""
        };
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-inside", { staticClass: "k-logger-view" }, [_c("k-header", [_vm._v(" " + _vm._s(_vm.$t("michnhokn.logger.title")) + " "), _c("k-button-group", { attrs: { "slot": "left" }, slot: "left" }, [_c("k-button", { attrs: { "icon": "refresh" }, on: { "click": _vm.reset } }, [_vm._v(_vm._s(_vm.$t("michnhokn.logger.reset")))])], 1), _c("template", { slot: "right" }, [_c("k-pagination", { attrs: { "align": "right", "details": true, "page": _vm.page, "limit": _vm.limit, "total": _vm.total }, on: { "paginate": _vm.paginate } })], 1)], 2), _c("k-grid", { attrs: { "gutter": "medium" } }, [_c("k-column", { attrs: { "width": "2/6" } }, [_c("k-select-field", { attrs: { "options": _vm.userOptions, "label": _vm.$t("user"), "type": "select", "icon": "angle-down" }, model: { value: _vm.filter.user, callback: function($$v) {
      _vm.$set(_vm.filter, "user", $$v);
    }, expression: "filter.user" } })], 1), _c("k-column", { attrs: { "width": "1/6" } }, [_c("k-date-field", { attrs: { "display": "YYYY-MM-DD", "label": _vm.$t("date"), "calendar": true, "type": "date" }, model: { value: _vm.filter.timestamp, callback: function($$v) {
      _vm.$set(_vm.filter, "timestamp", $$v);
    }, expression: "filter.timestamp" } })], 1), _c("k-column", { attrs: { "width": "1/6" } }, [_c("k-select-field", { attrs: { "options": _vm.typeOptions, "label": _vm.$t("michnhokn.logger.type"), "type": "select", "icon": "angle-down" }, model: { value: _vm.filter.type, callback: function($$v) {
      _vm.$set(_vm.filter, "type", $$v);
    }, expression: "filter.type" } })], 1), _c("k-column", { attrs: { "width": "1/6" } }, [_c("k-select-field", { attrs: { "options": _vm.actionOptions, "label": _vm.$t("michnhokn.logger.action"), "type": "select", "icon": "angle-down" }, model: { value: _vm.filter.action, callback: function($$v) {
      _vm.$set(_vm.filter, "action", $$v);
    }, expression: "filter.action" } })], 1), _c("k-column", { attrs: { "width": "1/6" } }, [_c("k-select-field", { attrs: { "options": _vm.languageOptions, "label": _vm.$t("language"), "type": "select", "icon": "angle-down" }, model: { value: _vm.filter.language, callback: function($$v) {
      _vm.$set(_vm.filter, "language", $$v);
    }, expression: "filter.language" } })], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("k-text-field", { attrs: { "type": "text", "label": _vm.$t("michnhokn.logger.slug"), "placeholder": "Suche ...", "icon": "search" }, model: { value: _vm.filter.slug, callback: function($$v) {
      _vm.$set(_vm.filter, "slug", $$v);
    }, expression: "filter.slug" } })], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("k-text-field", { attrs: { "type": "text", "label": _vm.$t("michnhokn.logger.searchOld"), "placeholder": _vm.$t("search"), "icon": "search" }, model: { value: _vm.filter.oldSearch, callback: function($$v) {
      _vm.$set(_vm.filter, "oldSearch", $$v);
    }, expression: "filter.oldSearch" } })], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("k-text-field", { attrs: { "type": "text", "label": _vm.$t("michnhokn.logger.searchNew"), "placeholder": _vm.$t("search"), "icon": "search" }, model: { value: _vm.filter.newSearch, callback: function($$v) {
      _vm.$set(_vm.filter, "newSearch", $$v);
    }, expression: "filter.newSearch" } })], 1), _c("k-column", { attrs: { "width": "1/1" } }, [_vm.logs.length ? _c("div", { staticClass: "k-table" }, [_c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("date")))]), _c("th", [_vm._v(_vm._s(_vm.$t("user")))]), _c("th", [_vm._v(_vm._s(_vm.$t("michnhokn.logger.type")))]), _c("th", [_vm._v(_vm._s(_vm.$t("michnhokn.logger.action")))]), _c("th", [_vm._v(_vm._s(_vm.$t("michnhokn.logger.slug")))]), _c("th", [_vm._v(_vm._s(_vm.$t("language")))]), _c("th")])]), _vm._l(_vm.logs, function(log) {
      return [_c("LoggerAreaRow", { key: log.id, attrs: { "log": log } })];
    })], 2)]) : _c("k-empty", { attrs: { "icon": "table", "layout": "cards" } }, [_vm._v(_vm._s(_vm.$t("michnhokn.logger.empty")))])], 1)], 1)], 1);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/home/stephan/Source/foerdeliebe/kirby/demokit/site/plugins/logger/src/components/LoggerArea.vue";
  const LoggerArea = __component__.exports;
  window.panel.plugin("michnhokn/logger", {
    components: { "k-logger-area": LoggerArea }
  });
})();
