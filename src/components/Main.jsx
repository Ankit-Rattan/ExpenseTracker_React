import React, { useState } from 'react';
import Nav from './Nav';

const Main = () => {

    const [data, setData] = useState({
        container : [],
        reason: "",
        amount: ""
    })
    
    const { reason, amount, container } = data;
    
    const addCost = () =>{
        if(reason && amount){
            const newData = {
                id: container.length + 1,
                reason,
                amount
            };
            setData({
                ...data,
                container:[...container, newData],
                reason:"",
                amount:""
            })
        }
        else{
            alert("Fill the reason and amount. DON'T LEFT EMPTY")
        }
    };

    const delAmt = (id) => {
        const updatedData = container.filter((exp) => exp.id !== id);
        setData({
          ...data,
          container: updatedData
        });

        alert("Deleted ✅")
      };
        

    return (
        <>

        <Nav/>
        <div className='m-auto max-w-3xl px-2 text-center mt-[4rem]'>



            {/* Entering Data */}
            <div className='  flex-co bg-slate-200 p-4 rounded-lg shadow-lg'>

                {/* Title */}

                <div>
                    <label className='justify-start text-xl'>Detail </label>
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Detail of Expense'
                        className='mb-2'
                        value={reason} 
                        onChange={
                            (e) => setData({
                                ...data, reason:e.target.value
                            })
                        }
                    />
                </div>

                {/* Amount */}
                <div>
                    <label className='justify-start text-xl'>Expense </label>
                </div>
                <div>
                    <input
                        type='number'
                        placeholder='Cost'
                        value={amount}
                        onChange={
                            (e) => setData({
                                ...data, amount:e.target.value  
                            })
                        }
                    />
                </div>

                {/* Button */}

                <div>
                    <button onClick={addCost} className='font-bold mt-3 text-lg bg-orange-300 py-1 px-3 rounded-lg'>Add</button>
                </div>
            </div>


            {/* Data Show */}

            <div className='bg-orange-100 rounded-lg mt-2 shadow-lg  '>
                <div>
                    <h1 className='mb-2 text-2xl font-bold pb-10'>Your Expense ⬇️</h1>
                </div>
                <div>
                    <ul>
                        {container.map((val) => (
                            <li key={val.id}>
                                <span className='text-lg bg-slate-100 p-2 rounded-2xl shadow-md mb-2'>{val.reason} {"---->"} Rs.{val.amount}</span>
                                <br/>
                                <button
                                className='mt-4 ml-2 mb-3 text-sm border-spacing-1 bg-black text-white p-1 rounded-md'
                                 onClick={() => delAmt(val.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}

export default Main;