import React from 'react';
import { connect } from 'react-redux';

const TitularPlayers = ({ titular_players }) => (
  <section>
    <h2>Titular Players</h2>
    <div className="football-field">
    {
      titular_players.map(player => (
        <article className='titular_player' key={player.id}>
          <div>
            <img src={player.photo} alt={player.name}/>
            <button>X</button>
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TitularPlayers);
