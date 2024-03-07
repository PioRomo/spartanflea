"use client";

export default function SubMenu(){
    {/* Categories */}
    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Saved' },
        { id: 3, name: 'Housing' },
        { id: 4, name: 'Electronics' },
        { id: 5, name: 'Furniture' },
        { id: 6, name: 'Fashion' },
        { id: 7, name: 'Collectables and Art' },
        { id: 8, name: 'Sports' },
        { id: 9, name: 'Miscellaneous' },
        { id: 10, name: 'Sell' },
    ]

    return(
        
            <div id="SubMenu" className ="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] ">
                <ul id="TopMenuLeft" className="flex items-center text-[13px] text-[#333333] px-2 h-8">
                    {menuItems.map(item => (
                        <li key={item.id} className="px-3 hover:underline cursor-pointer">
                            {item.name}
                        </li>
                    ))}
                </ul>    

                </div>
            </div>
        

    );
}