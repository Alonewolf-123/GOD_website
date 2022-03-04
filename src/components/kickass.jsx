import Accordion from 'react-bootstrap/Accordion';

export const Kickass = (props) => {
  return (
    <div id='kickass' className='text-center'>
      <div className='container'>
        <div className='col-md-10 div-center section-title'>
          <h2>GOD’S PRINCIPLES</h2>
        </div>
        <div className='col-md-7 div-center'>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>WOLD-CLASS INNOVATIVE TECH</Accordion.Header>
              <Accordion.Body>
                <p>Game of Dwarfs introduces cutting-edge blockchain mechanics to create a self-sustaining decentralized economy
                  where everyone gets rich af.</p>
                <p>NFTs taxing other NFTs: Taxing businesses in exchange for
                  protection is a well known mafia practice but never has this
                  been done with NFTs.</p>
                <p>NFTs as businesses: For the first time, players can directly invest in their NFTs $GOD balance to increase the NFTs
                  return on investment which increases both its in game and
                  secondary market value.</p>
                <p>Players will be able to mint and stack their NFTs in one transaction.</p>
                <p>Staking as a game: $GOD is earned and each player will
                  have different results based on the strategy and decisions
                  taken.</p>
                <p>Tokenomics mechanics in place to restrict supply and keep
                  demand high in order to increase the real dollar value of
                  $GOD giving all holders crazy profits in the long term.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>TOP-SHELF ART COLLECTION</Accordion.Header>
              <Accordion.Body>
                <p>The art collection was curated by a world-class design team
                  including the artist <a href='https://www.instagram.com/thebutcherbilly/'>Butcher Billy</a>, whose portfolio includes
                  clients such as Netflix, Marvel, Warner Bros, Playboy, and
                  Amazon prime.</p>
                <p>NFTs are generated with an inventory of over 250 handcrafted accessories, ensuring the uniqueness and quality
                  of each piece.</p>
                <p>The mafia inspired hierarchy system creates a rarity scale
                  within the collection and ensures diversity in earnings and
                  NFTs’ values.</p>
                <p>More collaborations with kickass artists to be announced
                  for the following drops.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>REAL LONG-TERM UTILITY</Accordion.Header>
              <Accordion.Body>
                <p>No bullshit fast cash roadmap. The game is ready to play
                  at launch and will continue to evolve with each new phase.</p>
                <p>Real value created for the players, everyone is rewarded
                  proportionately to how much is invested, random allocation and game theory-based decision making.</p>
                <p>Self-sustaining system insuring all holders make money.
                  The mechanics are already in place to ensure long-term value for our community</p>
                <p>Players will make money from the increased value of their
                  NFTs but also from the $GOD token earned and the additional NFTs that they will be able to receive.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
