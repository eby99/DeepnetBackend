import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getMenuItems(menuId: string) {
  return await prisma.menuItem.findMany({ where: { menuId } });
}

export async function getMenuItem(id: string) {
  return await prisma.menuItem.findUnique({ where: { id } });
}

export async function createMenuItem(data: { name: string; description: string; price: number; menuId: string }) {
  return await prisma.menuItem.create({ data });
}

export async function updateMenuItem(id: string, data: { name: string; description: string; price: number }) {
  return await prisma.menuItem.update({ where: { id }, data });
}

export async function deleteMenuItem(id: string) {
  return await prisma.menuItem.delete({ where: { id } });
}