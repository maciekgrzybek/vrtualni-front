const navigationProcessor = require('./utils/navigationProcessor');
const pageProcessor = require('./utils/pageProcessor');

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}, configOptions) => {

  const {createNode} = actions;
  const {baseUrl, parts} = configOptions;
  const content = [];
  delete configOptions.plugins;

  for (let part in parts) {
    const options = {
      createNodeId,
      createContentDigest,
      baseUrl,
      params: parts[part]
    };

    content.push(new Promise((resolve,reject) => {
      let data = null;

      switch(part) {
        case 'nav':
          data= navigationProcessor(options);
          break;
        case 'page':
          data = pageProcessor(options);
          break;
      }

      data
        .then((nodes) => {

        nodes.forEach((node) => {
          createNode(node);
        });
        resolve();
      })
        .catch((error) => {
          console.log(error)
        })

    }))
  }
  return Promise.all(content);
};
