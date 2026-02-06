import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faDatabase, faUsers } from '@fortawesome/free-solid-svg-icons';
import { services } from '@/constants/data';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'fa-computer':
        return faComputer;
      case 'fa-database':
        return faDatabase;
      case 'fa-users':
        return faUsers;
      default:
        return faComputer;
    }
  };

  return (
    <section id="services" className="py-16 px-6 bg-[#080505]" aria-labelledby="services-heading">
      <div className="container mx-auto">
        <h1 id="services-heading" className="text-4xl md:text-5xl text-white mb-12 text-center">My Services</h1>

        {/* Services Grid */}
        <div className="services-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-bronze-800 text-bronze-300 p-10 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]
                        hover:bg-black hover:text-gray-200 hover:-translate-y-2
                        transition-all duration-300 ease-in-out shadow-lg"
            >
              <FontAwesomeIcon
                icon={getIcon(service.icon)}
                className="text-4xl mb-6 text-bronze-400"
              />
              <h2 className="text-2xl font-semibold mb-4 text-bronze-300 group-hover:text-white">
                {service.title}
              </h2>
              <p className="text-base leading-relaxed text-bronze-200 group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
