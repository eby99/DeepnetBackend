import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a new menu
  const menu = await prisma.menu.create({
    data: {
      name: 'Drinks',
      description: 'A selection of drinks',
    },
  });
  console.log('Menu created:', menu);

  // Create a new menu item
  const menuItem = await prisma.menuItem.create({
    data: {
      name: 'Lycheetini',
      description: 'A sweet and tangy drink',
      price: 10.99,
      menu: { connect: { id: menu.id } },
    },
  });
  console.log('Menu item created:', menuItem);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
