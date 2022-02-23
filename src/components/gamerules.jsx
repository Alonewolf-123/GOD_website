import whitepaperLogoImg from "../assets/img/splash-black.png";

export const Gamerules = (props) => {
  return (
    <div id="gamerules">
      <div className="container">
        <div className="row">
        <img src={whitepaperLogoImg} alt='...' className='' />
          <div className="col-xs-12 col-md-12">
            
            <div className="gamerules-text">
              <h2>GAME OF DWARFS</h2>
              <p>In a post-apocalyptic alternative universe, humanity was reduced to dwarf size. Governments
                have been overthrown, and political hierarchy abolished. Multiple clans fight for supremacy in
                the Metaverse. A crazy high prize of $GOD is at stake. Welcome to Game of Dwarfs (GOD).</p>
              <p>Game of Dwarfs is a play-to-earn passive income game designed on the Ethereum blockchain.
                Fully decentralized, completely autonomous. Made for the community, ruled by the players, and
                not influenced by a central government. It allows investors to generate $GOD, which can
                be exchanged on other platforms, used to purchase more NFTs, or to buy in-game upgrades.</p>
              <p>There are two types of people in this world; the Merchants who earn an honest living by running
                their businesses, and the Mobsters who use force to get what they want. Mobsters have struck
                a deal with the Merchants; they allow them to operate their business freely and protect them
                from other clans. In exchange, the Merchants must pay a 20% tax (Pizzo) to the mob clan
                controlling their city.</p>
              <p>Merchants have to pay the tax when they claim their earnings. Mobsters divide all the profit
                amongst themselves. The higher your rank amongst your mob clan, the more tokens you will
                accumulate.</p>
              <p>Merchants can also choose to invest in their business. All $GOD directly invested in a business
                is not taxed by the Mobsters. The more $GOD a merchant invests in his business, the more they
                will earn each day.</p>
              <p>For now, a peace treaty has been signed by all the Dwarfathers to maintain order and stability
                in the game. No one knows how long it will last, but if a Dwarfather breaks the peace, a clan war
                might begin.</p>

              <h3>$GOD</h3>
              <p>The maximum $GOD supply is 5,000,000,000 $GOD:
                When supply reaches 2,400,000,000 $GOD earned for staking, the staking “faucet” turns off.
                The developers will receive 600,000,000 $GOD
                Community Rewards will be allocated 2,000,000,000 $GOD</p>

              <h3>MINTING</h3>
              <p>A total of 20’000 NFTs will be generated. Investors will have a 15% chance of getting a
                mobster and an 85% chance of getting a merchant. The mint will be divided into two distinct
                phases.</p>
              <h4><strong>Phase one: Single drop of 8’000 NFTs</strong></h4>
              <p>A total of 8'000 NFTs will be released during phase one. Each one can be minted for 0.12
                ETH. This makes a total of 1'200 mobsters and 6'800 merchants available during the first drop.
                There is no restriction on the amount of NFTs a player will be able to mint.</p>
              <p>Once phase one is sold out, the game will begin. The first phase will last for 30 days. During this
                time, players will accumulate $GOD that can be used to purchase more NFTs during phase two.</p>
              <h4><strong>Phase two: Multiple drops of 4’000 NFTs</strong></h4>
              <p>During the second phase of the project, 4’000 NFTs will be dropped every four weeks over a
                period of three months. This makes a total of 12’000 NFTs. Each drop will be based on a different
                theme and will bring three new clans to the game. A total of 10’200 Merchants and 1’800
                Mobsters can join the game during phase two.</p>
              <p>Half of the NFTs released during phase two will be exclusively sold in $GOD, the rest will be
                available in ETH. Selling 50% in $GOD is our way to reward early investors. Selling 50% in ETH is
                a way to expand our community and make the game more interesting. It is also a way to finance
                features that will be introduced later on.</p>
              <h4><strong>Minting cost</strong></h4>
              <table>
                <tr>
                  <th>Token ID</th>
                  <th>Minting Cost In ETH</th>
                  <th>Minting Cost In $GOD</th>
                </tr>
                <tr>
                  <td>1 to 8,000 (Gen 0)</td>
                  <td>0.12 ETH</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>8,001 to 12,000</td>
                  <td>0.14 ETH</td>
                  <td>100,000 $GOD</td>
                </tr>
                <tr>
                  <td>12,001 to 16,000</td>
                  <td>0.16 ETH</td>
                  <td>120,000 $GOD</td>
                </tr>
                <tr>
                  <td>16,001 to 20,000</td>
                  <td>0.18 ETH</td>
                  <td>140,000 $GOD</td>
                </tr>
              </table>

              <h3>MERCHANTS</h3>
              <p>You have an 85% chance of minting a merchant, each with their unique traits. Merchants earn
                $GOD by investing in their business (staking their NFTs). They earn a 1% daily interest on the
                amount of money they have invested in their business. Each merchant starts the game with a
                balance of 100’000 $GOD.</p>
              <p>Example A: A merchant has 150’000 $GOD invested in his business. He earns a 1% daily interest,
                so he earns 1’500 $GOD every day.</p>
              <p>Example B: A merchant has 30’000 $GOD invested in his business. He earns a 1% daily interest,
                so he earns 300 $GOD every day.</p>
              <p>When they withdraw the $GOD invested in their business, Merchants must pay a 20% tax to the
                mobsters. However, some. merchants have found a way to avoid the tax, but It’s a risky game.
                For every two merchant that tries the trick, only one succeeds and earn all his money. The other
                one comes back with an empty balance.</p>
              <table>
                <tr>
                  <th>Action</th>
                  <th>Notes</th>
                  <th>Risk</th>
                </tr>
                <tr>
                  <td>Invest in bussiness (Stake)</td>
                  <td>
                    Each merchant is given an initial balance of 100,000 $GOD for which they earn a 1% daily interest.
                    <br />Any amount of $GOD invested, later on, will be cumulated to that initial balance.</td>
                  <td>No risk</td>
                </tr>
                <tr>
                  <td>Withdraw (Claim)</td>
                  <td>Receive 80% of the amount withdrawn</td>
                  <td>Mobsters take a guaranteed 20% tax on $GOD withdrawn from businesses.<br />Taxed $GOD is split among all mobsters currently stalked proportional to their rank.</td>
                </tr>
                <tr>
                  <td>Avoid tax (Unstake)</td>
                  <td>The merchant closes down his business and all $GOD is collected.<br />This is only allowed if the merchant has accumulated 2days of earning.</td>
                  <td>50% chance of ALL your accumulated $GOD being stolen by the mobsters.<br />Stolen $GOD is split among all mobsters currently staked proportional to their rank.</td>
                </tr>
              </table>
              <h3>CASINOS</h3>
              <p>Merchants can also play some of their $GOD in the casinos. The mob owns the casinos. Everyone
                knows that. So when a merchant loses in the casino, his money is redistributed to the mobsters.
                However, if he manages to win, the mobsters must pay him.</p>
              <p>Here is how the Casinos function. A merchant must place a bet before entering the casino. His
                bet can be doubled every day spent inside the casino. There is a 50% chance of winning every
                day. A merchant can stay inside the casino for a maximum of 10 days and leave whenever he
                decides.</p>
              <p>The amount placed for the bet and the money accumulated by the Merchant’s business while
                being in the casino will be redistributed to the Mobsters if the Merchant loses.</p>
              <h3>MOBSTERS</h3>
              <p>You have a 15% chance of minting a mobster, each with unique traits, including a rank value
                ranging from Solider to Dwarfather: The higher the rank, the higher the portion of $GOD the
                mobsters earn from taxes.</p>
              <p>Six mobster clans will be introduced during phase one, each one controls a different city. Three
                additional clans will be revealed during every new drop happening in phase two.</p>
              <h4><strong>List of Clans (phase one):</strong></h4>
              <p>
                - New York
                <br />- Tokyo
                <br />- Medellin
                <br />- London
                <br />- Moscow
                <br />- Kingston
              </p>

              <h4><strong>Ranking System:</strong></h4>
              <p>- Each clan is composed of 200 members:
                <br />- Dwarf Soldiers 150
                <br />- Dwarf Capos 40
                <br />- Dwarf Boss 9
                <br />- Dwarfather 1
              </p>
              <table>
                <tr>
                  <th>Action</th>
                  <th>Notes</th>
                  <th>Risk</th>
                </tr>
                <tr>
                  <td>Stake Mobster</td>
                  <td>Earn your share of the 20% tax of all $GOD generated by Mobster</td>
                  <td>No risk</td>
                </tr>
                <tr>
                  <td>Claim $GOD</td>
                  <td>Receive all $GOD accrued for the staked mobster</td>
                  <td>No risk</td>
                </tr>
                <tr>
                  <td>Unstake Mobster</td>
                  <td>Receive all $GOD accrued for the staked mobster</td>
                  <td>No risk</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
