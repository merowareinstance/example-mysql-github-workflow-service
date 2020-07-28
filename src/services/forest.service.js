const { db }= require('../modules');
const { Fruit, Tree } = db.models;

async function getTreesByFruitId(id) {
    const fruit = await Fruit.findByPk(id, {
        include: [{
            model: Tree,
        }]
    });
    // Only return model for tree
    return fruit && fruit.Tree ? fruit.Tree : null;
}

module.exports= {
    getTreesByFruitId
}