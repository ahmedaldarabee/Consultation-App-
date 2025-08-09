import Image from "next/image"
import CancelDialog from "./CancelDialog";
import Api from "@/app/_utils/Api";
import { toast } from "sonner";

const MyBookingList = ({bookingList,past,updateAppointment}) => {
    const infoStyle = "font-semibold hover:translate-x-2 transition-all cursor-pointer duration-300"
    
    const onDeleteBooking = (item) => {
        Api.deleteRequest(item.documentId)
        .then((res) => {
            if(res){
                toast.success('Deleted successfully');
                updateAppointment();
            }else{
                toast.error('Sorry, there are an error in canceling please try again!')
            }
        })
        .catch((error) => {
            toast.error('Sorry, there are an error in canceling please try again!')
        })
    }

    return (
        <div>
            {bookingList.map((item,idx) => (
                <div key={idx} className=" my-5 flex md:flex-row flex-col gap-5">
                    <Image
                        src={`http://localhost:1337${item?.doctor?.image[0].url}`}
                        width={120}
                        height={120}
                        alt="doctor image"
                        className="object-cover"
                    />

                    <div>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Name </span> {item?.doctor?.name}</h2>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Address </span> {item?.doctor?.address}</h2>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Phone </span> {item?.doctor?.phone}</h2>
                        <h2 className={infoStyle}> <span className="text-lime-600"> Date </span> {new Date(item?.date).toLocaleString()}</h2>
                        { !past && <CancelDialog cancelClick={() => onDeleteBooking(item)} /> }
                    </div>

                </div>
            ))}
        </div>
    )
}

export default MyBookingList