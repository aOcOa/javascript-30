- using css variable and set css variable by document.documentElement.setProperty.

- document.documentElement is the root Elemet (html) of a non empty html document.

- nodeList(results of querySelector) is not HtmlCollection(results of getElementsByClass or getElementById).

- you can change css variable inside any html tag, and it'll only work on elements inside that tag(concept of inherit), outside Element will still follow the original same variable rule.嗯嗯嗯嗯