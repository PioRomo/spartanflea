"use client";
import MainLayout from "../layouts/MainLayout";

export default function Sell(){

    return(
        <MainLayout>
            <div className="pl-4 ">
                {/*Header */}
                <div className="">
                    <h2 className="mt-6 text-2xl font-extrabold text-gray-900">List New Item</h2>
                </div>
                {/*Form */}
                <div className="mt-4 bg-gray-200 rounded-lg w-1/2 p-2 overflow-auto max-h-200">
                    {/*Item Title */}
                    <div className="p-2">
                        <h2 className="font-semibold">Item Title</h2>
                        <input type="text" id="item-title" name="item-title" 
                            className="text-xs p-1 mt-2 w-1/2 border border-2 border-black"
                        />
                    </div>
                    {/*Item Description */}
                    <div className=" p-2 mt-2">
                        <h2 className="font-semibold">Item Description</h2>
                        <textarea id="item-description" name="item-description" 
                            className=" text-xs p-1 mt-2 w-10/12 border border-2 border-black"
                            style={{height: '100px', resize: 'none'}}
                        />
                    </div>
                    {/*Item Price */}
                    <div className=" p-2 mt-2 ">
                        <h2 className="font-semibold">Item Price</h2>
                        <div>
                            <span className="m-1 text-2xl">$</span>
                            <input type="number" id="item-price" name="item-price" 
                                className=" text-sm p-1 mt-2 w-1/4 border border-2 border-black"
                                min="0" step="0.01"
                               
                            />
                        </div>
                    </div>
                    {/*Item Image */}
                    <div className=" p-2 mt-2 ">
                        <h2 className="font-semibold">Item Image</h2>
                        <input 
                            type="file" 
                            id="item-image" 
                            name="item-image" 
                            accept=".png, .jpg, .jpeg" 
                            className="text-xs p-2"
                        />
                        
                    </div>
                </div>
                {/*Button */}
                <div className="mt-2 ">
                    <button type="submit" 
                    className="w-1/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </MainLayout>

    );
}