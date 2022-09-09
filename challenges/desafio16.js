db.produtos.updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: { $type: "timestamp" } } });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 }).pretty();