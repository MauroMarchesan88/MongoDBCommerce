db.produtos.updateMany({
  $and: [
    { nome: { $not: { $eq: "McChicken" } } },
    { ingredientes: { $not: { $eq: "ketchup" } } }] },
    { $push: { ingredientes: "ketchup" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 }).pretty();
