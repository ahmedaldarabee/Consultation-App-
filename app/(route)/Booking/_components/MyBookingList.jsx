import Image from "next/image"

const MyBookingList = ({bookingList,past}) => {
    console.log('coming booking data be as\n',bookingList);
    const infoStyle = "font-semibold hover:translate-x-2 transition-all cursor-pointer duration-300"
    return (
        <div>
            {bookingList.map((item,idx) => (
                <div key={idx} className=" my-5 flex md:flex-row flex-col gap-5">
                    <Image
                        src={`http://localhost:1337${item?.doctor?.image[0].url}`}
                        width={100}
                        height={100}
                        alt="doctor image"
                        className="object-cover w-[100] h-[100]"
                    />

                    <div>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Name </span> {item?.doctor?.name}</h2>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Address </span> {item?.doctor?.address}</h2>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Phone </span> {item?.doctor?.phone}</h2>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Date </span> {new Date(item?.date).toLocaleString()}</h2>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default MyBookingList