import MainLayout from "@/app/layouts/ProfileLayout";
import Link from "next/link"; 


export default function Profile() {
    const profile = {
        id: 1,
        title: "Flea's Profile",
        description: "Space Holder",
        url: "https://picsum.photos/id/7",
    };

    return (
        <MainLayout>
            <div className="max-w-[900px] mx-auto flex space-x-16">
                {/* Left Column */}
                <div className="w-1/3">
                    <div className="px-4 mb-4 mt-10">
                        <div className="font-bold text-xl">{profile?.title}</div>
                    </div>
                    {profile?.url ? (
                        <img
                            className="w-full rounded-full" // Modified class to make the image rounded
                            src={profile?.url + '/280'}
                            alt={profile?.title}
                        />
                    ) : (
                        <div className="w-full"></div>
                    )}
                </div>

                {/* Middle Column */}
                <div className="w-1/3 mt-10">
                    

                    <div className="mt-4 mb-12 mr-4 ml-8">
                        <div className="bg-gray-200 rounded-lg p-2 overflow-auto max-h-200">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Items Listed:</div>
                                <div className="font-bold text-sm text-right">{profile?.description}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mb-12 mr-4 ml-8">
                        <div className="bg-gray-200 rounded-lg p-2 overflow-auto max-h-200">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Items Wishlisted:</div>
                                <div className="font-bold text-sm text-right">{profile?.description}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mb-12 mr-4 ml-8">
                        <div className="bg-gray-200 rounded-lg p-2 overflow-auto max-h-200">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Conversations:</div>
                                <div className="font-bold text-sm text-right">{profile?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-1/3 mt-4">
                    <div className="pt-12 grid grid-rows-3 gap-14">
                        <Link href="/sell" className="mx-10 bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer inline-flex items-center justify-center">
                        <button>
                            Create New Listing
                        </button>
                        </Link>
                        <Link href="/wishlist" className="mx-10 bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer inline-flex items-center justify-center">
                        <button>
                            View Wishlist
                        </button>
                        </Link>
                        <Link href="/messages" className="mx-10 bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer inline-flex items-center justify-center">
                        <button>
                            View Inbox
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
