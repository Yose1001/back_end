const prisma = require("../config/prisma");

exports.createTypetable = (type_name, price, reservation) => {
  return prisma.typetable.create({
    data: {
      type_name,
      price,
      reservation,
    },
  });
};
