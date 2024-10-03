export default function Player({player}){
    return (
        <div>
            <p>Name: {player.name}</p>
            <p>salary: {player.salary}</p>
            <p>Age:{player.age}</p>
        </div>
    )
}