import React from 'react';
import { connect } from 'react-redux';

const Players = ({players, addTitularPlayer}) => (
  <section>
    <h2>Players</h2>
    <div className="players-container">
    {
      players.map(player  => (
        <article className='player' key={player.id}>
          <img src={player.photo} alt={player.name}/>
          <h3>{player.name}</h3>
          <div>
            <button onClick={() => addTitularPlayer(player)}>Titular</button>
            <button>Substitute</button>
          </div>
        </article>
      ))
    }
    </div>
  </section>
);

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = ( dispatch ) =>({
  addTitularPlayer(player) {
    dispatch({
      type: 'ADD_TITULAR',
      player
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
