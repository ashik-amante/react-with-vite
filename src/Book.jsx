export default function Book({book}){
    const {name, price, author} = book
    return (
        <div className="books">
            <h3>Book :{name} </h3>
            <h3>Price :{price} </h3>
            <h3>Author :{author} </h3>
        </div>
    )
}