import Form from './blocks/orderform.tsx';

export default function Ordering() {
    return (
        <div className='select-none'>
            <div id="orderform" className='flex justify-center items-center mt-32'>
                <Form />
            </div>
        </div>
    )
}