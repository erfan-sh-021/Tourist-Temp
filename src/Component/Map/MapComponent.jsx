import { IranMap } from 'react-iran-map'
import mapData from './data'
import './map.css'
function Map() {
  const selectProvinceHandler = (province) => {
    console.log(province)
  }
  

  return (
    <div style={{ fontFamily: 'vazir' }}>
      <IranMap
        data={mapData}
        width={450}
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