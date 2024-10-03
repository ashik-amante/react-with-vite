import Book from "./Book"

export default function Bookstore({books}){
    return (
        <div>
            <h4>Books Number : {books.length} </h4>
            <h2>Hisab Kitab</h2>
            <p>......................</p>

            {
                books.map(boi => <Book book = {boi}></Book>)
            }
        </div>
    )
}