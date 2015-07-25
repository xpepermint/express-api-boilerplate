import bcrypt from 'bcrypt-as-promised';
import UnauthenticatedError from '../errors/UnauthenticatedError';

export default function(sequelize, DataTypes) {
  return sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {msg: 'is required'}
      }
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {msg: 'is required'}
      }
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: '',
      unique: {msg: 'must be unique'},
      validate: {
        notEmpty: {msg: 'is required'},
        len: {args: [10, 50], msg: 'must be between 10 and 50'}
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      defaultValue: '',
      validate: {
        notEmpty: {msg: 'is required'},
        len: {args: [10, 50], msg: 'must be between 10 and 50'}
      }
    },
    passwordSalt: {
      type: DataTypes.STRING
    },
    passwordHash: {
      type: DataTypes.STRING
    }
  }, {
    getterMethods: {name},
    classMethods: {associate},
    instanceMethods: {authenticate},
    hooks: {
      beforeCreate: [setPasswordSalt, setPasswordHash],
      beforeUpdate: [setPasswordHash]
    }
  });
};

function name() {
  return `${this.firstName} ${this.lastName}`;
}

function associate(models) {
  models.User.hasMany(models.Location, {foreignKey: 'userId'});
}

function authenticate(password) {
  return bcrypt.hash(password || '', this.passwordSalt).then(hash => {
    if (hash === this.passwordHash) return this;
    throw new UnauthenticatedError();
  }.bind(this));
}

function setPasswordSalt(user, options, next) {
  bcrypt.genSalt(10).then(salt => {
    user.passwordSalt = salt;
    next();
  }).catch(next);
}

function setPasswordHash(user, options, next) {
  bcrypt.hash(user.password, user.passwordSalt).then(hash => {
    user.passwordHash = hash;
    next();
  }).catch(next);
}
