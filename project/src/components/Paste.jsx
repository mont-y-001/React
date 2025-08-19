import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast'; 


const Paste = () => {
  const pastes = useSelector((state)  => state.paste.pastes );
  const [searchTerm, setSaerchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId){
      dispatch(removeFromPastes(pasteId));
  }
  return (
    <div>
     <input className='p-2 rounded-2xl min-w-[600px] mt-5' type="search" placeholder='Search' value={searchTerm} onChange={(e) => setSaerchTerm(e.target.value)} />
     <div className='flex flex-col gap-5 mt-5'>
      {
        filteredData.length > 0 &&
        filteredData.map(
          (paste) => {
            return (
              <div className='border' key={paste?._id}>
                <div>
                   {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div className='flex flex-row gap-4 place-content-evenly'>
                  <button><NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink></button>

                  <button>
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink></button>

                  <button onClick={() => handleDelete(paste?.
                    _id)}>Delete</button>

                  <button onClick={()=> {
                    navigator.clipboard.writeText
                    (paste?.content)
                    toast.success("Copied To Clipboard")
                  }}>Copy</button>

                  <button>Share</button>
                </div>

               
              </div>
            )
          }
        )
      }

     </div>
    </div>
  )
}

export default Paste
