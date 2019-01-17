import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';

const Posts = styled.div `
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    font-Family: 'Roboto', Arial, sans-serif;
`

function PostContainer (props){

        return (
            <Posts>
                {props.postData.map((post, index) => {
                    return <CommentSection post={post} key={index} />
                })}
            </Posts>
        );
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired,
    comments: PropTypes.array
};

export default PostContainer;