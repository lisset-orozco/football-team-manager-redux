import React from 'react';
import { connect } from 'react-redux';

const TitularPlayers = ({ titular_players, removeTitularPlayer }) => (
  <section>
    <h2>Titular Players</h2>
    <div className="football-field">
    {
      titular_players.map(player => (
        <article className='titular_player' key={player.id}>
          <div>
            <img src={player.photo} alt={player.name}/>
            <button onClick={() => removeTitularPlayer(player)}>X</button>
          </div>
          <p>{player.name}</p>
        </article>
      ))
    }
    </div>
  </section>
);

const mapStateToProps = state => ({
  titular_players: state.titular_players
});

const mapDispatchToProps = dispatch => ({
  removeTitularPlayer(player) {
    dispatch({
      type: 'REMOVE_TITULAR',
      player
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TitularPlayers);
