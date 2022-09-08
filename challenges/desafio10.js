db.produtos.find({
  $and: [{ "valoresNutricionais.3.percentual": { $lte: 40 } },
    { "valoresNutricionais.3.percentual": { $gte: 30 } },
  ] },
  { nome: 1, _id: 0 })
  .pretty();