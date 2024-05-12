import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Edu : {props.edu}</p>
            <p>Age : {props.age}</p>
        </div>
    );

}
Student.propTypes={
    name:PropTypes.string,
    edu:PropTypes.string,
    age:PropTypes.number,
}
Student.defaultProps={
    name: "Guest",
    edu:"No",
    age:0,
}

export default Student;