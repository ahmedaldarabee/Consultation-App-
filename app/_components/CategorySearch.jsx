import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const CategorySearch = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center w-full  my-10">
            <h2 className="font-semibold text-4xl"> <span className="text-lime-600">Search</span> Category </h2>
            
            <div className="flex items-center w-full max-w-sm gap-5">
                <Input type="text" placeholder="add needed category" />
                <Button className="cursor-pointer">Search</Button>
            </div>
        </div>
    )
}

export default CategorySearch