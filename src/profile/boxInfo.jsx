import React from 'react';

const divGeneral = {
    display: 'flex',
    flexDirection: 'column'
}

const boxInfo = {
    backgroundColor: '#D9D9D9',
    display: 'flex',
    border: '4px solid #09184D',
    borderRadius: '20px',
    height: '60px',
    width: '270px',
    padding: '10px 10px 10px 10px',
    boxShadow: '8px 10px 8px rgba(0, 0, 0, 0.4)'

}

const textInfo = {
    fontFamily: 'InriaSans-Regular.ttf',
    fontSize: '20px'
}

const textDescription = {
    fontFamily: 'InriaSans-Regular.ttf',
    fontSize: '20px',
    color: '#776D6D'
}

const BoxInfo = ({description, information}) => {
    return(
    <div style={divGeneral}>
        <label style={textDescription}>{description}</label>
        <div style={boxInfo}>
            <label style={textInfo}>{information}</label>
        </div>
    </div>
    );
};

export default BoxInfo;