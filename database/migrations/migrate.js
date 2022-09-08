'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profiles',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: { type: Sequelize.STRING, unique: true },
        admin: { type: Sequelize.BOOLEAN },
        delete: { type: Sequelize.BOOLEAN },
        update: { type: Sequelize.BOOLEAN },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE }
      },
      {
        initialAutoIncrement: 1001,
      }
    )

    await queryInterface.createTable('users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user: { type: Sequelize.STRING, unique: true },
        pass: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING, unique: true },
        profile_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: 'SET NULL',
          references: {
            model: 'profiles',
            key: 'id'
          }
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE }
      },
      {
        initialAutoIncrement: 1001,
      }
    )

    await queryInterface.createTable('records',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        table: { type: Sequelize.STRING },
        action: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        user_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: 'SET NULL',
          references: {
            model: 'users',
            key: 'id'
          }
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE }
      },
      {
        initialAutoIncrement: 1001,
      }
    )

    await queryInterface.createTable('students',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        rut: { type: Sequelize.STRING, unique: true },
        name: { type: Sequelize.STRING, unique: true },
        phone: { type: Sequelize.STRING },
        mail: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        gender: { type: Sequelize.STRING },
        date_of_birth: { type: Sequelize.DATE },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE }
      },
      {
        initialAutoIncrement: 1001,
      }
    ),
      await queryInterface.createTable('teachers',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          rut: { type: Sequelize.STRING, unique: true },
          name: { type: Sequelize.STRING, unique: true },
          phone: { type: Sequelize.STRING },
          mail: { type: Sequelize.STRING },
          address: { type: Sequelize.STRING },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('rooms',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: { type: Sequelize.STRING, unique: true },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('lessons',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          teacher_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',

            references: {
              model: 'teachers',
              key: 'id'
            }
          },
          name: { type: Sequelize.STRING, unique: true },
          quota: { type: Sequelize.INTEGER },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('lessons_lists',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          lesson_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'lessons',
              key: 'id'
            }
          },
          student_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
              model: 'students',
              key: 'id'
            }
          },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('sessions',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          lesson_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'lessons',
              key: 'id'
            }
          },
          room_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'rooms',
              key: 'id'
            }
          },
          date: { type: Sequelize.DATE },
          start: { type: Sequelize.TIME },
          end: { type: Sequelize.TIME },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('sales',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          lesson_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'lessons',
              key: 'id'
            }
          },
          student_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'students',
              key: 'id'
            }
          },
          quanty: { type: Sequelize.INTEGER },
          amount: { type: Sequelize.INTEGER },
          expiration: { type: Sequelize.DATE },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('tokens',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          lesson_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'lessons',
              key: 'id'
            }
          },
          student_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'students',
              key: 'id'
            }
          },
          sale_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'sales',
              key: 'id'
            }
          },
          state: { type: Sequelize.INTEGER, defaultValue: 1 },
          expiration: { type: Sequelize.DATE },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      ),
      await queryInterface.createTable('attendances',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          lesson_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'lessons',
              key: 'id'
            }
          },
          student_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'students',
              key: 'id'
            }
          },
          session_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'sessions',
              key: 'id'
            }
          },
          token_id: {
            allowNull: true,
            unique: false,
            type: Sequelize.INTEGER,
            onDelete: 'SET NULL',
            references: {
              model: 'tokens',
              key: 'id'
            }
          },
          created_at: { type: Sequelize.DATE },
          updated_at: { type: Sequelize.DATE }
        },
        {
          initialAutoIncrement: 1001,
        }
      )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables()
  }
};


