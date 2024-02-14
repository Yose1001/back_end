const prisma = require("../config/prisma");

exports.getUserById = (id) => {
  return prisma.user.findFirst({
    where: {
      id,
    },
  });
};

exports.getUserByEmail = (email) => {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
};

exports.createUser = (
  firstName,
  lastName,
  email,
  phone,
  username,
  password,
  roleId,
  createAt,
  updateAt,
  status
) => {
  return prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      roleId,
      createAt,
      updateAt,
      status,
    },
  });
};
