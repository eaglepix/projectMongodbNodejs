import {
    addnewProduct, getProducts, getProductWithID,
    updateProduct, deleteProduct
} from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
        // get multiple products
        .get(getProducts)
        // Post endpoint
        .post(addnewProduct);


    app.route('/products/:ProductID')
        // get a specific product with an ID
        .get(getProductWithID)
        // updating a specific product
        .put(updateProduct)
        // deleting a specific product
        .delete(deleteProduct);
}
export default routes;

