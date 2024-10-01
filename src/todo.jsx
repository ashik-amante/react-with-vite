// export default function Todo({task}){
//     return <h2>{task}</h2>
// }

// conditional rendaring 2
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>finished : {task}</li>
//     }
//     else{
//         return <li>Work On :{task} </li>
//     }
// }

// consditional rendaring 3
// export default function Todo({task,isDone}){
//     return(
//         <li>{isDone ? 'finished' : 'Work On'} : {task}</li>
//     )
// }

// // consditional rendaring 4
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone && ': done'} </li>
//     )
// }

// // consditional rendaring 5
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone || ': do it'} </li>
//     )
// }

// conditional rendaring 6  as a veriable

export default function Todo({task,isDone}){
    let listItem;

    if(isDone){
        listItem = <li>finished : {task}</li>
    }
    else{
        listItem= <li>Work On :{task} </li>
    }
    return listItem
}