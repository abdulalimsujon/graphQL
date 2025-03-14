import { db } from "../../db.js";

export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            return db.products.find(pd => pd.id === args.productId);
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            return db.categories.find(cat => cat.id === args.categoryId);
        },
    },

    // Fix the typo: Change 'product' to 'Product'
    Category: {
        products: (parent, args, context) => {
            

            return db.products.filter(product => product.categoryId === parent.id);
        }
    }
};
