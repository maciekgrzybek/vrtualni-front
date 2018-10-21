const fetch = require('node-fetch');

module.exports = async ({createNodeId, createContentDigest, baseUrl, params}) => {

  return new Promise((resolve, reject) => {

    const processPage = (page) => {
      const nodeId = createNodeId(`page-item-${page.id}`);
      const object = {
        pageData: page
      };

      return Object.assign({}, object, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: 'Page',
          content: JSON.stringify(page),
          contentDigest: createContentDigest(page)
        }
      });
    };

    fetch(`${baseUrl}page/${params}`)
      .then((response) => response.json())
      .then((data) => {
        data = data.map(processPage);
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject();
      })


  })

};
