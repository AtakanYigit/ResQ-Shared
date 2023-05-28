import {useRef, useState, useEffect} from "react";
import GoogleMap  from "google-maps-react-markers";
import mapOptions from "./mapoptions.json";
import Marker     from "./Marker";
import Sidebar    from "../../Components/Sidebar";
import axios      from "axios";
import Conf       from "../../Configurations";
import "./WorkPage.scss";

export interface PostInterface{
    id:              number;
    name:            string;
    age:             number;
    gender:          string;
    height:          string;
    bloodType:       string;
    emergencyType:   string;
    allergies:       string[];
    ongoingDiseases: string[];
    resourses:       string[];
    location:        {lat: number, lng: number};
}

interface Coordinate{
    lat:  number;
    lng:  number;
    name: string;
}

const WorkPage: React.FC = () => {
    const mapRef                                = useRef(null)
	const [mapBounds,       setMapBounds]       = useState({})
	const [currCoordinates, setCurrCoordinates] = useState<Coordinate>({lat: 40.960505, lng: 29.190040, name: "DefaultCoordinates"})
    const [coordinates,     setCoordinates]     = useState<Coordinate[]>([]);
    const [posts,           setPosts]           = useState<PostInterface[]>([]);

    //Fetch data from server
    useEffect(()=>{
        axios.get(Conf.getEmergencies)
            .then((res) => {
                const posts = res.data;
                console.log(posts);
                
                setPosts(posts);
                const recievedCoordinates: Coordinate[] = posts.map((post: PostInterface) => {
                    return {
                        lat:  post.location.lat,
                        lng:  post.location.lng,
                        name: post.name
                    }
                });
                setCoordinates(recievedCoordinates);
            }).catch((err) => {
                console.log(err);
            });

        // setPosts([
        //     {
        //         id:              1,
        //         name:            "Jane Doe",
        //         age:             26,
        //         gender:          "Female",
        //         height:          "1.75m",
        //         bloodType:       "0RH-",
        //         emergencyType:   "Fall Injury",
        //         allergies:       ["Peanuts", "Lactose"],
        //         ongoingDiseases: ["Diabetes", "Asthma"],
        //         resourses:       ["image1", "image2", "image3"],
        //         location:        {lat: 45.4046987, lng: 12.2472504}
        //     },
        //     {
        //         id:              2,
        //         name:            "Jane Doe",
        //         age:             26,
        //         gender:          "Female",
        //         height:          "1.75m",
        //         bloodType:       "0RH-",
        //         emergencyType:   "Fall Injury",
        //         allergies:       ["Peanuts", "Lactose"],
        //         ongoingDiseases: ["Diabetes", "Asthma"],
        //         resourses:       ["image1", "image2", "image3"],
        //         location:        {lat: 45.4046987, lng: 12.2472504}
        //     },
        //     {
        //         id:              3,
        //         name:            "Jane Doe",
        //         age:             26,
        //         gender:          "Female",
        //         height:          "1.75m",
        //         bloodType:       "0RH-",
        //         emergencyType:   "Fall Injury",
        //         allergies:       ["Peanuts", "Lactose"],
        //         ongoingDiseases: ["Diabetes", "Asthma"],
        //         resourses:       ["image1", "image2", "image3"],
        //         location:        {lat: 45.4046987, lng: 12.2472504}
        //     },
        //     {
        //         id:              4,
        //         name:            "Jane Doe",
        //         age:             26,
        //         gender:          "Female",
        //         height:          "1.75m",
        //         bloodType:       "0RH-",
        //         emergencyType:   "Fall Injury",
        //         allergies:       ["Peanuts", "Lactose"],
        //         ongoingDiseases: ["Diabetes", "Asthma"],
        //         resourses:       ["image1", "image2", "image3"],
        //         location:        {lat: 45.4046987, lng: 12.2472504}
        //     },
        //     {
        //         id:              5,
        //         name:            "Jane Doe",
        //         age:             26,
        //         gender:          "Female",
        //         height:          "1.75m",
        //         bloodType:       "0RH-",
        //         emergencyType:   "Fall Injury",
        //         allergies:       ["Peanuts", "Lactose"],
        //         ongoingDiseases: ["Diabetes", "Asthma"],
        //         resourses:       ["image1", "image2", "image3"],
        //         location:        {lat: 45.4046987, lng: 12.2472504}
        //     }
        // ]);
    }, []);
    
    const onGoogleApiLoaded = ({map}: any) => {
        mapRef.current = map;
    };
    
    const onMarkerClick = (e:any, { markerId, lat, lng }: any) => {
        console.log("Clicked: ", markerId);
        setCurrCoordinates({lat, lng, name: markerId});
	}
    
	const onMapChange = ({bounds, zoom}: any) => {
		const ne = bounds.getNorthEast()
		const sw = bounds.getSouthWest()
		setMapBounds({ ...mapBounds, bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()], zoom })
	}

    return (
        <div className = "workPage">
            <Sidebar posts = {posts}/>
            <GoogleMap apiKey            = ""
                       defaultCenter     = {{lat: currCoordinates.lat, lng: currCoordinates.lng}}
                       defaultZoom       = {11}
                       options           = {mapOptions}
                       mapMinHeight      = "100vh"
                       onGoogleApiLoaded = {onGoogleApiLoaded}
                       onChange          = {onMapChange}>

                {coordinates.map(({lat, lng, name}, index) => (
                    <Marker key       = {index} 
                            lat       = {lat} 
                            lng       = {lng} 
                            markerId  = {name} 
                            onClick   = {onMarkerClick} 
                            className = "marker"/>
                ))}
            </GoogleMap>
        </div>
    )
}

export default WorkPage;