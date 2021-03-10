let books = [];
//this id will only be used for NEW BOOKS being created
let id = 0;

//export the following so that you can reference them in other files
module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        // const (title, author} = req.body;
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author
        })
        //change value of const id
        id++
        res.status(200).send(books)
    },
    update:(req, res) => {
        //destructure id off of req.params
        const {id} = req.params
        const {title, author} = req.body
        let bookIndex = null;
        // find and set the index for all books
        books.forEach((elem, i) => {
            if(elem.id === +id){
                bookIndex = i
            }
        })
        const updatedBook = {
            id,
            title,
            author
        }
        // let found = books.find(el => el.id === bookId)
        // found = {
        //     id, 
        //     title,
        //     author: author
        // }

        //remove the specified object
        books.splice(bookIndex, 1, updatedBook)
        res.status(200).send(books)
        // books.indexOf(bookId)
    },
    delete:(req, res) => {
        //CURRENTLY IS DELETING ALL of the books items
        let bookIndex2 = null
        // let bookIndex = null;

        // find the index of the PARAMS requested, then delete that ELEMENT
        books.forEach((elem, i) => {
            if(elem.id === +req.params.id){
                bookIndex2 = i
            }
        })
        books.splice(bookIndex2, 1)
        res.status(200).send(books)
        // books.splice(bookIndex, 1)
    }
}