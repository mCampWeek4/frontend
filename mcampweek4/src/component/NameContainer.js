import './NameContainer.css';

export default function NameContainer({names}) {
    return(
        <>
            {
                ((names === []) || (names === '') ) ? <></> :
                <>
                {names.map(name => 
                <div className='foodName'>{name}</div>)}
                </>
            }
        </>
    )
}