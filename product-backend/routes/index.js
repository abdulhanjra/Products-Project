import products from '../controllers/productController';

export default(app) => {
    app.route('/products')
        .get(products.getAll)
        .post(products.post);

    app.route('/products/:id')
        .get(products.get)
        .put(products.update)
        .delete(products.delete);

    // app.route('/users')
    //     .post(products.post);
};
