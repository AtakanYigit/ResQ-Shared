import {PostInterface} from "../Pages/WorkPage/WorkPage";
import "./Post.scss";

interface PostProps {
    post: PostInterface;
}

const Post: React.FC<PostProps> = ({post}) => {
    const sendTeam = () => {
        alert("Team Sent!");
    };

    const seeOnMap = () => {
        // See on map
    };

    const cancel = () => {
        // Cancel
    };

    return (
        <div className = "post">
            <div className = "mainInfoContainer">
                <div className = "imageAndInfoContainer">
                    <img src = "" className = "profileImage" alt="" />
                    <div className = "mainInfo">
                        <p>{post.name}</p>
                        <div className = "mainInfoSubContainer">
                            <p>{post.age}</p>
                            <p>{post.gender}</p>
                            <p>{post.height}</p>
                            <div className = "bloodType">
                                <img src = "" alt="" />
                                <p>{post.bloodType}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "emergencyType">
                    <img src = "" alt="" />
                    <p>{post.emergencyType}</p>
                </div>
            </div>
            
            <div className = "allergiesDiseasesContainer">
                <div className = "allergiesDiseasesSubContainer">
                    <h6>Allergies</h6>
                    <div className = "allergiesDiseases">
                        {post.allergies.map((allergy,index) => (
                            <p key = {index} className = "allergyDisease">{allergy}</p>
                        ))}

                        {post.allergies.length === 0 && (
                            <p>No allergies</p>
                        )}
                    </div>
                </div>
                
                <div className = "allergiesDiseasesSubContainer">
                    <h6>Ongoing Diseases</h6>
                    <div className = "allergiesDiseases">
                        {post.ongoingDiseases.map((disease, index) => (
                            <p key = {index} className = "allergyDisease">{disease}</p>
                        ))}

                        {post.ongoingDiseases.length === 0 && (
                            <p>No allergies</p>
                        )}
                    </div>
                </div>
            </div>

            <div className = "resourcesContainer">
                <h6>Resources</h6>
                <div className = "resources">
                    {post.resourses.map((resource, index) => (
                        <img key = {index} src = {resource} className = "resource" alt="" />
                    ))}
                </div>
            </div>

            <div className = "actionsContainer">
                <button className = "action" onClick = {sendTeam}>
                    <img src = "" alt="" />
                    <p>Send Team</p>
                </button>
                <button className = "action" onClick = {seeOnMap}>
                    <img src = "" alt="" />
                    <p>See On Map</p>
                </button>
                <button className = "action" onClick = {cancel}>
                    <img src = "" alt="" />
                </button>
            </div>
        </div>
    );
};

export default Post;
