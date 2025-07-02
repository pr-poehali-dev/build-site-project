import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-construction-dark to-slate-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-montserrat text-5xl lg:text-6xl font-bold leading-tight">
              Строим будущее
              <span className="block text-construction-blue">
                вместе с вами
              </span>
            </h1>
            <p className="font-opensans text-xl text-gray-300 leading-relaxed">
              Полный цикл строительных услуг от проекта до сдачи объекта.
              Современные технологии, надёжность и качество в каждой детали.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-construction-blue hover:bg-blue-600 font-opensans text-lg px-8 py-4"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-construction-dark font-opensans text-lg px-8 py-4"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть проекты
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
                  <Icon
                    name="Building"
                    size={32}
                    className="text-construction-orange mb-4"
                  />
                  <h3 className="font-montserrat font-semibold text-lg">
                    Жилые дома
                  </h3>
                  <p className="font-opensans text-sm text-gray-300">
                    и коттеджи
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
                  <Icon
                    name="Briefcase"
                    size={32}
                    className="text-construction-orange mb-4"
                  />
                  <h3 className="font-montserrat font-semibold text-lg">
                    Коммерческие
                  </h3>
                  <p className="font-opensans text-sm text-gray-300">объекты</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
                  <Icon
                    name="Wrench"
                    size={32}
                    className="text-construction-orange mb-4"
                  />
                  <h3 className="font-montserrat font-semibold text-lg">
                    Ремонт
                  </h3>
                  <p className="font-opensans text-sm text-gray-300">
                    реконструкция
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
                  <Icon
                    name="Truck"
                    size={32}
                    className="text-construction-orange mb-4"
                  />
                  <h3 className="font-montserrat font-semibold text-lg">
                    Дорожное
                  </h3>
                  <p className="font-opensans text-sm text-gray-300">
                    строительство
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
