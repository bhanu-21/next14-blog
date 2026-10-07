import Image from 'next/image';
import dog1 from '../../public/images/dog1.png';
import dog2 from '../../public/images/dog2.png';
import dog3 from '../../public/images/dog3.png';
import dog4 from '../../public/images/dog4.png';
import H1 from '@/components/h1';

export const metadata = { title: "My Photos" };

export default function PhotosPage() {
    return (
        <div>
            <H1>My Photos</H1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-60 overflow-hidden">
                    <Image fill src={dog1} alt="Photo 1" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={75} placeholder="blur" />
                </div>
                <div className="relative h-60 overflow-hidden">
                    <Image fill src={dog2} alt="Photo 2" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={75} placeholder="blur" />
                </div>
                <div className="relative h-60 overflow-hidden">
                    <Image fill src={dog3} alt="Photo 3" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" quality={75} placeholder="blur" />
                </div>
                <div className="relative h-60 overflow-hidden">
                    <Image fill src={dog4} alt="Photo 4" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" quality={75} placeholder="blur" />
                </div>
            </div>
        </div>
    )
}