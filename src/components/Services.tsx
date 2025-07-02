import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Жилые дома и коттеджи",
      description:
        "Строительство частных домов, коттеджей и малоэтажных жилых комплексов с использованием современных технологий и материалов.",
      features: [
        "Индивидуальное проектирование",
        "Энергоэффективные решения",
        "Гарантия качества",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Building2",
      title: "Коммерческие объекты",
      description:
        "Возведение офисных зданий, торговых центров, складских комплексов и промышленных объектов любой сложности.",
      features: [
        "Соблюдение сроков",
        "Современные технологии",
        "Полный цикл работ",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "Hammer",
      title: "Ремонт и реконструкция",
      description:
        "Капитальный ремонт, реновация и реконструкция зданий с сохранением архитектурной ценности и повышением функциональности.",
      features: [
        "Работа с любыми объектами",
        "Сохранение истории",
        "Современные стандарты",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "Route",
      title: "Дорожное строительство",
      description:
        "Строительство автомобильных дорог, тротуаров, парковок и благоустройство территорий с применением качественных материалов.",
      features: [
        "Долговечные покрытия",
        "Экологичные материалы",
        "Современное оборудование",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-construction-dark mb-6">
            Наши услуги
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр строительных услуг от проектирования до
            сдачи объекта под ключ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>

                <h3 className="font-montserrat text-xl font-bold text-construction-dark mb-4">
                  {service.title}
                </h3>

                <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center font-opensans text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-construction-blue mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-construction-blue group-hover:text-white group-hover:border-construction-blue transition-colors"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-construction-orange hover:bg-orange-600 font-opensans text-lg px-8 py-4"
          >
            <Icon name="Calculator" className="mr-2" size={20} />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
