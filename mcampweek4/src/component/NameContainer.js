export default function NameContainer({names}) {
    return(
        <div>
            {names.map(name => <div className='foodName'>{name}</div>)}
        </div>
    )
}