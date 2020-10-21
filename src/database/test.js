const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-19.9297061",
    lng: "-43.9570921",
    name: "Lar dos Meninos",
    about:
      "Presta assistencia a crianças de 0 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",
    whatsapp: "9768754728",
    images: [
      "https://images.unsplash.com/photo-1590009617786-6d054a2a3c7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1590966473477-e74b95a0c407?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horários de visitas Das 8h as 18h",
    open_on_weekends: "0",
  });

  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

//   const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="6"')
//   console.log(orphanage)

  // await db.run('DELETE FROM orphanages WHERE id = "2"')
});
