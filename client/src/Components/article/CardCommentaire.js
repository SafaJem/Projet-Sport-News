import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../Redux/actions/articleAction';

const CommentItem = ({
  comment: { commentaire, name , user, date },
 
}) => {
  return (
    <Fragment>
      <div class="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img class="round-img" alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p class="my-1">{commentaire}</p>
          <p class="post-date">
          {date.slice(0, 10)} ---{" "}
          {slice(11, 19)}          </p>
          
            <button
            
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          
        </div>
      </div>
    </Fragment>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem); 