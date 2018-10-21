const fetch = require('node-fetch');

module.exports= async ({ createNodeId, createContentDigest, baseUrl, params}) => {

  return new Promise((resolve,reject) => {

    const processNav = (navItem) => {
      const nodeId = createNodeId(`nav-item-${navItem.wpID}`);
      const object = {
        structure: JSON.stringify(navItem.structure),
        wpID: navItem.wpID,
        slug: navItem.slug
      };

      return Object.assign({}, object, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: 'NavItem',
          content: JSON.stringify(navItem),
          contentDigest: createContentDigest(navItem)
        }
      });
    };

    fetch(`${baseUrl}nav/${params}`)
      .then((response) => response.json())
      .then((data) => {
        data = data.map((item) => {
          return processNav(item);
        });
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject();
      })
  })

};
