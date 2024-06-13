import { GanttChartSquare, Blocks, PaletteIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Our Mission',
        description: `At O'Beauty, our mission is to empower individuals to embrace their natural beauty 
        with confidence. We strive to provide high-quality, luxurious beauty products that enhance and celebrate 
        your unique features.`
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Our Values',
        description: `We value authenticity, inclusivity, and excellence in everything we do. 
        Our commitment to sustainability and ethical practices ensures that our products not only make you 
        look good but also feel good about your choices.`
    },
    {
        icon: <PaletteIcon size={72} strokeWidth={0.8} />,
        title: 'Our Services',
        description: `O'Beauty offers a range of premium beauty services, including 
        personalized lash extensions, professional makeup artistry, and skincare. 
        We dedicated to delivering exceptional results 
        tailored to your individual needs.`
    }
]

const AboutUs = () => {
    return (
        <section className="pt-12 pb-4">
            <div className="container mx-auto">
                <h2 className="section-title mb-6 xl:mb-12 text-center mx-auto">
                    About Us
                </h2>
                {/* grid items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, index) => (
                        <Card className="w-full max-w-[424px] flex flex-col pt-16 pb-10 justify-center items-center relative border-2 border-pink-600" key={index}>
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center relative">
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">{item.title}</CardTitle>
                                <CardDescription className="text-lg">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
