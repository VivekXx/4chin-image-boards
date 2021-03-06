import React,{useState} from 'react'


export const Catalogue = ({data,isPopular}) => {
    const {img,opComment,board,title,replies,imageReplies,createdAt,updatedAt} = data
    const [showPop,setShowPop] = useState(false)
    const url = 'http://localhost:3000/boards'
    
    return (
        <div className={!isPopular?'col-2 catalogue':'col-4 catalogue'}>
            {showPop && <h4 className="pop" style={{position:'absolute'}}>{`Created at: ${createdAt.split('T').join('--')}`}<br/>{`Last post: ${updatedAt.split('T').join('--')}`}</h4>}
            <a onMouseOut={()=>setShowPop(false)} onMouseOver={()=>setShowPop(true)} href={url+`${board}${data._id}`}><img className='p-2 clg-image' width='200px' src={`data:image/png;base64,${Buffer.from(data.img.data.data).toString('base64')}`} alt='Loading'/></a>
            <h6>R:{replies+'  '}I:{imageReplies}</h6>
            {/* <h6>{title}</h6> */}
            <p><span>{title}:</span>{' '+opComment}</p>
        </div>
        // <div class="card">
        //     <img class="card-img-top" src={img} alt="Loading..."/>
        //     <div class="card-body">
        //         <p class="card-text">
        //         {comment}
        //         </p>
                
        //     </div>
        // </div>
    )
}
