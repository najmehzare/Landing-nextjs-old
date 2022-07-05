import Slide from "./slide";
import Image from "next/image";

export default function Dashboard({children}){
    return(
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <Image className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                    </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 text-white">  خروج </div>
                        </div>
                    </div>
                </div>
            </nav>
        
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>

            <main>
                <div  className="py-3">
                    <Slide />
                </div>
                <div className="relative px-6 mx-60">
                    {children}
                </div>
            </main>
        </div>
    )
}