import Image from "next/image";

const Profile = () => {
    return(
        <button className="profile">
            <Image
                width={36}
                height={36}
                alt="Profile"
                className="profile__icon"
                src="/assets/img/icon_profile.png"
            />
            <div className="profile__content">
            </div>
        </button>
    );
}


export default Profile;