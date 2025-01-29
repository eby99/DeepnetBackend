import express, { Router } from 'express';
import { getMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem } from './controllers/menuItemController';

const router = Router();

router.get('/menus/:menuId/items', getMenuItems);
router.get('/menus/:menuId/items/:id', getMenuItem);
router.post('/menus/:menuId/items', createMenuItem);
router.put('/menus/:menuId/items/:id', updateMenuItem);
router.delete('/menus/:menuId/items/:id', deleteMenuItem);

export default router;