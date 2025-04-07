/**
 * A simplified syntax highlighting utility that adds classes for styling
 */
export function addSyntaxHighlighting(html: string): string {
  return html.replace(
    /<code class="language-([a-z]+)">([\s\S]*?)<\/code>/g,
    (_, language, code) => {
      // Apply basic highlighting based on language
      let highlightedCode = code;
      
      // Add language-specific highlighting
      if (language === 'javascript' || language === 'js' || language === 'typescript' || language === 'ts') {
        highlightedCode = highlightJavaScript(code);
      } else if (language === 'css') {
        highlightedCode = highlightCSS(code);
      } else if (language === 'html') {
        highlightedCode = highlightHTML(code);
      } else if (language === 'bash' || language === 'sh') {
        highlightedCode = highlightBash(code);
      }
      
      return `<code class="language-${language}">${highlightedCode}</code>`;
    }
  );
}

function highlightJavaScript(code: string): string {
  return code
    // Keywords
    .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)\b/g, '<span class="token keyword">$1</span>')
    // Strings
    .replace(/(['"`])(.*?)\1/g, '<span class="token string">$1$2$1</span>')
    // Numbers
    .replace(/\b(\d+(\.\d+)?)\b/g, '<span class="token number">$1</span>')
    // Comments
    .replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="token comment">$1</span>')
    // Function calls
    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g, '<span class="token function">$1</span>(');
}

function highlightCSS(code: string): string {
  return code
    // Properties
    .replace(/([\w-]+)(?=\s*:)/g, '<span class="token property">$1</span>')
    // Values
    .replace(/(:.*?)(;|$)/g, ':<span class="token value">$1</span>$2')
    // Comments
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token comment">$1</span>');
}

function highlightHTML(code: string): string {
  return code
    // Tags
    .replace(/(&lt;\/?)([a-zA-Z0-9_-]+)/g, '$1<span class="token tag">$2</span>')
    // Attributes
    .replace(/\s([a-zA-Z0-9_-]+)=/g, ' <span class="token attr-name">$1</span>=')
    // Attribute values
    .replace(/="([^"]*?)"/g, '="<span class="token attr-value">$1</span>"')
    // Comments
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token comment">$1</span>');
}

function highlightBash(code: string): string {
  return code
    // Commands
    .replace(/^(\s*)([a-zA-Z0-9_-]+)(?=\s|$)/gm, '$1<span class="token command">$2</span>')
    // Options/flags
    .replace(/\s(-{1,2}[a-zA-Z0-9_-]+)(?=\s|$)/g, ' <span class="token parameter">$1</span>')
    // Strings
    .replace(/(['"`])(.*?)\1/g, '<span class="token string">$1$2$1</span>')
    // Comments
    .replace(/(#.*$)/gm, '<span class="token comment">$1</span>');
}
