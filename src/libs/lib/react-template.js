import merge from 'merge';

// TODO: dit werkt alleen als het er 1 is

export default function({ html='' }) {

  let args = arguments[0];
  delete args.html;

  let matches = 0;

  Object.keys(args).forEach((key) => {

    let regEx = new RegExp(`^((?:.|\n|\r)*)\\{${key}\\}((?:.|\n|\r)*)$`, 'g');
    let match = regEx.exec(html);

    if (match) {
      matches++;
      html = (
        <span>
        <span dangerouslySetInnerHTML={{ __html: match[1] }}></span>
        {args[key]}
        <span dangerouslySetInnerHTML={{ __html: match[2] }}></span>
        </span>
      );
    }

  });

  if (matches == 0) html = <span dangerouslySetInnerHTML={{ __html: html }}></span>
  return html;
  
}
