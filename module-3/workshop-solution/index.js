const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

const prisma = new PrismaClient({ log: ["query"] });

app.use(express.json());

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.post("/api/users", async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  res.status(201).json(newUser);
});

app.put("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: req.body,
  });
  res.json(updatedUser);
});

app.delete("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await prisma.user.delete({ where: { id: id } });
  res.sendStatus(204);
});

app.listen(3000, () => console.log("The app is running on port 3000!"));
