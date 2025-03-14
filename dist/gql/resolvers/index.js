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
    Product: {
        category: (parent, args, context) => {
            return db.categories.find(category => category.id === parent.categoryId);
        },
        reviews: (parent, args, context) => {
            return db.reviews.filter(review => review.productId === parent.id);
        }
    },
    Category: {
        products: (parent, args, context) => {
            return db.products.filter(product => product.categoryId === parent.id);
        }
    }
};
