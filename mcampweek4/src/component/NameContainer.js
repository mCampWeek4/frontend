import './NameContainer.css';

export default function NameContainer({names}) {
    return(
        <div className="nameContainer">
            {names.map(name => <div className='foodName'>{name}</div>)}
        </div>
    )
}