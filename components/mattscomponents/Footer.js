import React from 'react';

function Footer() {
    return (
        <div>
            <div className="bg-emerald-500 h-60 text-white">
                <div className="flex flex-row">
                <div className="flex flex-col flex-wrap pt-4 pr-24 pl-6">
                    <p className="font-medium text-lg pb-1">Shop</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">How it works</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Explore</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Trust & safety</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Safe trade spots</p>
                    <p className="text-sm font-light pt-12">© 2022 OfferUp Inc.</p>
                </div>
                <div className="flex flex-col pt-4 pr-24">
                    <p className="font-medium text-lg">Sell</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Post an item</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Auto dealerships</p>
                </div>
                <div className="flex flex-col pt-4 pr-24">
                    <p className="font-medium text-lg">About</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Our story</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Careers</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Press</p>
                </div>
                <div className="flex flex-col pt-4 pr-24">
                    <p className="font-medium text-lg">Help</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Help center</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Community</p>
                    <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">Blog</p>
                </div>
                </div>
                <div className="fixed text-xl border-2 rounded-lg max-h-10 w-28 left-96 ml-96 bottom-24 pl-0.5">Get the app</div>
            </div>
        </div>
    );
}

export default Footer;