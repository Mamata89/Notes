export const findNotes = (notes, id) => {
    return notes.find(note => note._id == id)
}