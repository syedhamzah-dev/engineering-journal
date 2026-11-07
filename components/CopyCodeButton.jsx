'use client';

import { useEffect } from 'react';

export default function CopyCodeButton() {
  useEffect(() => {
    const preBlocks = document.querySelectorAll('.article-content pre');

    preBlocks.forEach((pre) => {
      // Check if wrapper already added
      if (pre.parentElement && pre.parentElement.classList.contains('code-block-wrapper')) {
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-btn';
      copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
      copyBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span class="copy-label">Copy</span>
      `;

      copyBtn.addEventListener('click', async () => {
        const codeElement = pre.querySelector('code');
        const textToCopy = codeElement ? codeElement.innerText : pre.innerText;

        try {
          await navigator.clipboard.writeText(textToCopy);
          const label = copyBtn.querySelector('.copy-label');
          if (label) label.textContent = 'Copied!';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            if (label) label.textContent = 'Copy';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch {
          // Silent fallback
        }
      });

      wrapper.appendChild(copyBtn);
    });
  }, []);

  return null;
}

