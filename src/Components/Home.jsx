import Introduction from './Introduction.jsx'
export default function Home(){
    return (
        <div className="h-[95vh]  flex justify-center items-center">
            <Introduction/>
            <div className='absolute bottom-0 left-0 w-[200px] h-[100px] bg-[#ffb703] blur-[100px] rounded-full scale-[2]'></div>
            <div className='absolute bottom-0 right-[10%] w-[200px] h-[100px] bg-[#3D1DFF] blur-[100px] rounded-full scale-[2]'></div>
        </div>
    )
}