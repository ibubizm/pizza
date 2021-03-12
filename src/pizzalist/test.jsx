{/* <div ref={itemRef} className="items">
{propsList && propsList.map((item, index) => 
    <div className="item" key={`${item}_${index}`}>
        <img src={item.img} alt=""/>
        <div className="item__name">{item.name}</div>
        <div className="switcher">
            <div className="dough">
                
                {item.types.map((items, index) =>
                    <div onClick={() => setCurrentDough(index)} key={`${item}_${index}`} className={currentDough === index? "switch__dough actives" : "switch__dough" }>{items}</div>
                    )}

            </div>
            {/* <div className="sm__block">
                {item.size.map((items, index) => 
                    <div onClick={() => setCurrentSize(index)} key={`${items}_${index}`} className={currentSize === index ?'switch__size actives': 'switch__size'}>
                        {items}cm
                    </div>               
            </div> */}
        </div>
        <button className="btn">+Add</button>
    </div>)}
</div>


 {propsList && propsList.map((item, index) => 
                    <div className="item" key={`${item}_${index}`}>
                        <img src={item.imageUrl} alt=""/>
                        <div className="item__name">{item.name}</div>
                        <div className="switcher">
                            <div className="dough">
                                <li>{item.sizes}</li>
                                {/* {item.types.map((items, index) =>
                                    <div onClick={() => setCurrentDough(index)} key={`${item}_${index}`} className={currentDough === index? "switch__dough actives" : "switch__dough" }>{items}</div>
                                    )} */}

                            </div>
                            {/* <div className="sm__block">
                                {item.size.map((items, index) => 
                                    <div onClick={() => setCurrentSize(index)} key={`${items}_${index}`} className={currentSize === index ?'switch__size actives': 'switch__size'}>
                                        {items}cm
                                    </div>               
                            </div> */}
                        </div>
                        <button className="btn">+Add</button>
                    </div>)} */}