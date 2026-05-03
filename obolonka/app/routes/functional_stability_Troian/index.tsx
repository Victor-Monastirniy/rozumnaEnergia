import React, { useState } from 'react';
import DevicesTab from './components/DevicesTab';
import ScenariosTab from './components/ScenariosTab';
import SimulationTab from './components/SimulationTab';

export default function SmartEnergyApp() {
  // Стан, який зберігає інформацію про те, яка вкладка зараз відкрита
  const [activeTab, setActiveTab] = useState('simulation'); 

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pb-10">
      
      {/* Навігаційне меню модуля */}
      <div className="bg-blue-800 text-white p-4 shadow-md mb-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">⚡ Smart Energy EMS</h1>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab('devices')} 
              className={`px-4 py-2 rounded font-semibold transition ${activeTab === 'devices' ? 'bg-blue-600 shadow-inner' : 'hover:bg-blue-700'}`}
            >
              База приладів
            </button>
            <button 
              onClick={() => setActiveTab('scenarios')} 
              className={`px-4 py-2 rounded font-semibold transition ${activeTab === 'scenarios' ? 'bg-blue-600 shadow-inner' : 'hover:bg-blue-700'}`}
            >
              Управління сценаріями
            </button>
            <button 
              onClick={() => setActiveTab('simulation')} 
              className={`px-4 py-2 rounded font-semibold transition ${activeTab === 'simulation' ? 'bg-green-500 text-white shadow-inner' : 'hover:bg-blue-700 text-gray-200'}`}
            >
              Симуляція та Радник
            </button>
          </div>
        </div>
      </div>

      {/* Контейнер для відображення вибраної вкладки */}
      <div className="container mx-auto px-4">
        {activeTab === 'devices' && <DevicesTab />}
        {activeTab === 'scenarios' && <ScenariosTab />}
        {activeTab === 'simulation' && <SimulationTab />}
      </div>
      
    </div>
  );
}