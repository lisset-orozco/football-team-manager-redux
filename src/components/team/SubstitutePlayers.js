import React from 'react';
import { connect } from 'react-redux';

const SubstitutePlayers = ({ substitute_players, removeSubstitutePlayer }) => (
  <section>
    <h2>Substitute Players</h2>
    <div className="football-field">
    {
      substitute_players.map(player => (
        <article className='substitute_player' key={player.id}>
          <div>
            <img src={player.photo} alt={player.name}/>
            <button onClick={() => removeSubstitutePlayer(player)}>X</button>
          </div>
          <p>{player.name}</p>
        </article>
      ))
    }
    </div>
  </section>
);

const mapStateToProps = state => ({
  substitute_players: state.substitute_players
});

const mapDispatchToProps = dispatch => ({
  removeSubstitutePlayer(player) {
    dispatch({
      type: 'REMOVE_SUBSTITUTE',
      player
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubstitutePlayers);

