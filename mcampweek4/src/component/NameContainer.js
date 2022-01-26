import './NameContainer.css';

export default function NameContainer({names,setsearchTerm}) {
    return(
        <div className="nameContainerWrapper" >
            {
                ((names === []) || (names === '') ) ? <></> :
                <>
                {names.map(name => {
                    const searchTermClick = () => {
                        setsearchTerm(name)
                    }
                    return <div className='foodName' onMouseDown={searchTermClick}>{name}</div>
                })
                }
                </>
            }
        </div>
    )
}