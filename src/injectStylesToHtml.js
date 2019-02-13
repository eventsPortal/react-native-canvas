export default function injectStylesToHtml(html, htmlStyleTegContent) {
  const startStyleTag = '<style>';
  const startStyleTagIndex = html.indexOf(startStyleTag);

  return html.slice(0, startStyleTagIndex + startStyleTag.length)
    + '\r\n\t  ' + htmlStyleTegContent
    + html.slice(startStyleTagIndex + startStyleTag.length);
};
