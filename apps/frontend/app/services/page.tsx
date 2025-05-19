import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { SERVICE_TITLES, SERVICE_DESCRIPTIONS } from '@/lib/constants';

const services = [
  {
    title: SERVICE_TITLES.WEB_DEVELOPMENT,
    description: SERVICE_DESCRIPTIONS.WEB_DEVELOPMENT,
    icon: '/assets/img/service-web-development.png',
  },
  {
    title: SERVICE_TITLES.MOBILE_APP_DEVELOPMENT,
    description: SERVICE_DESCRIPTIONS.MOBILE_APP_DEVELOPMENT,
    icon: '/assets/img/service-mobile-app.png',
  },
  {
    title: SERVICE_TITLES.CLOUD_SOLUTIONS,
    description: SERVICE_DESCRIPTIONS.CLOUD_SOLUTIONS,
    icon: '/assets/img/service-cloud.png',
  },
  {
    title: SERVICE_TITLES.IT_CONSULTING,
    description: SERVICE_DESCRIPTIONS.IT_CONSULTING,
    icon: '/assets/img/service-it-consulting.png',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
