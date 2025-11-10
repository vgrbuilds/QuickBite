
import React, { useState, useEffect } from 'react';
import { Canteen } from '../types';
import { getCanteens } from '../services/firebaseService';
import { getCurrentPosition, calculateDistance } from '../utils/geolocation';
import Spinner from './Spinner';
import Button from './Button';
import { LocationIcon, StoreIcon, RightArrowIcon } from './Icons';

interface CanteenFinderProps {
  onCanteenSelected: (canteen: Canteen) => void;
}

const CanteenFinder: React.FC<CanteenFinderProps> = ({ onCanteenSelected }) => {
  const [nearestCanteen, setNearestCanteen] = useState<Canteen | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLocated, setIsLocated] = useState<boolean>(false);

  const findNearestCanteen = async () => {
    setIsLoading(true);
    setError(null);
    setNearestCanteen(null);

    try {
      const coords = await getCurrentPosition();
      const userLocation = { lat: coords.latitude, lon: coords.longitude };
      
      const canteens = await getCanteens();
      if (canteens.length === 0) {
        throw new Error('No canteens available.');
      }

      let closestCanteen: Canteen | null = null;
      let minDistance = Infinity;

      canteens.forEach(canteen => {
        const dist = calculateDistance(userLocation, canteen.location);
        if (dist < minDistance) {
          minDistance = dist;
          closestCanteen = canteen;
        }
      });
      
      if(closestCanteen) {
        setNearestCanteen(closestCanteen);
        setDistance(minDistance);
        setIsLocated(true);
      } else {
        setError("Could not find any canteens near you.");
      }

    } catch (err) {
      if (err instanceof GeolocationPositionError) {
        setError('Could not get your location. Please enable location services in your browser settings.');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <div className="max-w-md w-full">
        {!isLocated && (
          <>
            <LocationIcon className="mx-auto h-16 w-16 text-orange-400" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Find Your Nearest Bite
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let's find the closest college canteen so you can order delicious food in a snap.
            </p>
            <div className="mt-8">
              {isLoading ? (
                <div className="flex justify-center items-center space-x-2">
                  <Spinner />
                  <span className="text-gray-600">Finding canteens near you...</span>
                </div>
              ) : (
                <Button onClick={findNearestCanteen} size="lg" className="w-full">
                  Find Nearest Canteen
                </Button>
              )}
            </div>
          </>
        )}

        {isLocated && nearestCanteen && (
          <div className="w-full text-left bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                <StoreIcon className="h-7 w-7 text-orange-500"/>
              </div>
              <div>
                <p className="text-sm font-medium text-orange-600">NEAREST CANTEEN</p>
                <h3 className="text-2xl font-bold text-gray-900">{nearestCanteen.name}</h3>
                {distance !== null && (
                  <p className="text-gray-500">{distance.toFixed(2)} km away</p>
                )}
              </div>
            </div>
            <div className="mt-6">
               <Button onClick={() => onCanteenSelected(nearestCanteen)} size="lg" className="w-full">
                <span>View Menu & Order</span>
                <RightArrowIcon className="h-5 w-5 ml-2"/>
              </Button>
            </div>
          </div>
        )}
        
        {error && (
          <div className="mt-6 text-red-600 bg-red-50 p-4 rounded-lg">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CanteenFinder;
