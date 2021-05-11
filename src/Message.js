import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message_card ${isUser && `message_user`}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
        <Typography  color="green" variant="h6" component="h2">
        <b>{!isUser && `${message.username || "Unkown User"}`}</b>
          </Typography>

       
          <Typography color="green" variant="h6" component="h2">
       {message.message}
          </Typography>
        </CardContent>

      </Card>

    </div>



  )
}
)



export default Message

