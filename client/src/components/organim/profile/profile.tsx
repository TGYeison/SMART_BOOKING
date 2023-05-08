import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Profile = () => {
    const [show, setShow] = useState<boolean>(false);

    return(
        <button onClick={()=>setShow(!show)} className="profile">
            <Image
                width={36}
                height={36}
                alt="Profile"
                className="profile__icon"
                src="/assets/img/icon_profile.png"
            />
            {show 
                ?<div className="profile__content">
                    <Link className="profile__link" href="/admin">Administracion</Link>
                    <Link className="profile__link" href="/booking">Home</Link>
                </div>
                : ''
            }
        </button>
    );
}


export default Profile;