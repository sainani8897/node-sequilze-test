

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@gmail.com',
        password: '0e7517141fb53f21ee439b355b5a1d0a',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'User',
        lastName: 'User',
        email: 'user@gmail.com',
        password: '0e7517141fb53f21ee439b355b5a1d0a',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
