import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 cursor-pointer">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-lime-600 sm:text-3xl">
                                Your Health, Just a Click Away
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Search, compare, and book appointments with top doctors anytime, anywhere.Access quality healthcare from the comfort of your home.
                            </p>

                            <Button className="mt-5">Explore Now</Button>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/assets/hero.png"
                            className="rounded"
                            alt="doctor image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero