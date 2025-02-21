import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import './Province.css'
function ProvinceDetail() {
  const { provinceName } = useParams();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchProvinceData = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("province", "==", provinceName)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const fetchedPlaces = querySnapshot.docs.map((doc) => doc.data());
          setPlaces(fetchedPlaces);
        } else {
          console.log("No data found for this province");
        }
      } catch (error) {
        console.error("Error fetching province data:", error);
      }
    };

    fetchProvinceData();
  }, [provinceName]);

  return (
    <>
      <h2>مکان‌های گردشگری استان {provinceName}</h2>
      {places.length > 0 ? (
        places.map((place) => (
          <div key={place.id} className="PrivStyel">
            <img src={place.picture} alt={place.title} width="450" />
            <h3>{place.title}</h3>
            <p>{place.description}</p>
          </div>
        ))
      ) : (
        <p>در حال بارگذاری اطلاعات...</p>
      )}
    </>
  );
}

export default ProvinceDetail;
