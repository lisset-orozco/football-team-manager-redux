import React from 'react';

import TitularPlayers from './team/TitularPlayers';
import SubstitutePlayers from './team/SubstitutePlayers';

const SelectedTeam = () => (
  <section>
    <TitularPlayers />
    <SubstitutePlayers />
  </section>
);

export default SelectedTeam;
