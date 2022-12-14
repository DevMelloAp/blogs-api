'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', { 
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BlogPosts', 
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },  
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
