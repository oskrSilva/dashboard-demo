import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Driver } from '@/types/driver';
import 'leaflet/dist/leaflet.css';
import styles from './TrackingPage.module.css';

// Mock driver locations
const mockDrivers: (Driver & { location: [number, number] })[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+1234567890',
    status: 'available',
    activeDeliveries: 2,
    location: [-27.3665, -55.8976] // Posadas coordinates
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@example.com',
    phone: '+1234567891',
    status: 'busy',
    activeDeliveries: 1,
    location: [-27.3628, -55.9001] // Another location in Posadas
  }
];

export function TrackingPage() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  return (
    <div className={styles.container}>
         <div className={styles.stats}>
          <div className={styles.driverList}>
            {mockDrivers.map((driver) => (
              <div
                key={driver.id}
                className={`${styles.driverCard} ${
                  selectedDriver?.id === driver.id ? styles.selected : ''
                }`}
                onClick={() => setSelectedDriver(driver)}
              >
                <div className={styles.driverHeader}>
                  <h3 className={styles.driverName}>{driver.name}</h3>
                  <span
                    className={`${styles.status} ${
                      driver.status === 'available' ? styles.available : styles.busy
                    }`}
                  >
                    {driver.status === 'available' ? 'Disponible' : 'Ocupado'}
                  </span>
                </div>
                <p className={styles.driverInfo}>
                  Entregas activas: {driver.activeDeliveries}
                </p>
                <p className={styles.driverContact}>{driver.phone}</p>
              </div>
            ))}
        </div> 
      </div>

      <div className={styles.content}>
        <div className={styles.map}>
        <MapContainer
            center={[-27.3671, -55.8961]}
            zoom={13}
            className={styles.mapContainer}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mockDrivers.map((driver) => (
              <Marker
                key={driver.id}
                position={driver.location}
                eventHandlers={{
                  click: () => setSelectedDriver(driver),
                }}
              >
                <Popup>
                  <div className={styles.popup}>
                    <h3 className={styles.driverName}>{driver.name}</h3>
                    <p className={styles.driverInfo}>
                      Estado: {driver.status === 'available' ? 'Disponible' : 'Ocupado'}
                    </p>
                    <p className={styles.driverInfo}>
                      Entregas activas: {driver.activeDeliveries}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </div>
  );
}