import { useState } from "react";



function Message() {

    const [message, setMessage] = useState([
        {
            id: 1,
            text: 'Привет',
            author: 'user',
            side: 'left',
        },
        {
            id: 2,
            text: 'Здрасте',
            author: 'admin',
            side: 'right',
        },
        {
            id: 3,
            text: 'как дела?',
            author: 'user',
            side: 'left',
        },
        {
            id: 4,
            text: 'нормально',
            author: 'admin',
            side: 'right',
        },
    ])

    

    const handlerRomeve = (id) => {
        setMessage(message.filter(item => {
            if(item.id === id){
                return false
            }
            return true
        }))
    }
    return (
        <div>
            {
            message.map(item =>{
    return (
    <div className={`row ${item.side === 'right' ?  'justify-content-end' : ''}`}>
        <div className="col-5 mb-3">
            <div className={`inbox  p-2 rounded-3 text-white ${item.side === 'right' ? 'bg-success' : 'bg-primary'}`}>
                <div>{item.author}</div>
                {item.text}
                <button className="btn btn-danger" onClick={() => handlerRomeve(item.id)}>
                    X
                </button>
            </div>
        </div>
    </div>
    )
})}
        </div>
    )
    
  }
  
  export default Message;