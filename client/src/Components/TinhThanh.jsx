import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TinhThanh = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
        setCities(response.data);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    fetchData();
  }, []);

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    const selectedCity = cities.find(city => city.Id === cityId);
    setDistricts(selectedCity ? selectedCity.Districts : []);
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    const selectedDistrict = districts.find(district => district.Id === districtId);
    setWards(selectedDistrict ? selectedDistrict.Wards : []);
  };

  return (
    <div>
      
      <div>
        
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default TinhThanh;
