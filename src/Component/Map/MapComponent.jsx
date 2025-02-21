import { IranMap } from 'react-iran-map'
import mapData from './data'
import './map.css'
import { useNavigate } from 'react-router';

function Map() {
  const navigate = useNavigate();
  const selectProvinceHandler = (province) => {
    province = province.faName
    console.log(province)
    navigate(`/province/${province}`);
  };
  

  return (
    <div style={{ fontFamily: 'vazir' }}>
      <IranMap
        data={mapData}
        width={500}
        textColor="white"
        defaultSelectedProvince='tehran'
        selectedProvinceColor='#b0da3d'
        tooltipTitle='تعداد:'
        selectProvinceHandler={selectProvinceHandler}
      />
    </div>
  )
}

export default Map