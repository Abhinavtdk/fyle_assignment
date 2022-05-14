import { Avatar } from "@mui/material"
import { UserInfo } from "../../interfaces/UserInfo"
import styles from '../../styles/userInfoComponent.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import PeopleIcon from '@mui/icons-material/People';

interface UserInfoComponentProps {
    userInfo: UserInfo,
    username: String | String[]
}

const UserInfoComponent = (props: UserInfoComponentProps) => {
    const userInfo = props.userInfo
    const username = props.username
    return (
        <div className={styles.userInfo}>
            <div className={styles.avatar}>
                <Avatar src={userInfo.avatar_url}
                    sx={{
                        width: 200,
                        height: 200
                    }} />
                <div className={styles.url}>
                    <InsertLinkIcon />
                    {userInfo.html_url}
                </div>
                <div className={styles.location}>
                    <TwitterIcon style={{ color: "blue" }} />
                    {userInfo.twitter_username ? <div className={styles.locationText}>{userInfo.twitter_username}</div> :
                        <div className={styles.locationText}>Twitter</div>
                    }
                </div>

            </div>
            <div className={styles.userDetails}>
                <div className={styles.username}>{username}</div>
                {userInfo.bio ? <div className={styles.bio}>{userInfo.bio}</div> :
                    <div className={styles.bio}>Bio</div>
                }
                <div className={styles.location}>
                    <LocationOnIcon />
                    {userInfo.location ? <div className={styles.locationText}>{userInfo.location}</div> :
                        <div className={styles.locationText}>Location</div>
                    }
                </div>
                <div className={styles.location}>
                    <PeopleIcon />
                    {userInfo.followers ? <div className={styles.locationText}>{userInfo.followers} followers</div> :
                        <div className={styles.locationText}>followers</div>
                    }
                </div>

            </div>
        </div>
    )
}

export default UserInfoComponent