import { additionalPassion } from '../data/passion.js';

function CategoryAddiPassion(){
    return(
        <>
        {additionalPassion.map((data, index)=>{
            console.log(data.image)
            return(
                <>
                <div key={index} className="flex flex-col w-[347px] h-[280px] rounded-xl bg-white shadow-[0px_5px_26px_5px_rgba(0,0,0,0.17)] items-center tracking-wider gap-1">
                    <img  src={data.image} alt={data.alt} className='w-[347px] h-[140px] rounded-t-xl mb-10'/>
                    <div className='text-2xl'><span className='font-semibold'>{data.passion}</span> {data.position}</div>
                    <p className='text-lg'>{data.detail}</p>
                </div>
                    </>
                    )
                })}
        </>
    )
    
};
export default CategoryAddiPassion;