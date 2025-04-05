import { FaHeart, FaMotorcycle } from 'react-icons/fa';
import { BsCode } from 'react-icons/bs';
import { SiPlaystation } from 'react-icons/si';
import { FaXbox } from 'react-icons/fa';
import { Card } from '@/components/ui/card';

export function Interests() {
  return (
    <section id="interests" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
          <FaHeart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Interests</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <FaMotorcycle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">Motorcycle Adventures</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Passionate about exploring new destinations on two wheels, enjoying long bike rides and the freedom of the open road.
            </p>
          </Card>
          <Card className="p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <BsCode className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">Technology</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Constantly learning and experimenting with new technologies and development practices.
            </p>
          </Card>
          <Card className="p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <FaXbox className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                <SiPlaystation className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">Gaming</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Enthusiastic gamer who enjoys playing on both Xbox and PlayStation 5. Always up for exploring new games and gaming experiences.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}