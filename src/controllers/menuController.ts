import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getMenus() {
  return await prisma.menu.findMany();
}

export async function getMenu(id: string) {
  return await prisma.menu.findUnique({ where: { id } });
}

export async function createMenu(data: { name: string; description: string }) {
  return await prisma.menu.create({ data });
}

export async function updateMenu(id: string, data: { name: string; description: string }) {
  return await prisma.menu.update({ where: { id }, data });
}

export async function deleteMenu(id: string) {
  return await prisma.menu.delete({ where: { id } });
}