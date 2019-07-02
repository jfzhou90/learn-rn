import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class Avatar extends React.Component {
  state = {
    photo: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(response => {
        let user = response.results[0];
        if(user.picture && user.picture.thumbnail) {
          this.setState({
            photo: user.picture.thumbnail
          });
        }
        if(user.name && user.name.first && user.name.last){
          this.props.updateName(`${capitalize(user.name.first)} ${capitalize(user.name.last)} `)
        } else {
          this.props.updateName('API got nothing')
        }
      })
  }

  render() {
    return (
      <Image source={{uri: this.state.photo}}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;