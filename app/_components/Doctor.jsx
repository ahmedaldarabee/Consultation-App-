import Image from "next/image"
import Link from "next/link"

const Doctor = ({doctorList,heading="Popular"}) => {
    return (
        <div className="w-full my-10 flex justify-center flex-col gap-4">
            <h2 className="font-semibold text-4xl  text-center">
                <span className="text-lime-600"> {heading} </span> Doctor
            </h2>
            
            <div className="grid grid-col-1 md:grid-cols-3 p-3">
                {doctorList?.length > 0 ? doctorList?.map((doctor,idx) => (
                    <Link key={idx} href={`/details/${doctor?.documentId}`}>
                        <div className="border-2 rounded-lg p-3 m-3 hover:scale-105 hover:shadow-md transition-all cursor-pointer duration-300">
                            <Image 
                                src={`http://localhost:1337${doctor?.image[0]?.url}`}
                                alt="doctor image"
                                width={500}
                                height={200}
                                className="h-[300px] w-full object-cover"
                            />
                            <div className="flex items-baseline flex-col gap-4 mt-5  ">
                                <h2 className="cursor-pointer hover:text-lime-800 transition-all duration-300 rounded-full py-2 px-4 bg-lime-200 text-lime-600">{doctor?.category?.name}</h2>
                                <h2> <span className="text-lime-600">Name: </span> {doctor?.name}</h2>
                                <h2> <span className="text-lime-600">Experience Year: </span> {doctor?.yearOFExperience}</h2>
                                <h2> <span className="text-lime-600">Phone: </span> {doctor?.phone}</h2>
                                <h2> <span className="text-lime-600">Location: </span> {doctor?.address}</h2>
                            </div>
                            <div className="flex items-baseline my-4">
                                <h2 className="capitalize hover:text-white hover:border-0 px-4 border-2 border-lime-800 py-2 hover:bg-lime-600 transition-all duration-300 cursor-pointer">book now</h2>
                            </div>
                        </div>
                    </Link>
                )):
                    Array(9).fill(0).map((item,idx) => {
                    <div
                        key={idx}
                        className=" animate-pulse h-[250px] w-[250px] bg-lime-200 m-10">
                        loading please wait...
                    </div>
                    })
                }
            </div>
        </div>
    )
}

export default Doctor