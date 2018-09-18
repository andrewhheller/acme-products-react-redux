const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const Product = db.define('product', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },

  rating: {
    type: Sequelize.INTEGER, 
  }

})


const syncAndSeed = ()=> {
  db.sync({ force: true })
    .then(()=> {
      Promise.all([
        Product.create({ name: 'transporter', rating: 1 }),
        Product.create({ name: 'warp-engine', rating: 2 }),
        Product.create({ name: 'nacelle', rating: 3 }),
      ]);
    });
};

module.exports = {
  syncAndSeed,
  models: {
    Product
  },
};
