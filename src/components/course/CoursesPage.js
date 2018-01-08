import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title =  event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    // alert(`Saving ${this.state.course.title}`);
    this.props.createCourse(this.state.course);
    //1
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render() {
    //5
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}//this here refers to the input tag
          value={this.state.course.title}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>

      </div>

    );
  }

}

//validation
CoursesPage.propTypes = {

  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
    //4
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course=> dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);