const fetch = require('node-fetch');

exports.sourceNodes = ({actions, createNodeId, createContentDigest}, configOptions) => {

  const {createNode} = actions;
  delete configOptions.plugins;

  const processNav = (navItem) => {
    const nodeId = createNodeId(`nav-item-${navItem.ID}`);
    const nodeContent = JSON.stringify(navItem);

    const nodeData = Object.assign({}, navItem, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'NavItem',
        content: nodeContent,
        contentDigest: createContentDigest(navItem)
      }
    });

    return nodeData;
  };

  return (
    fetch('http://vrtualni.lndo.site/wp-json/gatsby_wp_helper/v2/nav/2')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const nodeData = processNav(item);
          createNode(nodeData);
        })
      })
  );
};
