import {
    AlertDialog, AlertDialogAction,AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription,AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle,AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const CancelDialog = ({cancelClick}) => {
    return (
        <>
        <AlertDialog>
            
            <AlertDialogTrigger>
                <div className="mt-2 cursor-pointer bg-lime-600 hover:bg-lime-500 transition-all duration-300 text-white px-4 py-2 rounded-md">Cancel Request</div>
            </AlertDialogTrigger>

            <AlertDialogContent>
            
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your request!
                    </AlertDialogDescription>
            
                </AlertDialogHeader>
                
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => cancelClick()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            
            </AlertDialogContent>
        </AlertDialog>
        </>
    )
}

export default CancelDialog