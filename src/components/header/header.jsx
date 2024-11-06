import './header.css'

export function Header(){
    return(
        <div className="header headPos">
            <div className="headerWrapper">
                <div className="header__butColor butColor">
                    <button className="butColor__switch"></button>
                    <div className="butColor__title">Dark mode</div>
                </div>
                <div className="header__searchInput search">
                    <input placeholder={'Search for your preffered city...'} type="search" className="search__pole"/> 
                    <button type='submit' className="search__inner"> 
                        <div className="search__in"></div>                                      
                    </button>                   
                </div>
                <button className="header__butLocation location"> 
                    <div className="location__Inner"></div>                  
                    <div className="location__text">Current Location</div>
                </button>
            </div>
        </div>
    )
}

