import { Router } from 'express';

import * as validators from './validators/products';

import * as products from '~/app/controllers/products';

const routes = Router();

/**
 * @swagger
 *
 * definitions:
 *   Product:
 *     type: object
 *     properties:
 *      _id:
 *        type: string
 *      title:
 *        type: string
 *      price:
 *        type: number
 *      quantity:
 *        type: number
 *      createdAt:
 *        type: string
 */

/**
 * @swagger
 *
 * /products:
 *   get:
 *     description: List products.
 *     tags:
 *      - products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description:  Products.
 *         schema:
 *          type: object
 *          properties:
 *           total:
 *            type: number
 *           limit:
 *            type: number
 *           page:
 *            type: number
 *           pages:
 *            type: number
 *           docs:
 *            type: array
 *            items:
 *              $ref: '#/definitions/Product'
 */
routes.get('', validators.queryFilters, products.index);

/**
 * @swagger
 *
 * /products:
 *   post:
 *     description: Create a product.
 *     tags:
 *      - products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         description: New product.
 *         in: body
 *         required: true
 *         schema:
 *          type: object
 *          properties:
 *           title:
 *            type: string
 *           price:
 *            type: number
 *           quantity:
 *            type: number
 *
 *     responses:
 *       201:
 *         description: New product.
 *         schema:
 *            $ref: '#/definitions/Product'
 */
routes.post('', validators.bodyProduct, products.store);

/**
 * @swagger
 *
 * /products/{productUuid}:
 *   delete:
 *     description: Delete a product.
 *     tags:
 *      - products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productUuid
 *         description: UUID product.
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       204:
 *         description: Product deleted.
 *       400:
 *         description: Incorrect parameters.
 *       404:
 *         description: Product does not exist.
 */
routes.delete('/:id', validators.paramsId, products.destroy);

/**
 * @swagger
 *
 * /products/{productUuid}:
 *   get:
 *     description: Product detail.
 *     tags:
 *      - products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productUuid
 *         description: UUID product.
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Product detail.
 *         schema:
 *            $ref: '#/definitions/Product'
 *       400:
 *         description: Incorrect parameters.
 *       404:
 *         description: Product does not exist.
 */
routes.get('/:id', validators.paramsId, products.show);

/**
 * @swagger
 *
 * /products/{productUuid}:
 *   put:
 *     description: Product detail.
 *     tags:
 *      - products
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productUuid
 *         description: UUID product.
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: product
 *         description: New product.
 *         in: body
 *         required: true
 *         schema:
 *          type: object
 *          properties:
 *           title:
 *            type: string
 *           price:
 *            type: number
 *           quantity:
 *            type: number
 *
 *     responses:
 *       204:
 *         description: Product updated.
 *       400:
 *         description: Incorrect parameters.
 *       404:
 *         description: Product does not exist.
 */
routes.put('/:id', validators.paramsId, validators.bodyProduct, products.update);

export default routes;
