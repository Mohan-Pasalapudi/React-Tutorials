import PropTypes from 'prop-types';

function UserGreeting(props){
   //using conditional sattements

            //  if(props.isLoggedin)
            // {
            //     return <h2>Welcome {props.username}</h2>
            // }
            // else
            // {
            //     return <h2>Please Login to continue</h2>
            // }

            // using Ternary operator

 // return (props.isLoggedin ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please Login to continue</h2>);


 //another wau using const variables

 const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
const loginPrompt =  <h2 className="login-prompt">Please Login to continue</h2>
return (props.isLoggedin ? welcomeMessage : loginPrompt )
}
UserGreeting.proptypes = {
   isLoffedin : PropTypes.bool,
   username : PropTypes.string,

}
UserGreeting.defaultProps = {
    isLoggedin : false,
    username:"Guest",
}
export default UserGreeting