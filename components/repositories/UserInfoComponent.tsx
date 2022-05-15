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
                <div className={styles.avatarSize}>
                    <Avatar src={userInfo.avatar_url}
                        sx={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </div>

                <div className={styles.url}>
                    <InsertLinkIcon />
                    <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">{userInfo.html_url}</a>
                </div>
                {userInfo.twitter_username ?
                    <div className={styles.location}>
                        <TwitterIcon style={{ color: "blue" }} />
                        <div className={styles.locationText}>{userInfo.twitter_username}</div>
                    </div>
                    : null}


            </div>
            <div className={styles.userDetails}>
                <div className={styles.username}>{username}</div>
                {userInfo.bio ? <div className={styles.bio}>{userInfo.bio}</div> :
                    null
                }
                {userInfo.location ?
                    <div className={styles.location}>
                        <LocationOnIcon />
                        <div className={styles.locationText}>{userInfo.location}</div>
                    </div>
                    : null}

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