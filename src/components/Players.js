import React from 'react';
import { connect } from 'react-redux';

const Players = ({players}) => (
  <section>
    <h2>Players</h2>
    <div className="players-container">
      <article>
        <img src="" alt=""/>
        <h3></h3>
        <div>
          <button></button>
          <button></button>
        </div>
      </article>
    </div>
  </section>
);

const mapStateToProps = state => ({
  players: state.players
});

export default connect(mapStateToProps, {} )(Players);
