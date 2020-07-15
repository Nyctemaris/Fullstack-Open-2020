import React from 'react'

const Notification = ({notificationmessage, notificationType}) => {

    return (
        <div className={notificationType}>
            {notificationmessage}
        </div>
    )
}


export default Notification;