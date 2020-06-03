export const findCategories = (categories, id) => {
    return categories.find(category => category._id == id)
}